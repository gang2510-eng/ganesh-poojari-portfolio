#!/usr/bin/env node
/**
 * Automated IMDb Filmography Sync for Ganesh Poojari (nm6199377)
 * 
 * Automatically checks IMDb for new credits, downloads full-resolution
 * official theatrical posters into `public/posters/`, and updates `src/data/filmographyData.ts`.
 * 
 * Usage:
 *   npm run sync:imdb           # Check IMDb and automatically add any new credits + posters
 *   npm run sync:imdb:check     # Dry-run check to see if new credits are found
 *   node scripts/sync-imdb.mjs https://www.imdb.com/title/tt1234567/  # Add specific title directly
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const IMDB_NAME_ID = 'nm6199377';
const JINA_IMDB_URL = `https://r.jina.ai/https://www.imdb.com/name/${IMDB_NAME_ID}/`;
const FILMOGRAPHY_FILE = path.join(rootDir, 'src', 'data', 'filmographyData.ts');
const POSTERS_DIR = path.join(rootDir, 'public', 'posters');

const isDryRun = process.argv.includes('--dry-run');

// Extract significant words for fuzzy matching
function getWords(s) {
  return s
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 2 && !['the', 'and', 'for', 'with', 'part'].includes(w));
}

// Robust fuzzy matching between IMDb title and local filmography title
function isFuzzyMatch(title1, title2) {
  const n1 = title1.toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9]/g, '');
  const n2 = title2.toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9]/g, '');
  if (n1 === n2 || n1.includes(n2) || n2.includes(n1)) return true;

  const w1 = getWords(title1);
  const w2 = getWords(title2);
  if (w1.length === 0 || w2.length === 0) return false;

  const common = w1.filter(w => w2.includes(w));
  const ratio1 = common.length / w1.length;
  const ratio2 = common.length / w2.length;

  return ratio1 >= 0.6 || ratio2 >= 0.6;
}

// Generate clean unique ID from title
function generateId(title, year) {
  let clean = title
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 4)
    .join('');
  if (!clean) clean = `credit_${year}`;
  return clean;
}

// Capitalize role / studio strings cleanly
function formatText(str) {
  if (!str) return '';
  return str
    .split(/\s+/)
    .filter(Boolean)
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

// Parse markdown returned from Jina Reader
function parseCreditsFromMarkdown(md) {
  const credits = [];
  const blocks = md.split(/\n\*\s+!\[/);

  for (let i = 1; i < blocks.length; i++) {
    const block = blocks[i];

    // Extract title & IMDb ID
    const titleMatch = block.match(/\[([^\]]+)\]\(https:\/\/www\.imdb\.com\/title\/(tt\d+)/);
    if (!titleMatch) continue;
    const title = titleMatch[1].trim();
    const imdbId = titleMatch[2];

    // Extract full-resolution poster URL from Amazon/IMDb CDN
    const posterMatch = block.match(/\]\((https:\/\/m\.media-amazon\.com\/images\/M\/[^)]+)\)/);
    let posterUrl = null;
    if (posterMatch) {
      // Strip dynamic resizing parameters (e.g. ._V1_QL75_UX90_CR0,0,90,133_.jpg) to get original uncompressed key art
      posterUrl = posterMatch[1].replace(/\._V1_.*\.jpg$/, '.jpg');
    }

    // Determine category
    const isTv = /TV Series|miniseries|episode/i.test(block);

    // Extract Year
    const yearMatch = block.match(/\b(20\d\d|19\d\d)\b/);
    const year = yearMatch ? yearMatch[1] : new Date().getFullYear().toString();

    // Extract Role and Studio
    let role = 'Asset Supervisor';
    let studio = 'Pixomondo';
    const roleLines = block.match(/\*\s+([^\n*]+)(?:\n|$)/g);
    if (roleLines && roleLines.length > 0) {
      for (const rl of roleLines) {
        const cleaned = rl.replace(/^\*\s+/, '').trim();
        if (/^\d{4}/.test(cleaned) || /episode/i.test(cleaned)) continue;
        if (/--|:|\s-\s/.test(cleaned)) {
          const parts = cleaned.split(/--|:|\s-\s/);
          role = formatText(parts[0].trim());
          const rawStudio = parts.slice(1).join(' ').trim();
          if (rawStudio) studio = formatText(rawStudio);
        } else {
          role = formatText(cleaned);
        }
        break;
      }
    }

    credits.push({
      title,
      imdbId,
      year,
      category: isTv ? 'tv' : 'film',
      role,
      studio: studio || 'Pixomondo / Framestore',
      posterUrl,
    });
  }

  return credits;
}

// Fetch poster and save to disk
async function downloadPoster(url, destPath) {
  if (!url) return false;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length < 5000) return false; // Ignore empty / error responses
    fs.writeFileSync(destPath, buffer);
    return true;
  } catch (err) {
    console.warn(`  ⚠️ Failed to download poster from ${url}:`, err.message);
    return false;
  }
}

// Fallback search on TVMaze if IMDb poster failed
async function fetchTvMazePoster(title, destPath) {
  try {
    const q = encodeURIComponent(title.replace(/\(.*?\)/g, '').trim());
    const res = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${q}`);
    if (!res.ok) return false;
    const show = await res.json();
    const posterUrl = show.image?.original;
    if (posterUrl) {
      return await downloadPoster(posterUrl, destPath);
    }
  } catch (err) {
    // Ignore fallback errors
  }
  return false;
}

async function sync() {
  console.log(`\n======================================================`);
  console.log(`🎬 IMDb Filmography Sync for Ganesh Poojari (${IMDB_NAME_ID})`);
  console.log(`======================================================\n`);

  if (!fs.existsSync(FILMOGRAPHY_FILE)) {
    console.error(`❌ Filmography data file not found at: ${FILMOGRAPHY_FILE}`);
    process.exit(1);
  }

  if (!fs.existsSync(POSTERS_DIR)) {
    fs.mkdirSync(POSTERS_DIR, { recursive: true });
  }

  const filmographyContent = fs.readFileSync(FILMOGRAPHY_FILE, 'utf8');

  // Extract all existing titles and IDs from filmographyData.ts
  const existingTitles = [];
  const existingIds = new Set();
  const titleRegex = /title:\s*['"]([^'"]+)['"]/g;
  const idRegex = /id:\s*['"]([^'"]+)['"]/g;
  let match;
  while ((match = titleRegex.exec(filmographyContent)) !== null) {
    existingTitles.push(match[1]);
  }
  while ((match = idRegex.exec(filmographyContent)) !== null) {
    existingIds.add(match[1]);
  }

  console.log(`📊 Found ${existingTitles.length} existing credits in filmographyData.ts`);

  console.log(`🌐 Fetching latest profile from IMDb via Jina Reader...`);
  const response = await fetch(JINA_IMDB_URL, {
    headers: { Accept: 'text/plain' },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch from Jina Reader: HTTP ${response.status}`);
  }

  const md = await response.text();
  const imdbCredits = parseCreditsFromMarkdown(md);
  console.log(`🔍 Discovered ${imdbCredits.length} credits listed on IMDb.`);

  // Find credits that are not in the filmography
  const newCredits = [];

  for (const credit of imdbCredits) {
    const alreadyExists = existingTitles.some(existingTitle => isFuzzyMatch(credit.title, existingTitle));

    if (!alreadyExists) {
      newCredits.push(credit);
    }
  }

  if (newCredits.length === 0) {
    console.log(`\n✅ Filmography is completely up to date! All IMDb credits are present on your website.`);
    return;
  }

  console.log(`\n✨ Found ${newCredits.length} NEW credit(s) on IMDb:`);
  newCredits.forEach((c, idx) => {
    console.log(`  ${idx + 1}. [${c.imdbId}] "${c.title}" (${c.year}) - Role: ${c.role} (${c.category})`);
  });

  if (isDryRun) {
    console.log(`\n🔎 Dry-run mode active: No files were modified.`);
    return;
  }

// Position credit chronologically as per date/year into filmographyData.ts
function insertCreditChronologically(fileContent, creditEntryCode, creditYear) {
  const lines = fileContent.split('\n');
  const entries = [];
  let curr = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === '{') {
      curr = { startLine: i };
    }
    if (line.includes('year:') && curr) {
      const match = line.match(/'([^']+)'/);
      if (match) curr.year = match[1];
    }
    if (line.trim() === '},' && curr) {
      curr.endLine = i;
      entries.push(curr);
      curr = null;
    }
  }

  const targetYearNum = parseInt((creditYear.match(/\b\d{4}\b/)?.[0]) || '0', 10);

  // Find the first entry that has an earlier (strictly smaller) year than targetYearNum
  let insertLineIndex = -1;
  for (const entry of entries) {
    const entryYears = entry.year ? entry.year.match(/\b\d{4}\b/g) : null;
    const entryYearNum = entryYears ? Math.max(...entryYears.map(Number)) : 0;
    if (entryYearNum < targetYearNum) {
      insertLineIndex = entry.startLine;
      break;
    }
  }

  // If no entry has an earlier year, insert before closing `];`
  if (insertLineIndex === -1) {
    const closingIndex = lines.findIndex(l => l.trim() === '];');
    insertLineIndex = closingIndex !== -1 ? closingIndex : lines.length - 1;
  }

  // If the line immediately preceding insertLineIndex is a comment banner belonging to an earlier era,
  // ensure the new entry is placed before the banner.
  let checkLine = insertLineIndex - 1;
  while (checkLine >= 0 && lines[checkLine].trim().startsWith('//')) {
    const bannerLine = lines[checkLine];
    const eraMatch = bannerLine.match(/\b(\d{4})\s*-\s*(\d{4})\b/);
    if (eraMatch) {
      const endEra = parseInt(eraMatch[2], 10);
      if (targetYearNum > endEra) {
        let blockStart = checkLine;
        while (blockStart > 0 && lines[blockStart - 1].trim().startsWith('//')) {
          blockStart--;
        }
        insertLineIndex = blockStart;
        break;
      }
    }
    checkLine--;
  }

  lines.splice(insertLineIndex, 0, creditEntryCode.trimEnd());
  return lines.join('\n');
}

  // Sort new credits by year descending before inserting each one
  newCredits.sort((a, b) => {
    const yA = parseInt((a.year.match(/\b\d{4}\b/)?.[0]) || '0', 10);
    const yB = parseInt((b.year.match(/\b\d{4}\b/)?.[0]) || '0', 10);
    return yB - yA;
  });

  // Process and add each new credit chronologically as per date
  let updatedContent = filmographyContent;

  for (const credit of newCredits) {
    let id = generateId(credit.title, credit.year);
    if (existingIds.has(id)) {
      id = `${id}_${credit.year}`;
    }
    existingIds.add(id);

    const posterDest = path.join(POSTERS_DIR, `${id}.jpg`);
    console.log(`\n🖼️ Fetching high-res poster for "${credit.title}" -> ${id}.jpg...`);

    let downloaded = false;
    if (credit.posterUrl) {
      downloaded = await downloadPoster(credit.posterUrl, posterDest);
    }
    if (!downloaded) {
      console.log(`  ℹ️ Attempting TVMaze fallback for "${credit.title}"...`);
      downloaded = await fetchTvMazePoster(credit.title, posterDest);
    }

    if (downloaded) {
      const size = fs.statSync(posterDest).size;
      console.log(`  ✅ Successfully saved poster (${Math.round(size / 1024)} KB)`);
    } else {
      console.log(`  ⚠️ Poster could not be downloaded automatically. Please check public/posters/${id}.jpg.`);
    }

    // Generate entry object code
    const entryCode = `  {
    id: '${id}',
    title: '${credit.title.replace(/'/g, "\\'")}',
    role: '${credit.role.replace(/'/g, "\\'")}',
    year: '${credit.year}',
    category: '${credit.category}',
    studio: '${credit.studio.replace(/'/g, "\\'")}',
  },`;

    console.log(`  📅 Positioning "${credit.title}" (${credit.year}) chronologically as per date into filmographyData.ts...`);
    updatedContent = insertCreditChronologically(updatedContent, entryCode, credit.year);
  }

  fs.writeFileSync(FILMOGRAPHY_FILE, updatedContent, 'utf8');
  console.log(`\n🎉 Successfully updated ${FILMOGRAPHY_FILE} with ${newCredits.length} new credit(s) arranged by date!`);
}

sync().catch(err => {
  console.error('\n❌ IMDb Sync failed:', err);
  process.exit(1);
});
