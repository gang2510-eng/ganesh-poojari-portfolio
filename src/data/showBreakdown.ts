export interface BreakdownGalleryImage {
  src: string;
  title: string;
  type: 'still' | 'wireframe' | 'turntable' | 'clay' | 'concept';
}

export interface KeyResponsibility {
  category: string;
  details: string;
}

export interface AwardRecognition {
  award: string;
  category: string;
}

export interface BreakdownVideoItem {
  id: string;
  title: string;
  youtubeUrl: string;
  duration?: string;
  category?: string;
  localVideoSrc?: string;
}

export interface ShowBreakdownItem {
  id: string;
  show: string;
  title: string;
  year: string;
  role: string;
  studio: string;
  studioLogo?: string;
  studioBadgeColor?: string;
  director?: string;
  starring?: string;
  location?: string;
  department?: string;
  posterSrc: string;
  heroAsset: string;
  summary: string;
  deliverables: string[];
  software: string[];
  pipelineHighlights: string[];
  specialisations?: string[];
  responsibilities?: KeyResponsibility[];
  awards?: AwardRecognition[];
  imdbId?: string;
  showreelTimestamp?: string;
  youtubeId?: string;
  youtubeUrl?: string;
  videoDuration?: string;
  videoTitle?: string;
  localVideoSrc?: string;
  videos?: BreakdownVideoItem[];
  galleryFolder?: string;
  images?: BreakdownGalleryImage[];
}

export const showBreakdownData: ShowBreakdownItem[] = [
  // 1. dune-part-one
  {
    id: 'dune-part-one',
    show: 'Dune: Part One',
    title: 'Arrakis Environments, Ornithopters & Mechanical Builds',
    year: '2021',
    role: 'Build Supervisor',
    studio: 'DNEG India',
    studioLogo: '/logos/dneg.svg',
    posterSrc: '/posters/dune.jpg',
    heroAsset: 'Hero Hard-Surface Vehicles & Planetary Megastructures',
    summary: 'Supervised 3D modeling and build department deliveries on Denis Villeneuve’s 6x Academy Award-winning sci-fi epic. Directed mechanical vehicle subdivision surfaces, Ornithopter flight gear, and sprawling desert architectural sets.',
    deliverables: [
      'Ornithopter mechanical chassis & flapping blade kinematics',
      'Subdivision surface continuity on industrial military vehicles',
      'Arrakeen palace megastructure and environmental set extensions',
      'Precision CAD-to-SubD surface conversion pipelines',
    ],
    software: ['Maya', 'ZBrush', 'Clarisse', 'Mari', 'ShotGrid'],
    pipelineHighlights: [
      'Supervised hard-surface modeling division through Academy Award-winning VFX delivery',
      'Ensured microscopic bevel fidelity and photoreal panel gaps under direct sunlight key',
      'Engineered modular architectural kit for sprawling Arrakeen city layout',
    ],
    showreelTimestamp: '0:45',
    youtubeId: 'UARrOsNPviA',
    youtubeUrl: 'https://www.youtube.com/watch?v=UARrOsNPviA',
    videoDuration: '4:35',
    videoTitle: 'Dune | VFX Breakdown | DNEG Deep Dive',
  },

  // 2. house-of-the-dragon
  {
    id: 'house-of-the-dragon',
    show: 'House of the Dragon (Season 2)',
    title: 'The Eyrie, Dragonstone, Drydock Environments, Ships & Dead Dragon Head',
    year: '2024',
    role: 'Asset Supervisor',
    studio: 'Pixomondo (PXO)',
    studioLogo: '/logos/pixomondo.svg',
    director: 'Ryan Condal',
    starring: 'Emma D’Arcy, Matt Smith, Olivia Cooke',
    location: 'Montreal, Canada',
    department: 'Assets | Environments, Architecture, Creatures, Crowd, Ships & Props',
    posterSrc: '/posters/houseofthedragon_s2.jpg',
    heroAsset: 'The Eyrie, Dragonstone, Drydock, Medieval Ships & Dead Dragon Head',
    summary:
      'Worked as an Asset Supervisor at Pixomondo Montreal on HBO’s House of the Dragon – Season 2 (2024), leading asset development across three major environments: The Eyrie, Dragonstone, and the Drydock.\n\nSupervised the creation of extensive medieval environments featuring monumental castles, complex architectural structures, damaged ships, a dead dragon head, crowd assets, and a large variety of supporting props.\n\nResponsible for coordinating artists, managing complex asset requirements, maintaining artistic and technical quality, and ensuring consistent delivery across multiple large-scale environments and production sequences.',
    deliverables: [
      'Asset Supervision & Team Leadership: Led and coordinated asset artists, overseeing task allocation, modelling quality, technical reviews, production priorities, and delivery schedules across multiple environment and asset categories.',
      'The Eyrie Environment: Supervised the development of the large-scale castle environment, including imposing medieval architecture, towers, structural elements, and supporting environment assets required to establish the location’s scale and visual identity.',
      'Dragonstone Environment: Oversaw the creation of extensive castle architecture, rocky terrain, stone structures, and supporting architectural details, maintaining consistency with the established visual language of the series.',
      'Drydock Environment & Ships: Supervised the development of the large-scale drydock environment, including damaged ships, shipbuilding structures, wooden frameworks, dock infrastructure, and supporting maritime props.',
      'Creature Assets – Dead Dragon Head: Oversaw the development of a large dead dragon head asset, focusing on anatomical forms, surface detailing, and production requirements for cinematic shots.',
      'Crowd & Supporting Characters: Supervised the creation of crowd-related assets and variations required to populate the environments, maintaining consistency in design and period-appropriate appearance.',
      'Props & Environment Detailing: Managed the development of numerous medieval props, architectural components, environmental set dressing, and supporting assets across all three environments.',
      'Asset Quality & Technical Direction: Provided artistic and technical feedback, ensuring consistent modelling standards, detailed geometry, efficient asset organisation, and readiness for downstream departments.',
      'Cross-Department & Production Collaboration: Worked closely with production, environment, texturing, look development, and other departments to resolve technical challenges, manage asset priorities, and maintain production delivery schedules.',
    ],
    responsibilities: [
      {
        category: 'Asset Supervision & Team Leadership',
        details:
          'Led and coordinated asset artists, overseeing task allocation, modelling quality, technical reviews, production priorities, and delivery schedules across multiple environment and asset categories.',
      },
      {
        category: 'The Eyrie Environment',
        details:
          'Supervised the development of the large-scale castle environment, including imposing medieval architecture, towers, structural elements, and supporting environment assets required to establish the location’s scale and visual identity.',
      },
      {
        category: 'Dragonstone Environment',
        details:
          'Oversaw the creation of extensive castle architecture, rocky terrain, stone structures, and supporting architectural details, maintaining consistency with the established visual language of the series.',
      },
      {
        category: 'Drydock Environment & Ships',
        details:
          'Supervised the development of the large-scale drydock environment, including damaged ships, shipbuilding structures, wooden frameworks, dock infrastructure, and supporting maritime props.',
      },
      {
        category: 'Creature Assets – Dead Dragon Head',
        details:
          'Oversaw the development of a large dead dragon head asset, focusing on anatomical forms, surface detailing, and production requirements for cinematic shots.',
      },
      {
        category: 'Crowd & Supporting Characters',
        details:
          'Supervised the creation of crowd-related assets and variations required to populate the environments, maintaining consistency in design and period-appropriate appearance.',
      },
      {
        category: 'Props & Environment Detailing',
        details:
          'Managed the development of numerous medieval props, architectural components, environmental set dressing, and supporting assets across all three environments.',
      },
      {
        category: 'Asset Quality & Technical Direction',
        details:
          'Provided artistic and technical feedback, ensuring consistent modelling standards, detailed geometry, efficient asset organisation, and readiness for downstream departments.',
      },
      {
        category: 'Cross-Department & Production Collaboration',
        details:
          'Worked closely with production, environment, texturing, look development, and other departments to resolve technical challenges, manage asset priorities, and maintain production delivery schedules.',
      },
    ],
    software: ['Autodesk Maya', 'ZBrush', 'Mari', 'Arnold', 'ShotGrid'],
    specialisations: [
      'Asset Supervision',
      'Team Leadership',
      'Large-Scale Environment Development',
      'Medieval Architecture',
      'Castle Modelling',
      'Ship Modelling',
      'Creature Assets',
      'Crowd Asset Development',
      'Props & Set Dressing',
      'Asset Quality Control',
      'Cross-Department Collaboration',
      'Production Pipeline Management',
    ],
    pipelineHighlights: [
      'Supervised asset development across three major environments: The Eyrie, Dragonstone, and the Drydock.',
      'Managed a diverse asset workload covering monumental castles, large-scale environments, ships, creature assets, crowd assets, and props.',
      'Coordinated multiple artists and asset categories while balancing complex modelling requirements and production deadlines.',
      'Maintained artistic consistency and technical quality across large-scale environment builds and hero assets.',
      'Supported downstream departments through technical reviews, asset approvals, and production-focused problem-solving.',
    ],
    showreelTimestamp: '0:15',
    imdbId: 'tt11198330',
    youtubeId: 'FqHuxXUF264',
    youtubeUrl: 'https://www.youtube.com/watch?v=FqHuxXUF264',
    localVideoSrc: '/breakdowns/house-of-the-dragon/hotd_s2_vfx_breakdown.mp4',
    videoDuration: '3:34',
    videoTitle: 'House of the Dragon S2 | Official VFX Breakdown | Pixomondo',
    videos: [
      {
        id: 'hotd-s2-vfx',
        title: 'House of the Dragon S2 — Official VFX Breakdown (Pixomondo)',
        youtubeUrl: 'https://www.youtube.com/watch?v=FqHuxXUF264',
        category: 'VFX Breakdown',
        duration: '3:34',
        localVideoSrc: '/breakdowns/house-of-the-dragon/hotd_s2_vfx_breakdown.mp4',
      },
      {
        id: 'hotd-s2-flames',
        title: 'Behind the Flames — Dragon Anatomies & Creature VFX Featurette',
        youtubeUrl: 'https://www.youtube.com/watch?v=FqHuxXUF264',
        category: 'Behind the Scenes',
        duration: '13:33',
        localVideoSrc: '/breakdowns/house-of-the-dragon/hotd_s2_behind_the_flames.mp4',
      },
      {
        id: 'hotd-s2-virtual',
        title: 'Let the Dragons Soar — Virtual Production & Volume Stage Behind-the-Scenes',
        youtubeUrl: 'https://www.youtube.com/watch?v=FqHuxXUF264',
        category: 'Virtual Production',
        duration: '7:21',
        localVideoSrc: '/breakdowns/house-of-the-dragon/hotd_s2_virtual_production.mp4',
      },
      {
        id: 'hotd-s2-previz',
        title: 'Before the Throne — Previz Interview & Dragon Flight Dynamics',
        youtubeUrl: 'https://www.youtube.com/watch?v=FqHuxXUF264',
        category: 'Previz & Kinematics',
        duration: '5:28',
        localVideoSrc: '/breakdowns/house-of-the-dragon/hotd_s2_previz_interview.mp4',
      },
      {
        id: 'hotd-s1-rulers',
        title: 'Rulers of Westeros — House of the Dragon Season 1 VFX Breakdown',
        youtubeUrl: 'https://www.youtube.com/watch?v=FqHuxXUF264',
        category: 'Season 1 Breakdown',
        duration: '3:10',
        localVideoSrc: '/breakdowns/house-of-the-dragon/hotd_s1_vfx_breakdown.mp4',
      },
    ],
  },

  // 3. blade-runner-2049
  {
    id: 'blade-runner-2049',
    show: 'Blade Runner 2049',
    title: 'Environment, Architectural Assets, Hero Digital Doubles, Weapons & Vehicles',
    year: '2017',
    role: 'Modelling Lead',
    studio: 'DNEG',
    studioLogo: '/logos/dneg.svg',
    director: 'Denis Villeneuve',
    starring: 'Ryan Gosling, Harrison Ford',
    location: 'Mumbai, India',
    department: 'Assets | Environment, Character, Props, Weapons & Vehicles',
    posterSrc: '/posters/bladerunner.jpg',
    heroAsset: 'Environments, Hero Digital Doubles, Weapons & Futuristic Vehicles',
    summary:
      "Worked as a Modelling Lead on Denis Villeneuve's Academy Award-winning Blade Runner 2049 (2017), leading the Mumbai modelling team while actively contributing to the creation of high-quality 3D assets. Responsible for overseeing modelling tasks, maintaining asset quality, and supporting production delivery across a wide range of environments, hero digital doubles, weapons, and vehicles.",
    deliverables: [
      'Team Leadership: Led the Mumbai modelling team, managing daily modelling tasks, providing artistic and technical guidance, reviewing assets, and ensuring consistent quality across deliverables.',
      "Environment & Architectural Modelling: Modelled and supervised the creation of numerous background buildings, futuristic architectural structures, and urban environment assets that helped establish the film's dystopian cityscapes.",
      'Hero Digital Doubles: Contributed to the modelling and development of hero digital doubles, focusing on anatomical accuracy, character likeness, costume geometry, and production-ready topology.',
      'Weapons & Props: Modelled and oversaw detailed futuristic weapons, props, and supporting hard-surface assets for various sequences.',
      'Vehicle Modelling: Worked on and guided the development of futuristic vehicles, ensuring accurate design, proportions, mechanical detailing, and production compatibility.',
      'Asset Quality & Pipeline: Reviewed models for topology, geometry optimisation, modelling consistency, and downstream requirements for texturing, rigging, look development, and lighting.',
      'Production Collaboration: Coordinated with supervisors, production teams, and other departments to prioritise assets, address technical challenges, and deliver work within production schedules.',
    ],
    responsibilities: [
      {
        category: 'Team Leadership',
        details:
          'Led the Mumbai modelling team, managing daily modelling tasks, providing artistic and technical guidance, reviewing assets, and ensuring consistent quality across deliverables.',
      },
      {
        category: 'Environment & Architectural Modelling',
        details:
          "Modelled and supervised the creation of numerous background buildings, futuristic architectural structures, and urban environment assets that helped establish the film's dystopian cityscapes.",
      },
      {
        category: 'Hero Digital Doubles',
        details:
          'Contributed to the modelling and development of hero digital doubles, focusing on anatomical accuracy, character likeness, costume geometry, and production-ready topology.',
      },
      {
        category: 'Weapons & Props',
        details:
          'Modelled and oversaw detailed futuristic weapons, props, and supporting hard-surface assets for various sequences.',
      },
      {
        category: 'Vehicle Modelling',
        details:
          'Worked on and guided the development of futuristic vehicles, ensuring accurate design, proportions, mechanical detailing, and production compatibility.',
      },
      {
        category: 'Asset Quality & Pipeline',
        details:
          'Reviewed models for topology, geometry optimisation, modelling consistency, and downstream requirements for texturing, rigging, look development, and lighting.',
      },
      {
        category: 'Production Collaboration',
        details:
          'Coordinated with supervisors, production teams, and other departments to prioritise assets, address technical challenges, and deliver work within production schedules.',
      },
    ],
    software: ['Autodesk Maya', 'ZBrush', 'Mari', 'Clarisse'],
    awards: [
      { award: 'Academy Award (Oscar)', category: 'Best Visual Effects' },
      { award: 'BAFTA Award', category: 'Best Special Visual Effects' },
      { award: 'VES Award', category: 'Outstanding Created Environment in a Photoreal Feature' },
    ],
    specialisations: [
      'Modelling Team Leadership',
      'Environment Modelling',
      'Architectural Assets',
      'Hero Digital Doubles',
      'Hard-Surface Modelling',
      'Weapons & Props',
      'Vehicle Modelling',
      'Asset Quality Control',
      'Production Pipeline Collaboration',
    ],
    pipelineHighlights: [
      'Led the Mumbai asset department delivering Oscar- and BAFTA-winning photoreal VFX for Denis Villeneuve.',
      'Supervised massive multi-tile environment assets and futuristic cityscape sprawl integrated into Clarisse rendering pipelines.',
      'Maintained rigorous asset quality control, topology standards, and seamless cross-facility coordination with London and Montreal.',
    ],
    showreelTimestamp: '2:20',
    youtubeId: '4L_FgTPVE2A',
    youtubeUrl: 'https://www.youtube.com/watch?v=4L_FgTPVE2A',
    localVideoSrc: '/breakdowns/blade-runner-2049/blade_runner_breakdown.mp4',
    videoDuration: '3:05',
    videoTitle: 'Blade Runner 2049 | Official VFX Breakdown | DNEG',
  },

  // 4. chernobyl
  {
    id: 'chernobyl',
    show: 'Chernobyl',
    title: 'Reactor Unit 4 Reconstruction, Soviet Industrial Architecture & Destruction Assets',
    year: '2019',
    role: 'Environment & Hard-Surface Modeller',
    studio: 'DNEG · HBO | Sky',
    studioLogo: '/logos/dneg.svg',
    department: 'Assets | Environment, Architectural & Hard-Surface Modelling',
    posterSrc: '/posters/chernobyl.jpg',
    heroAsset: 'Damaged Reactor Unit 4 & Soviet Industrial Architecture',
    summary:
      "Contributed to the creation of highly detailed, photorealistic environment and architectural assets for HBO's award-winning miniseries Chernobyl (2019), focusing on the reconstruction of the damaged Reactor Unit 4, Soviet-era industrial structures, and surrounding environments.\n\nThe project required careful attention to historical references, architectural accuracy, structural damage, and realistic surface detailing to recreate the aftermath of the 1986 Chernobyl nuclear disaster.",
    deliverables: [
      'Reactor Unit 4 Reconstruction: Contributed to the modelling of the damaged reactor building, including collapsed roof structures, exposed structural elements, and complex industrial architecture.',
      'Destroyed Environment Assets: Developed detailed damaged concrete structures, fractured surfaces, debris, exposed reinforcement, and supporting destruction-related assets.',
      'Soviet Industrial Architecture: Created industrial structures and architectural components reflecting the design and construction characteristics of the period.',
      'Pripyat Environment Assets: Contributed to residential building extensions and supporting environmental elements used to recreate the surrounding Soviet-era locations.',
      'ZBrush Sculpting & Detailing: Developed realistic surface damage, concrete fractures, weathering, erosion, and structural imperfections to enhance close-up visual fidelity.',
      'Historical Reference & Accuracy: Worked from available historical references to maintain architectural consistency and credible environmental reconstruction.',
      'Asset Quality & Production Collaboration: Maintained modelling quality, efficient geometry, and asset consistency while supporting downstream texturing, look development, and lighting requirements.',
    ],
    responsibilities: [
      {
        category: 'Reactor Unit 4 Reconstruction',
        details:
          'Contributed to the modelling of the damaged reactor building, including collapsed roof structures, exposed structural elements, and complex industrial architecture.',
      },
      {
        category: 'Destroyed Environment Assets',
        details:
          'Developed detailed damaged concrete structures, fractured surfaces, debris, exposed reinforcement, and supporting destruction-related assets.',
      },
      {
        category: 'Soviet Industrial Architecture',
        details:
          'Created industrial structures and architectural components reflecting the design and construction characteristics of the period.',
      },
      {
        category: 'Pripyat Environment Assets',
        details:
          'Contributed to residential building extensions and supporting environmental elements used to recreate the surrounding Soviet-era locations.',
      },
      {
        category: 'ZBrush Sculpting & Detailing',
        details:
          'Developed realistic surface damage, concrete fractures, weathering, erosion, and structural imperfections to enhance close-up visual fidelity.',
      },
      {
        category: 'Historical Reference & Accuracy',
        details:
          'Worked from available historical references to maintain architectural consistency and credible environmental reconstruction.',
      },
      {
        category: 'Asset Quality & Production Collaboration',
        details:
          'Maintained modelling quality, efficient geometry, and asset consistency while supporting downstream texturing, look development, and lighting requirements.',
      },
    ],
    software: ['Autodesk Maya', 'ZBrush', 'Mari', 'Adobe Photoshop'],
    awards: [
      {
        award: 'Primetime Emmy Awards',
        category: '10 Wins, including Outstanding Special Visual Effects',
      },
      {
        award: 'BAFTA Television Awards',
        category: 'Multiple Wins, including Special, Visual & Graphic Effects',
      },
      {
        award: 'Golden Globe Awards',
        category: 'Best Television Limited Series or Motion Picture',
      },
    ],
    specialisations: [
      'Environment Modelling',
      'Historical Architectural Reconstruction',
      'Industrial Assets',
      'Destruction Modelling',
      'Hard-Surface Modelling',
      'ZBrush Sculpting',
      'Photorealistic Surface Detailing',
      'VFX Asset Development',
    ],
    pipelineHighlights: [
      'Reconstructed the exploded Reactor 4 core using declassified archival schematics for historical accuracy.',
      'Developed modular shattered concrete, bent rebar, and radiation-scorched debris kits.',
      'Delivered Emmy- and BAFTA-winning architectural set extensions under exacting photorealistic scrutiny.',
    ],
    showreelTimestamp: '1:50',
    imdbId: 'tt8142340',
    youtubeId: 'dACvBZYj8ww',
    youtubeUrl: 'https://www.youtube.com/watch?v=dACvBZYj8ww',
    videoDuration: '3:18',
    videoTitle: 'Chernobyl | Official VFX Breakdown | DNEG',
  },

  // 5. bohemian-rhapsody
  {
    id: 'bohemian-rhapsody',
    show: 'Bohemian Rhapsody',
    title: 'Wembley Stadium Reconstruction, Live Aid Concert & 72,000-Audience Crowd',
    year: '2018',
    role: 'Build Supervisor',
    studio: 'DNEG',
    studioLogo: '/logos/dneg.svg',
    director: 'Bryan Singer',
    starring: 'Rami Malek, Lucy Boynton, Gwilym Lee',
    location: 'Mumbai, India',
    department: 'Assets | Environment, Architecture & Crowd Modelling',
    posterSrc: '/posters/bohemian.jpg',
    heroAsset: 'Historical Wembley Stadium & 72,000-Spectator Digital Crowd',
    summary:
      'Worked as a Build Supervisor at DNEG Mumbai on the Academy Award-winning Bohemian Rhapsody (2018), overseeing the development of large-scale environment, architectural, and crowd assets for the recreation of the historic 1985 Live Aid concert at Wembley Stadium.\n\nSupervised the creation of detailed stadium architecture, concert infrastructure, supporting props, and a large variety of period-accurate digital crowd characters to recreate the scale and atmosphere of the iconic performance before an audience of approximately 72,000 spectators.',
    deliverables: [
      'Build Supervision & Leadership: Supervised asset modelling, artist assignments, quality reviews, and delivery priorities across environment, architectural, and crowd assets.',
      'Wembley Stadium Reconstruction: Oversaw the modelling of historical stadium architecture, including seating structures, structural frameworks, and supporting architectural elements.',
      'Large-Scale Crowd Development: Led and organised the modelling team in creating an extensive variety of digital crowd characters, including period-accurate clothing, hairstyles, and accessories. Managed task distribution and asset variations to efficiently support large-scale crowd sequences.',
      'Live Aid Concert Environment: Supervised the development of concert stage components, scaffolding, lighting structures, speaker systems, and production equipment.',
      'Large-Scale Environment Assets: Managed modular architectural components and supporting props required for extensive digital stadium environments.',
      'Historical Accuracy: Guided the team in maintaining authentic 1985-era character appearances, architectural designs, and environmental details using visual references.',
      'Asset Quality & Optimisation: Ensured clean topology, efficient geometry, and consistent modelling quality across complex environment and crowd assets.',
      'Production Collaboration: Coordinated with artists, production, and downstream departments to resolve technical challenges and deliver assets within production schedules.',
    ],
    responsibilities: [
      {
        category: 'Build Supervision & Leadership',
        details:
          'Supervised asset modelling, artist assignments, quality reviews, and delivery priorities across environment, architectural, and crowd assets.',
      },
      {
        category: 'Wembley Stadium Reconstruction',
        details:
          'Oversaw the modelling of historical stadium architecture, including seating structures, structural frameworks, and supporting architectural elements.',
      },
      {
        category: 'Large-Scale Crowd Development',
        details:
          'Led and organised the modelling team in creating an extensive variety of digital crowd characters, including period-accurate clothing, hairstyles, and accessories. Managed task distribution and asset variations to efficiently support large-scale crowd sequences.',
      },
      {
        category: 'Live Aid Concert Environment',
        details:
          'Supervised the development of concert stage components, scaffolding, lighting structures, speaker systems, and production equipment.',
      },
      {
        category: 'Large-Scale Environment Assets',
        details:
          'Managed modular architectural components and supporting props required for extensive digital stadium environments.',
      },
      {
        category: 'Historical Accuracy',
        details:
          'Guided the team in maintaining authentic 1985-era character appearances, architectural designs, and environmental details using visual references.',
      },
      {
        category: 'Asset Quality & Optimisation',
        details:
          'Ensured clean topology, efficient geometry, and consistent modelling quality across complex environment and crowd assets.',
      },
      {
        category: 'Production Collaboration',
        details:
          'Coordinated with artists, production, and downstream departments to resolve technical challenges and deliver assets within production schedules.',
      },
    ],
    software: ['Autodesk Maya', 'ZBrush', 'Mari', 'Clarisse'],
    awards: [
      {
        award: 'Academy Awards (Oscars)',
        category: '4 wins, including Best Actor and three editing and sound categories',
      },
      {
        award: 'BAFTA Awards',
        category: '2 wins, Leading Actor and Sound',
      },
      {
        award: 'Golden Globe Awards',
        category: 'Best Motion Picture – Drama and Best Actor – Drama',
      },
    ],
    specialisations: [
      'Build Supervision',
      'Team Leadership',
      'Historical Architectural Reconstruction',
      'Stadium Environment Modelling',
      'Crowd Asset Development',
      'Hard-Surface Modelling',
      'Large-Scale Asset Management',
      'Modular Modelling',
      'Asset Quality Control',
      'Production Pipeline Collaboration',
    ],
    pipelineHighlights: [
      'Recreated the iconic 1985 Live Aid performance before an audience of approximately 72,000 spectators.',
      'Oversaw historical Wembley Stadium architecture, seating frameworks, and concert stage rigging.',
      'Coordinated across artists, production, and downstream departments to resolve technical challenges under theatrical release deadlines.',
    ],
    showreelTimestamp: '2:15',
    imdbId: 'tt1727824',
    youtubeId: 'JwkwLnw2JOg',
    youtubeUrl: 'https://www.youtube.com/watch?v=JwkwLnw2JOg',
    videoDuration: '1:25',
    videoTitle: 'Bohemian Rhapsody | VFX Breakdown | DNEG',
  },

  // 6. matrix-resurrections
  {
    id: 'matrix-resurrections',
    show: 'The Matrix Resurrections',
    title: 'Machine City Sentinels & Human Pod Biomechanical Assets',
    year: '2021',
    role: 'Build Supervisor',
    studio: 'DNEG India',
    studioLogo: '/logos/dneg.svg',
    posterSrc: '/posters/matrix4.jpg',
    heroAsset: 'Biomechanical Machine Swarms & Pod Infrastructure',
    summary: 'Led build department asset generation for Lana Wachowski’s return to the Matrix franchise. Oversaw complex organic-mechanical hybrid models with dense interlocking geometry, tentacle conduits, and human battery towers.',
    deliverables: [
      'Biomechanical sentinel articulation & tentacle segment loops',
      'Human battery pod towers with organic nutrient conduits',
      'Futuristic hovercraft exterior and cockpit instrument panels',
      'High-density UV unwraps for metallic weathering lookdev',
    ],
    software: ['Maya', 'ZBrush', 'Houdini', 'Mari', 'ShotGrid'],
    pipelineHighlights: [
      'Managed geometry instancing protocols for millions of background machine pods',
      'Calibrated displacement depth budgets to withstand close-up slow-motion camera tracks',
      'Streamlined topology handoffs between modeling, rigging, and cable simulation passes',
    ],
    showreelTimestamp: '1:10',
    youtubeId: 'yWtBUJg3B6E',
    youtubeUrl: 'https://www.youtube.com/watch?v=yWtBUJg3B6E',
    videoDuration: '2:15',
    videoTitle: 'The Matrix Resurrections | Official VFX Breakdown | DNEG',
  },

  // 7. venom-let-there-be-carnage
  {
    id: 'venom-let-there-be-carnage',
    show: 'Venom: Let There Be Carnage',
    title: 'Carnage Hero Symbiote, Tentacle Weapons & Grace Cathedral Battle',
    year: '2021',
    role: 'Department Supervision',
    studio: 'DNEG',
    studioLogo: '/logos/dneg.svg',
    director: 'Andy Serkis',
    starring: 'Tom Hardy, Woody Harrelson, Michelle Williams, Naomie Harris',
    location: 'London / Mumbai / Vancouver',
    department: 'Assets | Symbiotes, Creatures & Digital Doubles',
    posterSrc: '/posters/venom2.jpg',
    heroAsset: 'Hero Carnage Symbiote, Morphing Tentacles & Grace Cathedral Sets',
    summary:
      'Supervised build and asset department workflows for Andy Serkis’s superhero blockbuster at DNEG, the primary visual effects partner delivering over 750 VFX shots. Supervised the complex asset development of the primary villain, Carnage (Cletus Kasady), orchestrating multiple size variants, extreme anatomical deformation, weaponized tentacles, and Grace Cathedral battle environments.',
    deliverables: [
      'Hero Carnage character build with multiple size variants and cellular morphing logic',
      'Intricate weaponized tentacle assets, blade arm morphs, and surface ribbing',
      'Grace Cathedral high-frequency architectural modeling and destruction passes',
      'Digital doubles for Tom Hardy (Eddie Brock) and Woody Harrelson (Cletus Kasady)',
      'Subdivision surface topology engineered for aggressive non-linear mesh deformation',
    ],
    software: ['Autodesk Maya', 'ZBrush', 'Mari', 'Clarisse', 'ShotGrid'],
    specialisations: [
      'Creature Modeling',
      'Symbiote Surface Detailing',
      'Anatomical Deformation Topology',
      'Hard-Surface & Environment Builds',
      'Department Supervision',
      'Cross-Facility Production Workflows',
    ],
    pipelineHighlights: [
      'Engineered multi-layer UDIM displacement layouts for extreme close-up macro symbiote surface details.',
      'Supervised asset handoffs between modeling, rigging, creature FX, and lookdev across global DNEG facilities.',
      'Maintained silhouette fidelity and anatomical credibility across dynamic shape-shifting sequences.',
    ],
    awards: [
      {
        award: 'Visual Effects Society (VES) Awards',
        category: 'Nominee · Outstanding Effects Simulations',
      },
    ],
    imdbId: 'tt7097896',
    youtubeId: 'hBG9fDGtpd4',
    youtubeUrl: 'https://www.youtube.com/watch?v=hBG9fDGtpd4',
    videoDuration: '3:41',
    videoTitle: 'Venom: Let There Be Carnage | VFX Breakdown Reel | DNEG',
    videos: [
      {
        id: 'hBG9fDGtpd4',
        title: 'Venom: Let There Be Carnage — Official VFX Breakdown Reel (DNEG)',
        youtubeUrl: 'https://www.youtube.com/watch?v=hBG9fDGtpd4',
        category: 'VFX Breakdown',
        duration: '3:41',
      },
      {
        id: 'mY_Ar2SJUY0',
        title: 'Venom: Let There Be Carnage — VFX Insights & Symbiote Tech (DNEG)',
        youtubeUrl: 'https://www.youtube.com/watch?v=mY_Ar2SJUY0',
        category: 'Behind the Scenes',
        duration: '1:51',
      },
    ],
  },

  // 8. f9-the-fast-saga
  {
    id: 'f9-the-fast-saga',
    show: 'F9: The Fast Saga',
    title: 'Hero Armored Vehicles, Pontiac Fiero Rocket Car & Edinburgh City',
    year: '2021',
    role: 'Build Supervisor',
    studio: 'DNEG India',
    studioLogo: '/logos/dneg.svg',
    director: 'Justin Lin',
    starring: 'Vin Diesel, Michelle Rodriguez, John Cena, Charlize Theron',
    location: 'Mumbai, India',
    department: 'Assets & Build | Vehicles, Hard-Surface & City Environments',
    posterSrc: '/posters/f9.jpg',
    heroAsset: 'Armored 14-Wheel Armadillo Super-Truck & Rocket Fiero',
    summary:
      'Served as Build Supervisor at DNEG India for Justin Lin’s action tentpole F9: The Fast Saga. Directed the modeling and asset creation for the film’s most demanding vehicle builds, including the massive 14-wheel, 3-section armored "Armadillo" convoy truck, the orbital space-capable Pontiac Fiero rocket car, custom high-performance sports cars, and extensive photoreal Edinburgh city street environments.',
    deliverables: [
      'Hero Armadillo 3-section heavy assault convoy truck with interior/exterior mechanical fidelity',
      'Pontiac Fiero rocket car with strapped thrusters, oxidizer tanks, and heat-shield scaffolding',
      'Edinburgh urban street environment builds, modular storefronts, and architectural set extensions',
      'High-speed vehicle damage stages, sheet-metal denting, scratches, and chassis deformation sculpts',
      'Digital double vehicle chassis matching practical stunt vehicle telemetry',
    ],
    software: ['Autodesk Maya', 'ZBrush', 'Mari', 'Clarisse', 'ShotGrid'],
    specialisations: [
      'Build Supervision',
      'Hero Vehicle Hard-Surface Modeling',
      'CAD-to-SubD Mechanical Conversion',
      'Urban Environment Reconstruction',
      'Damage & Weathering Detailing',
      'International Asset Pipeline Delivery',
    ],
    pipelineHighlights: [
      'Supervised modeling artists through complex mechanical rig-ready vehicular topology.',
      'Engineered modular hard-surface kit pieces for fast turnaround on destruction and stunt sequence variations.',
      'Ensured photorealistic panel gaps, bevel continuity, and rivet-level accuracy for high-speed dynamic tracking shots.',
    ],
    imdbId: 'tt5433138',
    youtubeId: 'pdvegGb9pFU',
    youtubeUrl: 'https://www.youtube.com/watch?v=pdvegGb9pFU',
    videoDuration: '29:49',
    videoTitle: 'F9: The Fast Saga | VFX Breakdown & Vehicle Asset Engineering',
    videos: [
      {
        id: 'pdvegGb9pFU',
        title: 'F9: The Fast Saga — Extensive VFX Breakdown & Computer Graphics',
        youtubeUrl: 'https://www.youtube.com/watch?v=pdvegGb9pFU',
        category: 'VFX Breakdown',
        duration: '29:49',
      },
      {
        id: 'r2F5vL0q-eU',
        title: 'Fast & Furious 9 — VFX Stunt Vehicle & Environment Breakdown',
        youtubeUrl: 'https://www.youtube.com/watch?v=r2F5vL0q-eU',
        category: 'Behind the Scenes',
        duration: '10:41',
      },
    ],
  },

  // 9. godzilla-king-of-the-monsters
  {
    id: 'godzilla-king-of-the-monsters',
    show: 'Godzilla: King of the Monsters',
    title: "Underwater Environments, Godzilla's Temple Chamber & Destruction Assets",
    year: '2019',
    role: 'Asset Supervisor',
    studio: 'DNEG',
    studioLogo: '/logos/dneg.svg',
    director: 'Michael Dougherty',
    starring: 'Kyle Chandler, Vera Farmiga, Millie Bobby Brown, Ken Watanabe',
    location: 'Mumbai, India',
    department: 'Assets | Environment, Hard-Surface, Characters & Creature Modelling',
    posterSrc: '/posters/godzilla.jpg',
    heroAsset: "Godzilla's Underwater Chamber & Prehistoric Creature Skeletons",
    summary:
      "Worked as an Asset Supervisor at DNEG Mumbai on Godzilla: King of the Monsters (2019), leading the asset team and overseeing the creation of massive underwater environments, ancient submerged structures, Godzilla's temple chamber, underwater drones, digital doubles, wrecked ships, and enormous prehistoric creature skeletons.\n\nSupervised the development of highly detailed underwater environments featuring towering cliffs, geological terrains, ancient statues, damaged boats, and decaying architectural structures. A key production challenge involved developing large-scale assets intended for destruction during a nuclear explosion sequence, requiring careful consideration of structural modelling and downstream FX requirements.",
    deliverables: [
      'Asset Supervision & Team Leadership: Led and coordinated the modelling team, managing asset assignments, quality reviews, technical challenges, and production deliveries across complex underwater environments and hero assets.',
      "Godzilla's Underwater Chamber: Supervised the creation of Godzilla's massive submerged temple environment, including ancient architectural structures, monumental stone formations, and intricate environmental details.",
      'Large-Scale Underwater Environments: Oversaw extensive underwater terrains, towering cliffs, ocean-floor formations, ancient statues, and submerged architectural structures to establish the enormous scale of the environment.',
      'Wrecked Ships & Underwater Vehicles: Supervised the modelling of damaged ships, boats, underwater exploration drones, and supporting mechanical assets, ensuring realistic structural detailing and visual consistency.',
      'Prehistoric Creature Skeletons: Oversaw the development of enormous skeletal remains and ancient creature structures, focusing on anatomical forms, surface ageing, and scale.',
      'Hero Digital Doubles: Supervised digital double modelling, maintaining character likeness, anatomical accuracy, and production-ready geometry.',
      'Destruction-Ready Assets: Coordinated asset development for the nuclear explosion sequence, ensuring environmental structures and props were prepared to support destruction and FX requirements.',
      'ZBrush Sculpting & Surface Detailing: Guided extensive high-resolution sculpting to create aged stone, damaged surfaces, erosion, cracks, and intricate details for close-up cinematic shots.',
      'Production & Pipeline Collaboration: Worked closely with production, modelling, texturing, look development, and FX departments to resolve technical challenges and ensure assets met artistic and production requirements.',
    ],
    responsibilities: [
      {
        category: 'Asset Supervision & Team Leadership',
        details:
          'Led and coordinated the modelling team, managing asset assignments, quality reviews, technical challenges, and production deliveries across complex underwater environments and hero assets.',
      },
      {
        category: "Godzilla's Underwater Chamber",
        details:
          "Supervised the creation of Godzilla's massive submerged temple environment, including ancient architectural structures, monumental stone formations, and intricate environmental details.",
      },
      {
        category: 'Large-Scale Underwater Environments',
        details:
          'Oversaw extensive underwater terrains, towering cliffs, ocean-floor formations, ancient statues, and submerged architectural structures to establish the enormous scale of the environment.',
      },
      {
        category: 'Wrecked Ships & Underwater Vehicles',
        details:
          'Supervised the modelling of damaged ships, boats, underwater exploration drones, and supporting mechanical assets, ensuring realistic structural detailing and visual consistency.',
      },
      {
        category: 'Prehistoric Creature Skeletons',
        details:
          'Oversaw the development of enormous skeletal remains and ancient creature structures, focusing on anatomical forms, surface ageing, and scale.',
      },
      {
        category: 'Hero Digital Doubles',
        details:
          'Supervised digital double modelling, maintaining character likeness, anatomical accuracy, and production-ready geometry.',
      },
      {
        category: 'Destruction-Ready Assets',
        details:
          'Coordinated asset development for the nuclear explosion sequence, ensuring environmental structures and props were prepared to support destruction and FX requirements.',
      },
      {
        category: 'ZBrush Sculpting & Surface Detailing',
        details:
          'Guided extensive high-resolution sculpting to create aged stone, damaged surfaces, erosion, cracks, and intricate details for close-up cinematic shots.',
      },
      {
        category: 'Production & Pipeline Collaboration',
        details:
          'Worked closely with production, modelling, texturing, look development, and FX departments to resolve technical challenges and ensure assets met artistic and production requirements.',
      },
    ],
    software: ['Autodesk Maya', 'ZBrush', 'Mari', 'Clarisse'],
    specialisations: [
      'Asset Supervision',
      'Team Leadership',
      'Large-Scale Underwater Environments',
      'Godzilla Temple Environment',
      'Geological Terrain Sculpting',
      'Hard-Surface Modelling',
      'Creature Skeletons',
      'Digital Doubles',
      'Destruction-Ready Assets',
      'ZBrush Detailing',
      'Production Pipeline Collaboration',
    ],
    pipelineHighlights: [
      "Supervised environment, hard-surface, and digital double asset teams delivering DNEG's hero underwater ancient civilization sequences.",
      'Engineered destruction-ready environmental structures and props prepared for dynamic nuclear blast simulation handoffs.',
      'Guided high-resolution ZBrush surface sculpting of eroded prehistoric megaliths, weathered stone relief, and giant creature skeletons.',
    ],
    showreelTimestamp: '2:00',
    imdbId: 'tt3741700',
    youtubeId: '4QNqyOn4I34',
    youtubeUrl: 'https://www.youtube.com/watch?v=4QNqyOn4I34',
    videoDuration: '2:25',
    videoTitle: 'Godzilla: King of the Monsters | Environment VFX Breakdown | DNEG',
    videos: [
      {
        id: '4QNqyOn4I34',
        title: "Environment VFX Breakdown: Submerged Ancient Civilization & Godzilla's Temple",
        youtubeUrl: 'https://www.youtube.com/watch?v=4QNqyOn4I34',
        category: 'Environment Breakdown',
        duration: '2:25',
      },
      {
        id: 'hlWywv1lMvw',
        title: 'Compositing & Scale VFX Breakdown: Atmospheric Lighting & Titan Depth',
        youtubeUrl: 'https://www.youtube.com/watch?v=hlWywv1lMvw',
        category: 'Compositing & LookDev',
        duration: '2:25',
      },
    ],
  },

  // 10. westworld-season-3
  {
    id: 'westworld-season-3',
    show: 'Westworld (Season 3)',
    title: 'Futuristic Los Angeles Megacity, Delos Robotics & Hovercrafts',
    year: '2020',
    role: 'Build Supervisor',
    studio: 'DNEG',
    studioLogo: '/logos/dneg.svg',
    director: 'Jonathan Nolan & Lisa Joy',
    starring: 'Evan Rachel Wood, Thandiwe Newton, Aaron Paul, Jeffrey Wright, Tessa Thompson',
    location: 'London / Mumbai',
    department: 'Assets & Build | Sci-Fi Environments, Robotics & Vehicles',
    posterSrc: '/posters/westworld.jpg',
    heroAsset: 'Rehoboam Incite AI Core, Riot Mechs, VTOL Jet & Futuristic LA Set',
    summary:
      'Supervised build and hard-surface asset creation at DNEG for Jonathan Nolan and Lisa Joy’s critically acclaimed HBO sci-fi masterwork Westworld Season 3. Led the digital construction of the 2058 futuristic Los Angeles city skyline, Delos autonomous security Riot Mechs (George), vertical takeoff VTOL air-taxis, high-tech architectural interiors, and the monumental Rehoboam AI interface.',
    deliverables: [
      'Autonomous bi-pedal Riot Control Mech ("George") with hydraulic actuators and internal mechanics',
      'Futuristic Los Angeles city architectural mega-structures, elevated transit ways, and urban sets',
      'Delos VIP vertical takeoff and landing (VTOL) passenger hovercrafts',
      'Rehoboam spherical AI visualization housing and subterranean command facilities',
      'Digital doubles and cybernetic skeletal host under-structures',
    ],
    software: ['Autodesk Maya', 'ZBrush', 'Mari', 'Clarisse', 'ShotGrid'],
    specialisations: [
      'Build Supervision',
      'Near-Future Sci-Fi Architecture',
      'Autonomous Robotics & Mecha Modeling',
      'Advanced Aerospace Vehicle Design',
      'Photorealistic Hard-Surface SubD',
      'Photometry & Reference Matching',
    ],
    pipelineHighlights: [
      'Supervised modeling teams delivering Emmy-nominated visual effects across 8 futuristic episodes.',
      'Formulated clean topology protocols for mechanical joint pivots and internal cable articulation.',
      'Maintained architectural scale consistency between real-world Valencia locations and digital set extensions.',
    ],
    awards: [
      {
        award: 'Primetime Emmy Awards',
        category: 'Nominee · Outstanding Special Visual Effects (Season 3)',
      },
    ],
    imdbId: 'tt0475784',
    youtubeId: 'h4DhuyuMgrw',
    youtubeUrl: 'https://www.youtube.com/watch?v=h4DhuyuMgrw',
    videoDuration: '2:41',
    videoTitle: 'Westworld III | VFX Breakdown | DNEG',
    videos: [
      {
        id: 'h4DhuyuMgrw',
        title: 'Westworld III — Official VFX Breakdown (DNEG)',
        youtubeUrl: 'https://www.youtube.com/watch?v=h4DhuyuMgrw',
        category: 'VFX Breakdown',
        duration: '2:41',
      },
      {
        id: 'QYtTT2Xxrxk',
        title: 'Westworld III — Behind the VFX: Animation & Mechs (DNEG)',
        youtubeUrl: 'https://www.youtube.com/watch?v=QYtTT2Xxrxk',
        category: 'Animation & Mechs',
        duration: '2:43',
      },
    ],
  },

  // 11. pacific-rim-uprising
  {
    id: 'pacific-rim-uprising',
    show: 'Pacific Rim: Uprising',
    title: 'Seven Jaegers, Hero Digital Doubles, Kaiju Musculature & Environments',
    year: '2018',
    role: 'Modelling Supervisor',
    studio: 'DNEG',
    studioLogo: '/logos/dneg.svg',
    director: 'Steven S. DeKnight',
    department: 'Assets | Characters, Creatures, Mechanical & Environments',
    posterSrc: '/posters/pacificrim.jpg',
    heroAsset: 'Seven Hero Jaegers, Conn-Pods, Kaiju Anatomy & Environments',
    summary:
      'Worked as a Modelling Supervisor on Pacific Rim: Uprising (2018), leading a team of 38 modelling artists and overseeing an extensive asset workload, including seven Jaegers, hero digital doubles, Conn-Pods, Kaiju musculature, vehicles, weapons, props, and environments.\n\nEstablished a structured team workflow by dividing artists into specialised groups, each supported by dedicated team leads, to manage complex modelling tasks efficiently while maintaining consistent quality and production delivery.',
    deliverables: [
      'Leadership of 38 Artists: Supervised a team of 38 modelling artists, organising them into specialised groups with designated leads to manage the show’s large-scale modelling requirements.',
      'Strategic Task Distribution: Established dedicated groups for primary modelling, exterior armour development, and detailed mechanical kitbashing, improving coordination and asset delivery efficiency.',
      'Seven Jaegers: Supervised the modelling of seven complex Jaegers, covering primary body structures, armour plating, mechanical assemblies, and intricate surface detailing.',
      'Extensive Asset Scope: Oversaw hero digital doubles, Conn-Pods, vehicles, weapons, props, and environments, ensuring consistency across multiple asset categories.',
      'Kaiju Anatomy: Contributed to the development of internal Kaiju musculature and organic anatomical structures.',
      'Quality & Delivery: Worked closely with team leads, artists, production, and downstream departments to resolve technical challenges, review modelling quality, and maintain delivery schedules.',
      'Hands-on Technical Leadership: Remained actively involved in modelling, problem-solving, and providing artistic and technical guidance throughout production.',
    ],
    responsibilities: [
      {
        category: 'Leadership of 38 Artists',
        details:
          'Supervised a team of 38 modelling artists, organising them into specialised groups with designated leads to manage the show’s large-scale modelling requirements.',
      },
      {
        category: 'Strategic Task Distribution',
        details:
          'Established dedicated groups for primary modelling, exterior armour development, and detailed mechanical kitbashing, improving coordination and asset delivery efficiency.',
      },
      {
        category: 'Seven Jaegers',
        details:
          'Supervised the modelling of seven complex Jaegers, covering primary body structures, armour plating, mechanical assemblies, and intricate surface detailing.',
      },
      {
        category: 'Extensive Asset Scope',
        details:
          'Oversaw hero digital doubles, Conn-Pods, vehicles, weapons, props, and environments, ensuring consistency across multiple asset categories.',
      },
      {
        category: 'Kaiju Anatomy',
        details:
          'Contributed to the development of internal Kaiju musculature and organic anatomical structures.',
      },
      {
        category: 'Quality & Delivery',
        details:
          'Worked closely with team leads, artists, production, and downstream departments to resolve technical challenges, review modelling quality, and maintain delivery schedules.',
      },
      {
        category: 'Hands-on Technical Leadership',
        details:
          'Remained actively involved in modelling, problem-solving, and providing artistic and technical guidance throughout production.',
      },
    ],
    software: ['Autodesk Maya', 'ZBrush', 'Mari', 'Clarisse'],
    specialisations: [
      'Modelling Supervision',
      '38-Artist Team Leadership',
      'Large-Scale Asset Management',
      'Jaeger Modelling',
      'Hard-Surface Modelling',
      'Creature Anatomy',
      'Digital Doubles',
      'Mechanical Kitbashing',
      'Production Planning',
      'Cross-Department Collaboration',
    ],
    pipelineHighlights: [
      'Supervised 38 artists distributed across dedicated primary modelling, exterior armour, and kitbashing sub-teams.',
      'Directed model builds for seven hero Jaegers including Conn-Pods and micro-articulated joint mechanics.',
      'Developed organic Kaiju anatomical structures and muscle deformation topologies for downstream creature FX.',
    ],
    showreelTimestamp: '2:05',
    youtubeId: '6TRSFBdxdWY',
    youtubeUrl: 'https://www.youtube.com/watch?v=6TRSFBdxdWY',
    localVideoSrc: '/breakdowns/pacific-rim-uprising/pacific_rim_breakdown.mp4',
    videoDuration: '4 Videos',
    videoTitle: 'Pacific Rim Uprising | Behind the VFX: Jaegers vs Kaiju | DNEG',
    videos: [
      {
        id: '6TRSFBdxdWY',
        title: 'Behind the VFX: Jaegers vs Kaiju — Seven Jaegers & Monster Musculature',
        youtubeUrl: 'https://www.youtube.com/watch?v=6TRSFBdxdWY',
        category: 'Jaegers & Kaiju',
        duration: '3:15',
      },
      {
        id: 'NxVDeq5Ep3Q',
        title: 'Behind the VFX: Building New Worlds — Environments & Shatterdome',
        youtubeUrl: 'https://www.youtube.com/watch?v=NxVDeq5Ep3Q',
        category: 'Environments',
        duration: '3:45',
        localVideoSrc: '/breakdowns/pacific-rim-uprising/pacific_rim_breakdown.mp4',
      },
      {
        id: 'LDNBSgqv5io',
        title: 'Behind the VFX with Pete Bebb — LookDev & Asset Execution',
        youtubeUrl: 'https://www.youtube.com/watch?v=LDNBSgqv5io',
        category: 'Asset Direction',
        duration: '2:50',
      },
      {
        id: 'DpfHqkMtn4M',
        title: 'Behind the VFX: Peter Chiang — Overall VFX Leadership & Vision',
        youtubeUrl: 'https://www.youtube.com/watch?v=DpfHqkMtn4M',
        category: 'VFX Supervision',
        duration: '2:40',
      },
    ],
  },

  // 12. foundation
  {
    id: 'foundation',
    show: 'Foundation (Apple TV+)',
    title: 'Imperial Megaships & Planetary Orbital Ring Architecture',
    year: '2021',
    role: 'Build Supervisor',
    studio: 'DNEG India',
    studioLogo: '/logos/dneg.svg',
    posterSrc: '/posters/foundation.jpg',
    heroAsset: 'Capital Spacecraft & Planetary Orbital Arrays',
    summary: 'Supervised build and modeling execution for Apple TV+’s flagship Isaac Asimov adaptation. Focused on grand-scale galactic architecture, intricate monolithic starships, and the Trantor space elevator ring.',
    deliverables: [
      'Multi-kilometer Imperial Jumpship exterior hull panels',
      'Trantor orbital space elevator & terminal ring geometry',
      'Macro greeble libraries calibrated to real-world scale benchmarks',
      'LOD hierarchical assets for wide cosmic fly-bys to cockpit closeups',
    ],
    software: ['Maya', 'ZBrush', 'Mari', 'Clarisse'],
    pipelineHighlights: [
      'Established modular panel library reducing turnaround times across 40+ ship variations',
      'Coordinated topology alignment with lighting leads for sweeping high-contrast cosmic lighting',
      'Directed asset review sessions and quality control sign-offs across facility teams',
    ],
    showreelTimestamp: '1:35',
    youtubeId: 'oxy-dwMg3eM',
    youtubeUrl: 'https://www.youtube.com/watch?v=oxy-dwMg3eM',
    videoDuration: '3:05',
    videoTitle: 'Foundation | VFX Breakdown | DNEG',
  },

  // 13. the-dark-crystal-age-of-resistance
  {
    id: 'the-dark-crystal-age-of-resistance',
    show: 'The Dark Crystal: Age of Resistance',
    title: 'Thra Fantasy Environments, Skeksis Castles & Creature Digital Doubles',
    year: '2019',
    role: 'Build Supervisor',
    studio: 'DNEG',
    studioLogo: '/logos/dneg.svg',
    director: 'Louis Leterrier',
    starring: 'Taron Egerton, Anya Taylor-Joy, Nathalie Emmanuel, Mark Hamill, Jason Isaacs',
    location: 'London / Mumbai',
    department: 'Assets & Build | Fantasy Environments, Skeksis Castle & Creature Assets',
    posterSrc: '/posters/darkcrystal.jpg',
    heroAsset: 'Castle of the Crystal, Skeksis Chariots, Garthim Armor & Thra Flora',
    summary:
      'Served as Build Supervisor at DNEG for Louis Leterrier’s Emmy Award-winning Netflix fantasy series The Dark Crystal: Age of Resistance. Supervised 3D build department deliveries across the fantastical world of Thra, seamlessly fusing Jim Henson’s tactile puppet craftsmanship with digital set extensions, monumental Skeksis castles, ornate baroque chariots, biomechanical Garthim armor, and digital creature doubles.',
    deliverables: [
      'Monumental Castle of the Crystal architectural complex, spires, and crystal chamber interiors',
      'Skeksis carriage and ornate baroque ceremonial vehicles with intricate filigree carvings',
      'Digital double puppet replacements, preserving hand-crafted felt, silicone, and cloth textures',
      'Garthim armored exoskeleton models, segmented claws, and carapace joint anatomy',
      'Bioluminescent fungal forests, Gelfling clan villages, and sprawling alien landscapes of Thra',
    ],
    software: ['Autodesk Maya', 'ZBrush', 'Mari', 'Clarisse', 'ShotGrid'],
    specialisations: [
      'Build Supervision',
      'Fantasy World-Building & Architecture',
      'Puppet-to-Digital Likeness Matching',
      'High-Detail Baroque & Organic Ornamentation',
      'Exoskeleton & Creature Armor Modeling',
      'Emmy Award-Winning Production Standards',
    ],
    pipelineHighlights: [
      'Supervised the 3D build division on the Primetime Emmy Award-winning visual effects production.',
      'Maintained exact micro-texture and silhouette parity between practical Jim Henson puppets and CGI doubles.',
      'Developed modular fantasy stonework kits to assemble sprawling Thra city-states and ancient ruins.',
    ],
    awards: [
      {
        award: 'Primetime Emmy Awards',
        category: 'Winner · Outstanding Children’s Program & VFX Craft',
      },
      {
        award: 'Visual Effects Society (VES) Awards',
        category: 'Winner · Outstanding Visual Effects in a Photoreal Episode',
      },
    ],
    imdbId: 'tt6905542',
    youtubeId: '4cahs2BCHFU',
    youtubeUrl: 'https://www.youtube.com/watch?v=4cahs2BCHFU',
    videoDuration: '1:35',
    videoTitle: 'The Dark Crystal: Age of Resistance | Build VFX Breakdown | DNEG',
    videos: [
      {
        id: '4cahs2BCHFU',
        title: 'The Dark Crystal: Age of Resistance — Build VFX Breakdown (DNEG)',
        youtubeUrl: 'https://www.youtube.com/watch?v=4cahs2BCHFU',
        category: 'Build Breakdown',
        duration: '1:35',
      },
      {
        id: '_nX33l-hiu4',
        title: 'The Dark Crystal: Age of Resistance — Official VFX Breakdown (DNEG)',
        youtubeUrl: 'https://www.youtube.com/watch?v=_nX33l-hiu4',
        category: 'VFX Breakdown',
        duration: '2:08',
      },
      {
        id: '8wI5mirEobk',
        title: 'The Dark Crystal: Age of Resistance — Environment VFX Breakdown (DNEG)',
        youtubeUrl: 'https://www.youtube.com/watch?v=8wI5mirEobk',
        category: 'Environments',
        duration: '1:36',
      },
      {
        id: 'ORvhZE2JIZs',
        title: 'The Dark Crystal: Age of Resistance — Animation VFX Breakdown (DNEG)',
        youtubeUrl: 'https://www.youtube.com/watch?v=ORvhZE2JIZs',
        category: 'Creatures & Animation',
        duration: '1:35',
      },
    ],
  },

  // 14. devs
  {
    id: 'devs',
    show: 'Devs',
    title: 'Amaya Quantum Lab, Golden Vacuum Cube & 100-Foot Statue',
    year: '2020',
    role: 'Build Supervisor',
    studio: 'DNEG',
    studioLogo: '/logos/dneg.svg',
    director: 'Alex Garland',
    starring: 'Sonoya Mizuno, Nick Offerman, Jin Ha, Zach Grenier, Alison Pill',
    location: 'London / Mumbai',
    department: 'Assets & Build | Sci-Fi Architecture, Hard-Surface & Environment Builds',
    posterSrc: '/posters/devs.jpg',
    heroAsset: 'Electromagnetically Suspended Quantum Lab & Monumental Amaya Child Statue',
    summary:
      'Served as Build Supervisor at DNEG for Alex Garland’s mind-bending sci-fi miniseries Devs (FX / Hulu). Supervised the modeling and digital asset realization of the show’s central visual icons: the monumental 100-foot-tall child statue of Amaya towering above the redwood forest canopy, and the levitating electromagnetic gold-mesh quantum computer cube suspended in a high-vacuum chamber.',
    deliverables: [
      'Hero 100-foot colossal Amaya child statue with lifelike hair groom, weathered concrete, and scale realism',
      'Electromagnetically suspended gold-filament quantum laboratory cube and vacuum chamber apparatus',
      'Intricate quantum processor assembly featuring thousands of gold-plated vacuum tubes, mirrors, and conduits',
      'Santa Cruz redwood forest environmental set extensions and architectural pavilion integration',
      'Photorealistic laboratory cleanroom fixtures, glass partitions, and precision sci-fi props',
    ],
    software: ['Autodesk Maya', 'ZBrush', 'Mari', 'Clarisse', 'Adobe Photoshop'],
    specialisations: [
      'Build Supervision',
      'Colossal Monumental Sculpting',
      'Architectural Precision Modeling',
      'Quantum Technology Props & Apparatus',
      'Micro-Detail Filigree Modeling',
      'Art-Directed Cinematic Realism',
    ],
    pipelineHighlights: [
      'Executed Alex Garland’s singular, minimalist architectural vision with hyper-detailed mathematical precision.',
      'Maintained extreme geometric cleanliness on reflective gold, glass, and vacuum-sealed materials.',
      'Led team across high-frequency surface displacement and environmental weathering on the colossal statue asset.',
    ],
    awards: [
      {
        award: 'Primetime Emmy Awards',
        category: '4x Emmy Nominee · Outstanding Cinematography, Sound & Craft',
      },
    ],
    imdbId: 'tt8134186',
    youtubeId: 'Sn-fzkz_nj8',
    youtubeUrl: 'https://www.youtube.com/watch?v=Sn-fzkz_nj8',
    videoDuration: '3:07',
    videoTitle: 'Devs | Inside Look: Building Devs | FX',
    videos: [
      {
        id: 'Sn-fzkz_nj8',
        title: 'Devs — Inside Look: Building the World of Devs (FX)',
        youtubeUrl: 'https://www.youtube.com/watch?v=Sn-fzkz_nj8',
        category: 'Behind the Scenes',
        duration: '3:07',
      },
      {
        id: 'cBuEn0nnjG4',
        title: 'Devs — Inside Look: Visualizing the Quantum Realm (FX)',
        youtubeUrl: 'https://www.youtube.com/watch?v=cBuEn0nnjG4',
        category: 'Visual Design',
        duration: '2:20',
      },
      {
        id: 'rpy8eaz23e4',
        title: 'Devs — Designing the World & Amaya Laboratory (FX)',
        youtubeUrl: 'https://www.youtube.com/watch?v=rpy8eaz23e4',
        category: 'Architecture & Sets',
        duration: '3:20',
      },
    ],
  },

  // 15. hercules
  {
    id: 'hercules',
    show: 'Hercules',
    title: 'Hero Digital Doubles, Crowd Assets, Props, Weapons & Vehicles',
    year: '2014',
    role: 'Senior Modeller',
    studio: 'Prime Focus World',
    studioLogo: '/logos/primefocus.png',
    director: 'Brett Ratner',
    starring: 'Dwayne Johnson',
    location: 'London, United Kingdom',
    department: 'Assets | Character, Crowd, Props, Weapons & Vehicles',
    posterSrc: '/posters/hercules.jpg',
    heroAsset: 'Hero Digital Doubles, Crowd, Props, Weapons & Vehicles',
    summary:
      "Worked as a Senior Modeller on Hercules (2014), contributing to the development of high-quality 3D assets for the film's large-scale action and battle sequences. Primarily focused on hero digital doubles, extensive crowd assets, props, weapons, and vehicles, ensuring production-ready geometry and visual consistency across the film.",
    deliverables: [
      'Hero Digital Doubles: Modelled detailed hero digital doubles with a focus on anatomical accuracy, facial likeness, body proportions, and costume geometry.',
      'Crowd Assets: Developed a wide range of crowd characters and supporting assets, including variations in costumes, armour, and equipment for large-scale battle sequences.',
      'Weapons & Armour: Created detailed ancient weapons, shields, armour, and combat accessories, maintaining historical design aesthetics and production requirements.',
      'Props & Vehicles: Modelled various hero and background props, battlefield equipment, and period-specific vehicles to support action sequences.',
      'Asset Optimisation: Ensured clean topology, accurate proportions, and efficient geometry suitable for texturing, rigging, animation, and crowd production workflows.',
      'Production Collaboration: Worked closely with the asset team and other departments to deliver high-quality models within production schedules.',
    ],
    responsibilities: [
      {
        category: 'Hero Digital Doubles',
        details:
          'Modelled detailed hero digital doubles with a focus on anatomical accuracy, facial likeness, body proportions, and costume geometry.',
      },
      {
        category: 'Crowd Assets',
        details:
          'Developed a wide range of crowd characters and supporting assets, including variations in costumes, armour, and equipment for large-scale battle sequences.',
      },
      {
        category: 'Weapons & Armour',
        details:
          'Created detailed ancient weapons, shields, armour, and combat accessories, maintaining historical design aesthetics and production requirements.',
      },
      {
        category: 'Props & Vehicles',
        details:
          'Modelled various hero and background props, battlefield equipment, and period-specific vehicles to support action sequences.',
      },
      {
        category: 'Asset Optimisation',
        details:
          'Ensured clean topology, accurate proportions, and efficient geometry suitable for texturing, rigging, animation, and crowd production workflows.',
      },
      {
        category: 'Production Collaboration',
        details:
          'Worked closely with the asset team and other departments to deliver high-quality models within production schedules.',
      },
    ],
    software: ['Autodesk Maya', 'ZBrush', 'UvLayout'],
    specialisations: [
      'Hero Digital Doubles',
      'Crowd Modelling',
      'Character Modelling',
      'Hard-Surface Modelling',
      'Weapons & Armour',
      'Props',
      'Vehicles',
      'Production Asset Development',
    ],
    pipelineHighlights: [
      'Delivered production-ready geometry ensuring clean topology and efficient subdivision flow for texturing, rigging, and crowd simulation handoffs.',
      'Engineered modular ancient armor, shields, and weapon asset variations deployed across thousands of crowd combatants.',
      'Collaborated directly with London asset leads to meet demanding theatrical delivery schedules while preserving high aesthetic fidelity.',
    ],
    showreelTimestamp: '2:40',
    imdbId: 'tt1267297',
    youtubeId: 'rCWPhV3-i7E',
    youtubeUrl: 'https://www.youtube.com/watch?v=rCWPhV3-i7E',
    localVideoSrc: '/breakdowns/hercules/hercules_breakdown.mp4',
    videoDuration: '2:30',
    videoTitle: 'Hercules (2014) — VFX Shot Breakdown (Prime Focus World)',
  },

  // 16. life
  {
    id: 'life',
    show: 'Life',
    title: 'Three ISS Space Station Modules & Detailed Surface Sculpting',
    year: '2017',
    role: 'Senior Modeller',
    studio: 'DNEG',
    studioLogo: '/logos/dneg.svg',
    director: 'Daniel Espinosa',
    starring: 'Jake Gyllenhaal, Rebecca Ferguson, Ryan Reynolds',
    location: 'Mumbai, India',
    department: 'Assets | Hard-Surface & Environment Modelling',
    posterSrc: '/posters/life.jpg',
    heroAsset: 'Three International Space Station (ISS) Modules',
    summary:
      'Worked as a Senior Modeller at DNEG Mumbai on the science-fiction thriller Life (2017), contributing to the modelling and detailed sculpting of three International Space Station (ISS) modules.\n\nFocused on developing high-quality, production-ready assets with accurate structural forms and realistic surface detailing, ensuring the models could withstand close-up cinematic shots.',
    deliverables: [
      'ISS Module Modelling: Contributed to the development of three detailed ISS modules, focusing on structural accuracy, mechanical components, and hard-surface geometry.',
      'ZBrush Surface Detailing: Sculpted fine surface imperfections, including dents, fabric folds, cloth wrinkles, and subtle wear to enhance realism.',
      'Close-Up Asset Quality: Refined secondary and tertiary details to ensure the models maintained visual fidelity in close-up shots.',
      'Hard-Surface Modelling: Maintained clean topology, accurate proportions, and consistent detailing across complex space station structures.',
      'Production Collaboration: Worked with the asset team and downstream departments to meet artistic, technical, and production requirements.',
    ],
    responsibilities: [
      {
        category: 'ISS Module Modelling',
        details:
          'Contributed to the development of three detailed ISS modules, focusing on structural accuracy, mechanical components, and hard-surface geometry.',
      },
      {
        category: 'ZBrush Surface Detailing',
        details:
          'Sculpted fine surface imperfections, including dents, fabric folds, cloth wrinkles, and subtle wear to enhance realism.',
      },
      {
        category: 'Close-Up Asset Quality',
        details:
          'Refined secondary and tertiary details to ensure the models maintained visual fidelity in close-up shots.',
      },
      {
        category: 'Hard-Surface Modelling',
        details:
          'Maintained clean topology, accurate proportions, and consistent detailing across complex space station structures.',
      },
      {
        category: 'Production Collaboration',
        details:
          'Worked with the asset team and downstream departments to meet artistic, technical, and production requirements.',
      },
    ],
    software: ['Autodesk Maya', 'ZBrush', 'Mari'],
    specialisations: [
      'Senior Modelling',
      'ISS Module Development',
      'Hard-Surface Modelling',
      'ZBrush Sculpting',
      'Surface Detailing',
      'Environment Assets',
      'Photorealistic Asset Development',
    ],
    pipelineHighlights: [
      'Modelled three complex International Space Station (ISS) modules designed to withstand zero-gravity orbiting camera close-ups.',
      'Sculpted high-frequency cloth folds, thermal insulation blankets, and mechanical surface wear in ZBrush.',
      'Coordinated with DNEG lookdev and lighting teams to ensure sub-millimeter bevel and panel accuracy.',
    ],
    showreelTimestamp: '2:30',
    imdbId: 'tt5442430',
    youtubeId: 'Q2zQLE_HfBE',
    youtubeUrl: 'https://www.youtube.com/watch?v=Q2zQLE_HfBE',
    videoDuration: '4:33',
    videoTitle: 'Life | VFX Breakdown | DNEG',
  },
];
