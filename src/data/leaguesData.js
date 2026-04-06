// ============================================================
// LEAGUES DATA — standings, results, live, fixtures
// Season 2025/2026 | Updated: April 2026
// ============================================================

export const LEAGUES = [
  { id: 39,  name: "Premier League", country: "England", logo: "https://media.api-sports.io/football/leagues/39.png",  shortName: "PL",  color: "#3d0b7d" },
  { id: 140, name: "La Liga",        country: "Spain",   logo: "https://media.api-sports.io/football/leagues/140.png", shortName: "LAL", color: "#ee8e15" },
  { id: 135, name: "Serie A",        country: "Italy",   logo: "https://media.api-sports.io/football/leagues/135.png", shortName: "SA",  color: "#0b45a4" },
  { id: 78,  name: "Bundesliga",     country: "Germany", logo: "https://media.api-sports.io/football/leagues/78.png",  shortName: "BL",  color: "#d20515" },
  { id: 61,  name: "Ligue 1",        country: "France",  logo: "https://media.api-sports.io/football/leagues/61.png",  shortName: "L1",  color: "#003189" },
];

const teamLogo = (id) => `https://media.api-sports.io/football/teams/${id}.png`;

// ============================================================
// STANDINGS
// ============================================================
export const STANDINGS = {
  39: [ // Premier League
    { rank:1,  team:{id:40, name:"Liverpool",         logo:teamLogo(40)},  points:82, played:35, won:25, drawn:7,  lost:3,  goalsFor:85, goalsAgainst:33, goalDiff:52, form:"WWWDW" },
    { rank:2,  team:{id:42, name:"Arsenal",           logo:teamLogo(42)},  points:76, played:35, won:23, drawn:7,  lost:5,  goalsFor:72, goalsAgainst:30, goalDiff:42, form:"WWWLW" },
    { rank:3,  team:{id:50, name:"Man City",          logo:teamLogo(50)},  points:72, played:35, won:22, drawn:6,  lost:7,  goalsFor:79, goalsAgainst:41, goalDiff:38, form:"WWDWW" },
    { rank:4,  team:{id:49, name:"Chelsea",           logo:teamLogo(49)},  points:65, played:35, won:19, drawn:8,  lost:8,  goalsFor:68, goalsAgainst:46, goalDiff:22, form:"WDWWL" },
    { rank:5,  team:{id:47, name:"Tottenham",         logo:teamLogo(47)},  points:61, played:35, won:18, drawn:7,  lost:10, goalsFor:64, goalsAgainst:52, goalDiff:12, form:"WLWDW" },
    { rank:6,  team:{id:33, name:"Man United",        logo:teamLogo(33)},  points:55, played:35, won:16, drawn:7,  lost:12, goalsFor:55, goalsAgainst:51, goalDiff:4,  form:"LWWDL" },
    { rank:7,  team:{id:66, name:"Aston Villa",       logo:teamLogo(66)},  points:54, played:35, won:15, drawn:9,  lost:11, goalsFor:59, goalsAgainst:50, goalDiff:9,  form:"DWWWL" },
    { rank:8,  team:{id:34, name:"Newcastle",         logo:teamLogo(34)},  points:52, played:35, won:15, drawn:7,  lost:13, goalsFor:57, goalsAgainst:54, goalDiff:3,  form:"WDLWW" },
    { rank:9,  team:{id:48, name:"West Ham",          logo:teamLogo(48)},  points:47, played:35, won:13, drawn:8,  lost:14, goalsFor:50, goalsAgainst:58, goalDiff:-8, form:"LDWWD" },
    { rank:10, team:{id:52, name:"Crystal Palace",    logo:teamLogo(52)},  points:45, played:35, won:13, drawn:6,  lost:16, goalsFor:46, goalsAgainst:55, goalDiff:-9, form:"WLLWL" },
    { rank:11, team:{id:45, name:"Everton",           logo:teamLogo(45)},  points:43, played:35, won:12, drawn:7,  lost:16, goalsFor:42, goalsAgainst:58, goalDiff:-16,form:"DLDWL" },
    { rank:12, team:{id:35, name:"Bournemouth",       logo:teamLogo(35)},  points:41, played:35, won:11, drawn:8,  lost:16, goalsFor:47, goalsAgainst:60, goalDiff:-13,form:"LLWDL" },
    { rank:13, team:{id:36, name:"Fulham",            logo:teamLogo(36)},  points:40, played:35, won:11, drawn:7,  lost:17, goalsFor:45, goalsAgainst:59, goalDiff:-14,form:"DWLLL" },
    { rank:14, team:{id:55, name:"Brentford",         logo:teamLogo(55)},  points:38, played:35, won:10, drawn:8,  lost:17, goalsFor:44, goalsAgainst:62, goalDiff:-18,form:"WLLLD" },
    { rank:15, team:{id:65, name:"Nottm Forest",      logo:teamLogo(65)},  points:37, played:35, won:10, drawn:7,  lost:18, goalsFor:39, goalsAgainst:60, goalDiff:-21,form:"LLLWW" },
    { rank:16, team:{id:39, name:"Wolves",            logo:teamLogo(39)},  points:35, played:35, won:9,  drawn:8,  lost:18, goalsFor:37, goalsAgainst:64, goalDiff:-27,form:"LLDLW" },
    { rank:17, team:{id:46, name:"Leicester",         logo:teamLogo(46)},  points:31, played:35, won:8,  drawn:7,  lost:20, goalsFor:36, goalsAgainst:70, goalDiff:-34,form:"LLLLD" },
    { rank:18, team:{id:1359,name:"Ipswich",          logo:teamLogo(1359)},points:27, played:35, won:7,  drawn:6,  lost:22, goalsFor:32, goalsAgainst:74, goalDiff:-42,form:"LLLLL" },
    { rank:19, team:{id:63, name:"Leeds",             logo:teamLogo(63)},  points:24, played:35, won:6,  drawn:6,  lost:23, goalsFor:30, goalsAgainst:78, goalDiff:-48,form:"LLLLD" },
    { rank:20, team:{id:72, name:"Southampton",       logo:teamLogo(72)},  points:18, played:35, won:4,  drawn:6,  lost:25, goalsFor:25, goalsAgainst:85, goalDiff:-60,form:"LLLLL" },
  ],
  140: [ // La Liga
    { rank:1,  team:{id:541, name:"Real Madrid",      logo:teamLogo(541)}, points:78, played:33, won:24, drawn:6,  lost:3,  goalsFor:77, goalsAgainst:30, goalDiff:47, form:"WWWWW" },
    { rank:2,  team:{id:529, name:"Barcelona",        logo:teamLogo(529)}, points:74, played:33, won:22, drawn:8,  lost:3,  goalsFor:81, goalsAgainst:36, goalDiff:45, form:"WDWWW" },
    { rank:3,  team:{id:530, name:"Atletico Madrid",  logo:teamLogo(530)}, points:68, played:33, won:21, drawn:5,  lost:7,  goalsFor:62, goalsAgainst:32, goalDiff:30, form:"WWDWL" },
    { rank:4,  team:{id:532, name:"Valencia",         logo:teamLogo(532)}, points:55, played:33, won:16, drawn:7,  lost:10, goalsFor:52, goalsAgainst:45, goalDiff:7,  form:"WWDLW" },
    { rank:5,  team:{id:533, name:"Villarreal",       logo:teamLogo(533)}, points:53, played:33, won:15, drawn:8,  lost:10, goalsFor:56, goalsAgainst:47, goalDiff:9,  form:"DWWWL" },
    { rank:6,  team:{id:536, name:"Sevilla",          logo:teamLogo(536)}, points:50, played:33, won:14, drawn:8,  lost:11, goalsFor:47, goalsAgainst:44, goalDiff:3,  form:"DLLWW" },
    { rank:7,  team:{id:543, name:"Real Betis",       logo:teamLogo(543)}, points:48, played:33, won:13, drawn:9,  lost:11, goalsFor:46, goalsAgainst:47, goalDiff:-1, form:"WDWDL" },
    { rank:8,  team:{id:546, name:"Athletic Club",    logo:teamLogo(546)}, points:46, played:33, won:13, drawn:7,  lost:13, goalsFor:44, goalsAgainst:48, goalDiff:-4, form:"LDWWW" },
    { rank:9,  team:{id:727, name:"Sociedad",         logo:teamLogo(727)}, points:44, played:33, won:12, drawn:8,  lost:13, goalsFor:43, goalsAgainst:50, goalDiff:-7, form:"WDLWL" },
    { rank:10, team:{id:534, name:"Espanyol",         logo:teamLogo(534)}, points:41, played:33, won:11, drawn:8,  lost:14, goalsFor:41, goalsAgainst:52, goalDiff:-11,form:"WLLWL" },
    { rank:11, team:{id:538, name:"Celta Vigo",       logo:teamLogo(538)}, points:39, played:33, won:11, drawn:6,  lost:16, goalsFor:45, goalsAgainst:56, goalDiff:-11,form:"LWWDL" },
    { rank:12, team:{id:540, name:"Getafe",           logo:teamLogo(540)}, points:36, played:33, won:10, drawn:6,  lost:17, goalsFor:37, goalsAgainst:55, goalDiff:-18,form:"LLDWL" },
    { rank:13, team:{id:545, name:"Girona",           logo:teamLogo(545)}, points:35, played:33, won:9,  drawn:8,  lost:16, goalsFor:40, goalsAgainst:57, goalDiff:-17,form:"DLDWL" },
    { rank:14, team:{id:723, name:"Osasuna",          logo:teamLogo(723)}, points:34, played:33, won:9,  drawn:7,  lost:17, goalsFor:36, goalsAgainst:56, goalDiff:-20,form:"WLLDL" },
    { rank:15, team:{id:544, name:"Rayo Vallecano",   logo:teamLogo(544)}, points:33, played:33, won:9,  drawn:6,  lost:18, goalsFor:34, goalsAgainst:58, goalDiff:-24,form:"LLLWL" },
    { rank:16, team:{id:537, name:"Mallorca",         logo:teamLogo(537)}, points:31, played:33, won:8,  drawn:7,  lost:18, goalsFor:31, goalsAgainst:59, goalDiff:-28,form:"LLLLD" },
    { rank:17, team:{id:539, name:"Vallecano",        logo:teamLogo(539)}, points:29, played:33, won:7,  drawn:8,  lost:18, goalsFor:33, goalsAgainst:62, goalDiff:-29,form:"DLLLW" },
    { rank:18, team:{id:531, name:"Alaves",           logo:teamLogo(531)}, points:27, played:33, won:7,  drawn:6,  lost:20, goalsFor:29, goalsAgainst:67, goalDiff:-38,form:"LLLLL" },
    { rank:19, team:{id:724, name:"Las Palmas",       logo:teamLogo(724)}, points:23, played:33, won:5,  drawn:8,  lost:20, goalsFor:27, goalsAgainst:70, goalDiff:-43,form:"LLLLL" },
    { rank:20, team:{id:728, name:"Valladolid",       logo:teamLogo(728)}, points:16, played:33, won:3,  drawn:7,  lost:23, goalsFor:22, goalsAgainst:80, goalDiff:-58,form:"LLLLL" },
  ],
  135: [ // Serie A
    { rank:1,  team:{id:489, name:"Inter Milan",      logo:teamLogo(489)}, points:75, played:32, won:23, drawn:6,  lost:3,  goalsFor:74, goalsAgainst:26, goalDiff:48, form:"WWWWW" },
    { rank:2,  team:{id:496, name:"Juventus",         logo:teamLogo(496)}, points:71, played:32, won:21, drawn:8,  lost:3,  goalsFor:62, goalsAgainst:27, goalDiff:35, form:"WWDWW" },
    { rank:3,  team:{id:488, name:"Napoli",           logo:teamLogo(488)}, points:67, played:32, won:20, drawn:7,  lost:5,  goalsFor:65, goalsAgainst:31, goalDiff:34, form:"WWIDW" },
    { rank:4,  team:{id:492, name:"AC Milan",         logo:teamLogo(492)}, points:62, played:32, won:18, drawn:8,  lost:6,  goalsFor:59, goalsAgainst:33, goalDiff:26, form:"WWDWL" },
    { rank:5,  team:{id:505, name:"Atalanta",         logo:teamLogo(505)}, points:61, played:32, won:18, drawn:7,  lost:7,  goalsFor:71, goalsAgainst:39, goalDiff:32, form:"DWWWW" },
    { rank:6,  team:{id:497, name:"AS Roma",          logo:teamLogo(497)}, points:55, played:32, won:16, drawn:7,  lost:9,  goalsFor:54, goalsAgainst:42, goalDiff:12, form:"WLWDW" },
    { rank:7,  team:{id:487, name:"Lazio",            logo:teamLogo(487)}, points:52, played:32, won:15, drawn:7,  lost:10, goalsFor:50, goalsAgainst:43, goalDiff:7,  form:"WWLDD" },
    { rank:8,  team:{id:491, name:"Fiorentina",       logo:teamLogo(491)}, points:48, played:32, won:14, drawn:6,  lost:12, goalsFor:48, goalsAgainst:46, goalDiff:2,  form:"WLLWW" },
    { rank:9,  team:{id:500, name:"Bologna",          logo:teamLogo(500)}, points:45, played:32, won:13, drawn:6,  lost:13, goalsFor:45, goalsAgainst:49, goalDiff:-4, form:"DWWLL" },
    { rank:10, team:{id:511, name:"Torino",           logo:teamLogo(511)}, points:41, played:32, won:11, drawn:8,  lost:13, goalsFor:40, goalsAgainst:48, goalDiff:-8, form:"DLWDD" },
    { rank:11, team:{id:502, name:"Udinese",          logo:teamLogo(502)}, points:38, played:32, won:10, drawn:8,  lost:14, goalsFor:38, goalsAgainst:50, goalDiff:-12,form:"DLLDW" },
    { rank:12, team:{id:503, name:"Genoa",            logo:teamLogo(503)}, points:36, played:32, won:9,  drawn:9,  lost:14, goalsFor:35, goalsAgainst:51, goalDiff:-16,form:"WLDLD" },
    { rank:13, team:{id:508, name:"Hellas Verona",    logo:teamLogo(508)}, points:34, played:32, won:9,  drawn:7,  lost:16, goalsFor:36, goalsAgainst:56, goalDiff:-20,form:"WLLLD" },
    { rank:14, team:{id:506, name:"Sassuolo",         logo:teamLogo(506)}, points:32, played:32, won:9,  drawn:5,  lost:18, goalsFor:35, goalsAgainst:59, goalDiff:-24,form:"LLLWL" },
    { rank:15, team:{id:494, name:"Empoli",           logo:teamLogo(494)}, points:31, played:32, won:8,  drawn:7,  lost:17, goalsFor:32, goalsAgainst:56, goalDiff:-24,form:"LLDWL" },
    { rank:16, team:{id:504, name:"Cagliari",         logo:teamLogo(504)}, points:30, played:32, won:8,  drawn:6,  lost:18, goalsFor:31, goalsAgainst:58, goalDiff:-27,form:"LLLWL" },
    { rank:17, team:{id:495, name:"Lecce",            logo:teamLogo(495)}, points:27, played:32, won:7,  drawn:6,  lost:19, goalsFor:29, goalsAgainst:62, goalDiff:-33,form:"LLLLL" },
    { rank:18, team:{id:490, name:"Parma",            logo:teamLogo(490)}, points:24, played:32, won:6,  drawn:6,  lost:20, goalsFor:28, goalsAgainst:66, goalDiff:-38,form:"LLLLL" },
    { rank:19, team:{id:517, name:"Venezia",          logo:teamLogo(517)}, points:21, played:32, won:5,  drawn:6,  lost:21, goalsFor:25, goalsAgainst:71, goalDiff:-46,form:"LLLLL" },
    { rank:20, team:{id:519, name:"Monza",            logo:teamLogo(519)}, points:14, played:32, won:3,  drawn:5,  lost:24, goalsFor:20, goalsAgainst:79, goalDiff:-59,form:"LLLLL" },
  ],
  78: [ // Bundesliga
    { rank:1,  team:{id:157, name:"Bayern Munich",    logo:teamLogo(157)}, points:72, played:29, won:22, drawn:6,  lost:1,  goalsFor:84, goalsAgainst:26, goalDiff:58, form:"WWWWW" },
    { rank:2,  team:{id:165, name:"Bayer Leverkusen", logo:teamLogo(165)}, points:65, played:29, won:20, drawn:5,  lost:4,  goalsFor:70, goalsAgainst:31, goalDiff:39, form:"WWWDW" },
    { rank:3,  team:{id:168, name:"Borussia Dortmund",logo:teamLogo(168)},points:58, played:29, won:17, drawn:7,  lost:5,  goalsFor:62, goalsAgainst:34, goalDiff:28, form:"WWDWL" },
    { rank:4,  team:{id:173, name:"RB Leipzig",       logo:teamLogo(173)}, points:55, played:29, won:16, drawn:7,  lost:6,  goalsFor:58, goalsAgainst:38, goalDiff:20, form:"WDWWL" },
    { rank:5,  team:{id:161, name:"VfB Stuttgart",    logo:teamLogo(161)}, points:50, played:29, won:14, drawn:8,  lost:7,  goalsFor:56, goalsAgainst:42, goalDiff:14, form:"DWWWL" },
    { rank:6,  team:{id:169, name:"Eintracht Frankfurt",logo:teamLogo(169)},points:46,played:29, won:13, drawn:7,  lost:9,  goalsFor:50, goalsAgainst:46, goalDiff:4,  form:"WWDLL" },
    { rank:7,  team:{id:163, name:"Wolfsburg",        logo:teamLogo(163)}, points:42, played:29, won:12, drawn:6,  lost:11, goalsFor:45, goalsAgainst:46, goalDiff:-1, form:"WLWDL" },
    { rank:8,  team:{id:162, name:"Werder Bremen",    logo:teamLogo(162)}, points:40, played:29, won:11, drawn:7,  lost:11, goalsFor:47, goalsAgainst:50, goalDiff:-3, form:"WDLWL" },
    { rank:9,  team:{id:167, name:"Borussia M'gladbach",logo:teamLogo(167)},points:37,played:29, won:10, drawn:7,  lost:12, goalsFor:43, goalsAgainst:52, goalDiff:-9, form:"LLDWW" },
    { rank:10, team:{id:164, name:"Freiburg",         logo:teamLogo(164)}, points:35, played:29, won:9,  drawn:8,  lost:12, goalsFor:38, goalsAgainst:50, goalDiff:-12,form:"DLLWW" },
    { rank:11, team:{id:170, name:"Mainz 05",         logo:teamLogo(170)}, points:33, played:29, won:9,  drawn:6,  lost:14, goalsFor:36, goalsAgainst:52, goalDiff:-16,form:"LDWLL" },
    { rank:12, team:{id:172, name:"Holstein Kiel",    logo:teamLogo(172)}, points:29, played:29, won:7,  drawn:8,  lost:14, goalsFor:34, goalsAgainst:58, goalDiff:-24,form:"LLWDD" },
    { rank:13, team:{id:176, name:"Augsburg",         logo:teamLogo(176)}, points:28, played:29, won:7,  drawn:7,  lost:15, goalsFor:32, goalsAgainst:56, goalDiff:-24,form:"LLDLW" },
    { rank:14, team:{id:174, name:"St. Pauli",        logo:teamLogo(174)}, points:25, played:29, won:6,  drawn:7,  lost:16, goalsFor:28, goalsAgainst:61, goalDiff:-33,form:"LLLLD" },
    { rank:15, team:{id:171, name:"Union Berlin",     logo:teamLogo(171)}, points:23, played:29, won:6,  drawn:5,  lost:18, goalsFor:27, goalsAgainst:64, goalDiff:-37,form:"LLLLL" },
    { rank:16, team:{id:166, name:"Bochum",           logo:teamLogo(166)}, points:20, played:29, won:5,  drawn:5,  lost:19, goalsFor:23, goalsAgainst:72, goalDiff:-49,form:"LLLLL" },
    { rank:17, team:{id:1209,name:"Heidenheim",       logo:teamLogo(1209)},points:18, played:29, won:4,  drawn:6,  lost:19, goalsFor:21, goalsAgainst:70, goalDiff:-49,form:"LLLLL" },
    { rank:18, team:{id:159, name:"Hoffenheim",       logo:teamLogo(159)}, points:14, played:29, won:3,  drawn:5,  lost:21, goalsFor:18, goalsAgainst:79, goalDiff:-61,form:"LLLLL" },
  ],
  61: [ // Ligue 1
    { rank:1,  team:{id:85,  name:"Paris SG",         logo:teamLogo(85)},  points:79, played:30, won:24, drawn:7,  lost:1,  goalsFor:79, goalsAgainst:21, goalDiff:58, form:"WWWWW" },
    { rank:2,  team:{id:91,  name:"Monaco",           logo:teamLogo(91)},  points:65, played:30, won:20, drawn:5,  lost:5,  goalsFor:62, goalsAgainst:30, goalDiff:32, form:"WWDWW" },
    { rank:3,  team:{id:80,  name:"Lyon",             logo:teamLogo(80)},  points:58, played:30, won:17, drawn:7,  lost:6,  goalsFor:55, goalsAgainst:33, goalDiff:22, form:"WWWDL" },
    { rank:4,  team:{id:84,  name:"Nice",             logo:teamLogo(84)},  points:55, played:30, won:16, drawn:7,  lost:7,  goalsFor:50, goalsAgainst:32, goalDiff:18, form:"WDWWL" },
    { rank:5,  team:{id:94,  name:"Rennes",           logo:teamLogo(94)},  points:50, played:30, won:14, drawn:8,  lost:8,  goalsFor:47, goalsAgainst:37, goalDiff:10, form:"DWWLW" },
    { rank:6,  team:{id:81,  name:"Marseille",        logo:teamLogo(81)},  points:49, played:30, won:14, drawn:7,  lost:9,  goalsFor:52, goalsAgainst:41, goalDiff:11, form:"WWLLD" },
    { rank:7,  team:{id:79,  name:"Lille",            logo:teamLogo(79)},  points:46, played:30, won:13, drawn:7,  lost:10, goalsFor:44, goalsAgainst:39, goalDiff:5,  form:"WDLWW" },
    { rank:8,  team:{id:93,  name:"Lens",             logo:teamLogo(93)},  points:44, played:30, won:12, drawn:8,  lost:10, goalsFor:42, goalsAgainst:41, goalDiff:1,  form:"WDDWL" },
    { rank:9,  team:{id:95,  name:"Montpellier",      logo:teamLogo(95)},  points:40, played:30, won:11, drawn:7,  lost:12, goalsFor:40, goalsAgainst:46, goalDiff:-6, form:"WLWDL" },
    { rank:10, team:{id:1382,name:"Le Havre",         logo:teamLogo(1382)},points:37, played:30, won:10, drawn:7,  lost:13, goalsFor:37, goalsAgainst:48, goalDiff:-11,form:"WLLWL" },
    { rank:11, team:{id:96,  name:"Nantes",           logo:teamLogo(96)},  points:35, played:30, won:9,  drawn:8,  lost:13, goalsFor:36, goalsAgainst:48, goalDiff:-12,form:"LDWDL" },
    { rank:12, team:{id:97,  name:"Strasbourg",       logo:teamLogo(97)},  points:32, played:30, won:9,  drawn:5,  lost:16, goalsFor:34, goalsAgainst:52, goalDiff:-18,form:"WLLDL" },
    { rank:13, team:{id:83,  name:"Toulouse",         logo:teamLogo(83)},  points:31, played:30, won:8,  drawn:7,  lost:15, goalsFor:34, goalsAgainst:54, goalDiff:-20,form:"LLDWL" },
    { rank:14, team:{id:96, name:"Brest",             logo:teamLogo(111)}, points:28, played:30, won:7,  drawn:7,  lost:16, goalsFor:31, goalsAgainst:56, goalDiff:-25,form:"LLLWL" },
    { rank:15, team:{id:1176,name:"Reims",            logo:teamLogo(1176)},points:26, played:30, won:7,  drawn:5,  lost:18, goalsFor:28, goalsAgainst:58, goalDiff:-30,form:"LLLLL" },
    { rank:16, team:{id:106, name:"Clermont",         logo:teamLogo(106)}, points:24, played:30, won:6,  drawn:6,  lost:18, goalsFor:27, goalsAgainst:62, goalDiff:-35,form:"LLLLL" },
    { rank:17, team:{id:102, name:"Angers",           logo:teamLogo(102)}, points:22, played:30, won:6,  drawn:4,  lost:20, goalsFor:25, goalsAgainst:65, goalDiff:-40,form:"LLLLL" },
    { rank:18, team:{id:77,  name:"Metz",             logo:teamLogo(77)},  points:15, played:30, won:3,  drawn:6,  lost:21, goalsFor:20, goalsAgainst:78, goalDiff:-58,form:"LLLLL" },
  ],
};

// ============================================================
// RESULTS (last 5 matchdays per league)
// ============================================================
export const RESULTS = {
  39: [
    { id:1001, date:"2026-03-29T17:30:00Z", round:"Round 30", homeTeam:{name:"Arsenal",logo:teamLogo(42)}, awayTeam:{name:"Chelsea",logo:teamLogo(49)}, score:{home:2,away:1}, status:"FT", scorers:[{name:"Saka",team:"Arsenal",minute:23},{name:"Havertz",team:"Arsenal",minute:67},{name:"Palmer",team:"Chelsea",minute:80}] },
    { id:1002, date:"2026-03-29T15:00:00Z", round:"Round 30", homeTeam:{name:"Man City",logo:teamLogo(50)}, awayTeam:{name:"Liverpool",logo:teamLogo(40)}, score:{home:1,away:2}, status:"FT", scorers:[{name:"Haaland",team:"Man City",minute:45},{name:"Salah",team:"Liverpool",minute:12},{name:"Núñez",team:"Liverpool",minute:77}] },
    { id:1003, date:"2026-03-29T15:00:00Z", round:"Round 30", homeTeam:{name:"Tottenham",logo:teamLogo(47)}, awayTeam:{name:"Aston Villa",logo:teamLogo(66)}, score:{home:3,away:1}, status:"FT", scorers:[{name:"Son",team:"Tottenham",minute:18},{name:"Maddison",team:"Tottenham",minute:34},{name:"Watkins",team:"Aston Villa",minute:60},{name:"Kane",team:"Tottenham",minute:85}] },
    { id:1004, date:"2026-03-22T15:00:00Z", round:"Round 29", homeTeam:{name:"Liverpool",logo:teamLogo(40)}, awayTeam:{name:"Man United",logo:teamLogo(33)}, score:{home:3,away:0}, status:"FT", scorers:[{name:"Salah",team:"Liverpool",minute:22},{name:"Jota",team:"Liverpool",minute:55},{name:"Mac Allister",team:"Liverpool",minute:78}] },
    { id:1005, date:"2026-03-22T15:00:00Z", round:"Round 29", homeTeam:{name:"Newcastle",logo:teamLogo(34)}, awayTeam:{name:"Arsenal",logo:teamLogo(42)}, score:{home:1,away:1}, status:"FT", scorers:[{name:"Isak",team:"Newcastle",minute:30},{name:"Martinelli",team:"Arsenal",minute:65}] },
  ],
  140: [
    { id:2001, date:"2026-03-30T20:00:00Z", round:"Round 29", homeTeam:{name:"Real Madrid",logo:teamLogo(541)}, awayTeam:{name:"Barcelona",logo:teamLogo(529)}, score:{home:2,away:2}, status:"FT", scorers:[{name:"Vinicius Jr",team:"Real Madrid",minute:14},{name:"Lewandowski",team:"Barcelona",minute:38},{name:"Bellingham",team:"Real Madrid",minute:72},{name:"Yamal",team:"Barcelona",minute:89}] },
    { id:2002, date:"2026-03-30T17:30:00Z", round:"Round 29", homeTeam:{name:"Atletico Madrid",logo:teamLogo(530)}, awayTeam:{name:"Valencia",logo:teamLogo(532)}, score:{home:2,away:0}, status:"FT", scorers:[{name:"Griezmann",team:"Atletico Madrid",minute:25},{name:"Morata",team:"Atletico Madrid",minute:63}] },
    { id:2003, date:"2026-03-23T15:00:00Z", round:"Round 28", homeTeam:{name:"Barcelona",logo:teamLogo(529)}, awayTeam:{name:"Sevilla",logo:teamLogo(536)}, score:{home:4,away:1}, status:"FT", scorers:[{name:"Lewandowski",team:"Barcelona",minute:8},{name:"Lewandowski",team:"Barcelona",minute:33},{name:"Yamal",team:"Barcelona",minute:51},{name:"Torres",team:"Sevilla",minute:72},{name:"Pedri",team:"Barcelona",minute:88}] },
    { id:2004, date:"2026-03-23T15:00:00Z", round:"Round 28", homeTeam:{name:"Villarreal",logo:teamLogo(533)}, awayTeam:{name:"Real Madrid",logo:teamLogo(541)}, score:{home:0,away:2}, status:"FT", scorers:[{name:"Rodrygo",team:"Real Madrid",minute:45},{name:"Vinicius Jr",team:"Real Madrid",minute:80}] },
    { id:2005, date:"2026-03-16T20:00:00Z", round:"Round 27", homeTeam:{name:"Real Madrid",logo:teamLogo(541)}, awayTeam:{name:"Atletico Madrid",logo:teamLogo(530)}, score:{home:1,away:0}, status:"FT", scorers:[{name:"Bellingham",team:"Real Madrid",minute:55}] },
  ],
  135: [
    { id:3001, date:"2026-03-30T20:45:00Z", round:"Round 28", homeTeam:{name:"Inter Milan",logo:teamLogo(489)}, awayTeam:{name:"Juventus",logo:teamLogo(496)}, score:{home:2,away:1}, status:"FT", scorers:[{name:"Lautaro",team:"Inter Milan",minute:27},{name:"Vlahovic",team:"Juventus",minute:45},{name:"Thuram",team:"Inter Milan",minute:81}] },
    { id:3002, date:"2026-03-30T18:00:00Z", round:"Round 28", homeTeam:{name:"Napoli",logo:teamLogo(488)}, awayTeam:{name:"AC Milan",logo:teamLogo(492)}, score:{home:3,away:2}, status:"FT", scorers:[{name:"Lukaku",team:"Napoli",minute:12},{name:"Leao",team:"AC Milan",minute:22},{name:"Kvara",team:"Napoli",minute:45},{name:"Pulisic",team:"AC Milan",minute:68},{name:"Lukaku",team:"Napoli",minute:90}] },
    { id:3003, date:"2026-03-23T20:45:00Z", round:"Round 27", homeTeam:{name:"Atalanta",logo:teamLogo(505)}, awayTeam:{name:"Inter Milan",logo:teamLogo(489)}, score:{home:1,away:3}, status:"FT", scorers:[{name:"De Ketelaere",team:"Atalanta",minute:10},{name:"Lautaro",team:"Inter Milan",minute:35},{name:"Barella",team:"Inter Milan",minute:60},{name:"Thuram",team:"Inter Milan",minute:88}] },
    { id:3004, date:"2026-03-23T15:00:00Z", round:"Round 27", homeTeam:{name:"AS Roma",logo:teamLogo(497)}, awayTeam:{name:"Juventus",logo:teamLogo(496)}, score:{home:0,away:1}, status:"FT", scorers:[{name:"Vlahovic",team:"Juventus",minute:73}] },
    { id:3005, date:"2026-03-16T20:45:00Z", round:"Round 26", homeTeam:{name:"AC Milan",logo:teamLogo(492)}, awayTeam:{name:"Atalanta",logo:teamLogo(505)}, score:{home:2,away:2}, status:"FT", scorers:[{name:"Leao",team:"AC Milan",minute:15},{name:"Lookman",team:"Atalanta",minute:44},{name:"Giroud",team:"AC Milan",minute:70},{name:"Pasalic",team:"Atalanta",minute:85}] },
  ],
  78: [
    { id:4001, date:"2026-03-29T17:30:00Z", round:"Round 26", homeTeam:{name:"Bayern Munich",logo:teamLogo(157)}, awayTeam:{name:"Bayer Leverkusen",logo:teamLogo(165)}, score:{home:3,away:1}, status:"FT", scorers:[{name:"Kane",team:"Bayern Munich",minute:20},{name:"Musiala",team:"Bayern Munich",minute:38},{name:"Wirtz",team:"Bayer Leverkusen",minute:55},{name:"Gnabry",team:"Bayern Munich",minute:78}] },
    { id:4002, date:"2026-03-29T15:30:00Z", round:"Round 26", homeTeam:{name:"Borussia Dortmund",logo:teamLogo(168)}, awayTeam:{name:"RB Leipzig",logo:teamLogo(173)}, score:{home:2,away:0}, status:"FT", scorers:[{name:"Guirassy",team:"Borussia Dortmund",minute:34},{name:"Adeyemi",team:"Borussia Dortmund",minute:67}] },
    { id:4003, date:"2026-03-22T15:30:00Z", round:"Round 25", homeTeam:{name:"Bayer Leverkusen",logo:teamLogo(165)}, awayTeam:{name:"Borussia Dortmund",logo:teamLogo(168)}, score:{home:2,away:1}, status:"FT", scorers:[{name:"Wirtz",team:"Bayer Leverkusen",minute:12},{name:"Grimaldo",team:"Bayer Leverkusen",minute:45},{name:"Guirassy",team:"Borussia Dortmund",minute:71}] },
    { id:4004, date:"2026-03-22T17:30:00Z", round:"Round 25", homeTeam:{name:"RB Leipzig",logo:teamLogo(173)}, awayTeam:{name:"Bayern Munich",logo:teamLogo(157)}, score:{home:0,away:4}, status:"FT", scorers:[{name:"Kane",team:"Bayern Munich",minute:10},{name:"Kane",team:"Bayern Munich",minute:30},{name:"Musiala",team:"Bayern Munich",minute:55},{name:"Sané",team:"Bayern Munich",minute:80}] },
    { id:4005, date:"2026-03-15T15:30:00Z", round:"Round 24", homeTeam:{name:"Bayern Munich",logo:teamLogo(157)}, awayTeam:{name:"VfB Stuttgart",logo:teamLogo(161)}, score:{home:4,away:1}, status:"FT", scorers:[{name:"Kane",team:"Bayern Munich",minute:5},{name:"Musiala",team:"Bayern Munich",minute:22},{name:"Undav",team:"VfB Stuttgart",minute:44},{name:"Müller",team:"Bayern Munich",minute:66},{name:"Sané",team:"Bayern Munich",minute:89}] },
  ],
  61: [
    { id:5001, date:"2026-03-30T20:45:00Z", round:"Round 27", homeTeam:{name:"PSG",logo:teamLogo(85)}, awayTeam:{name:"Monaco",logo:teamLogo(91)}, score:{home:3,away:0}, status:"FT", scorers:[{name:"Mbappé",team:"PSG",minute:15},{name:"Dembélé",team:"PSG",minute:42},{name:"Asensio",team:"PSG",minute:78}] },
    { id:5002, date:"2026-03-30T17:30:00Z", round:"Round 27", homeTeam:{name:"Marseille",logo:teamLogo(81)}, awayTeam:{name:"Lyon",logo:teamLogo(80)}, score:{home:2,away:1}, status:"FT", scorers:[{name:"Aubameyang",team:"Marseille",minute:22},{name:"Lacazette",team:"Lyon",minute:50},{name:"Harit",team:"Marseille",minute:85}] },
    { id:5003, date:"2026-03-23T20:45:00Z", round:"Round 26", homeTeam:{name:"Monaco",logo:teamLogo(91)}, awayTeam:{name:"Nice",logo:teamLogo(84)}, score:{home:2,away:0}, status:"FT", scorers:[{name:"Minamino",team:"Monaco",minute:33},{name:"Ben Yedder",team:"Monaco",minute:66}] },
    { id:5004, date:"2026-03-23T15:00:00Z", round:"Round 26", homeTeam:{name:"Lyon",logo:teamLogo(80)}, awayTeam:{name:"PSG",logo:teamLogo(85)}, score:{home:0,away:2}, status:"FT", scorers:[{name:"Mbappé",team:"PSG",minute:18},{name:"Dembélé",team:"PSG",minute:60}] },
    { id:5005, date:"2026-03-16T20:45:00Z", round:"Round 25", homeTeam:{name:"Rennes",logo:teamLogo(94)}, awayTeam:{name:"Marseille",logo:teamLogo(81)}, score:{home:1,away:1}, status:"FT", scorers:[{name:"Terrier",team:"Rennes",minute:44},{name:"Aubameyang",team:"Marseille",minute:77}] },
  ],
};

// ============================================================
// LIVE MATCHES
// ============================================================
export const LIVE_MATCHES = [
  {
    id:9001,
    league:"Premier League",
    leagueId:39,
    minute:67,
    homeTeam:{name:"Liverpool",logo:teamLogo(40)},
    awayTeam:{name:"Arsenal",logo:teamLogo(42)},
    score:{home:2,away:1},
    status:"LIVE",
    events:[
      {minute:14,type:"goal",player:"Salah",team:"Liverpool"},
      {minute:37,type:"goal",player:"Saka",team:"Arsenal"},
      {minute:52,type:"goal",player:"Núñez",team:"Liverpool"},
      {minute:62,type:"yellow_card",player:"Partey",team:"Arsenal"},
    ]
  },
  {
    id:9002,
    league:"La Liga",
    leagueId:140,
    minute:41,
    homeTeam:{name:"Barcelona",logo:teamLogo(529)},
    awayTeam:{name:"Atletico Madrid",logo:teamLogo(530)},
    score:{home:1,away:0},
    status:"LIVE",
    events:[
      {minute:28,type:"goal",player:"Lewandowski",team:"Barcelona"},
      {minute:36,type:"yellow_card",player:"Savic",team:"Atletico Madrid"},
    ]
  },
  {
    id:9003,
    league:"Bundesliga",
    leagueId:78,
    minute:78,
    homeTeam:{name:"Bayern Munich",logo:teamLogo(157)},
    awayTeam:{name:"Borussia Dortmund",logo:teamLogo(168)},
    score:{home:3,away:1},
    status:"LIVE",
    events:[
      {minute:10,type:"goal",player:"Kane",team:"Bayern Munich"},
      {minute:34,type:"goal",player:"Guirassy",team:"Borussia Dortmund"},
      {minute:55,type:"goal",player:"Musiala",team:"Bayern Munich"},
      {minute:70,type:"goal",player:"Sané",team:"Bayern Munich"},
    ]
  },
  {
    id:9004,
    league:"Serie A",
    leagueId:135,
    minute:23,
    homeTeam:{name:"Juventus",logo:teamLogo(496)},
    awayTeam:{name:"AC Milan",logo:teamLogo(492)},
    score:{home:0,away:1},
    status:"LIVE",
    events:[
      {minute:18,type:"goal",player:"Leao",team:"AC Milan"},
    ]
  },
];

// ============================================================
// UPCOMING FIXTURES
// ============================================================
export const FIXTURES = {
  39: [
    { id:6001, date:"2026-04-05T15:00:00Z", round:"Round 31", homeTeam:{name:"Man United",logo:teamLogo(33)}, awayTeam:{name:"Tottenham",logo:teamLogo(47)}, status:"NS", venue:"Old Trafford" },
    { id:6002, date:"2026-04-05T15:00:00Z", round:"Round 31", homeTeam:{name:"Chelsea",logo:teamLogo(49)}, awayTeam:{name:"Liverpool",logo:teamLogo(40)}, status:"NS", venue:"Stamford Bridge" },
    { id:6003, date:"2026-04-05T17:30:00Z", round:"Round 31", homeTeam:{name:"Arsenal",logo:teamLogo(42)}, awayTeam:{name:"Man City",logo:teamLogo(50)}, status:"NS", venue:"Emirates Stadium" },
    { id:6004, date:"2026-04-06T14:00:00Z", round:"Round 31", homeTeam:{name:"Aston Villa",logo:teamLogo(66)}, awayTeam:{name:"Newcastle",logo:teamLogo(34)}, status:"NS", venue:"Villa Park" },
    { id:6005, date:"2026-04-06T14:00:00Z", round:"Round 31", homeTeam:{name:"Everton",logo:teamLogo(45)}, awayTeam:{name:"West Ham",logo:teamLogo(48)}, status:"NS", venue:"Goodison Park" },
  ],
  140: [
    { id:7001, date:"2026-04-05T16:15:00Z", round:"Round 30", homeTeam:{name:"Real Madrid",logo:teamLogo(541)}, awayTeam:{name:"Sevilla",logo:teamLogo(536)}, status:"NS", venue:"Santiago Bernabéu" },
    { id:7002, date:"2026-04-05T14:00:00Z", round:"Round 30", homeTeam:{name:"Barcelona",logo:teamLogo(529)}, awayTeam:{name:"Real Betis",logo:teamLogo(543)}, status:"NS", venue:"Camp Nou" },
    { id:7003, date:"2026-04-06T20:00:00Z", round:"Round 30", homeTeam:{name:"Atletico Madrid",logo:teamLogo(530)}, awayTeam:{name:"Villarreal",logo:teamLogo(533)}, status:"NS", venue:"Metropolitano" },
    { id:7004, date:"2026-04-06T14:00:00Z", round:"Round 30", homeTeam:{name:"Valencia",logo:teamLogo(532)}, awayTeam:{name:"Athletic Club",logo:teamLogo(546)}, status:"NS", venue:"Mestalla" },
    { id:7005, date:"2026-04-06T14:00:00Z", round:"Round 30", homeTeam:{name:"Girona",logo:teamLogo(545)}, awayTeam:{name:"Sociedad",logo:teamLogo(727)}, status:"NS", venue:"Estadi Montilivi" },
  ],
  135: [
    { id:8001, date:"2026-04-05T20:45:00Z", round:"Round 29", homeTeam:{name:"Inter Milan",logo:teamLogo(489)}, awayTeam:{name:"Napoli",logo:teamLogo(488)}, status:"NS", venue:"San Siro" },
    { id:8002, date:"2026-04-05T18:00:00Z", round:"Round 29", homeTeam:{name:"AC Milan",logo:teamLogo(492)}, awayTeam:{name:"Atalanta",logo:teamLogo(505)}, status:"NS", venue:"San Siro" },
    { id:8003, date:"2026-04-06T20:45:00Z", round:"Round 29", homeTeam:{name:"Juventus",logo:teamLogo(496)}, awayTeam:{name:"AS Roma",logo:teamLogo(497)}, status:"NS", venue:"Allianz Stadium" },
    { id:8004, date:"2026-04-06T15:00:00Z", round:"Round 29", homeTeam:{name:"Fiorentina",logo:teamLogo(491)}, awayTeam:{name:"Lazio",logo:teamLogo(487)}, status:"NS", venue:"Stadio Franchi" },
    { id:8005, date:"2026-04-06T15:00:00Z", round:"Round 29", homeTeam:{name:"Bologna",logo:teamLogo(500)}, awayTeam:{name:"Torino",logo:teamLogo(511)}, status:"NS", venue:"Dall'Ara" },
  ],
  78: [
    { id:10001, date:"2026-04-04T13:30:00Z", round:"Round 27", homeTeam:{name:"Bayer Leverkusen",logo:teamLogo(165)}, awayTeam:{name:"Bayern Munich",logo:teamLogo(157)}, status:"NS", venue:"BayArena" },
    { id:10002, date:"2026-04-05T15:30:00Z", round:"Round 27", homeTeam:{name:"RB Leipzig",logo:teamLogo(173)}, awayTeam:{name:"Borussia Dortmund",logo:teamLogo(168)}, status:"NS", venue:"Red Bull Arena" },
    { id:10003, date:"2026-04-05T15:30:00Z", round:"Round 27", homeTeam:{name:"Wolfsburg",logo:teamLogo(163)}, awayTeam:{name:"VfB Stuttgart",logo:teamLogo(161)}, status:"NS", venue:"Volkswagen Arena" },
    { id:10004, date:"2026-04-05T15:30:00Z", round:"Round 27", homeTeam:{name:"Eintracht Frankfurt",logo:teamLogo(169)}, awayTeam:{name:"Werder Bremen",logo:teamLogo(162)}, status:"NS", venue:"Deutsche Bank Park" },
    { id:10005, date:"2026-04-06T15:30:00Z", round:"Round 27", homeTeam:{name:"Borussia M'gladbach",logo:teamLogo(167)}, awayTeam:{name:"Freiburg",logo:teamLogo(164)}, status:"NS", venue:"Borussia-Park" },
  ],
  61: [
    { id:11001, date:"2026-04-05T20:45:00Z", round:"Round 28", homeTeam:{name:"PSG",logo:teamLogo(85)}, awayTeam:{name:"Lyon",logo:teamLogo(80)}, status:"NS", venue:"Parc des Princes" },
    { id:11002, date:"2026-04-05T15:00:00Z", round:"Round 28", homeTeam:{name:"Monaco",logo:teamLogo(91)}, awayTeam:{name:"Marseille",logo:teamLogo(81)}, status:"NS", venue:"Stade Louis II" },
    { id:11003, date:"2026-04-05T15:00:00Z", round:"Round 28", homeTeam:{name:"Nice",logo:teamLogo(84)}, awayTeam:{name:"Rennes",logo:teamLogo(94)}, status:"NS", venue:"Allianz Riviera" },
    { id:11004, date:"2026-04-06T15:00:00Z", round:"Round 28", homeTeam:{name:"Lens",logo:teamLogo(93)}, awayTeam:{name:"Lille",logo:teamLogo(79)}, status:"NS", venue:"Stade Bollaert-Delelis" },
    { id:11005, date:"2026-04-06T15:00:00Z", round:"Round 28", homeTeam:{name:"Strasbourg",logo:teamLogo(97)}, awayTeam:{name:"Nantes",logo:teamLogo(96)}, status:"NS", venue:"Stade de la Meinau" },
  ],
};
