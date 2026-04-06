export const TEAM_HISTORY = {
  40: "Founded in 1892, Liverpool FC is one of the most successful clubs in England, boasting numerous domestic and European titles. Anfield is their historic home, famous for the 'You'll Never Walk Alone' anthem.",
  42: "Arsenal FC, founded in 1886, is a cornerstone of English football. Known for the 'Invincibles' season of 2003-04, the club plays its home matches at the Emirates Stadium in North London.",
  50: "Manchester City, founded in 1880, has become a dominant force in world football under Pep Guardiola, winning numerous Premier League titles and their first Champions League in 2023.",
  49: "Chelsea FC, founded in 1905, enjoyed massive success in the 21st century. Based at Stamford Bridge, they are the first London club to win the Champions League.",
  541: "Real Madrid is widely considered the greatest club of the 20th century. With a record number of European Cup/Champions League titles, their iconic white kit and Santiago Bernabéu stadium are legendary.",
  529: "FC Barcelona, founded in 1899, is 'Més que un club' (More than a club). Famous for their Camp Nou stadium and La Masia academy, they play an iconic possession-based style of football.",
  489: "Inter Milan, founded in 1908, is the only Italian club to never have been relegated from the top flight. They famously won the treble under José Mourinho in 2010.",
  496: "Juventus FC, known as the 'Old Lady', is the most successful club in Italian domestic football history. They play in black and white stripes in Turin.",
  157: "Bayern Munich is the undisputed giant of German football. Founded in 1900, they have won countless Bundesliga titles and are a perennial powerhouse in the Champions League.",
  165: "Bayer Leverkusen, historically dubbed 'Neverkusen' for near-misses, achieved a historic invincible domestic double in 2023-24 under Xabi Alonso, shaking German football.",
  85: "Paris Saint-Germain (PSG) is the dominant force in French football. Founded in 1970, the Parc des Princes side has attracted some of the world's biggest superstars.",
  91: "AS Monaco represents the principality of Monaco in the French league. Known for their elite academy, they reached the Champions League final in 2004 and won Ligue 1 in 2017."
};

export function getTeamHistory(teamId, teamName) {
  if (TEAM_HISTORY[teamId]) return TEAM_HISTORY[teamId];
  return `${teamName} is a prominent professional football club competing at the highest level of their domestic league. They have a rich history of developing local talent and competing enthusiastically in cup competitions.`;
}
