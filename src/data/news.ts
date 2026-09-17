// Placeholder copy based on real Octopath Traveler release milestones.
// Asset team: replace `body`, `excerpt` and `image` — keep `slug` and ISO `date`.
export type SocialLink = {
  label: string;
  url: string;
};


export type NewsItem = {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  image: string;
  body: string[]; // paragraphs
  relatedLinks?: {
    officialWebsites: string[];
    socials: SocialLink[];
  };
};

const items: NewsItem[] = [
  {
    slug: "ANNOUNCED-FOR-NINTENDO-SWITCH-2",
    title: "OCTOPATH TRAVELER AND OCTOPATH TRAVELER II ANNOUNCED FOR NINTENDO SWITCH 2",
    date: "2026-07-13",
    excerpt: "Today, on the OCTOPATH TRAVELER series’ 8th anniversary, SQUARE ENIX announced that OCTOPATH TRAVELER and OCTOPATH TRAVELER II will be launching on Nintendo Switch 2 on Oct. 1, 2026*.",
    image: "assets/Medias/OCTOPATH_SERIES_LOGOS.jpg",
    body: [
      "OCTOPATH TRAVELER and OCTOPATH TRAVELER II are now available for pre-order digitally and physically as individual games and digitally only as a bundle. The critically acclaimed HD-2D RPG series, which first made its debut on Nintendo Switch in 2018 and has since shipped and sold more than 7 million copies worldwide, has been optimized from its original release on Nintendo Switch for Nintendo Switch 2 with improved resolution and frame rate for both games.",
      "About OCTOPATH TRAVELER,",
      "In OCTOPATH TRAVELER, players will set forth on an epic adventure through the enchanting yet perilous continent of Orsterra, stretching across vast landscapes from lush forests, to desert outposts and snow-swept cathedrals. Featuring eight distinct characters each with their own tales to enjoy, ranging from journeys of self-discovery to quests for revenge, each traveler will start their journey in a different land so players can steer their own journey depending on whom they choose.",
      "About OCTOPATH TRAVELER II", 
      "OCTOPATH TRAVELER II introduces players to the world of Solistia, where eight travelers with unique storylines and motivations must navigate treacherous lands, conquer enemies in strategic turn-based battles and navigate the perils and promise of a new industrial era.",  
      "OCTOPATH TRAVELER II tells an epic story, set in a new World independent from the original title. Players will be introduced to eight original characters and experience all-new features and gameplay elements. OCTOPATH TRAVELER II is the perfect entry for newcomers to the series, while also preserving the charm of the original game for existing fans by improving upon the series’ iconic HD-2D visuals, which feature a striking blend of retro 2D characters in a beautiful 3D world.",
      "*The games are available starting today on Nintendo Switch 2 in the Japan region.",
    ],
    relatedLinks: {
      officialWebsites: [
        "https://www.square-enix-games.com/games/octopath-traveler",
        "https://www.square-enix-games.com/games/octopath-traveler-ii"
      ],
      socials: [
        { label: "X (previously Twitter)", url: "https://www.x.com/HD2DGames" },
        { label: "Facebook", url: "https://www.facebook.com/@SquareEnix" },
        { label: "YouTube", url: "https://www.youtube.com/@SquareEnixNA" },
        { label: "Instagram", url: "https://www.instagram.com/SquareEnix/" },
        { label: "BlueSky", url: "https://bsky.app/profile/square-enix-games.com" }
      ]
    }
    
  },
  {
    slug: "octopath-traveler-pc",
    title: "OCTOPATH TRAVELER coming to PC on June 7, 2019",
    date: "2019-04-15",
    excerpt: "The award-winning RPG will be available on Steam this summer. Here’s everything you need to know about it",
    image: "/assets/Medias/OCTOPATH_TRAVELER_START.jpg",
    body: [
      "We have some very exciting news for PC gamers - OCTOPATH TRAVELER is coming to Steam on June 7, 2019! So, yknow, add it to your Wishlist now.",
      "The critically-acclaimed RPG has previously only been available on Nintendo Switch - so this will be the first time non-Nintendo owners can experience the game. And what a game it is - I mean, just look at it:",
      '<iframe class="w-full aspect-video rounded-lg mt-4" src="https://www.youtube.com/embed/GRQEwauQTbs" title="OCTOPATH TRAVELER | The award-winning RPG comes to PC!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      "<h2 class='text-2xl font-bold mt-8 mb-2'>What is OCTOPATH TRAVELER about?</h2>",
      "Set in the beautiful, but dangerous, world of Osterra, OCTOPATH TRAVELER puts you in control of 8 unique heroes - each with their own skillset, motivations and storylines. You can play as:",
      "<ul class='list-disc pl-8 space-y-4 mt-4 mb-8'><li><strong>Olberic:</strong> an experienced knight in search of redemption</li><li><strong>Cyrus:</strong> a scholar whose book smarts don’t always equate to common sense</li><li><strong>Tressa:</strong> an enthusiastic merchant who is travelling the world to hone her skills</li><li><strong>Ophelia:</strong> a noble cleric on a pilgrimage to Orsterra’s holy sites</li><li><strong>Primrose:</strong> a fallen noble on a quest to avenge her murdered father</li><li><strong>Alfyn:</strong> a naïve apothecary determined to help people whatever the cost</li><li><strong>Therion:</strong> a skilled thief trapped in an impossible situation</li><li><strong>H’annit:</strong> an expert hunter, tracking down her missing master</li></ul>",
      
      "<img src='/assets/Medias/OCTOPATH_TRAVELER_Screenshot_Tressa.jpg' alt='Gameplay screenshot' class='w-full rounded-lg my-8 border border-border object-cover' />",
  
  
      "Players have the freedom to begin their journey with any traveler and assemble their team in whatever order they prefer. Every hero features a specific class alongside unique 'Path Actions'—special skills utilized outside of combat to advance the story.",
  
      "As an illustration, Therion possesses the ability to pickpocket NPCs, Olberic can challenge almost anyone to a duel, and H'annit has the talent to capture monsters.",
  
      "Throughout the group's journey, you will traverse eight expansive territories packed with rich narratives, optional missions, and formidable monsters to defeat.",

      "How do I get OCTOPATH TRAVELER on PC?", "OCTOPATH TRAVELER will be available to buy from Steam and the Square Enix Store. Add it to your Wishlist now!"    
    ],
  },

  {
    slug: "first-look-heroes-octopath-traveler",
    title: "A first look at the heroes of OCTOPATH TRAVELER",
    date: "2019-05-31",
    excerpt: "You can start the game with any character. Who will you choose?",
    image: "assets/Medias/OCTOPATH_TRAVELER_FIRST_LOOK.jpg",
    body: [
      "One of the coolest - and most distinct - features of OCTOPATH TRAVELER (releasing on PC 7 June, 2019) is that you can play through the game in any order you like.",
      "The game features eight distinct protagonists, each with unique stories, but the order in which you complete those tales is entirely up to you!",
      "That said, when you set out on your adventure, you will need to select a party leader - a role that falls to the first character you choose. While you can switch out characters, your starter remains in play until you finish their full tale.",
      "Naturally, you might wonder: which character should I pick? Rogue or warrior? Merchant or mage? There is no wrong choice, so it really comes down to which one sounds most interesting to you.",
      "If only there was some sort of chart or guide, to help you choose… oh, what’s that? There is:",
      "<img src='assets/Medias/octopath-flowchart-pegi.jpg' alt='Character Selection Chart' class='w-full rounded-lg my-4 border border-border' />",
      "That’s just the briefest of glimpses into the Travelers… but maybe you’re still not quite sure who’s right for you.",
      "Come back next week, and we’ll take a more detailed look at their personalities, skills and stories. See you then!",
      "<a href='https://store.steampowered.com/app/921570/OCTOPATH_TRAVELER/' target='_blank' rel='noreferrer' class='inline-block mt-4 font-bold text-red-600 hover:underline'>Pre-purchase OCTOPATH TRAVELER</a>"
      
    ],
  },
  {
    slug: "octopath-traveler-now-available",
    title: "OCTOPATH TRAVELER out now on Steam",
    date: "2019-06-07",
    excerpt: "You can start the game with any character. Who will you choose?",
    image: "assets/Medias/octopath-art-2.jpg",
    body: [
      "Here’s some news that will make your day at least eight times better - OCTOPATH TRAVELER is out now on Steam! The game was previously only available on Nintendo Switch, but from today, PC owners can experience the compelling characters, intense battles and distinctive visuals that have won it such acclaim.",
      '<iframe class="w-full aspect-video rounded-lg mt-4" src="https://www.youtube.com/embed/GRQEwauQTbs" title="OCTOPATH TRAVELER | The award-winning RPG comes to PC!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      "OCTOPATH TRAVELER brings the style of classic JRPGs into the modern era. It features a unique ‘HD-2D’ art style that combines expressive 2D character sprites with beautiful 3D environments.",
      "Combined with beautiful lighting and some impressive depth of field effects, it creates a game that looks amazing - and like nothing else around.",
      "Of course, none of this would matter without characters and a story, and OCTOPATH TRAVELER has this covered… eightfold. You can take control of eight unique heroes, each with different skills in and out of battle. Do you choose the morally ambiguous Therion and use his amazing powers of kleptomania to grab valuable loot, or help and heal people with the noble Ophelia? The choice is genuinely yours." , 
      "But rather than read about it, you should experience it yourself. The game’s available to buy right now - through the Square Enix Store and Steam directly.",
      "<a href='https://store.steampowered.com/app/921570/OCTOPATH_TRAVELER/' target='_blank' rel='noreferrer' class='inline-block mt-4 font-bold text-red-600 hover:underline'>Get OCTOPATH TRAVELER</a>"
    ],
  },
  {
    slug: "Interview-octopath-traveler-0",
    title: "Interview: OCTOPATH TRAVELER 0 developers talk",
    date: "2025-11-18",
    excerpt: "OCTOPATH TRAVELER 0 Producer Hirohito Suzuki and Director Yasuhiro Kidera share more details about the upcoming RPG.",
    image: "/assets/Medias/OCTOPATH_TRAVELER_0_INTERVIEW.jpg",
    body: [
      "OCTOPATH TRAVELER 0 is a fresh new take on the acclaimed RPG series. It has everything that makes it so beloved, including beautiful HD-2D visuals, Path Actions that let you interact with NPCs, and the superbly satisfying Break and Boost combat system - but also adds some bold new ideas of its own. These include the introduction of a customizable protagonist. Rather than follow eight pre-defined protagonists and their individual story arcs, the game lets you chart your own course, recruiting more than 30 allies along the way. Combat has also been revamped, with a new eight-character party battle and powerful ‘Ultimate Techniques’ for each traveler. And, of course, there’s the new Town Building features, which let you design the settlement of your dreams. ",
      "You've probably played the generous demo by now, but maybe you want to learn more. The best way to do that is to go directly to the source - the creators of the game itself!",
      "We recently chatted with the OCTOPATH TRAVELER 0 Producer Hirohito Suzuki and Director Yasuhiro Kidera about the game’s awesome new features - and what fans can expect from this epic adventure.",
      "We hope you enjoy the interview!",
      '<iframe class="w-full aspect-video rounded-lg mt-4" src="https://www.youtube.com/embed/WKKVrNR0EXE?si=G8Iln1DQlHnY0VcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    ],
  },
  {
    slug: "magical-Octopath-Traveler-Launch!",
    title: "Nintendo, Square Enix, and Iam8Bit join forces for a magical Octopath Traveler Launch!",
    date: "2018-07-17",
    excerpt: "The highly anticipated Octopath Traveler was released to many JRPG fans on Friday",
    image: "assets/Medias/octopath-traveler-keyart.jpg",
    body: [
      "The night before the release, Nintendo and Square Enix teamed up with Iam8Bit for a magical launch party for some lucky fans.",
      "Last Thursday, July 12, 2018, Iam8bit opened it's gallery doors and gave way to a space filled with the artwork from Octopath Traveler. Artwork at the gallery featured the eight different characters who have their own individually crafted stories in the game.",
      "The gallery space also allowed fans to play a demo of the prologue, as well as take photos in the immersive 16-bit photo area.",
      "Out of the many attendees, Nintendo gave a few lucky JRPG fans a chance to walk away with their own digital copy of Octopath Traveler. Some of those lucky winners, walked away with the highly desired Wayfarer's Edition.",
      "Octopath Traveler is developed by Square Enix for the Nintendo Switch, and is available now via: <a href='https://octopathtraveler.nintendo.com' class='text-red-600 hover:underline' target='_blank' rel='noreferrer'>https://octopathtraveler.nintendo.com</a>",
    ],
  },
  {
    slug: "octopath-crossover",
    title: "Octopath Traveller makes it way to FINAL FANTASY RECORD KEEPER!",
    date: "2018-09-08",
    excerpt: "To commemorate the Octopath Traveler collaboration Crossing Paths, we have launched a special web campaign called Community Quest: Record Traveler!",
    image: "assets/Medias/OCTOPATH_TRAVELER_CROSSOVER.jpg", // Add your image path here when ready
    body: [
      "To commemorate the Octopath Traveler collaboration <strong>Crossing Paths</strong> (beginning 5:00 PM 9/12 PDT / 1:00 AM 9/13 UTC), we have launched a special web campaign called <strong>Community Quest: Record Traveler!</strong>",
      "Find FINAL FANTASY characters lost in the world of Octopath Traveler as you encounter characters from Octopath Traveler. You'll receive points every time you find a character, and get a hint for finding the next one.",
      "Begin by tapping the Octopath Traveler character on the map, then tap the glowing spots and gather hints. You can complete a map by finding eight FF characters. But be careful! If you tap the wrong spot and encounter an FF boss, it's Game Over!",
      "Get in-game rewards based on the total points earned by the entire community!",
      "<strong>Point Milestones and Rewards List</strong><br>• 25,000,000 Points: Soul of a Hero x10<br>• 50,000,000 Points: Giant Scarletite x10<br>• 100,000,000 Points: Mythril x1<br>• 150,000,000 Points: Mythril x2",
      "Starting on Day 2, 4★ and 5★ characters will be added! Find them for even more in-game rewards!",
      "<strong>Found 4★ and 5★ Characters Milestones and Rewards List</strong><br>• 2,500: Major Growth Egg x10<br>• 5,000: Mythril x1<br>• 10,000: Mythril x1",
      "4★ characters will be added on 9/7 PST (9/8 UTC) and 9/8 PST (9/9 UTC) at 6:00 PM PST (2:00 AM UTC).<br>5★ characters will be added at 6:00 PM 9/9 PST (2:00 AM 9/10 UTC).<br><em>* Rewards will be distributed for each milestone reached.</em>",
      "<strong>Campaign Duration:</strong><br>6:00 PM 9/6 PST (2:00 AM 9/7 UTC) to 5:59 PM 9/10 PST (1:59 AM 9/11 UTC)",
      "Find lots of FINAL FANTASY characters and aim for a high score! We hope you enjoy searching for FF characters across the world of Octopath Traveler as you wait for the collaboration event to start."
    ],
    relatedLinks: {
      officialWebsites: [
        "https://octopath.finalfantasyrecordkeeper.com"
      ],
      socials: [
        { label: "X (previously Twitter)", url: "https://twitter.com/FFRK_Official" },
        { label: "Facebook", url: "https://www.facebook.com/FinalFantasyRecordKeeper" },
        { label: "YouTube", url: "https://sqex.link/YoutubeFFRK" }
      ]
    }
  },

];

export const news: NewsItem[] = [...items].sort((a, b) => b.date.localeCompare(a.date));

export function getNewsItem(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}
