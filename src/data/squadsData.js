// ============================================================
// SQUADS DATA — full squad for top 6 clubs per league
// All other teams use a generated fallback in squadsFallback
// ============================================================
import { TEAM_SUBS, getGenericSubs } from './subsData.js';

const teamLogo = (id) => `https://media.api-sports.io/football/teams/${id}.png`;

export const SQUADS = {
  // ─── PREMIER LEAGUE ──────────────────────────────────────
  40: { // Liverpool
    team:{id:40,name:"Liverpool",logo:teamLogo(40),league:"Premier League",coach:"Arne Slot"},
    players:[
      {id:306,name:"Alisson Becker",number:1,position:"Goalkeeper",nationality:"Brazil",age:33,rating:8.4,strengths:["Aerial dominance","Shot-stopping from close range","Distribution with feet"],weaknesses:["Occasionally rushes off line","Vulnerability to long-range shots"]},
      {id:307,name:"Caoimhin Kelleher",number:62,position:"Goalkeeper",nationality:"Ireland",age:26,rating:7.1,strengths:["Rebound saves","Penalty shootouts","Quick restart distribution"],weaknesses:["Limited experience in high-pressure games","Aerial positioning"]},
      {id:308,name:"Trent Alexander-Arnold",number:66,position:"Right Back",nationality:"England",age:27,rating:8.7,strengths:["Elite crossing precision","Long-range passing range","Dead-ball delivery"],weaknesses:["Defensive tracking runs","1v1 defending in transitions"]},
      {id:309,name:"Joe Gomez",number:2,position:"Centre Back",nationality:"England",age:28,rating:7.6,strengths:["Pace in recovery runs","Physical aerial duels","Ability to cover wide areas"],weaknesses:["Injury susceptibility","Positional discipline when pressed"]},
      {id:310,name:"Virgil van Dijk",number:4,position:"Centre Back",nationality:"Netherlands",age:34,rating:8.5,strengths:["Dominant aerial presence","Composure on the ball","Organisation of defensive line"],weaknesses:["Reduced pace compared to peak years","Long balls over the top"]},
      {id:311,name:"Ibrahima Konaté",number:5,position:"Centre Back",nationality:"France",age:26,rating:8.1,strengths:["Explosive pace in recovery","Physical strength in duels","Reading opposition runs"],weaknesses:["Ball play under pressure","Consistency over full seasons"]},
      {id:312,name:"Andy Robertson",number:26,position:"Left Back",nationality:"Scotland",age:32,rating:8.2,strengths:["Overlapping runs to final third","Cross delivery with pace","Defensive intensity"],weaknesses:["Vulnerability to pacey wingers","Fatigue management at elite level"]},
      {id:313,name:"Kostas Tsimikas",number:21,position:"Left Back",nationality:"Greece",age:29,rating:7.4,strengths:["Dead-ball delivery","High work rate off the ball","Defensive organisation"],weaknesses:["Attacking end product vs top opposition","Switches of play"]},
      {id:314,name:"Alexis Mac Allister",number:10,position:"Central Midfielder",nationality:"Argentina",age:26,rating:8.3,strengths:["Progressive passing in tight spaces","Press resistance","Dynamic box-to-box movement"],weaknesses:["Long-range shooting","Aerial duels in midfield"]},
      {id:315,name:"Harvey Elliott",number:19,position:"Central Midfielder",nationality:"England",age:22,rating:7.8,strengths:["Dribbling between lines","Late runs into the box","Technical skill under pressure"],weaknesses:["End product consistency","Physicality against senior midfielders"]},
      {id:316,name:"Ryan Gravenberch",number:38,position:"Central Midfielder",nationality:"Netherlands",age:23,rating:8.0,strengths:["Long stride tempo control","Aggressive pressing high up the pitch","Ball carrying over distance"],weaknesses:["Final-third decision-making","Defensive positioning in shape"]},
      {id:317,name:"Curtis Jones",number:17,position:"Central Midfielder",nationality:"England",age:24,rating:7.6,strengths:["Ball retention under pressure","Intelligent movement between lines","Set-piece positioning"],weaknesses:["Long-range passing accuracy","Consistency at highest level"]},
      {id:284,name:"Mohamed Salah",number:11,position:"Right Winger",nationality:"Egypt",age:33,rating:9.1,strengths:["Clinical finishing from tight angles","Explosive first-step acceleration","Consistency in decisive moments"],weaknesses:["Tends to drift inside creating predictability","Less effective when pressed high and isolated"]},
      {id:318,name:"Luis Díaz",number:7,position:"Left Winger",nationality:"Colombia",age:28,rating:8.3,strengths:["Dribbling at pace down the left channel","Shooting with both feet","Intelligent pressing triggers"],weaknesses:["Final-third decision-making in congested areas","Header accuracy"]},
      {id:319,name:"Diogo Jota",number:20,position:"Left Winger",nationality:"Portugal",age:28,rating:8.1,strengths:["Movement in the box to create space","Finishing with both feet","Pressing from the front"],weaknesses:["Injury frequency","Output consistency over sustained periods"]},
      {id:320,name:"Darwin Núñez",number:9,position:"Centre Forward",nationality:"Uruguay",age:26,rating:8.0,strengths:["Raw pace on the shoulder of defenders","Aerial threat in the box","High pressing intensity"],weaknesses:["Decision-making in the final third","Composure under pressure to finish"]},
      {id:321,name:"Cody Gakpo",number:18,position:"Attacking Midfielder",nationality:"Netherlands",age:26,rating:7.9,strengths:["Driving runs from deep with the ball","Finishing into far corners","Pressing triggers in the final third"],weaknesses:["Output consistency when playing on the wing","Physicality against aggressive defenders"]},
    ]
  },
  42: { // Arsenal
    team:{id:42,name:"Arsenal",logo:teamLogo(42),league:"Premier League",coach:"Mikel Arteta"},
    players:[
      {id:400,name:"David Raya",number:22,position:"Goalkeeper",nationality:"Spain",age:29,rating:8.1,strengths:["Sweeping behind the defensive line","Playing out under pressure","Save percentage against shots on target"],weaknesses:["Aerial delivery into the box","Communication during set-pieces"]},
      {id:401,name:"Oleksandr Zinchenko",number:35,position:"Left Back",nationality:"Ukraine",age:28,rating:7.8,strengths:["Inverted role in midfield building play","Positional intelligence in compact shape","Press-resistance in tight spaces"],weaknesses:["Defensive 1v1 situations on the flank","Aerial duels"]},
      {id:402,name:"Ben White",number:4,position:"Right Back",nationality:"England",age:27,rating:8.3,strengths:["Inverted right-back positioning","Ball recovery in duels","Distribution accuracy from deep"],weaknesses:["Overlapping delivery quality","Less dominant in traditional fullback role"]},
      {id:403,name:"William Saliba",number:12,position:"Centre Back",nationality:"France",age:24,rating:8.7,strengths:["Composure on the ball under high press","Recovery speed to cover in behind","Positioning to cut passing lanes"],weaknesses:["Aerial duels against physical strikers","Limited experience in top-tier finals"]},
      {id:404,name:"Gabriel Magalhães",number:6,position:"Centre Back",nationality:"Brazil",age:27,rating:8.3,strengths:["Physicality in aerial duels","Goal threat from set-pieces","Aggressive ball-winning in duels"],weaknesses:["Playing out from the back under extreme press","Clumsiness at high pace with the ball"]},
      {id:405,name:"Declan Rice",number:41,position:"Central Midfielder",nationality:"England",age:27,rating:8.8,strengths:["Ball-winning in the press footprint","Progressive carrying into the final third","Set-piece delivery quality"],weaknesses:["Risk-taking long passes under pressure","Less effective in very compact narrow spaces"]},
      {id:406,name:"Jorginho",number:20,position:"Central Midfielder",nationality:"Italy",age:34,rating:7.5,strengths:["Passing tempo control under pressure","Penalty kick accuracy","Intelligent repositioning after loss"],weaknesses:["Physical 50-50 duels at pace","Recovery running over distance"]},
      {id:407,name:"Martin Ødegaard",number:8,position:"Attacking Midfielder",nationality:"Norway",age:27,rating:8.9,strengths:["Elite link-play in tight spaces","Shot creation from the half-space","Leadership and pressing coordination"],weaknesses:["Goal scoring output at elite frequency","Physical duels against aggressive midfielders"]},
      {id:408,name:"Bukayo Saka",number:7,position:"Right Winger",nationality:"England",age:24,rating:9.0,strengths:["Dribbling at speed in the final third","Creativity in combination play","Finishing in the near and far post"],weaknesses:["Physicality against very experienced defenders","Vulnerability to injury from repeated fouling"]},
      {id:409,name:"Leandro Trossard",number:19,position:"Left Winger",nationality:"Belgium",age:30,rating:8.0,strengths:["Clever movement to create space","Combination play in tight areas","Pressing from the front"],weaknesses:["Delivery consistency when isolated on the flank","Long-range shooting frequency"]},
      {id:410,name:"Kai Havertz",number:29,position:"Centre Forward",nationality:"Germany",age:26,rating:8.2,strengths:["Intelligent movement in the box","Link play with back to goal","Aerial threat on set-pieces"],weaknesses:["Clinical finishing rate in one-on-ones","Dribbling in tight channels against numbers"]},
    ]
  },
  50: { // Man City
    team:{id:50,name:"Man City",logo:teamLogo(50),league:"Premier League",coach:"Pep Guardiola"},
    players:[
      {id:500,name:"Ederson",number:31,position:"Goalkeeper",nationality:"Brazil",age:31,rating:8.3,strengths:["Long distribution with feet","Sweeping high defensive line","Composure under press"],weaknesses:["Reflex saves from point-blank range","Crosses into congested box"]},
      {id:501,name:"Kyle Walker",number:2,position:"Right Back",nationality:"England",age:36,rating:7.6,strengths:["Pace as last defender in 1v1","Inverted positioning in build-up","Experience in high-pressure moments"],weaknesses:["Reduced pace from peak years","Decision-making in defensive transitions"]},
      {id:502,name:"Rúben Dias",number:3,position:"Centre Back",nationality:"Portugal",age:28,rating:8.7,strengths:["Organisation of defensive structure","Dominant aerial clearances","Composure on the ball under press"],weaknesses:["Vulnerability when drawn out of shape","Aggression leading to yellow cards"]},
      {id:503,name:"Manuel Akanji",number:25,position:"Centre Back",nationality:"Switzerland",age:29,rating:8.1,strengths:["Passing range from the back","Pace to cover transitions","Physical dominance in duels"],weaknesses:["Decision-making at high speed in transitions","Less effective in tight penalty-area defending"]},
      {id:504,name:"Josko Gvardiol",number:24,position:"Left Back",nationality:"Croatia",age:23,rating:8.2,strengths:["Aggressive defending one-on-one","Ball progression from deep","Pace to attack and recover"],weaknesses:["Aerial duels against tall strikers","Positional discipline in zonal system"]},
      {id:505,name:"Rodri",number:16,position:"Defensive Midfielder",nationality:"Spain",age:29,rating:9.0,strengths:["Intercepting passing lanes before press","Distribution to switch tempo","Passing into feet in congested zones"],weaknesses:["Pace in tracking athletic No.9 movements","Recovery after engaging press aggressively"]},
      {id:506,name:"Kevin De Bruyne",number:17,position:"Central Midfielder",nationality:"Belgium",age:34,rating:8.9,strengths:["Passing range to unlock deep blocks","Late runs from deep into the box","Dead-ball delivery quality"],weaknesses:["Injury recurrence at high workload","Defensive contribution in intensive periods"]},
      {id:507,name:"Bernardo Silva",number:20,position:"Central Midfielder",nationality:"Portugal",age:31,rating:8.8,strengths:["Ball retention under high press","Pressing triggers in top third","Technical dribbling in tight spaces"],weaknesses:["Goal output at elite frequency","Aerial duels in midfield"]},
      {id:508,name:"Phil Foden",number:47,position:"Attacking Midfielder",nationality:"England",age:26,rating:8.9,strengths:["Dribbling through compact defences","Finishing from inside the box","Creativity in small spaces"],weaknesses:["Decision-making speed when isolated","Defensive tracking runs"]},
      {id:509,name:"Jeremy Doku",number:11,position:"Left Winger",nationality:"Belgium",age:23,rating:8.3,strengths:["Raw acceleration to beat defenders","Ball carrying explosiveness","Taking on multiple opponents consecutively"],weaknesses:["End-product consistency in crossing","Decision in the final-third high-speed"]},
      {id:510,name:"Erling Haaland",number:9,position:"Centre Forward",nationality:"Norway",age:25,rating:9.2,strengths:["Elite finishing across all shot types","Goal rate per 90 at highest level","Physical dominance holding up play"],weaknesses:["Link play in tight spaces with back to goal","Less effective when defenders deny the run"]},
    ]
  },
  49: { // Chelsea
    team:{id:49,name:"Chelsea",logo:teamLogo(49),league:"Premier League",coach:"Enzo Maresca"},
    players:[
      {id:600,name:"Robert Sánchez",number:1,position:"Goalkeeper",nationality:"Spain",age:27,rating:7.4,strengths:["Distribution with feet to trigger press","Shot-stopping from distance","Sweeping behind a high line"],weaknesses:["Handling under aerial pressure","Decision-making in one-on-one advanced situations"]},
      {id:601,name:"Reece James",number:24,position:"Right Back",nationality:"England",age:26,rating:8.2,strengths:["Crossing quality from deep and wide positions","Physicality and power in wide duels","Set-piece delivery precision"],weaknesses:["Injury frequency and durability","Positional discipline when caught high"]},
      {id:602,name:"Levi Colwill",number:26,position:"Centre Back",nationality:"England",age:22,rating:7.9,strengths:["Ball progression from the left CB role","Aerial dominance on set-pieces","Composure under intense press"],weaknesses:["Experience in decisive big-game moments","Transition pace in wide areas"]},
      {id:603,name:"Wesley Fofana",number:33,position:"Centre Back",nationality:"France",age:24,rating:7.8,strengths:["Explosive recovery pace","Anticipating through-balls","1v1 defending wide channels"],weaknesses:["Injury history reliability","Composure in high-pressure defensive moments"]},
      {id:604,name:"Marc Cucurella",number:3,position:"Left Back",nationality:"Spain",age:26,rating:7.7,strengths:["Positional intelligence in inverted role","Press resistance under close contact","Work rate defending wide areas alone"],weaknesses:["Delivery quality from wide positions","Aerial contribution at set-pieces"]},
      {id:605,name:"Moisés Caicedo",number:25,position:"Defensive Midfielder",nationality:"Ecuador",age:23,rating:8.5,strengths:["Interception rate in pressing zones","Ball recovery in dynamic 1v1s","Physical dominance covering large areas"],weaknesses:["Distribution going forward into attack","Aerial duels against tall strikers dropping"]},
      {id:606,name:"Enzo Fernández",number:8,position:"Central Midfielder",nationality:"Argentina",age:25,rating:8.2,strengths:["Passing range under press","Ball carrying into the final third","Late runs to arrive in the box"],weaknesses:["Consistency at highest level throughout 90 minutes","Defensive positioning when team is low block"]},
      {id:607,name:"Cole Palmer",number:20,position:"Attacking Midfielder",nationality:"England",age:23,rating:9.1,strengths:["Elite creativity around the box from tight angles","Penalty and dead-ball accuracy","Ability to beat pressing opponents with pace"],weaknesses:["Aerial duels in wide areas","Output consistency when shoulder injuries recur"]},
      {id:608,name:"Pedro Neto",number:7,position:"Right Winger",nationality:"Portugal",age:25,rating:8.1,strengths:["Pace and directness down the right channel","Dribbling to enter the penalty area","Pressing from the front with intensity"],weaknesses:["Injury frequency","Delivery quality from wide crossing positions"]},
      {id:609,name:"Jadon Sancho",number:10,position:"Left Winger",nationality:"England",age:25,rating:7.8,strengths:["Tight dribbling under pressure","Combination play in close quarters","Creating space by drawing defenders"],weaknesses:["Final-ball delivery into the box","Consistency over a full season"]},
      {id:610,name:"Nicolas Jackson",number:15,position:"Centre Forward",nationality:"Senegal",age:24,rating:8.0,strengths:["Pace to exploit space in behind","Pressing opponents from the front","Off-ball movement to create space"],weaknesses:["Decision-making in the final third","Clinical finishing rate in 1v1 situations"]},
    ]
  },

  // ─── LA LIGA ─────────────────────────────────────────────
  541: { // Real Madrid
    team:{id:541,name:"Real Madrid",logo:teamLogo(541),league:"La Liga",coach:"Carlo Ancelotti"},
    players:[
      {id:700,name:"Thibaut Courtois",number:1,position:"Goalkeeper",nationality:"Belgium",age:33,rating:8.6,strengths:["Reflex saves in 1v1 situations","Shot-stopping from long-range strikes","Organisation of defensive shape"],weaknesses:["Distribution under immediate press","Vulnerability after returning from long injury"]},
      {id:701,name:"Dani Carvajal",number:2,position:"Right Back",nationality:"Spain",age:33,rating:8.1,strengths:["Attacking intelligence in the final third","Delivery into dangerous zones","Experience in decisive moments"],weaknesses:["Recovery pace when caught high","Injury recurrence at high workload"]},
      {id:702,name:"Eder Militão",number:3,position:"Centre Back",nationality:"Brazil",age:27,rating:8.3,strengths:["Aggressive man-marking","Recovery pace to cover in behind","Physicality in aerial duels"],weaknesses:["Ball under controlled possession build-up","Positional discipline in zonal marking"]},
      {id:703,name:"Antonio Rüdiger",number:22,position:"Centre Back",nationality:"Germany",age:32,rating:8.4,strengths:["Aggression to win physical duels","Leadership in organising the defensive line","Pace for a central defender"],weaknesses:["Ball playing from the back under press","Discipline with yellow cards in 50-50s"]},
      {id:704,name:"Ferland Mendy",number:23,position:"Left Back",nationality:"France",age:29,rating:7.9,strengths:["Explosive defensive recovery runs","Pressed transition interceptions","Physical 1v1 defending wide"],weaknesses:["Delivery quality from crossing positions","Combination play in the final third"]},
      {id:705,name:"Luka Modrić",number:10,position:"Central Midfielder",nationality:"Croatia",age:40,rating:8.1,strengths:["Rhythm and tempo control under pressure","Spatial awareness in compact spaces","Dead-ball and set-piece reading"],weaknesses:["Explosive pace in recovery","Output over 90 minutes at advanced age"]},
      {id:706,name:"Aurélien Tchouaméni",number:18,position:"Defensive Midfielder",nationality:"France",age:25,rating:8.4,strengths:["Blocking passing lanes through positioning","Ball recovery at pace","Aggressive pressing before the press-line"],weaknesses:["Progressive passing range","Output in attacking third"]},
      {id:707,name:"Federico Valverde",number:15,position:"Central Midfielder",nationality:"Uruguay",age:26,rating:8.7,strengths:["Box-to-box engine covering all pitch zones","Shooting power from distance","Pressing triggers at elite intensity"],weaknesses:["Creativity in the final third","Less effective as pure No.10"]},
      {id:708,name:"Jude Bellingham",number:5,position:"Attacking Midfielder",nationality:"England",age:22,rating:9.2,strengths:["Late runs from deep to arrive in the box","Physical dominance in midfield zones","Goal output from a midfield position"],weaknesses:["Decision-making speed in the final line","Vulnerability to aggressive pressing traps"]},
      {id:709,name:"Vinicius Jr.",number:7,position:"Left Winger",nationality:"Brazil",age:24,rating:9.3,strengths:["Explosive 1v1 dribbling","Finishing into the far corner from the left","Directness at pace to beat high defensive lines"],weaknesses:["Decision-making when isolated and double-marked","Aerial headers on crosses"]},
      {id:710,name:"Rodrygo",number:11,position:"Right Winger",nationality:"Brazil",age:24,rating:8.5,strengths:["Movement to create overloads on the right","Technical close control","Delivery in transition situations"],weaknesses:["Consistency in big-game decisive moments","Physical durability in congested schedules"]},
      {id:711,name:"Kylian Mbappé",number:9,position:"Centre Forward",nationality:"France",age:27,rating:9.4,strengths:["Straight-line pace that no defender can match","Finishing with both feet in the penalty area","Ability to drift wide to deceive defensive lines"],weaknesses:["Link play with back to goal under physical press","Defensive tracking when team is without the ball"]},
    ]
  },
  529: { // Barcelona
    team:{id:529,name:"Barcelona",logo:teamLogo(529),league:"La Liga",coach:"Hansi Flick"},
    players:[
      {id:800,name:"Wojciech Szczęsny",number:1,position:"Goalkeeper",nationality:"Poland",age:35,rating:7.9,strengths:["Penalty rescue rate","Shot-stopping from outside the area","Aerial command of the box"],weaknesses:["Distribution with feet under press","Vulnerability in 1v1 after coming off line"]},
      {id:801,name:"Jules Koundé",number:23,position:"Right Back",nationality:"France",age:26,rating:8.3,strengths:["Inverted role in possession phases","Defensive 1v1 pace against quick wingers","Technical quality in tight spaces"],weaknesses:["Aerial duels in the box","Defensive positioning when caught in transition"]},
      {id:802,name:"Pau Cubarsí",number:34,position:"Centre Back",nationality:"Spain",age:18,rating:8.3,strengths:["Composure beyond years at elite level","Ball playing from the back","Interception of through-balls with intelligence"],weaknesses:["Physical strength against experienced strikers","Experience in decisive final moments"]},
      {id:803,name:"Iñigo Martínez",number:5,position:"Centre Back",nationality:"Spain",age:34,rating:7.9,strengths:["Positioning and defensive reading","Physical strength in duels","Playing out from back in press"],weaknesses:["Pace against quick strikers","Injury reliability at high workload"]},
      {id:804,name:"Alejandro Balde",number:3,position:"Left Back",nationality:"Spain",age:21,rating:8.2,strengths:["Explosive overlapping runs down the left","Pace in 1v1 situations wide","Combination play with the winger"],weaknesses:["Crossing consistency at full pace","Decision under pressure in advanced territory"]},
      {id:805,name:"Pedri",number:8,position:"Central Midfielder",nationality:"Spain",age:23,rating:8.8,strengths:["Technical control under extreme press","Combination play in tight spaces","Progressive dribbling to advance possession"],weaknesses:["Aerial duels in midfield","Physical robustness against big opponents"]},
      {id:806,name:"Frenkie de Jong",number:21,position:"Central Midfielder",nationality:"Netherlands",age:28,rating:8.4,strengths:["Carrying ball out of pressure zones","Defensive repositioning after loss","Rhythm variation to control tempo"],weaknesses:["Goal and assist output","Defensive tracking at high intensity over 90"]},
      {id:807,name:"Dani Olmo",number:20,position:"Attacking Midfielder",nationality:"Spain",age:27,rating:8.7,strengths:["Half-space creativity to set up chances","Pressing trigger intelligence","Shooting from range"],weaknesses:["Aerial duels","Physicality in high-defensive block midfields"]},
      {id:808,name:"Lamine Yamal",number:19,position:"Right Winger",nationality:"Spain",age:18,rating:9.1,strengths:["Elite dribbling at pace at 1v1","Creativity to unlock tight defences","Shooting across goal into bottom corners"],weaknesses:["Physical strength when harassed by defenders","Decision in the penalty area when double-marked"]},
      {id:809,name:"Raphinha",number:11,position:"Left Winger",nationality:"Brazil",age:28,rating:8.7,strengths:["Creativity in the final third","Cutting inside to shoot","Assists with both weighted balls and through-balls"],weaknesses:["Consistency under damp defensive pressure","Defending tracking back"]},
      {id:810,name:"Robert Lewandowski",number:9,position:"Centre Forward",nationality:"Poland",age:37,rating:8.8,strengths:["Precision finishing in the box","Positional intelligence to find space","Technical hold-up play under contact"],weaknesses:["Recovery pace when chasing transitions","Reduced mobility at advanced age"]},
    ]
  },

  // ─── SERIE A ──────────────────────────────────────────────
  489: { // Inter Milan
    team:{id:489,name:"Inter Milan",logo:teamLogo(489),league:"Serie A",coach:"Simone Inzaghi"},
    players:[
      {id:900,name:"Yann Sommer",number:1,position:"Goalkeeper",nationality:"Switzerland",age:36,rating:7.9,strengths:["Agility and short handling","Penalty stopping anticipation","Distribution accuracy"],weaknesses:["Aerial command in congested box","Physical presence against tall strikers"]},
      {id:901,name:"Denzel Dumfries",number:2,position:"Right Back",nationality:"Netherlands",age:29,rating:8.1,strengths:["Explosive attacking support runs","Crossing quality from wide","Physical intensity in wide duels"],weaknesses:["Positioning when runs are in behind beaten","Delivery consistency from crossing areas"]},
      {id:902,name:"Stefan de Vrij",number:6,position:"Centre Back",nationality:"Netherlands",age:33,rating:8.0,strengths:["Reading of the game in 3-back system","Passing from the back","Experience in decisive moments"],weaknesses:["Pace against rapid strikers","Physical duels at sustained intensity"]},
      {id:903,name:"Alessandro Bastoni",number:95,position:"Centre Back",nationality:"Italy",age:26,rating:8.6,strengths:["Ball progression from left CB role","Defensive anticipation of runs","Link play with midfield in build-up"],weaknesses:["Aerial dominance against powerful No.9","Risk when carrying into opponent territory"]},
      {id:904,name:"Matteo Darmian",number:36,position:"Left Back",nationality:"Italy",age:35,rating:7.6,strengths:["Tactical intelligence in wide defensive shape","Reliability under press","Work rate across the full 90 minutes"],weaknesses:["Pace in offensive transitions","Delivery quality going forward"]},
      {id:905,name:"Hakan Çalhanoğlu",number:20,position:"Defensive Midfielder",nationality:"Turkey",age:31,rating:8.7,strengths:["Deep passing range to create openings","Penalty kick accuracy","Pressing triggers in the opponent's half"],weaknesses:["Defending in transition when exposed","Recovery run distances"]},
      {id:906,name:"Nicolò Barella",number:23,position:"Central Midfielder",nationality:"Italy",age:28,rating:9.0,strengths:["Ball carrying over distance in midfield","Defensive pressing intensity","Goal contributions from late runs"],weaknesses:["Discipline when frustrated in match"],weaknesses:["Discipline and yellow card accumulation","Decision-making when pressing trap is beaten"]},
      {id:907,name:"Henrikh Mkhitaryan",number:22,position:"Central Midfielder",nationality:"Armenia",age:37,rating:7.7,strengths:["Technical quality in combination play","Positioning between the lines","Experience managing game tempo"],weaknesses:["Physical output over 90 at advanced age","Explosive pace"]},
      {id:908,name:"Marcus Thuram",number:9,position:"Centre Forward",nationality:"France",age:27,rating:8.6,strengths:["Physical domination in the channel","Pace to run in behind defensive line","Elite pressing from the front"],weaknesses:["Clinical finishing in 1v1 situations","Link play when isolated under pressure"]},
      {id:909,name:"Lautaro Martínez",number:10,position:"Centre Forward",nationality:"Argentina",age:27,rating:9.0,strengths:["Clinical finishing in congested areas","Intelligent movement to create space","Combination play with striker partner"],weaknesses:["Output during stretches of poor team form","Aerial duels against tall defenders"]},
      {id:910,name:"Federico Dimarco",number:32,position:"Left Midfielder",nationality:"Italy",age:27,rating:8.5,strengths:["Dead-ball delivery from the left","Aggressive pressing up the wing","Crossing from deep positions"],weaknesses:["Defensive positioning when overloaded","1v1 defending against quick wingers"]},
    ]
  },
  496: { // Juventus
    team:{id:496,name:"Juventus",logo:teamLogo(496),league:"Serie A",coach:"Thiago Motta"},
    players:[
      {id:1000,name:"Michele Di Gregorio",number:1,position:"Goalkeeper",nationality:"Italy",age:27,rating:8.0,strengths:["Distribution under press","Shot-stopping from standard range","Commanding crosses"],weaknesses:["Long-shot power saves","Aerial positioning at corners"]},
      {id:1001,name:"Andrea Cambiaso",number:27,position:"Right Back",nationality:"Italy",age:25,rating:8.2,strengths:["Dynamic overlap runs","Technical ball control at pace","Pressing triggers in wide areas"],weaknesses:["Defensive tracking runs from wide","Aerial duels in the box"]},
      {id:1002,name:"Federico Gatti",number:4,position:"Centre Back",nationality:"Italy",age:27,rating:7.9,strengths:["Aerial dominance on set-pieces","Physical defensive duels","Leadership at the back"],weaknesses:["Ball under pressure from the press","Pace recovering transitions"]},
      {id:1003,name:"Pierre Kalulu",number:15,position:"Centre Back",nationality:"France",age:24,rating:8.0,strengths:["Anticipating through-ball runs","Recovery pace","Composure in 1v1 wide areas"],weaknesses:["Positioning in zonal defensive system","Decision in high-speed transitions"]},
      {id:1004,name:"Nicolo Savona",number:37,position:"Left Back",nationality:"Italy",age:22,rating:7.4,strengths:["Energy in overlapping attacks","Pressing triggers","Technical quality in tight areas"],weaknesses:["Experience at elite level","Defensive aerial duels"]},
      {id:1005,name:"Khéphren Thuram",number:19,position:"Central Midfielder",nationality:"France",age:24,rating:8.2,strengths:["Ball recovery in pressing zone","Physical dominance at 194cm","Running box-to-box over full 90 min"],weaknesses:["Technical precision in congested zones","Goal threat from midfield"]},
      {id:1006,name:"Manuel Locatelli",number:5,position:"Central Midfielder",nationality:"Italy",age:27,rating:7.9,strengths:["Passing tempo control","Positioning to intercept","Range of play to recycle possession"],weaknesses:["Dynamic running from deep","Decision speed at high press"]},
      {id:1007,name:"Douglas Luiz",number:26,position:"Central Midfielder",nationality:"Brazil",age:27,rating:7.7,strengths:["Ball carrying into final third","Creativity in tight spaces","Set-piece delivery"],weaknesses:["Consistency over full campaigns","Defensive positioning in low blocks"]},
      {id:1008,name:"Francisco Conceição",number:7,position:"Right Winger",nationality:"Portugal",age:22,rating:8.1,strengths:["Explosive dribbling on the counter","Pressing intensity in the final third","Directness in 1v1"],weaknesses:["Delivery into the box","Consistency over 90 minutes"]},
      {id:1009,name:"Kenan Yıldız",number:10,position:"Attacking Midfielder",nationality:"Turkey",age:20,rating:8.0,strengths:["Technical ability in tight spaces","Shooting from range","Creative final third movement"],weaknesses:["Physical robustness","Experience in decisive moments"]},
      {id:1010,name:"Dušan Vlahović",number:9,position:"Centre Forward",nationality:"Serbia",age:25,rating:8.6,strengths:["Powerful shooting with the left foot","Aerial threat on set-pieces","Positioning to receive in the box"],weaknesses:["Link play when isolated against 2 defenders","Output when chances are scarce"]},
    ]
  },

  // ─── BUNDESLIGA ──────────────────────────────────────────
  157: { // Bayern Munich
    team:{id:157,name:"Bayern Munich",logo:teamLogo(157),league:"Bundesliga",coach:"Vincent Kompany"},
    players:[
      {id:1100,name:"Manuel Neuer",number:1,position:"Goalkeeper",nationality:"Germany",age:40,rating:8.0,strengths:["Elite reflexes at close range","Command of penalty area","Sweeping behind a high line"],weaknesses:["Physical durability at advanced age","Distribution pace compared to peak years"]},
      {id:1101,name:"Noussair Mazraoui",number:40,position:"Right Back",nationality:"Morocco",age:27,rating:7.9,strengths:["Defensive discipline","Overlapping movement","Physical intensity in wide duels"],weaknesses:["Crossing quality","Decision under defensive transition"]},
      {id:1102,name:"Dayot Upamecano",number:5,position:"Centre Back",nationality:"France",age:26,rating:8.2,strengths:["Pace to cover behind the defensive line","Aggressive ball-winning","Composure under press"],weaknesses:["Concentration lapses under sustained pressure","Positional discipline in zonal defending"]},
      {id:1103,name:"Kim Min-jae",number:3,position:"Centre Back",nationality:"South Korea",age:28,rating:8.3,strengths:["Physical dominance against strikers","Aggressive pressing CB role","1v1 aerial clearances"],weaknesses:["Ball playing under high press","Decision when carrying the ball into midfield"]},
      {id:1104,name:"Alphonso Davies",number:19,position:"Left Back",nationality:"Canada",age:24,rating:8.5,strengths:["Elite pace as a wing-back","1v1 defending wide","Ball carrying in transition"],weaknesses:["Crossing quality at full pace","Decision in the final third"]},
      {id:1105,name:"Joshua Kimmich",number:6,position:"Central Midfielder",nationality:"Germany",age:30,rating:8.9,strengths:["Vision and passing range in deep role","Pressing coordination","Long-range shooting accuracy"],weaknesses:["Defensive tracking when caught high","Physicality against bigger midfielders"]},
      {id:1106,name:"Leon Goretzka",number:8,position:"Central Midfielder",nationality:"Germany",age:30,rating:8.2,strengths:["Physical box-to-box dominance","Late runs into the box","Pressing intensity over the match"],weaknesses:["Technical precision under high press","Injury sustainability"]},
      {id:1107,name:"Jamal Musiala",number:42,position:"Attacking Midfielder",nationality:"Germany",age:22,rating:9.3,strengths:["Dribbling in tight spaces at elite level","Goal creation from the half-space","Composure under defensive press to score"],weaknesses:["Decision-making when final ball under fatigue","Output in physical defensive battles"]},
      {id:1108,name:"Serge Gnabry",number:7,position:"Right Winger",nationality:"Germany",age:30,rating:8.1,strengths:["Explosive acceleration from standing start","Cutting inside to shoot","Pressing triggers from the front"],weaknesses:["Crossing quality from wide positions","Consistency of output over a full season"]},
      {id:1109,name:"Leroy Sané",number:10,position:"Left Winger",nationality:"Germany",age:30,rating:8.5,strengths:["Pace and dribbling to beat defensive lines","Cutting inside with the right for powerful shots","Creative combination play wide"],weaknesses:["Physicality under defensive fouling","Performance under extreme pressure moments"]},
      {id:1110,name:"Harry Kane",number:9,position:"Centre Forward",nationality:"England",age:32,rating:9.2,strengths:["Finishing accuracy across all shot types","Hold-up play as a distributor","Set-piece goal threat at penalty area positions"],weaknesses:["Pace against very quick centre-backs","Defensive press contribution"]},
    ]
  },
  165: { // Bayer Leverkusen
    team:{id:165,name:"Bayer Leverkusen",logo:teamLogo(165),league:"Bundesliga",coach:"Xabi Alonso"},
    players:[
      {id:1200,name:"Lukáš Hrádecký",number:1,position:"Goalkeeper",nationality:"Finland",age:35,rating:8.0,strengths:["Leadership and communication","Penalty area command","Save percentage from standard range"],weaknesses:["Distribution under extreme press","Shot-stopping from long-range driven shots"]},
      {id:1201,name:"Jeremie Frimpong",number:30,position:"Right Back",nationality:"Netherlands",age:24,rating:8.6,strengths:["Explosive speed as an attacking right back","Goal and assist output from fullback","Pressing triggers at the highest line"],weaknesses:["Defensive positioning when caught high","Aerial duels in his own box"]},
      {id:1202,name:"Jonathan Tah",number:4,position:"Centre Back",nationality:"Germany",age:29,rating:8.1,strengths:["Aerial dominance on defensive set-pieces","Physicality in ground duels","Passing range from the back"],weaknesses:["Composure under sustained forward press","Recovery pace on quick transitions"]},
      {id:1203,name:"Edmond Tapsoba",number:5,position:"Centre Back",nationality:"Burkina Faso",age:26,rating:7.9,strengths:["Physical strength in aerial battles","Recovery pace from the back","Ball winning in duels"],weaknesses:["Ball distribution under close press","Positioning in tight low-block defending"]},
      {id:1204,name:"Alejandro Grimaldo",number:14,position:"Left Back",nationality:"Spain",age:29,rating:8.7,strengths:["Dead-ball delivery from the left flank","Crossing in transition at pace","Direct shot on goal from distance"],weaknesses:["Defensive tracking when overloaded","Physical duels against powerful wingers"]},
      {id:1205,name:"Granit Xhaka",number:34,position:"Central Midfielder",nationality:"Switzerland",age:33,rating:8.4,strengths:["Aggressive pressing coordination","Range of passing to switch play","Leadership in difficult moments"],weaknesses:["Discipline in yellow card accumulation","Output when the team is second-half defending"]},
      {id:1206,name:"Robert Andrich",number:8,position:"Central Midfielder",nationality:"Germany",age:30,rating:8.1,strengths:["Defensive intensity covering the CB pairs","Physical ball-winning in midfield","Pressing from the half-way line"],weaknesses:["Technical quality in tight pressing situations","Creative output going forward"]},
      {id:1207,name:"Florian Wirtz",number:10,position:"Attacking Midfielder",nationality:"Germany",age:22,rating:9.3,strengths:["Elite creative dribbling in tight spaces","Goal and assist production at highest level","Composure in decisive 1v1 finishes"],weaknesses:["Physical robustness against aggressive defenders","Output consistency after injury recurrence"]},
      {id:1208,name:"Granit Xhaka",number:34,position:"Central Midfielder",nationality:"Switzerland",age:33,rating:8.4,strengths:["Aggressive pressing coordination","Range of passing to switch play","Leadership in difficult moments"],weaknesses:["Discipline in yellow card accumulation","Output when the team is second-half defending"]},
      {id:1209,name:"Jonas Hofmann",number:7,position:"Right Winger",nationality:"Germany",age:32,rating:7.9,strengths:["Pressing triggers from wide positions","Intelligent runs without the ball","Combination play in final third"],weaknesses:["Crossing delivery at peak pace","Physicality against aggressive full-backs"]},
      {id:1210,name:"Patrik Schick",number:14,position:"Centre Forward",nationality:"Czech Republic",age:29,rating:8.2,strengths:["Powerful finishing with the right foot","Aerial presence in the box","Hold-up play under physical contact"],weaknesses:["Pace in transition runs","Linking play in wide positions off the flank"]},
    ]
  },

  // ─── LIGUE 1 ─────────────────────────────────────────────
  85: { // PSG
    team:{id:85,name:"Paris SG",logo:teamLogo(85),league:"Ligue 1",coach:"Luis Enrique"},
    players:[
      {id:1300,name:"Gianluigi Donnarumma",number:99,position:"Goalkeeper",nationality:"Italy",age:27,rating:8.4,strengths:["Shot-stopping from close range","Aerial command of the box","Distribution over long distances"],weaknesses:["Distribution under immediate press","Vulnerability to driven shots at near post"]},
      {id:1301,name:"Achraf Hakimi",number:2,position:"Right Back",nationality:"Morocco",age:27,rating:8.6,strengths:["Explosive speed in attacking transitions","Dribbling ability from fullback position","Delivery into the box from depth"],weaknesses:["Defensive positioning when tracking runs","Concentration under sustained defensive pressure"]},
      {id:1302,name:"Marquinhos",number:5,position:"Centre Back",nationality:"Brazil",age:31,rating:8.7,strengths:["Leadership and captaincy under pressure","Man-marking in high-intensity games","Composure distributing under press"],weaknesses:["Pace on long transitional runs","Physical output at peak over congested schedule"]},
      {id:1303,name:"Lucas Beraldo",number:35,position:"Centre Back",nationality:"Brazil",age:21,rating:7.8,strengths:["Composure beyond years on the ball","Anticipating runs into depth","Positioning in pressing system"],weaknesses:["Experience in decisive high-pressure fixtures","Aerial duels against elite strikers"]},
      {id:1304,name:"Nuno Mendes",number:25,position:"Left Back",nationality:"Portugal",age:22,rating:8.3,strengths:["Pace going forward down the left","Defensive 1v1 with quick wingers","Link play in combination with winger"],weaknesses:["Crossing quality at full pace","Decision-making in final third when isolated"]},
      {id:1305,name:"Vitinha",number:17,position:"Central Midfielder",nationality:"Portugal",age:25,rating:8.5,strengths:["Ball retention under press","Passing accuracy in tight spaces","Pressing triggers intelligently"],weaknesses:["Production when team is pressing high","Physical duels against strongest midfielders"]},
      {id:1306,name:"João Neves",number:87,position:"Central Midfielder",nationality:"Portugal",age:20,rating:8.4,strengths:["Pressing intensity from central areas","Ball recovery in aggressive duels","Technical quality in tight zones"],weaknesses:["Experience at highest fixture intensity","Long-range output going forward"]},
      {id:1307,name:"Fabián Ruiz",number:8,position:"Central Midfielder",nationality:"Spain",age:28,rating:8.3,strengths:["Long shots from outside the area","Passing tempo into dangerous zones","Intelligence in positioning between lines"],weaknesses:["Defensive contribution when exposed","Physicality in back-to-goal situations"]},
      {id:1308,name:"Ousmane Dembélé",number:10,position:"Right Winger",nationality:"France",age:28,rating:8.8,strengths:["Explosive dribbling with either foot","Creativity in 1v1 situations against full-backs","Goal contribution in the decisive third"],weaknesses:["End product consistency when double-marked","Injury history reliability across congested schedules"]},
      {id:1309,name:"Khvicha Kvaratskhelia",number:77,position:"Left Winger",nationality:"Georgia",age:24,rating:8.7,strengths:["Aggressive solo dribbling down the left","Creativity under pressure","Goal and assist production at elite level"],weaknesses:["Output consistency in big European games","Decisions after bypassing the first opponent"]},
      {id:1310,name:"Gonçalo Ramos",number:9,position:"Centre Forward",nationality:"Portugal",age:24,rating:8.3,strengths:["Movement in the box to find pockets","Finishing with both feet","Pressing to win the ball high"],weaknesses:["Physical presence against top centre-backs","Aerial duels lead role"]},
    ]
  },
  91: { // Monaco
    team:{id:91,name:"Monaco",logo:teamLogo(91),league:"Ligue 1",coach:"Adi Hütter"},
    players:[
      {id:1400,name:"Radosław Majecki",number:16,position:"Goalkeeper",nationality:"Poland",age:25,rating:7.7,strengths:["Reflex saves in 1v1","Positioning behind a high line","Distribution"],weaknesses:["Aerial command in congested box","Experience under intense European pressure"]},
      {id:1401,name:"Vanderson",number:2,position:"Right Back",nationality:"Brazil",age:23,rating:7.9,strengths:["Explosive wide attacking support","Technical control at pace","Pressing"],weaknesses:["Defensive tracking positioning","Delivery from crossing positions"]},
      {id:1402,name:"Axel Disasi",number:5,position:"Centre Back",nationality:"France",age:27,rating:8.0,strengths:["Physical strength in aerial duels","Recovery pace","Organisation"],weaknesses:["Ball play under press","Positional discipline in complex shapes"]},
      {id:1403,name:"Wilfried Singo",number:22,position:"Right Back",nationality:"Ivory Coast",age:24,rating:7.8,strengths:["Physical intensity wide","Defensive 1v1 physicality","Pressing width"],weaknesses:["Technical crossing delivery","Decision in advanced territory"]},
      {id:1404,name:"Takumi Minamino",number:10,position:"Attacking Midfielder",nationality:"Japan",age:30,rating:8.1,strengths:["Pressing intensity","Technical combination play","Goal contributions from depth"],weaknesses:["Aerial duels","Physical presence against big midfielders"]},
      {id:1405,name:"Denis Zakaria",number:8,position:"Central Midfielder",nationality:"Switzerland",age:28,rating:7.9,strengths:["Defensive intensity","Physical ball recovery","Energy over 90 minutes"],weaknesses:["Creative output going forward","Consistency at highest level"]},
      {id:1406,name:"Eliesse Ben Seghir",number:22,position:"Attacking Midfielder",nationality:"France",age:20,rating:8.0,strengths:["Technical creativity in tight spaces","Dribbling past opponents","Goal production from midfield line"],weaknesses:["Physical robustness","Consistency at senior level"]},
      {id:1407,name:"Wissam Ben Yedder",number:9,position:"Centre Forward",nationality:"France",age:35,rating:7.8,strengths:["Clinical finishing in the box","Movement to find space","Leadership as captain"],weaknesses:["Pace in transition against young defenders","Work rate pressing from the front"]},
    ]
  },
};

// Merge subs into SQUADS to reach 22-man rosters and prevent duplicates
Object.keys(SQUADS).forEach(key => {
  const teamId = parseInt(key);
  const existingNames = new Set(SQUADS[teamId].players.map(p => p.name));
  
  if (TEAM_SUBS[teamId]) {
    const newSubs = TEAM_SUBS[teamId].filter(sub => !existingNames.has(sub.name));
    SQUADS[teamId].players.push(...newSubs);
  } else {
    const needed = 22 - SQUADS[teamId].players.length;
    if (needed > 0) {
      SQUADS[teamId].players.push(...getGenericSubs(teamId, SQUADS[teamId].team.name, needed));
    }
  }
});

// ─── FALLBACK generator for teams not in the map above ────
export function getSquadFallback(teamName, teamId, league) {
  const positions = [
    {p:"Goalkeeper",n:1},
    {p:"Right Back",n:2},{p:"Centre Back",n:4},{p:"Centre Back",n:5},{p:"Left Back",n:3},
    {p:"Central Midfielder",n:6},{p:"Central Midfielder",n:8},{p:"Central Midfielder",n:10},
    {p:"Right Winger",n:7},{p:"Left Winger",n:11},{p:"Centre Forward",n:9},
  ];
  return {
    team:{id:teamId,name:teamName,logo:teamLogo(teamId),league,coach:"Head Coach"},
    players: positions.map((pos,i)=>({
      id: teamId*100+i,
      name: `${teamName} Player ${pos.n}`,
      number: pos.n,
      position: pos.p,
      nationality: "—",
      age: 24,
      rating: 7.5,
      strengths:["Team organisation","Physical intensity","Technical quality"],
      weaknesses:["Aerial duels","Decision-making under press"],
    }))
  };
}
