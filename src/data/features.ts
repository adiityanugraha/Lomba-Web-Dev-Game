export type Feature = {
  title: string;
  description: string;
  image: string;
  thumbnails?: string[];
};

export const features: Feature[] = [
  {
    title: "Play as eight different characters",
    description:
      "Pick one of eight travelers, each with their own origin, motive, and final chapter. The other seven can join your party along the way.",
    image: "/assets/Features/1.%20Play%20as%20eight%20different%20characters.jpg",
    thumbnails: [
      "/assets/Features/2_Explore_the_enchanting_yet_perilous_world_of_Orsterra.jpg",
      "/assets/Features/3_Use_each_character_s_distinctive_abilities.jpg",
      "/assets/Features/4_Enjoy_the_accessible_yet_deep_turn-based_combat_battle_system.jpg",
      "/assets/Features/5_Solve_side_quests_and_story_scenarios.jpg",
    ],
  },
  {
    title: "Explore the enchanting yet perilous world of Orsterra",
    description:
      "Cross deserts, coasts, highlands, and snowfields. Each region has its own towns, dungeons, and side stories.",
    image: "/assets/Features/2_Explore_the_enchanting_yet_perilous_world_of_Orsterra.jpg",
  },
  {
    title: "Use each character's distinctive abilities",
    description:
      "Every traveler has a Path Action for towns and a Talent for battle, from guiding NPCs to capturing beasts.",
    image: "/assets/Features/3_Use_each_character_s_distinctive_abilities.jpg",
  },
  {
    title: "Accessible yet deep turn-based combat",
    description:
      "Break enemy shields to stun them, then spend boosted points for heavy damage. Simple to learn, strict about timing.",
    image: "/assets/Features/4_Enjoy_the_accessible_yet_deep_turn-based_combat_battle_system.jpg",
  },
  {
    title: "Solve side quests and story scenarios",
    description:
      "Side stories resolve through combat, guidance, purchase, or stealth. The method you pick changes the outcome.",
    image: "/assets/Features/5_Solve_side_quests_and_story_scenarios.jpg",
  },
  {
    title: "Visuals inspired by retro 2D RPGs",
    description:
      "Pixel sprites meet 3D lighting, depth of field, and dynamic weather. The HD-2D look keeps the 16-bit feel.",
    image: "/assets/Features/6_Experience_visuals_inspired_by_retro_2D_RPGs.jpg",
  },
];
