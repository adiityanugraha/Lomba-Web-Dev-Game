// One region = one traveler (Octopath Traveler I).
// Array order = O-C-T-O-P-A-T-H (Ophilia, Cyrus, Tressa, Olberic, Primrose, Alfyn, Therion, H'aanit)
// = display order on /characters, the region list, and prev/next on region pages.
// `position` is the hotspot centre in PERCENT of the map image, measured from the Figma "Map" frame.
// Region, Path Action and Talent copy comes from the asset team's REGIONS.docx / PATH_ACTIONS.docx /
// TALENTS.docx; traveler stories from <name>_info.txt. Typos corrected.

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
    pathActionDescription: string;
    talent: string;
    talentDescription: string;
    portrait: string;
    sprite: string;
  };
};

export const regions: Region[] = [
  {
    slug: "frostlands",
    name: "Frostlands",
    tagline: "Snowswept peaks and the cathedral of the Sacred Flame.",
    description:
      "A harsh, snow-covered northern region with brutal blizzards and icy tundra, home to the towns of Flamesgrace, Stillsnow and Northreach. Flamesgrace, the center of the Order of the Sacred Flame, is the homeland of the cleric Ophilia. The Frostlands are filled with falling snowflakes and blizzards that blanket the land and its towering mountains in sparkling white snowdrifts.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Ophilia_2.jpg",
    position: { x: 48.2, y: 42.1 },
    traveler: {
      name: "Ophilia",
      job: "Cleric",
      hook: "A devoted cleric who takes up a perilous pilgrimage in her sister's stead.",
      description:
        "You hail from the snowswept Frostlands, where you dutifully serve the Order of the Flame under your adoptive father, the archbishop. As your adoptive sister — and best friend — prepares to embark on a perilous pilgrimage, you stand ever at her side. But unbeknownst to the both of you, events are about to take a tragic turn...",
      pathAction: "Guide",
      pathActionDescription:
        "Guide allows Ophilia to guide and escort certain non-playable characters and lead them to various locations. This Path Action is the noble counterpart to Primrose's Path Action, Allure.",
      talent: "Summon",
      talentDescription: "Summon allows Ophilia to call guided townspeople to her aid in battle.",
      portrait: "/images/travelers/ophilia.jpg",
      sprite: "/images/travelers/ophilia-sprite.jpg",
    },
  },
  {
    slug: "flatlands",
    name: "Flatlands",
    tagline: "Rolling plains and the halls of the Royal Academy.",
    description:
      "A vast, open plains region in the heart of Orsterra. It is a peaceful agricultural area dotted with small towns and rolling fields. The center of the Flatlands is a lush, treeless expanse inhabited by darting dragonflies, while windmills and grazing sheep dot the land further north. The city of Atlasdam is found here, housing the grand Royal Academy and home to the scholar Cyrus.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Cyrus_2.jpg",
    position: { x: 52.8, y: 47.0 },
    traveler: {
      name: "Cyrus",
      job: "Scholar",
      hook: "A scholar whose only true passion is the pursuit of knowledge.",
      description:
        'You teach at the Royal Academy in Atlasdam, and though you have numerous admirers, your only true passion is the pursuit of knowledge. "There is so much more I would learn!" One day, you realize that an invaluable tome has vanished from the Royal Library, piquing your insatiable curiosity...',
      pathAction: "Scrutinize",
      pathActionDescription:
        "Scrutinize allows Cyrus to glean information from townsfolk by interrogating them. This Path Action is the rogue counterpart to Alfyn's Path Action, Inquire.",
      talent: "Study Foe",
      talentDescription: "Study Foe reveals one weakness for each enemy at the start of battle.",
      portrait: "/images/travelers/cyrus.jpg",
      sprite: "/images/travelers/cyrus-sprite.jpg",
    },
  },
  {
    slug: "coastlands",
    name: "Coastlands",
    tagline: "Harbour towns where every ship carries a story.",
    description:
      "A breezy, coastal region in eastern Orsterra with fishing villages and ocean cliffs. The sea breeze and maritime culture give this region a distinctive charm, though it also harbors darker secrets beneath its surface. The region includes the town of Rippletide, home to the merchant Tressa. Given its proximity to the ocean, the Coastlands offer many ports of naval commerce, attracting merchants and pirates in droves.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Tressa_2.jpg",
    position: { x: 59.4, y: 56.1 },
    traveler: {
      name: "Tressa",
      job: "Merchant",
      hook: "A merchant's daughter who longs to know what lies beyond the horizon.",
      description:
        "You stock the shelves at your parents' shop in your sleepy, seaside hometown. Yet you often find yourself gazing out at sea, longing for something more. \"What lies beyond the horizon?\" You thought you'd never know the answer. Then, one day, an unfamiliar vessel weighs anchor at the docks, changing your life forever...",
      pathAction: "Purchase",
      pathActionDescription:
        "Purchase allows Tressa to buy items from townsfolk, including some items that are not sold in stores or are otherwise exclusive to chests. This Path Action is the noble counterpart to Therion's Path Action, Steal.",
      talent: "Eye for Money",
      talentDescription:
        "Every time the party leaves an area with Tressa in it, she automatically picks up a random sum of lost money, which is added to the party's funds.",
      portrait: "/images/travelers/tressa.jpg",
      sprite: "/images/travelers/tressa-sprite.jpg",
    },
  },
  {
    slug: "highlands",
    name: "Highlands",
    tagline: "Remote mountain villages guarded by a fallen knight.",
    description:
      "A rugged, mountainous region in southeastern Orsterra with dramatic cliffs and treacherous passes. This region includes the town of Cobbleston, home to the warrior Olberic. Located in the foothills and peaks of the mountains, the Highlands are a rugged land, bereft of most vegetation.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Olberic.jpg",
    position: { x: 58.5, y: 67.3 },
    traveler: {
      name: "Olberic",
      job: "Warrior",
      hook: "A proud knight who lost king and kingdom, searching for a reason to swing his blade.",
      description:
        'Once a proud knight, you lost both king and kingdom in a bloody coup. Today, you serve as a master-at-arms for a remote mountain village. "To what end do I swing my blade?" The question tortures you through restless nights. Then, one day, you overhear a name from your past, giving you new purpose...',
      pathAction: "Challenge",
      pathActionDescription:
        "Challenge allows Olberic to duel certain non-playable characters in one-to-one combat. This Path Action is the noble counterpart to H'aanit's Path Action, Provoke.",
      talent: "Bolster Defense",
      talentDescription:
        "Bolster Defense allows Olberic to boost the Defend command, increasing damage reduction for himself while effectively covering his allies.",
      portrait: "/images/travelers/olberic.jpg",
      sprite: "/images/travelers/olberic-sprite.jpg",
    },
  },
  {
    slug: "sunlands",
    name: "Sunlands",
    tagline: "A desert town forever shrouded in darkness.",
    description:
      "A scorching desert region to the south of Orsterra, baking under an unrelenting sun. The culture here revolves around trade, caravans and survival in arid conditions. To thrive in the desert heat, this region's cities take shelter beneath large rocky cliffs or around oases with plentiful water. This region is home to the city of Sunshade, where the dancer Primrose begins her travels.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Primrose_3.jpg",
    position: { x: 49.0, y: 65.3 },
    traveler: {
      name: "Primrose",
      job: "Dancer",
      hook: "A dancer concealing a noble name — and a vow of revenge.",
      description:
        'You ply your trade in the pleasure district of Sunshade, a town forever shrouded in darkness. In truth, you are the highborn daughter of the once-proud House Azelhart, an identity you conceal from all. "Three men bearing the mark of the crow. They took my father from me." But you will have your revenge...',
      pathAction: "Allure",
      pathActionDescription:
        "Allure allows Primrose to allure certain non-playable characters and lead them to various locations. This Path Action is the rogue counterpart to Ophilia's Path Action, Guide.",
      talent: "Summon",
      talentDescription: "Summon allows Primrose to call allured townspeople to her aid in battle.",
      portrait: "/images/travelers/primrose.jpg",
      sprite: "/images/travelers/primrose-sprite.jpg",
    },
  },
  {
    slug: "riverlands",
    name: "Riverlands",
    tagline: "Babbling brooks and a village apothecary who asks nothing in return.",
    description:
      "A verdant, river-filled region full of canals, wetlands and trading towns in southwestern Orsterra. United around the flowing waters of its namesake river, the Riverlands include swathes of forest and grassy riverbanks. Its temperate climate lends itself well to sustaining large cities and small villages alike. This region includes the town of Clearbrook, home to the apothecary Alfyn.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Alfyn.jpg",
    position: { x: 37.6, y: 60.9 },
    traveler: {
      name: "Alfyn",
      job: "Apothecary",
      hook: "Saved as a child by a stranger, he set out to heal others the same way.",
      description:
        "You treat the wounded and sick in a small village amid the babbling brooks of the Riverlands. Stricken ill as a child, you were saved by a traveler who asked for nothing in return, inspiring you to follow in his footsteps. Though hesitant to leave the only home you've known, your best friend convinces you to follow your dream, wherever it may lead you...",
      pathAction: "Inquire",
      pathActionDescription:
        "Inquire allows Alfyn to obtain information from townsfolk by chatting with them. This Path Action is the noble counterpart to Cyrus's Path Action, Scrutinize.",
      talent: "Concoct",
      talentDescription:
        "Concoct helps Alfyn in exploration and battle: it creates potions and substances from ingredients to aid allies or harm foes.",
      portrait: "/images/travelers/alfyn.jpg",
      sprite: "/images/travelers/alfyn-sprite.jpg",
    },
  },
  {
    slug: "cliftlands",
    name: "Cliftlands",
    tagline: "Sheer cliffs, mining towns, and mansions said to be impregnable.",
    description:
      "A crime-ridden region full of steep cliffs, deep gorges and expanses of dusty rock, home to the town of Bolderfall, homeland of Therion the thief. This region thrives off the mining business of proprietors who seek gold and precious stones from its depths. It is associated with thieves' guilds, shady dealings and shadowy back alleys.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Therion.jpg",
    position: { x: 34.8, y: 54.1 },
    traveler: {
      name: "Therion",
      job: "Thief",
      hook: "A thief whose exploits are known far and wide — and whose past is a guarded secret.",
      description:
        "While your past is a guarded secret, your exploits are known far and wide. Mere whispers of your extravagant heists strike fear into the hearts of the wealthy. Drifting into the Cliftlands one day, you hear a rumor of great riches to be had. You set your sights on a mansion said to be impregnable, only to find what you never expected.",
      pathAction: "Steal",
      pathActionDescription:
        "Steal allows Therion to steal items from townsfolk, including some items that are not sold in stores or are otherwise exclusive to chests. This Path Action is the rogue counterpart to Tressa's Path Action, Purchase.",
      talent: "Pick Lock",
      talentDescription: "Pick Lock allows Therion to open the locked purple chests scattered across the world and its dungeons.",
      portrait: "/images/travelers/therion.jpg",
      sprite: "/images/travelers/therion-sprite.jpg",
    },
  },
  {
    slug: "woodlands",
    name: "Woodlands",
    tagline: "Deep forests where an ancient clan of hunters keeps watch.",
    description:
      "A dense, mysterious forest region teeming with wildlife and danger. This region contains the town of S'warkii, home to the hunter H'aanit. The deep woods are filled with powerful beasts, and its isolated villages maintain an ancient, nature-bound way of life tied closely to hunting traditions.",
    heroImage: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Haanit.jpg",
    position: { x: 40.9, y: 40.0 },
    traveler: {
      name: "H'aanit",
      job: "Hunter",
      hook: "One of the last of an ancient clan, her prowess with the bow is unmatched.",
      description:
        "One of the last descendants of an ancient clan that calls the deep forest home, your prowess with the bow is unmatched. Your master left home one year ago, summoned to hunt a dread beast, and you protected the village while awaiting his return. Then, one day, the return of an old friend gives you cause for concern, and you strike out on a journey of your own.",
      pathAction: "Provoke",
      pathActionDescription:
        "Provoke allows H'aanit to set beasts on certain non-playable characters, who must then duel them in one-to-one combat. This Path Action is the rogue counterpart to Olberic's Path Action, Challenge.",
      talent: "Capture",
      talentDescription:
        "As part of her Beast Lore, Capture allows H'aanit to tame most non-human enemies and turn them into limited-use allies in battle.",
      portrait: "/images/travelers/haanit.jpg",
      sprite: "/images/travelers/haanit-sprite.jpg",
    },
  },
];

export function getRegion(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}
