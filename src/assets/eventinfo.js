import {
  Freefire,
  Football,
  Basketball,
  Cricket,
  Armrestling,
  Iconhunt,
  Sound,
} from ".";

const eventinfo = [
  {
    title: "BOX CRICKET",
    subtitle:"Box Cricket: Small Ground, Big Thrills! 🏏🔥",
    type: "Non-Technical",
    background: Cricket,
    venue:"Ground",
    teamSize:"5 Members Per Team",
    description:"Experience the excitement of box cricket in a backyard-style setting where teams of five players compete in a fast-paced, thrilling format. This version of cricket is designed to be both fun and competitive, allowing players to showcase their skills in a confined playing area. With modified rules and a limited number of overs, box cricket adds an exciting twist to the traditional game, making it an engaging experience for all participants.",
    firstcontact:"  📞 Venkataraman: 70108 74045",
    secondcontact:"  📞 Sanjeev: 96776 81739",
    points: [
      "Experience fast-paced Box Cricket with 5-player, limited overs.",
    ],
    rules: [
      "Team Composition: Each team has 5 players; no extra substitutes allowed.",  
      "Match Format: Fixed overs per team; batting and bowling alternates.",  
      "Scoring: Runs count through boundaries, running; special wall rules apply.",  
      "Fielding Restrictions: Limited players near crease; defined boundary regulations enforced.",  
      "Fair Play: Umpire decisions are final; sportsmanship is strictly maintained.",
    ],
  },
  {
    title: "BASKETBALL",
    subtitle: "Basketball: Fast Breaks, Big Plays, Pure Passion! 🏀🔥",
    type: "Non-Technical",
    background:Basketball,
    venue: "Court",
    teamSize: "5 Members Per Team",
    description: "Experience the intensity of full-court basketball, where teams compete in a fast-paced, high-energy game that tests endurance, strategy, and teamwork. With dynamic plays, quick transitions, and strategic maneuvers, basketball offers an exciting and competitive experience for all players.",
    firstcontact: " 📞Karthikeyan A: 7010572468",
    secondcontact: " 📞Kathiravan D: 9123504247",
    points: [
      "Compete in full-court basketball with fast breaks and dynamic plays!                                            "
    ],
    rules: [
      "Team Composition: Five players per team; substitutions allowed as per rules.",
      "Match Format: Two quarters of play; structured for competitive engagement.",
      "Scoring: Points awarded for field goals, three-pointers, and free throws.",
      "Gameplay Rules: Includes shot clock, traveling, and double dribbling restrictions.",
      "Fair Play: Sportsmanship is mandatory; referee decisions are final."
    ]
},
{
  title: "FREE FIRE",
  subtitle: "Free Fire: Survive, Strategize, Dominate! 🔥🎯",
  type: "Non-Technical",
  background:Freefire,
  venue: "Online",
  teamSize: "Squad Mode (4 Players Per Team)",
  description: "Get ready for an intense and competitive Battle Royale Ranked (BR Ranked) Squad Mode tournament in Free Fire. Played in E-Sports Mode, this event ensures a fair and level playing field, challenging players to showcase their strategy, teamwork, and survival skills. Compete against the best and prove your dominance in this high-stakes battle!",
  firstcontact: " 📞A. Ajith: +91 86673 05838",
  secondcontact: " 📞Loganadhan: +91 97905 36598",
  points: [
    "Battle Royale Squad Mode, E-Sports setup, fair play, and intense competition!"
  ],
  rules: [
    "Match Format: BR Ranked (Squad Mode) using E-Sports Mode for fairness.",
    "Prohibited Actions: Gun skins, banned items, cheats, or hacking disallowed.",
    "Gameplay Rules: No teaming, intentional disconnection, or bug exploitation.",
    "Match Monitoring: Custom rooms created, referees may monitor matches.",
    "Fair Play: Referee and organizer decisions are final; sportsmanship required."
]
},
{
  title: "FOOTBALL",
  subtitle: "Fast-Paced 5-a-Side Football! ⚽️🔥",
  type: "Non-Technical",
  background: Football,
  venue: "Ground",
  teamSize: "5 Players Per Team",
  description: "A high-energy 5-a-side football tournament with quick rounds and intense action. Showcase your skills, teamwork, and strategy in this fast-paced format. Strict rules ensure fair play and maximum fun!",
  firstcontact: "📞 Suman Babu: +91 97863 76078",
  secondcontact: "📞 Naveen S: +91 93428 57757",
  points: [
      "5-a-side football: 5-min thrillers, 2-min breaks, pure energy!⚡"
  ],
  rules: [
      "Footwear: Sports shoes mandatory (no cleats).",  
      "Timing: 5-min matches, 2-min breaks between rounds.",  
      "Team Size: Only 5 players allowed on-field at a time.",  
      "Conduct: Zero tolerance for fights; referee’s call is final.",  
      "Substitutions: Allowed only during breaks."
  ]
},
{
  title: "CONNECTION",
  subtitle: "Unlock the clues, connect the dots, and race against time! Think fast, answer faster, and claim victory! 🏆🧠",
  type: "Non-Technical",
  background: "Quiz",
  venue: "Auditorium",
  teamSize: "Maximum 4 Members Per Team",
  description: "Test your logic and quick thinking in the thrilling 'Connection' event! Teams will compete across three exciting rounds, answering questions under time pressure. The team with the highest score at the end will be crowned the ultimate champions!",
  firstcontact: " 📞Vaitheewari: 91503 89718",
  secondcontact: " 📞Sunitha: 81486 79302",
  points: [
    "Three intense rounds of quick thinking and strategic answering!"
  ],
  rules: [
    "Team Size: Maximum of four members per team allowed.",
    "Round 1: Five questions per team; 20 seconds per answer.",
    "Point Stealing: Wrong answers pass to other teams for extra points.",
    "Round 3: Fastest correct answer in 15 seconds wins points.",
    "Winner: Team with highest score after all rounds wins."
  ]
},
{
  title: "SOUND SYNTAX",
  subtitle: "🎵 Test your musical knowledge and quick thinking!",
  type: "Non-Technical",
  background: Sound,
  venue: "Auditorium",
  teamSize: "Maximum 4 Members Per Team",
  description: "Get ready for 'Sound Syntax'! Compete in a thrilling music quiz featuring three rounds of BGM and lyric identification. The faster you recognize the song, the closer you get to victory!",
  firstcontact: "📞 Aravind J: +91 90432 71900",
  secondcontact: "📞 Jayakanth G: +91 93606 54531",
  points:[
    "There are a total of three rounds, each categorized by timing."
  ],
  "round1Rules": [
    "Each team will hear 5 BGMs, each lasting around 5 seconds.",
    "After each BGM ends, teams will have 15 seconds to identify and name the song."
  ],
  "round2Rules": [
    "Each team will hear 5 BGMs, each lasting around 5 seconds.",
    "After each BGM ends, teams will have 10 seconds to identify and name the song."
  ],
  "round3Rules": [
    "Each team will hear 5 lyrics, each lasting around 5 seconds.",
    "After each lyric ends, teams will have 5 seconds to identify and name the song."
  ]
},

];

export default eventinfo;
