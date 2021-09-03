// This file will be sourced at the root of the site (index.html) to provide the data that the main page
// used to populate the needed fields for modal-interact.js 

/*
    Key:
    - gamePosts: An article that is about a game/internship in a game
    - videoPost: If not a direct YouTube link, describes the video
    - id: What is this element described as?
    - Header:
        - normal: What is in normal text?
        - italics: What is in italics?
    - hasVideoMedia: Does this data resource contain video elements?
    - Body
        - line: The contents of that block. Can either be just text or a file source/YouTube link.
        - style: block (<p>), unordered (ul), ordered (ol)
            - Special Style:
                - picture (line param is URL of image)
                    - subtitle: additional text
                - video: (line param is YouTube URL)
                    - subtitle: additional text
                - link: (line param holds the following at each index)
                    - index 0 = Display Text
                    - index 1 = location of link
*/
const modalData = {
    "gamePosts": [
        /*
        Template:
        {
            "id": "",
            "header": {
                "normal": "",
                "italics": ""
            },
            "body": [
                "line": [""],
                "style": "",
                "subtitle": ""
            ],
        },
        */
        {
            "id": "WarePlai",
            "header": {
                "normal": "Contract Programmer",
                "italics": "(July 2018 - October 2018)"
            },
            "body": [
                {
                    "line": "assets/images/portfolio/gamePosts/WarePlai1.png",
                    "style": "picture",
                    "subtitle": "Logo of Company"
                },
                {
                    "line": ["NOTE: Due to the NDA Agreement upon signing, I cannot share any pictures of the final product."],
                    "style": "italics"
                },
                {
                    "line": [
                        "The company that I was a Research and Development Intern brought me onboard for a temporary in-house project. The project will be used as a proof-of-concept for the company to pitch later.",
                        "The prototype was a mobile Augmented Reality 3D multiplayer fighting game. The game was created in Unity 2018, using various plugins such as AR Kit, AR Core, and Photon."
                    ],
                    "style": "block"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/WarePlai2.png",
                    "style": "picture",
                    "subtitle": "Unity 5 Logo"
                },
                {
                    "line": ["Some of the tasks that I did include:"],
                    "style": "block"
                },
                {
                    "line": [
                        "Programmed the user interface for the main menus, lobby, and main gameplay",
                        "Created custom scripts that allowed for specific functionality in certain menus",
                        "Implemented the real world scanning feature for the game"
                    ],
                    "style": "unordered"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/WarePlai3.png",
                    "style": "picture",
                    "subtitle": "Photon AR Logo"
                },
                {
                    "line": ["During the duration of this project, I worked closely with professional artists, placing their assets into the game, making sure the model, animations, and textures are properly imported."],
                    "style": "block"
                },
            ],
        },
        {
            "id": "ROC",
            "header": {
                "normal": "Arvada Labs Internship",
                "italics": "(February 2018 – May 2018)"
            },
            "hasVideoMedia": "true",
            "body": [
                {
                    "line": "https://www.youtube.com/embed/-2hI197w3ao?enablejsapi=1&rel=0",
                    "style": "video",
                    "subtitle": "Trailer of App"
                },
                {
                    "line": ["Tasked to help create a Kickstarter app that works in cotangent with the comic book included in one of the Kickstarter bonuses."],
                    "style": "block"
                },
                {
                    "line": ["A mobile Augmented Reality game designed in Unity 2017 and with Vuforia where the player can be immersed into the world of the comic book by looking at specific pages."],
                    "style": "ordered"
                },
                {
                    "line": [
                        "On each interaction, the player hears a voice over audio clip, followed by a model associated with the page",
                        "With each interaction, the player collects special tokens that unlock an exclusive AR experience at the end of the comic book"
                    ],
                    "style": "unordered",
                },
                {
                    "line": ["The player can interact with some of these models, by tapping on them."],
                    "style": "ordered"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/ROC2.png",
                    "style": "picture",
                    "subtitle": "Screenshot of models and NPC"
                },
                {
                    "line": ["Tasks in this internship included:"],
                    "style": "block"
                },
                {
                    "line": [
                        "Implementing the UI and navigation for the app.",
                        "Integrated models that the art team created into the project."
                    ],
                    "style": "ordered"
                },
                {
                    "line": [
                        "Mapped out the bump, height, normal, and texture maps to each model.",
                        "Added the appropriate shaders to each model according to how they look.",
                        "Experimented with third party translucent and glow shaders.",
                        "Associated the proper animations each model came with, creating scripts to play each animation appropriately.",
                        "Also troubleshooted animation integration from Maya when appropriate",
                    ],
                    "style": "unordered"
                },
                {
                    "line": ["Created a basic NPC AI for one interaction."],
                    "style": "ordered"
                },
                {
                    "line": [
                        "Moves around a given area",
                        "Jumps and flashes its light when touched",
                        "Fades out/fades in when it reaches a certain area",
                    ],
                    "style": "unordered"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/ROC1.png",
                    "style": "picture",
                    "subtitle": "Screenshot of AR Video in App"
                },
                {
                    "line": ["Created the AR video interaction."],
                    "style": "ordered"
                },
                {
                    "line": [
                        "Used a video that was on a server",
                        "Video shrinks once it finished playing",
                    ],
                    "style": "unordered"
                },
                {
                    "line": ["Learned and distributed iOS builds to the in house team using iTunes Connect and TestFlight."],
                    "style": "ordered",
                },
                {
                    "line": [
                        "Published iOS and Android builds on the App Store and Google Play Store.",
                        "Self designed tasks alongside with other interns",
                        "Researched other third party plugins that can be used in future builds of the game.",
                        "Attempted to analyze and distribute a working prototype of the game that was using the Kudan plugin.",
                    ],
                    "style": "unordered",
                },
                {
                    "line": [
                        "Worked remotely, but had weekly intern meetings where all of the company interns met with their supervisors.",
                        "We discussed accomplished tasks, clarified on issues that arose. For communication, we used Asana and Discord to bridge the interns and supervisors together."
                    ],
                    "style": "block",
                },
                {
                    "line": [
                        "External Links:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "Kickstarter Page",
                        "https://www.kickstarter.com/projects/bloodofcthulhu/first-ever-ar-native-game/description"
                    ],
                    "style": "link"
                },
                {
                    "line": [
                        "App Store Link",
                        "https://apps.apple.com/us/app/roc-comic/id1375347317"
                    ],
                    "style": "link"
                }
            ]
        },
        {
            "id": "ISD",
            "header": {
                "normal": "In Solo Duo",
                "italics": "(August 2013 – September 2015)"
            },
            "body": [
                {
                    "line": "assets/images/portfolio/gamePosts/ISD1.png",
                    "style": "picture",
                    "subtitle": "Screenshot of the first world, while playing as the male character"
                },
                {
                    "line": ["Independent project originally made for the final project at the USC Summer Programs."],
                    "style": "block",
                },
                {
                    "line": [
                        "Was a short demo, but after two years, became fully complete with original art and level design.",
                        "A 2D action platformer that has the player advancing through multiple worlds in a linear fashion."
                    ],
                    "style": "ordered",
                },
                {
                    "line": [
                        "Designed in GameMaker",
                        "Main gimmick centers around dynamic character swapping"
                    ],
                    "style": "unordered",
                },
                {
                    "line": "assets/images/portfolio/gamePosts/ISD2.png",
                    "style": "picture",
                    "subtitle": "Screenshot of one of the later worlds, showcasing simple puzzle solving"
                },
                {
                    "line": ["Main Features:"],
                    "style": "block",
                },
                {
                    "line": [
                        "Each character has their own unique skills and physical traits",
                        "Different jump heights and walking speeds.",
                        "Specific actions each character can do (Dashing, shooting projectiles)"
                    ],
                    "style": "ordered",
                },
                {
                    "line": ["Platform types"],
                    "style": "block",
                },
                {
                    "line": [
                        "Allow the player to pass through them",
                        "Move up/down or side to side",
                        "Destroy upon using a move",
                        "Destroy upon landing on it while as one character",
                        "Platforms that appear/disappear when hitting a switch"
                    ],
                    "style": "ordered",
                },
                {
                    "line": ["Enemies:"],
                    "style": "block",
                },
                {
                    "line": [
                        "Patrolling side to side",
                        "Jumping while moving side to side",
                        "Floating while moving side to side",
                        "Time based attack pattern"
                    ],
                    "style": "ordered",
                },
                {
                    "line": "assets/images/portfolio/gamePosts/ISD3.png",
                    "style": "picture",
                    "subtitle": "Screenshot of a door that moves the player to the next level"
                },
                {
                    "line": [
                        "External Links:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "Source Code",
                        "https://github.com/maishiroma/Project_InSoloDuo"
                    ],
                    "style": "link"
                }
            ]
        },
        {
            "id": "Reflections",
            "header": {
                "normal": "Reflections",
                "italics": "(September 2016 – December 2016)"
            },
            "body": [
                {
                    "line": "assets/images/portfolio/gamePosts/Reflections3.png",
                    "style": "picture",
                    "subtitle": "Title Screen of game"
                },
                {
                    "line": ["Lead Programmer for the semester long group project in my Level Design II class. I created player movement, dialogue, and scripted events."],
                    "style": "block",
                },
                {
                    "line": [
                        "A first person, narrative driven game in Unity 5 that visually explores the stages of depression"
                    ],
                    "style": "ordered",
                },
                {
                    "line": "assets/images/portfolio/gamePosts/Reflections2.png",
                    "style": "picture",
                    "subtitle": "Scene of a room in the game, where a player has to solve a simple puzzle"
                },
                {
                    "line": [
                        "Some of the specific mechanics I creates are: "
                    ],
                    "style": "block",
                },
                {
                    "line": [
                        "Dialogue system",
                        "Sound volume proximity",
                        "Collect collectibles to trigger an event"
                    ],
                    "style": "unordered",
                },
                {
                    "line": "assets/images/portfolio/gamePosts/Reflections1.png",
                    "style": "picture",
                    "subtitle": "The main hub of the game, where multiple doors lead to different rooms"
                },
                {
                    "line": [
                        "External Links:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "Source Code",
                        "https://github.com/maishiroma/cpsc344Project"
                    ],
                    "style": "link"
                }
            ]
        },
        {
            "id": "Astrae",
            "header": {
                "normal": "Astrae",
                "italics": "(June 2017 – May 2018)"
            },
            "hasVideoMedia": "true",
            "body": [
                {
                    "line": "https://www.youtube.com/embed/UsKU4cPQtnk?enablejsapi=1&rel=0",
                    "style": "video",
                    "subtitle": "IEEE Demo Video showcasing game mechanics"
                },
                {
                    "line": [
                        "I was the Lead Programmer for a Laguna College of Arts and Design graduate’s project.",
                        "This is a third person, exploratory game where the player must escape from an expansive cave system using tools they find along the way."
                    ],
                    "style": "block",
                },
                {
                    "line": [
                        "Initially created in Unity 2017, but later moved to Unity 2017 due to new features",
                        "Planning to release a public demo on itch.io",
                        "Showcased demo at IEEE GameSig 2018."
                    ],
                    "style": "ordered",
                },
                {
                    "line": ["The tasks that I took on were:"],
                    "style": "block",
                },
                {
                    "line": [
                        "Developing an original player controller, inspired by Tomb Radar 2013, where player movement is relative to camera position.",
                        "Developed a camera controller to compliment the player controller.",
                    ],
                    "style": "unordered",
                },
                {
                    "line": [
                        "Camera is free control, meaning it will always be looking at the player",
                        "Camera automatically adjusts distance to prevent it from clipping into obstacles",
                        "If camera is too close to player, player will become transparent",
                        "Can zoom in, out and reset itself to be behind the player at any time."
                    ],
                    "style": "ordered",
                },
                {
                    "line": "assets/images/portfolio/gamePosts/Astrae1.png",
                    "style": "picture",
                    "subtitle": "Screenshot of the parkour system in the game, a central gameplay element."
                },
                {
                    "line": [
                        "Designed a parkour system, inspired by Mirror’s Edge."
                    ],
                    "style": "unordered",
                },
                {
                    "line": [
                        "Can climb up ledges and shimmy across them",
                        "If there’s a ledge above or below the player, the player will climb up/down them accordingly",
                    ],
                    "style": "ordered",
                },
                {
                    "line": [
                        "Designed an ivy climbing system."
                    ],
                    "style": "unordered",
                },
                {
                    "line": [
                        "If the player is close to a specific terrain, the player can move up, down and side to side on it, or jump off of it",
                    ],
                    "style": "ordered",
                },
                {
                    "line": [
                        "Integrated animations with the player, environments, and enemies.",
                        "Created a three terminal system that links UI interaction to the gameplay"
                    ],
                    "style": "unordered",
                },
                {
                    "line": [
                        "Network: Player can select a gadget that is associated with that terminal and toggle it on/off. This dynamically interacts with objects in the environment, allowing the player to proceed.",
                        "Main Frame: Player can see all of the gadgets and tools that are associated with any given terminal.",
                        "System Files: Player can read the lore of the game, using a system of list buttons.",
                    ],
                    "style": "ordered",
                },
                {
                    "line": [
                        "Created the Shield Projector, a tool that the player can pick up and use during gameplay. This creates a permanent shield that allows the player to use it as a platform or to block an enemy’s attack",
                        "Designed the Enemy AI"
                    ],
                    "style": "unordered",
                },
                {
                    "line": [
                        "Patrol Bots: Wanders around a given area, until it sees the player. If it sees the player, the bot will give chase, shooting at the player and alerting other bots that it is associated with in the area. If the player is far away from the patrol bot after alerting it, it will go back into patrol mode.",
                        "Turrets: Hidden until the player is within its range, then appears and fires at the player until the player is out of its range."
                    ],
                    "style": "ordered",
                },
                {
                    "line": "assets/images/portfolio/gamePosts/Astrae2.png",
                    "style": "picture",
                    "subtitle": "Screenshot of one of the many enemies in the game."
                },
                {
                    "line": [
                        "Integrated audio into project using Wwise.",
                        "Created Loading Screen.",
                        "Assisted with other tasks that lead supervisor had, such as debugging, player health, and play testing."
                    ],
                    "style": "unordered",
                }
            ]
        },
        {
            "id": "BSEC",
            "header": {
                "normal": "Beyond Space Energy Corp",
                "italics": "(February 2017 - June 2017)"
            },
            "hasVideoMedia": "true",
            "body": [
                {
                    "line": "https://www.youtube.com/embed/5KCq2qqO03A?enablejsapi=1&rel=0",
                    "style": "video",
                    "subtitle": "IEEE 2017 Video Showcase"
                },
                {
                    "line": [
                        "I was the assistant Programmer for a senior thesis at Chapman University.",
                        "This is a first person, tower defense mobile VR game that tasks the player to fend off aliens while collecting resources.",
                        "Created in Unity 5, it was showcased at the 2017 Chapman Digital Arts Thesis Screening and at the 2017 IEEE GameSig.",
                        "Some of my tasks included:"
                    ],
                    "style": "block",
                },
                {
                    "line": "assets/images/portfolio/gamePosts/BSEC3.png",
                    "style": "picture",
                    "subtitle": "Picture of gameplay, where the helper robot is seen scanning rocks."
                },
                {
                    "line": [
                        "Autosaving: After each mission, the player’s progress, unlocked traps, and upgrades are saved.",
                        "Trap functionality, such as the bear trap (when an alien walks into it, the trap activated, stunning and damaging the alien.)",
                        "Source Control Manager, using GitHub and implementing a system of making sure all work is pushed and merged effectively."
                    ],
                    "style": "ordered",
                },
                {
                    "line": "assets/images/portfolio/gamePosts/BSEC1.png",
                    "style": "picture",
                    "subtitle": "Screenshot of the interior of the spaceship, the hub."
                },
                {
                    "line": [
                        "External Links:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "Source Code",
                        "https://github.com/maishiroma/CPSC440GameProject"
                    ],
                    "style": "link"
                }
            ]
        },
        {
            "id": "GameJam1",
            "header": {
                "normal": "Ludum Dare 47: Hunger Pains",
                "italics": "(Oct 2 - Oct 5, 2020)"
            },
            "body": [
                {
                    "line": "assets/images/portfolio/gamePosts/LD_47_4.gif",
                    "style": "picture",
                    "subtitle": "Gameplay sample"
                },
                {
                    "line": [
                        "In my free time, I partook in my very first game jam, Ludum Dare. This is a bi-yearly game jam where you spend an entire weekend (72 hours) to complete a game made from scratch, based on a voted theme.",
                        "In my first game jam, I decided to go solo, since I wanted to use the experience to better my own game development skills, especially in areas that I would like to get more experience with (i.e. art, game design)",
                        "In the end, I took away many valuable lessons from this experience, ranging from game scope, artistic visions, and most importantly, concise gameplay."
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "The theme of the game jam was, Stuck in a Loop. I interpreted this as being in a sushi conveyor belt restaurant, trying to survive the onslaught of hungry customers.",
                        "Hence, the game I made is called Hunger Pains, a survival game where you have last as many rounds (pun intended) of chopsticks grabbing you.",
                        "The gameplay is fairly basic, with movement in all directions, but because you are on a conveyor belt, you are limited in how much space you have to outmaneuver the main obstacle of the game, chopsticks."
                    ],
                    "style": "block"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/LD_47_Design_3.png",
                    "style": "picture",
                    "subtitle": "Initial Brainstorm of the project, initially called Sushi Chef"
                },
                {
                    "line": [
                        "The initial design of the game focused centrally on the theme, designing the gameplay around it.",
                        "The idea of people eating at a conveyor belt sushi restaurant set the stage up for some interesting gameplay challenges.",
                        "This lead to a game design concept of a mini challenge round, where the player has to survive a random challenge that is thrown at them, in a series of rounds.",
                        "Some of the round ideas that I had (which one ultimatly came through) were:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "A challenge where you sneak by people to avoid detection (the one that the game focused on)",
                        "A challenge where the player has to choose to hide behind specific items, surviving a certain number of turns in that round before they can proceed (scrapped)",
                        "A challenge where the player is 'caught', but attempts to resist getting captured, via a button mashing event (scrapped)"
                    ],
                    "style": "ordered"
                },
                {
                    "line": [
                        "I also wanted to do more with the conveyor belt gimmick itself, but due to time constraints, the only element that had the conveyor belt was the limited movement.",
                        "Nevertheless, the decision to scrap these ideas helped led this project to completion, since time was the biggest challenge in this game jam."
                    ],
                    "style": "block"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/LD_47_Design_2.png",
                    "style": "picture",
                    "subtitle": "Mock up of menus, UI flow, as well as a list of tasks to accomplish"
                },
                {
                    "line": [
                        "Speaking of time, I wanted to mock up all of the art for the game (UI and player) in advance so that I can focus my time on the gameplay mechanics. Hence, I created some rough diagrams of how I wanted the game screens to look like.",
                        "I also organized my thoughts out on what needs to be done, prioritizing tasks as they came up.",
                        "This especially came up on the last day where I had a lot of artwork that still needed to be done"
                    ],
                    "style": "block"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/LD_47_Design_1.png",
                    "style": "picture",
                    "subtitle": "Concept art of player as well as task planning for 2nd and 3rd day of the jam"
                },
                {
                    "line": [
                        "My planning on these days along with getting the important tasks outlined played a large part in myself getting this game done to a completed state.",
                        "While a lot of ideas had to get scrapped, I realized that sometimes, it is best to focus one's attention to what the game currently has to offer and refine it.",
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "The end result of the game was the following:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "A high score survival round based game",
                        "Pseudo random obstacles in each round, with the difficulty (obstacle speed) increasing dynamically",
                        "An atmosphere that brings back that old feeling of old school arcade games, in combination with the simple art style",
                    ],
                    "style": "unordered"
                },
                {
                    "line": [
                        "Overall, I enjoyed making this game, and despite having some cut content, I found myself pleased with the end results. Below I liked some external links that you can follow to see more information about the game, which includes its GitHub Repository, a post mortem, and a link to the game itself (it is playable in browser!)"
                    ],
                    "style": "block"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/LD_47_2.png",
                    "style": "picture",
                    "subtitle": "Cutscene leading to the next stage"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/LD_47_3.png",
                    "style": "picture",
                    "subtitle": "Screenshot of the main gameplay loop"
                },
                {
                    "line": ["References"],
                    "style": "block"
                },
                {
                    "line": [
                        "Source Control",
                        "https://github.com/maishiroma/LudumDare_47"
                    ],
                    "style": "link"
                },
                {
                    "line": [
                        "Itch.io Page",
                        "https://kaabiikaze.itch.io/hunger-pains"
                    ],
                    "style": "link"
                },
                {
                    "line": [
                        "Ludum Dare Page",
                        "https://ldjam.com/events/ludum-dare/47/hunger-pains"
                    ],
                    "style": "link"
                },
                {
                    "line": [
                        "Post Mortem External Blog Post",
                        "https://ldjam.com/events/ludum-dare/47/hunger-pains/hunger-pains-post-mortem"
                    ],
                    "style": "link"
                }
            ],
        },
        {
            "id": "GameJam2",
            "header": {
                "normal": "Mix and Jam 2020: Blocker Blunders",
                "italics": "(Nov 13 - Nov 15 2020)"
            },
            "body": [
                {
                    "line": "assets/images/portfolio/gamePosts/MnJ_2020_4.gif",
                    "style": "picture",
                    "subtitle": "Gameplay Demo"
                },
                {
                    "line": [
                        "Coming from my first Game Jam with a good hit, I wanted to continue the drive of partaking in more game jams in the year.",
                        "As such, I signed up for the next Game Jam I had an available weekend: Mix and Jam 2020.",
                        "The theme of this game jam is to mix up two generes that normally do not go together and come up with a solid game in 48 hours.",
                        "I was excited to see how this will play out, so I started right away, with the end product called Blocker Blunders."
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "Blocker Blunders is a falling block puzzle game (akin to Tetris) turned into a 2D platformer.",
                        "In other words, the goal of the game is to create a bridge of blocks formed via placing blocks strategically, jumping and maneuvering the levels.",
                        "I was inspired by the recent surge of puzzle games in the market at the time, specifically Tetris 99 and Puyo Puyo Tetris, but also wanted to flesh out a genre that I really enjoy playing, which are platformers.",
                    ],
                    "style": "block"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/MnJ_2020_2.png",
                    "style": "picture",
                    "subtitle": "Screenshot of the puzzle mechanic"
                },
                {
                    "line": [
                        "Like the first game jam, I decided to go solo on this project as well, since I wanted to apply my lessons learned from the first game jam",
                        "Planning out the project was actually the easiest part of the project, since I got to my core idea rather fast."
                    ],
                    "style": "block"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/MnJ_2020_Design_2.png",
                    "style": "picture",
                    "subtitle": "Initial brainstorming component"
                },
                {
                    "line": [
                        "My other idea I had was:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "A resource management game, turned into a survival horror genre where the player has to work at a restaurant, serving up food to rabid paparazzi."
                    ],
                    "style": "unordered"
                },
                {
                    "line": [
                        "This would have been fairly challenging to implement as a single developer, since this requires both a decent AI as well as a game system of acquiring resources.",
                        "Plus, there would have to be some form of game balancing, UI indicators and a game loop that might balloon up the scope of the project.",
                        "Hence, I scrapped this idea and went with my second idea (the platformer puzzle style), but one day, I would like to revisit this concept."
                    ],
                    "style": "unordered"
                },
                {
                    "line": [
                        "Once I got the idea down, I approached the project the same way as last time: outlining what needs to be done and in what order.",
                        "The big mechanic I had to work on was the seamless transition between the platforming part and the puzzle aspect of the game.",
                        "This alone took a lot longer than I imagined, which ended up costing me some time in level design and/or scrapping some additional content."
                    ],
                    "style": "block",
                },
                {
                    "line": "assets/images/portfolio/gamePosts/MnJ_2020_Design_1.png",
                    "style": "picture",
                    "subtitle": "Day 2 of what needed to be done"
                },
                {
                    "line": [
                        "While I did end up making it to the deadline, this project challenged me in the following aspects:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "Always plan for the art at the start, even if it is a rough concept",
                        "Be concise with the game mechanics so that scope creep won't happen as easily",
                        "Level Design earlier in the process, it saves time to build levels near the end"
                    ],
                    "style": "ordered"
                },
                {
                    "line": [
                        "One aspect that I am particularly proud of was how I made use of tilesets in Unity to build the levels.",
                        "Since I was on a time crunch near the end, I needed a fast way to design levels for the player to play on.",
                        "This is where I decided on using tilesets to build my levels and this saved me immense time to playtest the game right before the deadline arrived.",
                        "It also helped make my levels look seamless despite being very simplistic."
                    ],
                    "style": "block"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/MnJ_2020_3.png",
                    "style": "picture",
                    "subtitle": "Screenshot of some platforming"
                },
                {
                    "line": [
                        "While the finished project has some rough edges, I enjoyed the end product.",
                        "It allowed me to really think more about project planning for game jams as well as consider what needs to get done.",
                        "Plus it allowed me to work on some of my other skills as a game developer like art, level building, and UX design."
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "The game is available to play on itch.io, so feel free to try out the game yourself!"
                    ],
                    "style": "block"
                },
                {
                    "line": ["References"],
                    "style": "block"
                },
                {
                    "line": [
                        "Source Control",
                        "https://github.com/maishiroma/MixAndJam_2020"
                    ],
                    "style": "link"
                },
                {
                    "line": [
                        "Itch.io Page",
                        "https://kaabiikaze.itch.io/blocker-blunders"
                    ],
                    "style": "link"
                },
            ],
        },
        {
            "id": "GameJam3",
            "header": {
                "normal": "Ludum Dare 48: Sky Plummet",
                "italics": "(April 23 - April 25 2021)"
            },
            "body": [
                {
                    "line": "assets/images/portfolio/gamePosts/LD_48_5.gif",
                    "style": "picture",
                    "subtitle": "Gameplay Demo"
                },
                {
                    "line": [
                        "Ludum Dare 48's theme was about going deeper. When I heard of this theme, I immediately had a theme in mind about making an infinite scroller game.",
                        "The main reason for this is that I have not made an infinite scroller in a long time, and I am curious to see how well I can attempt at the genre again.",
                        "The end product I got was a 2D falling collect-a-thon game called Blocker Busters, and this was a project that I am especially proud of, with the execution, art direction, and room for growth.",
                        "The big difference with this participation in Ludum Dare than the first time I partook was I decided to enter in the hard mode of the game jam. To summarize:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "One must work solo on the project",
                        "All assets (art, code, music, UI) with a few exceptions must be made by yourself",
                        "The deadline for this is 48 hours as opposed to 72 hours",
                        "The code for the game must be in an open source repository"
                    ],
                    "style": "ordered"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/LD_48_Design_3.png",
                    "style": "picture",
                    "subtitle": "Initial concept page on Block Busters."
                },
                {
                    "line": [
                        "I first got the idea from a small inspiration point of playing Super Smash Brothers Ultimate as a character named Toon Link.",
                        "Toon Link has a move in the game where one plunges downward, cutting through any opponent in your way.",
                        "The feel of that attack was what led me to the concept of dive bombing downwards to dig through gold blocks",
                        "This concept also opened the door up for some other gameplay elements that did not come into the game due to time constraints",
                        "Some of these are:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "Random generated block structures to manurer around",
                        "Some blocks allowing the player to bounce off of after dive bombing onto them, allowing for another movement option",
                    ],
                    "style": "unordered"
                },
                {
                    "line": [
                        "Nevertheless, the reduction of scope allowed me to put more time on getting the core gameplay loop finalized, which allowed myself to spend more time on the presentation.",
                        "I got the core gameplay done in the first day, so the second day was all about making the art, music and UI of the game."
                    ],
                    "style": "block"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/LD_48_Design_1.png",
                    "style": "picture",
                    "subtitle": "Planning for Block Busters as well as some initial concept art of player"
                },
                {
                    "line": [
                        "One particular aspect I would like to address is the player character.",
                        "The player character was something I wanted to make more fun and whimsical; it would represent the game when you look at it.",
                        "I initially wanted to pay homage to my original concept and make a human sword fighter, but I realized that it would make the game less interesting.",
                        "Then, I immediately thought of the game Dig Dug and I began to draw what is the player character for this game, a sentient cartoon drill robot."
                    ],
                    "style": "block"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/LD_48_Design_2.png",
                    "style": "picture",
                    "subtitle": "Concept art of player character"
                },
                {
                    "line": [
                        "One of the main reason besides the cartoon aspect that I went with this character choice is:"
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "It was made of basic shapes that can be easily changed and colored",
                        "It distinguishes the scope of the world along with easily pointing out what the point of the game is",
                        "It allowed for some fun animation loops (one of which is shown below)",
                    ],
                    "style": "unordered"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/LD_48_6.gif",
                    "style": "picture",
                    "subtitle": "Blended animation loop of the player starting a new round"
                },
                {
                    "line": [
                        "I'm really happy with this animation because I wanted to experiment with animation trees and invoking scripts within an animation in Unity.",
                        "This action solidified my understanding of the game logic that needed to happen in a game, which is a lesson I learned in previous projects, but haven't put into practice as lately."
                    ],
                    "style": "block"
                },
                {
                    "line": [
                        "My post mortem has more information on what else I enjoyed and what I wanted to improve on, go check it out in the Reference section!",
                        "I also have links to play this game in itch.io as well as in the browser as well.",
                    ],
                    "style": "block"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/LD_48_3.png",
                    "style": "picture",
                    "subtitle": "Screenshot of second area of game"
                },
                {
                    "line": "assets/images/portfolio/gamePosts/LD_48_4.png",
                    "style": "picture",
                    "subtitle": "Screenshot of third area of game"
                },
                {
                    "line": ["References"],
                    "style": "block"
                },
                {
                    "line": [
                        "Source Control",
                        "https://github.com/maishiroma/LudumDare_48"
                    ],
                    "style": "link"
                },
                {
                    "line": [
                        "Itch.io Page",
                        "https://kaabiikaze.itch.io/sky-plummet"
                    ],
                    "style": "link"
                },
                {
                    "line": [
                        "Ludum Dare Page",
                        "https://ldjam.com/events/ludum-dare/48/sky-plummet-my-compo-ludum-dare-48-entry"
                    ],
                    "style": "link"
                },
                {
                    "line": [
                        "Post Mortem External Blog Post",
                        "https://ldjam.com/events/ludum-dare/48/sky-plummet-my-compo-ludum-dare-48-entry/sky-plummet-post-mortem"
                    ],
                    "style": "link"
                }
            ],
        },
    ]
}