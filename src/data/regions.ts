// One region = one traveler (Octopath Traveler I). Array order = map order = prev/next order.
// `position` is the hotspot centre in PERCENT of the map image, measured from the Figma "Map" frame.
// Traveler story text is the official character copy supplied by the asset team (typos corrected).

export const MAP_WIDTH = 1536;
export const MAP_HEIGHT = 1024;

export type Region = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  position: { x: number; y: number };
  mapPath?: string; // optional SVG path in map pixel coords — only if the asset team traces polygons later
  traveler: {
    name: string;
    job: string;
    hook: string;
    description: string;
    pathAction: string;
    talent: string;
    portrait: string;
    sprite: string;
  };
};

export const regions: Region[] = [
  {
    slug: "woodlands",
    name: "Woodlands",
    tagline: "Deep forests where an ancient clan of hunters keeps watch.",
    description:
      "Thick, mist-hung forest covers the north-west of Orsterra. The village of S'warkii lies at its heart, home to hunters who live alongside the beasts of the wood rather than against them.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Haanit.jpg",
    position: { x: 40.9, y: 40.0 },
    traveler: {
      name: "H'aanit",
      job: "Hunter",
      hook: "One of the last of an ancient clan, her prowess with the bow is unmatched.",
      description:
        "One of the last descendants of an ancient clan that calls the deep forest home, your prowess with the bow is unmatched. Your master left home one year ago, summoned to hunt a dread beast, and you protected the village while awaiting his return. Then, one day, the return of an old friend gives you cause for concern, and you strike out on a journey of your own.",
      pathAction: "Provoke",
      talent: "Capture",
      portrait: "/images/travelers/haanit.jpg",
      sprite: "/images/travelers/haanit-sprite.jpg",
    },
  },
  {
    slug: "frostlands",
    name: "Frostlands",
    tagline: "Snowswept peaks and the cathedral of the Sacred Flame.",
    description:
      "The Frostlands stretch across the frozen north. Flamesgrace, seat of the Order of the Sacred Flame, sits among its snowfields, and pilgrims brave the cold to carry the Flame's light across the continent.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Ophilia_2.jpg",
    position: { x: 48.2, y: 42.1 },
    traveler: {
      name: "Ophilia",
      job: "Cleric",
      hook: "A devoted cleric who takes up a perilous pilgrimage in her sister's stead.",
      description:
        "You hail from the snowswept Frostlands, where you dutifully serve the Order of the Flame under your adoptive father, the archbishop. As your adoptive sister — and best friend — prepares to embark on a perilous pilgrimage, you stand ever at her side. But unbeknownst to the both of you, events are about to take a tragic turn...",
      pathAction: "Guide",
      talent: "Summon",
      portrait: "/images/travelers/ophilia.jpg",
      sprite: "/images/travelers/ophilia-sprite.jpg",
    },
  },
  {
    slug: "flatlands",
    name: "Flatlands",
    tagline: "Rolling plains and the halls of the Royal Academy.",
    description:
      "Green plains roll east from the Frostlands toward the city of Atlasdam, whose Royal Academy and library draw scholars from every corner of Orsterra.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Cyrus_2.jpg",
    position: { x: 52.8, y: 47.0 },
    traveler: {
      name: "Cyrus",
      job: "Scholar",
      hook: "A scholar whose only true passion is the pursuit of knowledge.",
      description:
        'You teach at the Royal Academy in Atlasdam, and though you have numerous admirers, your only true passion is the pursuit of knowledge. "There is so much more I would learn!" One day, you realize that an invaluable tome has vanished from the Royal Library, piquing your insatiable curiosity...',
      pathAction: "Scrutinize",
      talent: "Study Foe",
      portrait: "/images/travelers/cyrus.jpg",
      sprite: "/images/travelers/cyrus-sprite.jpg",
    },
  },
  {
    slug: "cliftlands",
    name: "Cliftlands",
    tagline: "Sheer cliffs, mining towns, and mansions said to be impregnable.",
    description:
      "The western Cliftlands are a maze of canyons and rope bridges. Bolderfall clings to the rock face, its wealthy manors perched high above the miners who built them.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Therion.jpg",
    position: { x: 34.8, y: 54.1 },
    traveler: {
      name: "Therion",
      job: "Thief",
      hook: "A thief whose exploits are known far and wide — and whose past is a guarded secret.",
      description:
        "While your past is a guarded secret, your exploits are known far and wide. Mere whispers of your extravagant heists strike fear into the hearts of the wealthy. Drifting into the Cliftlands one day, you hear a rumor of great riches to be had. You set your sights on a mansion said to be impregnable, only to find what you never expected.",
      pathAction: "Steal",
      talent: "Pick Lock",
      portrait: "/images/travelers/therion.jpg",
      sprite: "/images/travelers/therion-sprite.jpg",
    },
  },
  {
    slug: "coastlands",
    name: "Coastlands",
    tagline: "Harbour towns where every ship carries a story.",
    description:
      "The eastern Coastlands face the open sea. Rippletide's docks bustle with traders, sailors and the occasional pirate, and the horizon beyond them has tempted more than one young merchant.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Tressa_2.jpg",
    position: { x: 59.4, y: 56.1 },
    traveler: {
      name: "Tressa",
      job: "Merchant",
      hook: "A merchant's daughter who longs to know what lies beyond the horizon.",
      description:
        "You stock the shelves at your parents' shop in your sleepy, seaside hometown. Yet you often find yourself gazing out at sea, longing for something more. \"What lies beyond the horizon?\" You thought you'd never know the answer. Then, one day, an unfamiliar vessel weighs anchor at the docks, changing your life forever...",
      pathAction: "Purchase",
      talent: "Eye for Money",
      portrait: "/images/travelers/tressa.jpg",
      sprite: "/images/travelers/tressa-sprite.jpg",
    },
  },
  {
    slug: "riverlands",
    name: "Riverlands",
    tagline: "Babbling brooks and a village apothecary who asks nothing in return.",
    description:
      "Streams and waterwheels criss-cross the Riverlands in the south-west. Clearbrook is small and quiet, the kind of village where a good apothecary is worth more than gold.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Alfyn.jpg",
    position: { x: 37.6, y: 60.9 },
    traveler: {
      name: "Alfyn",
      job: "Apothecary",
      hook: "Saved as a child by a stranger, he set out to heal others the same way.",
      description:
        "You treat the wounded and sick in a small village amid the babbling brooks of the Riverlands. Stricken ill as a child, you were saved by a traveler who asked for nothing in return, inspiring you to follow in his footsteps. Though hesitant to leave the only home you've known, your best friend convinces you to follow your dream, wherever it may lead you...",
      pathAction: "Inquire",
      talent: "Concoct",
      portrait: "/images/travelers/alfyn.jpg",
      sprite: "/images/travelers/alfyn-sprite.jpg",
    },
  },
  {
    slug: "sunlands",
    name: "Sunlands",
    tagline: "A desert town forever shrouded in darkness.",
    description:
      "Dunes and dry canyons cover the southern Sunlands. Sunshade, its pleasure district lit only by lanterns, is a place where secrets are kept and old debts are remembered.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Primrose_3.jpg",
    position: { x: 49.0, y: 65.3 },
    traveler: {
      name: "Primrose",
      job: "Dancer",
      hook: "A dancer concealing a noble name — and a vow of revenge.",
      description:
        'You ply your trade in the pleasure district of Sunshade, a town forever shrouded in darkness. In truth, you are the highborn daughter of the once-proud House Azelhart, an identity you conceal from all. "Three men bearing the mark of the crow. They took my father from me." But you will have your revenge...',
      pathAction: "Allure",
      talent: "Summon",
      portrait: "/images/travelers/primrose.jpg",
      sprite: "/images/travelers/primrose-sprite.jpg",
    },
  },
  {
    slug: "highlands",
    name: "Highlands",
    tagline: "Remote mountain villages guarded by a fallen knight.",
    description:
      "Rugged mountains rise across the south-east. Cobbleston is a village of shepherds and stone walls, watched over by a master-at-arms who once served a king.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Olberic.jpg",
    position: { x: 58.5, y: 67.3 },
    traveler: {
      name: "Olberic",
      job: "Warrior",
      hook: "A proud knight who lost king and kingdom, searching for a reason to swing his blade.",
      description:
        'Once a proud knight, you lost both king and kingdom in a bloody coup. Today, you serve as a master-at-arms for a remote mountain village. "To what end do I swing my blade?" The question tortures you through restless nights. Then, one day, you overhear a name from your past, giving you new purpose...',
      pathAction: "Challenge",
      talent: "Bolster Defense",
      portrait: "/images/travelers/olberic.jpg",
      sprite: "/images/travelers/olberic-sprite.jpg",
    },
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
