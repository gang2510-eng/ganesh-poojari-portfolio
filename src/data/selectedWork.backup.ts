export type AssetCategory = 'Character' | 'Creature';

export interface WorkImage {
  src: string;
  label: string; // e.g. "Hero Full Body", "Face Closeup", "Skin Cam 01"
  width?: number;
  height?: number;
}

export interface SelectedWorkItem {
  id: string;
  title: string;
  category: AssetCategory;
  /**
   * Index of the image in the `images` array to use as the default card cover closeup.
   * Easily change this number (0, 1, 2...) to pick a different default camera closeup!
   */
  defaultImageIndex: number;
  images: WorkImage[];
  brief: string;
  contribution: string;
  software: string[];
  year?: string;
  studio?: string;
}

/**
 * 3D Sculpt Portfolio Collection
 * Downloaded in original high-resolution master quality from Ganesh Poojari's portfolio.
 * 
 * TO CUSTOMIZE:
 * - Change default cover closeup: change `defaultImageIndex` to any index (0, 1, 2...)
 * - Remove an image: delete or comment out that entry inside `images: [...]`
 * - Reorder images: simply swap lines inside `images: [...]`
 */
export const selectedWorkData: SelectedWorkItem[] = [
  {
    id: 'king',
    title: 'The King — High-Fidelity Character & Costume Sculpt',
    category: 'Character',
    defaultImageIndex: 0,
    year: 'Production Study',
    studio: 'LookDev & Asset Pipeline',
    software: ['ZBrush', 'Maya', 'Arnold', 'Mari'],
    brief: 'High-realism cinematic character study exploring layered royal regalia, heavy fur drapery, and elderly regal facial structure. Developed to stress-test high-frequency displacement in production render engines.',
    contribution: 'Sculpted primary facial likeness, secondary skin wrinkles, and tertiary microscopic pores. Executed a series of 6 focused camera lookdev passes to evaluate skin shader translucency, subsurface scattering, and specular response.',
    images: [
      { src: '/work/king/ganesh-poojari-image-7.jpg', label: 'Hero Full Body Master', width: 2700, height: 4000 },
      { src: '/work/king/ganesh-poojari-image-18.jpg', label: 'Master Cinematic Portrait', width: 2700, height: 4000 },
      { src: '/work/king/ganesh-poojari-image-15.jpg', label: 'High-Frequency Facial Closeup', width: 2700, height: 4000 },
      { src: '/work/king/ganesh-poojari-image-11.jpg', label: '3/4 Bust & Beard Detail', width: 2700, height: 4000 },
      { src: '/work/king/ganesh-poojari-image-10.jpg', label: 'Royal Regalia & Costume Pass', width: 2700, height: 4000 },
      { src: '/work/king/ganesh-poojari-image-13.jpg', label: 'Torso & Armor Detail Pass', width: 2700, height: 4000 },
      { src: '/work/king/ganesh-poojari-image-14.jpg', label: 'Profile Silhouette', width: 2700, height: 4000 },
      { src: '/work/king/ganesh-poojari-image-12.jpg', label: 'Clay Shaded Neutral Turnaround', width: 2700, height: 4000 },
      { src: '/work/king/ganesh-poojari-image-16.jpg', label: 'Lighting Key Shot 01', width: 2700, height: 4000 },
      { src: '/work/king/ganesh-poojari-image-17.jpg', label: 'Lighting Key Shot 02', width: 2700, height: 4000 },
      { src: '/work/king/ganesh-poojari-skintestcam1-001.jpg', label: 'Skin Shader Cam 01 (Macro Pore)', width: 900, height: 900 },
      { src: '/work/king/ganesh-poojari-skintestcam2-001.jpg', label: 'Skin Shader Cam 02 (Subsurface)', width: 900, height: 900 },
      { src: '/work/king/ganesh-poojari-skintestcam3-001.jpg', label: 'Skin Shader Cam 03 (Cheek Specular)', width: 900, height: 900 },
      { src: '/work/king/ganesh-poojari-skintestcam4-001.jpg', label: 'Skin Shader Cam 04 (Forehead Wrinkle)', width: 900, height: 900 },
      { src: '/work/king/ganesh-poojari-skintestcam5-001.jpg', label: 'Skin Shader Cam 05 (Ear Translucency)', width: 900, height: 900 },
      { src: '/work/king/ganesh-poojari-skintestcam6-001.jpg', label: 'Skin Shader Cam 06 (Eye & Orbit)', width: 900, height: 900 },
    ],
  },
  {
    id: 'komodo',
    title: 'Komodo Dragon — Organic Creature Anatomy & Scale Work',
    category: 'Creature',
    defaultImageIndex: 0,
    year: 'Creature Anatomy',
    studio: 'Feature Film Benchmark',
    software: ['ZBrush', 'Maya', 'Mari', 'Arnold'],
    brief: 'Photorealistic quadruped reptile sculpt modeled to rigorous anatomical reference of the Komodo monitor lizard. Designed for dynamic creature locomotion and high-stress skin deformation around joints.',
    contribution: 'Crafted individual organic scale patterns, throat pouch skin folds, and muscular limb articulation. Rendered in 5K resolution with dedicated 4K macro scale displacement passes showing skin tension and directional scales.',
    images: [
      { src: '/work/komodo/ganesh-poojari-1001.jpg', label: '5K Dynamic Action Pose', width: 5000, height: 3750 },
      { src: '/work/komodo/ganesh-poojari-1005.jpg', label: '5K Snout & Head Macro Closeup', width: 5000, height: 3750 },
      { src: '/work/komodo/ganesh-poojari-1003.jpg', label: '5K 3/4 Front Turnaround', width: 5000, height: 3750 },
      { src: '/work/komodo/ganesh-poojari-1004.jpg', label: '5K Low-Angle Stance', width: 5000, height: 3750 },
      { src: '/work/komodo/ganesh-poojari-1002.jpg', label: '5K Lateral Muscle Structure', width: 5000, height: 3750 },
      { src: '/work/komodo/ganesh-poojari-1006.jpg', label: '5K Jaw & Tooth Detail', width: 5000, height: 3750 },
      { src: '/work/komodo/ganesh-poojari-1007.jpg', label: '5K Frontal Threat Pose', width: 5000, height: 3750 },
      { src: '/work/komodo/ganesh-poojari-1008.jpg', label: '5K Claw & Foreleg Quadruped Anatomy', width: 5000, height: 3750 },
      { src: '/work/komodo/ganesh-poojari-komodo-041.jpg', label: '4K Macro Scale Displacement 01', width: 4096, height: 2000 },
      { src: '/work/komodo/ganesh-poojari-komodo-046.jpg', label: '4K Macro Scale Displacement 02', width: 4096, height: 2000 },
    ],
  },
  {
    id: 'bajrangbali',
    title: 'Bajrangbali (Hanuman) — Hero Mythological Sculpt',
    category: 'Character',
    defaultImageIndex: 0,
    year: 'Character Lead',
    studio: 'Mythological Feature Concept',
    software: ['ZBrush', 'Maya', 'Photoshop'],
    brief: 'Sculptural visualization of Lord Hanuman balancing divine devotion with immense physical power. Focus on heroic proportions, classical iconography, and intricate gold ornament embellishments.',
    contribution: 'Engineered anatomical balance fusing simian craniofacial features with powerful human physique. Detail passes on ornate headgear, sacred necklaces, and muscular definition across chest and back.',
    images: [
      { src: '/work/bajrangbali/ganesh-poojari-hanuman001.jpg', label: 'Hero Frontal Sculpt', width: 2122, height: 1280 },
      { src: '/work/bajrangbali/ganesh-poojari-hanuman002.jpg', label: '4K Dynamic 3/4 Sculpt', width: 4244, height: 2560 },
    ],
  },
  {
    id: 'orc',
    title: 'Orc Warlord — Creature Character Bust',
    category: 'Creature',
    defaultImageIndex: 0,
    year: 'Creature Design',
    studio: 'Fantasy Concept Pipeline',
    software: ['ZBrush', 'Photoshop'],
    brief: 'Intimidating fantasy warlord bust showcasing battle-scarred leather, heavy tusk protrusion, and coarse creature skin folds. Emphasizes weight, silhouette, and menacing character expression.',
    contribution: 'Designed aggressive facial planes, deep brow furrows, and worn iron-plate ornaments. Maintained edge flow suitable for facial rigging and roaring morph targets.',
    images: [
      { src: '/work/orc/ganesh-poojari-orcking-001.jpg', label: 'Hero Frontal Bust', width: 2240, height: 1680 },
      { src: '/work/orc/ganesh-poojari-orcking-002.jpg', label: '3/4 Threat Expression', width: 2240, height: 1680 },
      { src: '/work/orc/ganesh-poojari-orcking-003.jpg', label: 'Armor & Tusks Closeup', width: 2240, height: 1680 },
    ],
  },
  {
    id: 'old-lady',
    title: 'Elder Portrait Likeness — High-Frequency Facial Sculpt',
    category: 'Character',
    defaultImageIndex: 0,
    year: 'Anatomy Study',
    studio: 'Digital Human Benchmark',
    software: ['ZBrush', 'Maya'],
    brief: 'Exploration of human senescence, skin elastosis, and structural facial bone atrophy. Accurate natural aging reference without caricaturization.',
    contribution: 'Sculpted asymmetric gravity folds, sub-orbital fat pads, and delicate lip vermilion creasing. Created natural skin tension lines across neck and forehead.',
    images: [
      { src: '/work/old-lady/ganesh-poojari-oldlady-001.jpg', label: 'Frontal Likeness & Asymmetry', width: 2240, height: 1680 },
      { src: '/work/old-lady/ganesh-poojari-oldlady-002.jpg', label: '3/4 High-Frequency Wrinkle Pass', width: 2240, height: 1680 },
    ],
  },
  {
    id: 'hell-lord',
    title: 'Hell Lord — Demonic Creature Bust',
    category: 'Creature',
    defaultImageIndex: 0,
    year: 'Creature Concept',
    studio: 'Dark Fantasy Design',
    software: ['ZBrush', 'Keyshot'],
    brief: 'Dark fantasy demon bust with sweeping curved horns, sharp bone ridges, and sinewy neck anatomy. Designed to project power and menacing presence through strong primary shapes.',
    contribution: 'Integrated curved horned silhouette with sternocleidomastoid muscle flow. Sculpted leathery chitinous plating and cavernous facial planes.',
    images: [
      { src: '/work/hell-lord/ganesh-poojari-helllord001.jpg', label: 'Hero Frontal Horned Bust', width: 2240, height: 1680 },
      { src: '/work/hell-lord/ganesh-poojari-helllord002.jpg', label: '3/4 Profile Silhouette', width: 2240, height: 1680 },
      { src: '/work/hell-lord/ganesh-poojari-helllord003.jpg', label: 'Torso & Ridge Structure', width: 2240, height: 1680 },
    ],
  },
  {
    id: 'golden-monkey',
    title: 'Golden Langur — Primate Anatomy & Fur Flow',
    category: 'Creature',
    defaultImageIndex: 0,
    year: 'Fauna Study',
    studio: 'Groom & Anatomy Pipeline',
    software: ['ZBrush', 'Maya'],
    brief: 'Anatomical study of the endangered golden langur primate. Focus on delicate facial skin folds, expressive dark eyes, and underlying bone landmarks guiding fur direction.',
    contribution: 'Sculpted authentic nasal bridge flattening, fine lip folds, and hair guide curves to direct grooming grooming maps in downstream lookdev.',
    images: [
      { src: '/work/golden-monkey/ganesh-poojari-golden-monkey001.jpg', label: 'Hero Frontal Pose', width: 2240, height: 1680 },
      { src: '/work/golden-monkey/ganesh-poojari-golden-monkey007.jpg', label: '3/4 Expressive Portrait', width: 2240, height: 1680 },
      { src: '/work/golden-monkey/ganesh-poojari-golden-monkey005.jpg', label: 'Facial Contour Closeup', width: 2240, height: 1680 },
      { src: '/work/golden-monkey/ganesh-poojari-golden-monkey006.jpg', label: 'Fur Direction & Fiber Flow', width: 2240, height: 1680 },
    ],
  },
  {
    id: 'creature-monster',
    title: 'Alien Behemoth — Conceptual Creature Sculpt',
    category: 'Creature',
    defaultImageIndex: 0,
    year: 'Creature Design',
    studio: 'Sci-Fi Feature Pipeline',
    software: ['ZBrush', 'Photoshop'],
    brief: 'Extraterrestrial apex predator featuring multiple ocular nodes, armored plating, and raw organic power. Designed for biomechanical plausibility.',
    contribution: 'Established muscular weight distribution, interlocking carapace plates, and fibrous muscle transitions between exoskeleton segments.',
    images: [
      { src: '/work/monster/ganesh-poojari-monster-001.jpg', label: 'Hero Frontal Concept', width: 2240, height: 1680 },
      { src: '/work/monster/ganesh-poojari-monster-002.jpg', label: '3/4 Musculature Turnaround', width: 2240, height: 1680 },
      { src: '/work/monster/ganesh-poojari-monster-003.jpg', label: 'Mandible & Ocular Anatomy', width: 2240, height: 1680 },
    ],
  },
  {
    id: 'sadhu',
    title: 'Indian Ascetic (Sadhu) — Character Portrait Sculpt',
    category: 'Character',
    defaultImageIndex: 0,
    year: 'Portrait Study',
    studio: 'Cultural & Human Likeness',
    software: ['ZBrush', 'Maya'],
    brief: 'Expressive sculpted portrait of a Hindu Sadhu ascetic. Features coarse dreadlocked hair, traditional Tilak markings, and a weathered introspective expression.',
    contribution: 'Hand-sculpted intricate hair ropes (Jata), aged facial volume, and detailed cloth wrapping around the neck and shoulders.',
    images: [
      { src: '/work/sadhu/ganesh-poojari-baba001.jpg', label: 'Hero Portrait & Turban Detail', width: 2240, height: 1680 },
      { src: '/work/sadhu/ganesh-poojari-baba002.jpg', label: '3/4 Beard & Wrinkle Sculpt', width: 2240, height: 1680 },
    ],
  },
  {
    id: 'horse',
    title: 'Equine Anatomy — Quadruped Muscle Study',
    category: 'Creature',
    defaultImageIndex: 0,
    year: 'Anatomy Study',
    studio: 'Biomechanics Benchmark',
    software: ['ZBrush', 'Maya'],
    brief: 'Comprehensive biomechanical study of equine skeletal and muscular structure. Developed to understand skin sliding over scapula, ribcage, and hindquarter muscle groups.',
    contribution: 'Modeled accurate muscle attachments for latissimus dorsi, gluteal groups, and digital flexor tendons to ensure flawless deformation during gallop cycles.',
    images: [
      { src: '/work/horse/ganesh-poojari-horse001.jpg', label: 'Lateral Quadruped Muscle Map', width: 2240, height: 1680 },
      { src: '/work/horse/ganesh-poojari-horse002.jpg', label: 'Dynamic Gallop Anatomy', width: 2240, height: 1680 },
    ],
  },
  {
    id: 'hariprasad',
    title: 'Pandit Hariprasad Chaurasia — Likeness Study',
    category: 'Character',
    defaultImageIndex: 0,
    year: 'Likeness Study',
    studio: 'Digital Double Reference',
    software: ['ZBrush', 'Photoshop'],
    brief: 'Digital likeness sculpt of the legendary Indian classical flautist (Bansuri master). Capturing serene meditative focus and recognizable facial features.',
    contribution: 'Matched photographic references from multiple historical eras to reconstruct precise skull structure, nasolabial folds, and gentle eye crinkles.',
    images: [
      { src: '/work/hariprasad/ganesh-poojari-hariprasad-001.jpg', label: 'Likeness Front Portrait', width: 1280, height: 800 },
      { src: '/work/hariprasad/ganesh-poojari-hariprasad-002.jpg', label: 'Facial Study & Expression', width: 1103, height: 578 },
    ],
  },
  {
    id: 'african-lady',
    title: 'African Lady — Classical Portrait Bust',
    category: 'Character',
    defaultImageIndex: 0,
    year: 'Classical Study',
    studio: 'Fine Art Digital Sculpt',
    software: ['ZBrush'],
    brief: 'Classical portrait bust celebrating elegant cranial balance, high cheekbones, and graceful elongation of neck and collarbone anatomy.',
    contribution: 'Sculpted smooth continuous surfaces with subtle skin tension. Focused on clean aesthetic planes and strong light catchers along the zygomatic arch.',
    images: [
      { src: '/work/african-lady/ganesh-poojari-african-lady-001.jpg', label: 'Classical Frontal Portrait', width: 2240, height: 1680 },
      { src: '/work/african-lady/ganesh-poojari-african-lady-002.jpg', label: '3/4 Cranial Form & Neck Lines', width: 2240, height: 1680 },
    ],
  },
  {
    id: 'caricature',
    title: 'Stylized Portrait — Form & Exaggeration Study',
    category: 'Character',
    defaultImageIndex: 0,
    year: 'Stylized Study',
    studio: 'Character Animation Concept',
    software: ['ZBrush', 'Photoshop'],
    brief: 'Stylized 3D character study pushing caricature principles, expressive silhouettes, and exaggerated facial features while retaining structural anatomy.',
    contribution: 'Defined sharp planes, exaggerated jawline mass, and stylized hair volume without losing organic appeal.',
    images: [
      { src: '/work/caricature/ganesh-poojari-caricature001.jpg', label: 'Hero Stylized Portrait', width: 2240, height: 1680 },
      { src: '/work/caricature/ganesh-poojari-caricature002.jpg', label: '3/4 Form Exaggeration', width: 2240, height: 1680 },
    ],
  },
];
