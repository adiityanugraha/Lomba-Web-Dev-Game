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
    excerpt:
      "Octopath Traveler is out now on PlayStation 4 and PlayStation 5, six years after it first launched on Nintendo Switch. The port brings all eight travelers and the complete HD-2D world of Orsterra, with every chapter, side story and post-game encounter from the original release included.",
    image: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Olberic_2.jpg",
    body: [
      "The journey is the same one that began on Nintendo Switch in 2018, now running on PlayStation 4 and PlayStation 5. Nothing about the game was reduced for the move: all eight travelers, every region of Orsterra and the full HD-2D presentation are intact.",
      "Each traveler opens in a different part of the continent, and you choose one to start with. The others join as your path crosses theirs, so no two players assemble the cast in the same order.",
      "Battles, side stories and the post-game encounter round out the package, giving PlayStation players the complete RPG as it was originally built.",
    ],
  },
  {
    slug: "xbox-game-pass",
    title: "Now on Xbox One, Windows and Xbox Game Pass",
    date: "2021-03-25",
    excerpt:
      "Octopath Traveler is now on Xbox One, the Microsoft Store on Windows and Xbox Game Pass, all on the same day. Game Pass members can start the journey at no extra cost, and cross-save between Xbox and Windows carries your progress across both platforms.",
    image: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Therion_2.jpg",
    body: [
      "Xbox One and the Microsoft Store on Windows received the game at the same time, and Game Pass members could play from launch day without buying it separately.",
      "Your account links the two platforms. A journey started on the console can be continued on PC, with progress carried across through cross-save.",
      "As on other platforms, the Xbox release contains the full story: all eight travelers, their chapters, the side stories and the post-game encounter.",
    ],
  },
  {
    slug: "steam-release",
    title: "Octopath Traveler comes to PC via Steam",
    date: "2019-06-07",
    excerpt:
      "The HD-2D adventure arrives on PC through Steam, its first platform outside Nintendo Switch. This version runs at resolutions up to 4K with uncapped frame rates, and it supports keyboard, mouse and controller input. Full system requirements are listed on the Download page.",
    image: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Cyrus_2.jpg",
    body: [
      "On PC the game runs at whatever resolution and frame rate your hardware allows, up to 4K and uncapped, with keyboard, mouse and controller all supported.",
      "Steam is the first storefront outside Nintendo Switch to host the game, bringing the full HD-2D journey through Orsterra to PC players.",
      "The Download page lists the system requirements and the other stores that carry the game.",
    ],
  },
  {
    slug: "one-million-shipped",
    title: "One million copies shipped worldwide",
    date: "2018-08-07",
    excerpt:
      "Octopath Traveler shipped more than one million units worldwide within three weeks of release, counting both physical and digital sales. Demand was strong enough that physical copies sold out in several regions across Japan.",
    image: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Tressa.jpg",
    body: [
      "Square Enix announced the figure three weeks after release, covering copies shipped to retailers as well as digital purchases.",
      "Physical copies proved hard to keep in stock, selling out in several regions in Japan as demand outran supply.",
      "The game reached one million on the strength of its eight traveler stories and the HD-2D look, which sets 2D characters against 3D backgrounds.",
    ],
  },
  {
    slug: "switch-launch",
    title: "Octopath Traveler launches on Nintendo Switch",
    date: "2018-07-13",
    excerpt:
      "Octopath Traveler is out worldwide on Nintendo Switch, developed by Square Enix and Acquire. Choose one of eight travelers to begin with, then recruit the rest as your path crosses theirs. Eight stories run across one continent.",
    image: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Ophilia_1.jpg",
    body: [
      "The game is built around eight separate opening chapters. You choose which traveler to follow first, and the others enter the story as your route crosses theirs.",
      "Square Enix developed the game with Acquire, and it launched worldwide on Nintendo Switch.",
      "A free Prologue Demo released a month before launch covers the opening hours of any traveler, and its save data carries into the full game.",
    ],
  },
  {
    slug: "prologue-demo",
    title: "Prologue Demo: play the first three hours and carry your save forward",
    date: "2018-06-14",
    excerpt:
      "The free Prologue Demo offers up to three hours of play with any of the eight travelers. Save data carries over to the full game, so you can start a traveler's story now and pick it up again at launch.",
    image: "/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Haanit_2.jpg",
    body: [
      "The demo covers the opening of any one of the eight travelers, so you can sample a path before committing to it in the full game.",
      "Up to three hours of play are available, and the save file from those hours moves into the full game at launch.",
      "It arrived a month before the full release on Nintendo Switch.",
    ],
  },
];

export const news: NewsItem[] = [...items].sort((a, b) => b.date.localeCompare(a.date));

export function getNewsItem(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}
