// Placeholder copy based on real Octopath Traveler release milestones.
// Asset team: replace `body`, `excerpt` and `image` — keep `slug` and ISO `date`.

export type NewsItem = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  image: string;
  body: string[]; // paragraphs
};

const items: NewsItem[] = [
  {
    slug: "playstation-release",
    title: "Octopath Traveler arrives on PlayStation 4 and PlayStation 5",
    date: "2024-06-06",
    excerpt: "Six years after its Switch debut, the first journey through Orsterra comes to PlayStation.",
    image: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Olberic_2.jpg",
    body: [
      "Octopath Traveler is now available on PlayStation 4 and PlayStation 5, bringing all eight travelers and the full HD-2D world of Orsterra to a new platform.",
      "The release includes every chapter, side story and post-game encounter from the original game.",
    ],
  },
  {
    slug: "xbox-game-pass",
    title: "Now on Xbox One, Windows and Xbox Game Pass",
    date: "2021-03-25",
    excerpt: "The journey opens to Xbox players, with Game Pass members able to start at no extra cost.",
    image: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Therion_2.jpg",
    body: [
      "Octopath Traveler launched on Xbox One and the Microsoft Store on Windows, and joined the Xbox Game Pass library on the same day.",
      "Cross-save between Xbox and Windows lets you continue a journey wherever you play.",
    ],
  },
  {
    slug: "steam-release",
    title: "Octopath Traveler comes to PC via Steam",
    date: "2019-06-07",
    excerpt: "The HD-2D adventure leaves the Switch for the first time, with higher resolutions and 60 fps.",
    image: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Cyrus_2.jpg",
    body: [
      "The Steam version supports resolutions up to 4K, uncapped frame rates and full keyboard, mouse and controller support.",
      "System requirements are listed on the Download page.",
    ],
  },
  {
    slug: "one-million-shipped",
    title: "One million copies shipped worldwide",
    date: "2018-08-07",
    excerpt: "Less than a month after launch, Octopath Traveler passes its first million.",
    image: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Tressa.jpg",
    body: [
      "Square Enix announced that Octopath Traveler shipped over one million units worldwide across physical and digital sales within three weeks of release.",
      "Demand was strong enough that physical copies sold out in several regions in Japan.",
    ],
  },
  {
    slug: "switch-launch",
    title: "Octopath Traveler launches on Nintendo Switch",
    date: "2018-07-13",
    excerpt: "Eight travelers, eight stories, one continent — the HD-2D RPG is out now.",
    image: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Ophilia_1.jpg",
    body: [
      "Developed by Square Enix and Acquire, Octopath Traveler is available worldwide on Nintendo Switch.",
      "Choose one of eight travelers to begin with, then recruit the rest as your path crosses theirs.",
    ],
  },
  {
    slug: "prologue-demo",
    title: "Prologue Demo: play the first three hours and carry your save forward",
    date: "2018-06-14",
    excerpt: "A free demo lets you start any traveler's story and keep your progress at launch.",
    image: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Haanit_2.jpg",
    body: [
      "The Prologue Demo offers up to three hours of play with any of the eight travelers.",
      "Save data from the demo transfers to the full game.",
    ],
  },
];

export const news: NewsItem[] = [...items].sort((a, b) => b.date.localeCompare(a.date));

export function getNewsItem(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}
