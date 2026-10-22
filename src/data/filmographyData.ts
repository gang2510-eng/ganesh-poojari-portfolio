export interface FilmCredit {
  id: string;
  title: string;
  role: string;
  year: string;
  category: 'film' | 'tv';
  studio: string;
  highlight?: string;
  contribution?: string; // Optional one-line ownership detail
  releaseDate?: string; // Optional exact release date (e.g. '2025-07-11' or ISO date)
}

/**
 * Computes a numeric timestamp/score for sorting credits chronologically descending.
 * Prefers exact `releaseDate` if provided, otherwise extracts the most recent year from `year` (e.g., '2026', '2008–2011').
 */
export function getCreditDateScore(credit: FilmCredit): number {
  if (credit.releaseDate) {
    const parsed = Date.parse(credit.releaseDate);
    if (!isNaN(parsed)) return parsed;
  }
  const years = credit.year.match(/\b\d{4}\b/g);
  if (years && years.length > 0) {
    const latestYear = Math.max(...years.map(Number));
    return new Date(latestYear, 0, 1).getTime();
  }
  return 0;
}

/**
 * Sorts credits strictly by latest date/year descending.
 * Ties preserve original relative ordering.
 */
export function sortCreditsByLatestDate(credits: FilmCredit[]): FilmCredit[] {
  return [...credits].sort((a, b) => {
    return getCreditDateScore(b) - getCreditDateScore(a);
  });
}

export const filmographyData: FilmCredit[] = [
  // ----------------------------------------------------
  // Upcoming & Recent Productions (2024 - 2026)
  // ----------------------------------------------------
  {
    id: 'spiderman_bnd',
    title: 'Spider-Man: Brand New Day',
    role: 'Modeling Lead',
    year: '2026',
    category: 'film',
    highlight: 'Marvel Cinematic Universe',
    studio: 'Framestore',
  },
  {
    id: 'moana',
    title: 'Moana (Live-Action)',
    role: 'Modeling Lead',
    year: '2026',
    category: 'film',
    highlight: 'Disney Feature',
    studio: 'Framestore',
  },
  {
    id: 'greenland2',
    title: 'Greenland 2: Migration',
    role: 'Asset Supervisor',
    year: '2026',
    category: 'film',
    studio: 'Pixomondo YUL',
  },
  {
    id: 'murderbot',
    title: 'Murderbot',
    role: 'Asset Supervisor',
    year: '2025',
    category: 'tv',
    studio: 'Pixomondo',
  },
  {
    id: 'finaldestination',
    title: 'Final Destination: Bloodlines',
    role: 'Senior Asset Artist',
    year: '2025',
    category: 'film',
    studio: 'Pixomondo',
  },
  {
    id: 'theoldguard2',
    title: 'The Old Guard 2',
    role: 'Asset Supervisor',
    year: '2025',
    category: 'film',
    studio: 'Pixomondo',
  },
  {
    id: 'borderlands',
    title: 'Borderlands',
    role: 'Asset Artist',
    year: '2024',
    category: 'film',
    studio: 'Pixomondo',
  },
  {
    id: 'houseofthedragon_s2',
    title: 'House of the Dragon (Season 2)',
    role: 'Asset Supervisor',
    year: '2024',
    category: 'tv',
    highlight: 'HBO Series · Showrunner: Ryan Condal',
    studio: 'Pixomondo (PXO) · Montreal, Canada',
    contribution:
      'Supervised asset development across The Eyrie, Dragonstone, and the Drydock environments, monumental castles, damaged ships, dead dragon head, crowd assets, and medieval props.',
  },
  {
    id: 'beacon23',
    title: 'Beacon 23',
    role: 'Asset Supervisor',
    year: '2023',
    category: 'tv',
    studio: 'Pixomondo YUL',
  },
  {
    id: 'changeling',
    title: 'The Changeling',
    role: 'Asset Supervisor',
    year: '2023',
    category: 'tv',
    studio: 'Pixomondo YUL',
  },
  {
    id: 'winningtime_s2',
    title: 'Winning Time: Lakers Dynasty (Season 2)',
    role: 'Asset Supervisor',
    year: '2023',
    category: 'tv',
    highlight: 'HBO Original',
    studio: 'Pixomondo YUL',
  },
  {
    id: 'outlaws',
    title: 'The Out-Laws',
    role: 'Asset Supervisor',
    year: '2023',
    category: 'film',
    studio: 'Pixomondo',
  },
  {
    id: 'extrapolations',
    title: 'Extrapolations',
    role: 'Asset Supervisor',
    year: '2023',
    category: 'tv',
    studio: 'Pixomondo YUL',
  },
  {
    id: 'ghosted',
    title: 'Ghosted',
    role: 'VFX Asset Supervisor',
    year: '2023',
    category: 'film',
    studio: 'Pixomondo YUL',
  },
  {
    id: 'carnivalrow',
    title: 'Carnival Row',
    role: 'Asset Supervisor',
    year: '2023',
    category: 'tv',
    studio: 'Pixomondo YUL',
  },
  {
    id: 'houseofthedragon_s1',
    title: 'House of the Dragon (Season 1)',
    role: 'Asset Supervisor / Division Lead',
    year: '2022',
    category: 'tv',
    highlight: 'Emmy Winner / HBO · Rulers of Westeros',
    studio: 'Pixomondo YUL',
    contribution:
      'Supervised asset department across hero dragon models, anatomy kinematics, micro-scale reptilian displacement sculpts, and virtual production volume integration.',
  },
  {
    id: 'winningtime_s1',
    title: 'Winning Time: Lakers Dynasty (Season 1)',
    role: 'Asset Supervisor',
    year: '2022',
    category: 'tv',
    highlight: 'HBO Original',
    studio: 'Pixomondo YUL',
  },
  {
    id: 'paleblueeye',
    title: 'The Pale Blue Eye',
    role: 'Asset Supervisor',
    year: '2022',
    category: 'film',
    studio: 'Pixomondo YUL',
  },
  {
    id: 'matilda',
    title: 'Matilda: The Musical',
    role: 'Asset Supervisor',
    year: '2022',
    category: 'film',
    studio: 'Pixomondo YUL',
  },
  {
    id: 'umbrellaacademy',
    title: 'The Umbrella Academy',
    role: 'Asset Supervisor',
    year: '2022',
    category: 'tv',
    highlight: 'Netflix Original',
    studio: 'Pixomondo YUL',
  },

  // ----------------------------------------------------
  // DNEG Productions (2017 - 2022)
  // ----------------------------------------------------
  {
    id: 'bullettrain',
    title: 'Bullet Train',
    role: 'Digital Artist Supervisor',
    year: '2022',
    category: 'film',
    studio: 'DNEG',
  },
  {
    id: 'ourflag',
    title: 'Our Flag Means Death',
    role: 'Build Supervisor',
    year: '2022',
    category: 'tv',
    studio: 'DNEG India',
  },
  {
    id: 'moonfall',
    title: 'Moonfall',
    role: 'Build Supervisor',
    year: '2022',
    category: 'film',
    studio: 'DNEG India',
  },
  {
    id: 'matrix4',
    title: 'The Matrix Resurrections',
    role: 'Build Supervisor',
    year: '2021',
    category: 'film',
    highlight: 'Dir. Lana Wachowski · DNEG India',
    studio: 'DNEG India',
    contribution:
      'Supervised build department asset generation for complex biomechanical machine swarms, Sentinels, human pod infrastructure, and mechanical-organic hybrid models.',
  },
  {
    id: 'foundation',
    title: 'Foundation',
    role: 'Build Supervisor',
    year: '2021',
    category: 'tv',
    highlight: 'Apple TV+ Flagship · VES Winner',
    studio: 'DNEG India',
    contribution:
      'Supervised VFX modeling across interstellar starfleet vessels, space elevator mega-structures, Trantor imperial architecture, and planetary scale digital environments.',
  },
  {
    id: 'venom2',
    title: 'Venom: Let There Be Carnage',
    role: 'Department Supervision',
    year: '2021',
    category: 'film',
    highlight: 'Lead VFX Partner · Dir. Andy Serkis',
    studio: 'DNEG',
    contribution:
      'Department supervision for hero Carnage symbiote assets, cellular morphing logic, weaponized tentacles, and Grace Cathedral battle sequence sets.',
  },
  {
    id: 'dune',
    title: 'Dune: Part One',
    role: 'Build Supervisor',
    year: '2021',
    category: 'film',
    highlight: '6x Oscar Winner · Dir. Denis Villeneuve',
    studio: 'DNEG India',
    contribution:
      'Supervised 3D modeling and build department deliveries across Ornithopter flight gear, military vehicle subdivision surfaces, and Arrakeen palace architectural megastructures.',
  },
  {
    id: 'f9',
    title: 'F9: The Fast Saga',
    role: 'Build Supervisor',
    year: '2021',
    category: 'film',
    highlight: 'Dir. Justin Lin · Armadillo Super-Truck',
    studio: 'DNEG India',
    contribution:
      'Supervised 3D build and vehicular modeling for the 14-wheel armored Armadillo convoy truck, rocket Fiero, stunt vehicles, and photoreal Edinburgh city environments.',
  },
  {
    id: 'eighthundred',
    title: 'The Eight Hundred',
    role: 'Build Supervisor',
    year: '2020',
    category: 'film',
    highlight: 'Global Box Office #1',
    studio: 'DNEG',
  },
  {
    id: 'westworld',
    title: 'Westworld',
    role: 'Build Supervisor',
    year: '2020',
    category: 'tv',
    highlight: 'HBO Sci-Fi Masterpiece · 9x Emmy Nominee',
    studio: 'DNEG',
    contribution:
      'Supervised asset builds and hard-surface environments for futuristic Los Angeles architectural sets, Delos robotics, hovercraft vehicles, and cybernetic infrastructure.',
  },
  {
    id: 'devs',
    title: 'Devs',
    role: 'Build Supervisor',
    year: '2020',
    category: 'tv',
    highlight: 'Dir. Alex Garland · 4x Emmy Nominee',
    studio: 'DNEG',
    contribution:
      'Supervised build department modeling for the 100-foot colossal Amaya child statue, electromagnetically suspended quantum laboratory cube, and redwood forest sets.',
  },
  {
    id: 'letterfortheking',
    title: 'The Letter for the King',
    role: 'Build Supervisor',
    year: '2020',
    category: 'tv',
    studio: 'DNEG',
  },
  {
    id: 'liberation',
    title: 'Liberation',
    role: 'Build Supervisor',
    year: '2019',
    category: 'film',
    studio: 'DNEG',
  },
  {
    id: 'thefeed',
    title: 'The Feed',
    role: 'Build Supervisor',
    year: '2019',
    category: 'tv',
    studio: 'DNEG',
  },
  {
    id: 'darkcrystal',
    title: 'The Dark Crystal: Age of Resistance',
    role: 'Build Supervisor',
    year: '2019',
    category: 'tv',
    highlight: 'Emmy & VES Winner · Jim Henson / Netflix',
    studio: 'DNEG',
    contribution:
      'Build Supervisor leading asset creation for the Castle of the Crystal, Skeksis baroque ceremonial chariots, Garthim armor, and digital double puppets.',
  },
  {
    id: 'chernobyl',
    title: 'Chernobyl',
    role: 'VFX Build Supervisor',
    year: '2019',
    category: 'tv',
    highlight: '10x Emmy & BAFTA Winner · HBO | Sky',
    studio: 'DNEG (HBO | Sky)',
    contribution:
      'Modelled and detailed hero environmental and architectural assets for the damaged Reactor Unit 4, Soviet-era industrial structures, debris fields, and Pripyat residential extensions.',
  },
  {
    id: 'godzilla',
    title: 'Godzilla: King of the Monsters',
    role: 'Asset Supervisor',
    year: '2019',
    category: 'film',
    highlight: 'MonsterVerse · Dir. Michael Dougherty',
    studio: 'DNEG (Mumbai, India)',
    contribution:
      'Supervised the asset team across massive underwater environments, Godzilla temple chamber, underwater exploration drones, digital doubles, wrecked ships, and prehistoric creature skeletons.',
  },
  {
    id: 'hotzone',
    title: 'The Hot Zone',
    role: 'Build Supervisor',
    year: '2019',
    category: 'tv',
    studio: 'DNEG',
  },
  {
    id: 'bohemian',
    title: 'Bohemian Rhapsody',
    role: 'Build Supervisor',
    year: '2018',
    category: 'film',
    highlight: '4x Oscar Winner · 1985 Wembley Stadium Live Aid',
    studio: 'DNEG (Mumbai, India)',
    contribution:
      'Supervised asset builds and architectural modeling for the historical 1985 Live Aid Wembley Stadium reconstruction, concert stage trussing, sound arrays, and 72,000+ digital crowd assets.',
  },
  {
    id: 'pacificrim',
    title: 'Pacific Rim: Uprising',
    role: 'Modelling Supervisor',
    year: '2018',
    category: 'film',
    highlight: 'Dir. Steven S. DeKnight · 38-Artist Leadership',
    studio: 'DNEG',
    contribution:
      'Modelling Supervisor leading 38 artists across seven Jaegers, Conn-Pods, Kaiju musculature, vehicles, weapons, and environments.',
  },
  {
    id: 'thelimit',
    title: 'The Limit',
    role: 'Build Supervisor',
    year: '2018',
    category: 'film',
    studio: 'DNEG',
  },
  {
    id: 'bladerunner',
    title: 'Blade Runner 2049',
    role: 'Modelling Lead',
    year: '2017',
    category: 'film',
    highlight: 'Oscar, BAFTA & VES Winner · Dir. Denis Villeneuve',
    studio: 'DNEG (Mumbai, India)',
    contribution:
      'Led the Mumbai modelling team across dystopian cityscapes, background buildings, hero digital doubles, futuristic weapons, props, and vehicles.',
  },
  {
    id: 'will',
    title: 'Will',
    role: 'Senior Modeler',
    year: '2017',
    category: 'tv',
    studio: 'DNEG',
  },
  {
    id: 'wonderwoman',
    title: 'Wonder Woman',
    role: 'Senior Modeler',
    year: '2017',
    category: 'film',
    studio: 'DNEG',
  },
  {
    id: 'life',
    title: 'Life',
    role: 'Senior Modeller',
    year: '2017',
    category: 'film',
    highlight: 'Dir. Daniel Espinosa · Three ISS Modules',
    studio: 'DNEG (Mumbai, India)',
    contribution:
      'Modelled and detailed three International Space Station (ISS) modules, fine ZBrush surface sculpting, and close-up cinematic hard-surface detailing.',
  },

  // ----------------------------------------------------
  // Feature Films & Regional Productions (2012 - 2015)
  // ----------------------------------------------------
  {
    id: 'ghostlytribe',
    title: 'Chronicles of the Ghostly Tribe',
    role: 'Modeling Lead',
    year: '2015',
    category: 'film',
    studio: 'Prime Focus',
  },
  {
    id: 'sincity2',
    title: 'Sin City: A Dame to Kill For',
    role: 'Senior Character & Env Modeler',
    year: '2014',
    category: 'film',
    studio: 'Prime Focus / CCL',
  },
  {
    id: 'hercules',
    title: 'Hercules',
    role: 'Senior Modeller',
    year: '2014',
    category: 'film',
    highlight: 'Dir. Brett Ratner · Dwayne Johnson',
    studio: 'Prime Focus World (London, UK)',
    contribution:
      'Hero digital doubles, extensive crowd assets, props, weapons, and vehicles for large-scale battle sequences.',
  },
  {
    id: 'irandamulagam',
    title: 'Irandam Ulagam',
    role: 'Senior Character & Env Modeler',
    year: '2013',
    category: 'film',
    studio: 'Prime Focus',
  },
  {
    id: 'krrish3',
    title: 'Krrish 3',
    role: 'Modelling Lead',
    year: '2013',
    category: 'film',
    highlight: 'Bollywood VFX Pioneer',
    studio: 'Prime Focus World',
  },
  {
    id: 'sonofsardaar',
    title: 'Son of Sardaar',
    role: 'Modelling Lead',
    year: '2012',
    category: 'film',
    studio: 'Prime Focus',
  },
  {
    id: 'barfi',
    title: 'Barfi!',
    role: 'Modelling Lead',
    year: '2012',
    category: 'film',
    highlight: 'Multi-Award Winner',
    studio: 'Prime Focus',
  },

  // ----------------------------------------------------
  // Animation Productions (2008 - 2011)
  // ----------------------------------------------------
  {
    id: 'wordworld',
    title: 'WordWorld',
    role: 'Senior Character Modeler',
    year: '2008–2011',
    category: 'tv',
    highlight: 'Emmy Winning Animation',
    studio: 'Crest Animation',
  },
  {
    id: 'alphaandomega',
    title: 'Alpha and Omega',
    role: 'Senior Character Modeler',
    year: '2010',
    category: 'film',
    studio: 'Crest Animation / Lionsgate',
  },
  {
    id: 'monsterbuster',
    title: 'Monster Buster Club',
    role: 'Senior Character Modeler',
    year: '2009',
    category: 'tv',
    studio: 'Crest Animation',
  },
];
