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
  brief: string;
  contribution: string;
}

export const selectedWorkData: SelectedWorkItem[] = [
  {
    id: 'work-01',
    title: '[ Asset name ]',
    assetType: 'Creature',
    show: '[ Show ]',
    studio: '[ Studio ]',
    year: '[ Year ]',
    images: {
      beauty: '/work/placeholder-01-beauty.jpg',
      wireframe: '/work/placeholder-01-wireframe.jpg',
      topology: '/work/placeholder-01-topology.jpg',
    },
    brief: '[ The brief — 2 sentences outlining creature anatomy, visual reference benchmarks, and director specifications. ]',
    contribution: '[ What I owned — 2 sentences detailing high-frequency sculpt fidelity, production topology loops, and rigging handoff. ]',
  },
  {
    id: 'work-02',
    title: '[ Asset name ]',
    assetType: 'Character',
    show: '[ Show ]',
    studio: '[ Studio ]',
    year: '[ Year ]',
    images: {
      beauty: '/work/placeholder-02-beauty.jpg',
      wireframe: '/work/placeholder-02-wireframe.jpg',
      topology: '/work/placeholder-02-topology.jpg',
    },
    brief: '[ The brief — 2 sentences describing photoreal character requirements, wardrobe integration, and facial deformation targets. ]',
    contribution: '[ What I owned — 2 sentences detailing lead model supervision, edge flow optimization, and downstream lookdev collaboration. ]',
  },
  {
    id: 'work-03',
    title: '[ Asset name ]',
    assetType: 'Hard-Surface',
    show: '[ Show ]',
    studio: '[ Studio ]',
    year: '[ Year ]',
    images: {
      beauty: '/work/placeholder-03-beauty.jpg',
      wireframe: '/work/placeholder-03-wireframe.jpg',
      // Note: topology omitted to test graceful hiding of missing image views
    },
    brief: '[ The brief — 2 sentences describing mechanical vehicle / hard-surface specifications and functional panel tolerances. ]',
    contribution: '[ What I owned — 2 sentences covering subdivision surface continuity, bevel radius consistency, and UDIM tile layout. ]',
  },
  {
    id: 'work-04',
    title: '[ Asset name ]',
    assetType: 'Environment',
    show: '[ Show ]',
    studio: '[ Studio ]',
    year: '[ Year ]',
    images: {
      beauty: '/work/placeholder-04-beauty.jpg',
      wireframe: '/work/placeholder-04-wireframe.jpg',
      topology: '/work/placeholder-04-topology.jpg',
    },
    brief: '[ The brief — 2 sentences describing architectural set extension requirements and historical accuracy guidelines. ]',
    contribution: '[ What I owned — 2 sentences covering modular kit architecture, proxy LOD workflows, and digital matte painting alignment. ]',
  },
  {
    id: 'work-05',
    title: '[ Asset name ]',
    assetType: 'Creature',
    show: '[ Show ]',
    studio: '[ Studio ]',
    year: '[ Year ]',
    images: {
      beauty: '/work/placeholder-05-beauty.jpg',
      wireframe: '/work/placeholder-05-wireframe.jpg',
      topology: '/work/placeholder-05-topology.jpg',
    },
    brief: '[ The brief — 2 sentences describing photoreal biological creature features, scale reference, and skin displacement fidelity. ]',
    contribution: '[ What I owned — 2 sentences detailing muscle volume sculpt passes in ZBrush, UV layout structure, and pipeline QA. ]',
  },
  {
    id: 'work-06',
    title: '[ Asset name ]',
    assetType: 'Hard-Surface',
    show: '[ Show ]',
    studio: '[ Studio ]',
    year: '[ Year ]',
    images: {
      beauty: '/work/placeholder-06-beauty.jpg',
      // Note: wireframe and topology omitted to test graceful hiding when only beauty view is available
    },
    brief: '[ The brief — 2 sentences detailing hero prop industrial design, mechanical tolerances, and functional articulation. ]',
    contribution: '[ What I owned — 2 sentences detailing CAD cleanup, precision polygon modeling, and lookdev shader readiness. ]',
  },
];
