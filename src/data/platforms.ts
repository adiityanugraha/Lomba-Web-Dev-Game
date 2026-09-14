export type Platform = {
  name: string;
  logo: string;
  url: string;
  comingSoon?: boolean;
};

export type SystemRequirements = {
  platform: string;
  minimum: Record<string, string>;
  recommended: Record<string, string>;
};

// Logos are text badges until the asset team adds SVGs under public/images/platforms/.
export const platforms: Platform[] = [
  { name: "Steam", logo: "", url: "https://store.steampowered.com/app/921570/OCTOPATH_TRAVELER/" },
  { name: "Epic Games Store", logo: "", url: "https://store.epicgames.com/" },
  { name: "Windows", logo: "", url: "https://www.microsoft.com/store/apps" },
  { name: "Xbox Series X|S", logo: "", url: "https://www.xbox.com/games/store/octopath-traveler/bq2nn9vpz0k6" },
  { name: "Xbox One", logo: "", url: "https://www.xbox.com/games/store/octopath-traveler/bq2nn9vpz0k6" },
  { name: "Xbox Game Pass", logo: "", url: "https://www.xbox.com/xbox-game-pass" },
  { name: "PS5", logo: "", url: "https://store.playstation.com/" },
  { name: "PS4", logo: "", url: "https://store.playstation.com/" },
  { name: "Nintendo Switch", logo: "", url: "https://www.nintendo.com/us/store/" },
  { name: "Nintendo Switch 2", logo: "", url: "", comingSoon: true },
];

// PC specs as listed on the Steam store page (app 921570). Consoles have no min/rec spec.
const pcMinimum = {
  OS: "Windows 7 SP1 / 8.1 / 10, 64-bit",
  Processor: "AMD FX-4350 / Intel Core i3-3210",
  Memory: "4 GB RAM",
  Graphics: "AMD Radeon R7 260X (2 GB) / NVIDIA GeForce GTX 750 (2 GB)",
  DirectX: "Version 11",
  Storage: "5 GB available space",
  Target: "30+ FPS at 1280×720, graphics preset Low",
};
const pcRecommended = {
  OS: "Windows 7 SP1 / 8.1 / 10, 64-bit",
  Processor: "AMD Ryzen 3 1200 / Intel Core i5-6400",
  Memory: "6 GB RAM",
  Graphics: "AMD Radeon RX 470 (4 GB) / NVIDIA GeForce GTX 1060 (6 GB)",
  DirectX: "Version 11",
  Storage: "5 GB available space",
  Target: "60 FPS at 1920×1080, graphics preset Very High",
};

export const systemRequirements: SystemRequirements[] = [
  { platform: "Steam (Windows)", minimum: pcMinimum, recommended: pcRecommended },
  {
    platform: "Microsoft Store (Windows)",
    minimum: { ...pcMinimum, OS: "Windows 10 version 18362.0 or higher" },
    recommended: { ...pcRecommended, OS: "Windows 10 version 18362.0 or higher" },
  },
];
