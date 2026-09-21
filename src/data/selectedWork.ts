export type AssetType = 'Creature' | 'Character' | 'Hard-Surface' | 'Environment';

export interface SelectedWorkItem {
  id: string;
  title: string;
  assetType: AssetType;
  show: string;
  studio: string;
  year: string;
  images: {
    beauty: string;
    wireframe?: string;
    topology?: string;
  };
  role: string;
  brief: string;
  contribution: string;
}

export const selectedWorkData: SelectedWorkItem[] = [
  {
    id: 'work-01',
    title: 'TITLE TBC — Hero Creature Asset',
    assetType: 'Creature',
    show: 'SHOW NAME TBC',
    studio: 'STUDIO TBC (e.g. Framestore / PIXOMONDO / DNEG)',
    year: 'YEAR TBC',
    images: {
      beauty: '/work/placeholder-01-beauty.jpg',
      wireframe: '/work/placeholder-01-wireframe.jpg',
      topology: '/work/placeholder-01-topology.jpg',
    },
    role: 'Asset Supervisor / Modeling Lead',
    brief: 'BRIEF TBC — 2 sentences outlining the client visual brief, anatomical requirements, and creature silhouette specifications.',
    contribution: 'WHAT I OWNED TBC — 2 sentences detailing supervisory asset ownership, topology direction, displacement maps, and rigging handoff.',
  },
  {
    id: 'work-02',
    title: 'TITLE TBC — Lead Character Model',
    assetType: 'Character',
    show: 'SHOW NAME TBC',
    studio: 'STUDIO TBC',
    year: 'YEAR TBC',
    images: {
      beauty: '/work/placeholder-02-beauty.jpg',
      wireframe: '/work/placeholder-02-wireframe.jpg',
      topology: '/work/placeholder-02-topology.jpg',
    },
    role: 'Asset Supervisor / Character Modeler',
    brief: 'BRIEF TBC — 2 sentences describing facial blendshape requirements, hero wardrobe anatomy, and photorealistic fidelity.',
    contribution: 'WHAT I OWNED TBC — 2 sentences detailing edge-loop topology for high-stress facial deforms and handoff to downstream lookdev.',
  },
  {
    id: 'work-03',
    title: 'TITLE TBC — Hero Hard-Surface Vehicle / Prop',
    assetType: 'Hard-Surface',
    show: 'SHOW NAME TBC',
    studio: 'STUDIO TBC',
    year: 'YEAR TBC',
    images: {
      beauty: '/work/placeholder-03-beauty.jpg',
      wireframe: '/work/placeholder-03-wireframe.jpg',
      // Note: wireframe provided, topology omitted to demonstrate graceful hiding
    },
    role: 'Modeling Supervisor',
    brief: 'BRIEF TBC — 2 sentences covering mechanical functionality, panel subdivision surfaces, and industrial design fidelity.',
    contribution: 'WHAT I OWNED TBC — 2 sentences describing bevel consistency, UV tile budget allocation, and mechanical articulation prep.',
  },
  {
    id: 'work-04',
    title: 'TITLE TBC — Complex Environment Set Piece',
    assetType: 'Environment',
    show: 'SHOW NAME TBC',
    studio: 'STUDIO TBC',
    year: 'YEAR TBC',
    images: {
      beauty: '/work/placeholder-04-beauty.jpg',
      wireframe: '/work/placeholder-04-wireframe.jpg',
      topology: '/work/placeholder-04-topology.jpg',
    },
    role: 'Build / Asset Supervisor',
    brief: 'BRIEF TBC — 2 sentences outlining large-scale architectural scale, environmental weathering, and modular layout needs.',
    contribution: 'WHAT I OWNED TBC — 2 sentences detailing modular kit creation, proxy LOD pipelines, and layout integration for digital matte painting.',
  },
  {
    id: 'work-05',
    title: 'TITLE TBC — Photoreal Creature Build',
    assetType: 'Creature',
    show: 'SHOW NAME TBC',
    studio: 'STUDIO TBC',
    year: 'YEAR TBC',
    images: {
      beauty: '/work/placeholder-05-beauty.jpg',
      wireframe: '/work/placeholder-05-wireframe.jpg',
      topology: '/work/placeholder-05-topology.jpg',
    },
    role: 'Asset Supervisor',
    brief: 'BRIEF TBC — 2 sentences describing biological realism, skeletal volume preservation, and secondary skin-slide constraints.',
    contribution: 'WHAT I OWNED TBC — 2 sentences covering muscle volume scupting, micro-wrinkle detailing in ZBrush, and UDIM layout execution.',
  },
  {
    id: 'work-06',
    title: 'TITLE TBC — Mechanical Hero Prop',
    assetType: 'Hard-Surface',
    show: 'SHOW NAME TBC',
    studio: 'STUDIO TBC',
    year: 'YEAR TBC',
    images: {
      beauty: '/work/placeholder-06-beauty.jpg',
      // Note: only beauty provided to test graceful hiding of both wireframe and topology slots
    },
    role: 'Modeling Lead',
    brief: 'BRIEF TBC — 2 sentences detailing practical prop reconstruction, industrial surface detailing, and manufacturing tolerance matching.',
    contribution: 'WHAT I OWNED TBC — 2 sentences describing CAD clean-up, precision sub-d geometry, and shader-ready UV unwrap.',
  },
];
