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
  { name: "Steam", logo: "", url: "https://store.steampowered.com/app/888570/OCTOPATH_TRAVELER/" },
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

// Real PC specs live with Dev A (download page). Empty until sourced from the official listing.
export const systemRequirements: SystemRequirements[] = [];
