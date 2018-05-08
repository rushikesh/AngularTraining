export class MovieService {
  constructor() {}
  getMovie() {
    const index = Math.floor(Math.random() * movieList.length);
    return movieList[index];
  }
  generateRandomMovie(delay, callback) {
    setInterval(() => callback(this.getMovie()), delay);
  }
}

const movieList = [
  {
    name: "The Shawshank Redemption",
    runtime: "142 min",
    synopsis:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    name: "The Godfather",
    runtime: "175 min",
    synopsis:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
  },
  {
    name: "The Dark Knight",
    runtime: "152 min",
    synopsis:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
  {
    name: "The Godfather: Part II",
    runtime: "202 min",
    synopsis:
      "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."
  },
  {
    name: "Avengers: Infinity War",
    runtime: "149 min",
    synopsis:
      "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
  },
  {
    name: "Schindler's List",
    runtime: "195 min",
    synopsis:
      "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans."
  },
  {
    name: "Pulp Fiction",
    runtime: "154 min",
    synopsis:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
  },
  {
    name: "The Lord of the Rings: The Return of the King",
    runtime: "201 min",
    synopsis:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
  },
  {
    name: "12 Angry Men",
    runtime: "96 min",
    synopsis:
      "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence."
  },
  {
    name: "The Good, the Bad and the Ugly",
    runtime: "178 min",
    synopsis:
      "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."
  },
  {
    name: "The Lord of the Rings: The Fellowship of the Ring",
    runtime: "178 min",
    synopsis:
      "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
  },
  {
    name: "Inception",
    runtime: "148 min",
    synopsis:
      "A thief, who steals corporate secrets through the use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO."
  },
  {
    name: "Forrest Gump",
    runtime: "142 min",
    synopsis:
      "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75."
  },
  {
    name: "Fight Club",
    runtime: "139 min",
    synopsis:
      "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more."
  },
  {
    name: "Star Wars: Episode V - The Empire Strikes Back",
    runtime: "124 min",
    synopsis:
      "After the rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader."
  },
  {
    name: "The Matrix",
    runtime: "136 min",
    synopsis:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
  },
  {
    name: "Goodfellas",
    runtime: "146 min",
    synopsis:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate."
  },
  {
    name: "The Lord of the Rings: The Two Towers",
    runtime: "179 min",
    synopsis:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard."
  },
  {
    name: "One Flew Over the Cuckoo's Nest",
    runtime: "133 min",
    synopsis:
      "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients."
  },
  {
    name: "Seven Samurai",
    runtime: "207 min",
    synopsis:
      "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves."
  },
  {
    name: "Interstellar",
    runtime: "169 min",
    synopsis:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
  },
  {
    name: "Star Wars: Episode IV - A New Hope",
    runtime: "121 min",
    synopsis:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station while also attempting to rescue Princess Leia from the evil Darth Vader."
  },
  {
    name: "Se7en",
    runtime: "127 min",
    synopsis:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
  },
  {
    name: "Léon: The Professional",
    runtime: "110 min",
    synopsis:
      "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. Léon and Mathilda form an unusual relationship, as she becomes his protégée and learns the assassin's trade."
  },
  {
    name: "The Silence of the Lambs",
    runtime: "118 min",
    synopsis:
      "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims."
  },
  {
    name: "Saving Private Ryan",
    runtime: "169 min",
    synopsis:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action."
  },
  {
    name: "City of God",
    runtime: "130 min",
    synopsis:
      "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer."
  },
  {
    name: "The Usual Suspects",
    runtime: "106 min",
    synopsis:
      "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup."
  },
  {
    name: "Spirited Away",
    runtime: "125 min",
    synopsis:
      "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts."
  },
  {
    name: "Life Is Beautiful",
    runtime: "116 min",
    synopsis:
      "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp."
  },
  {
    name: "It's a Wonderful Life",
    runtime: "130 min",
    synopsis:
      "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed."
  },
  {
    name: "City Lights",
    runtime: "87 min",
    synopsis:
      "With the aid of a wealthy erratic tippler, a dewy-eyed tramp who has fallen in love with a sightless flower girl accumulates money to be able to help her medically."
  },
  {
    name: "Coco",
    runtime: "105 min",
    synopsis:
      "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer."
  },
  {
    name: "Gladiator",
    runtime: "155 min",
    synopsis:
      "When a Roman General is betrayed, and his family murdered by an emperor's corrupt son, he comes to Rome as a gladiator to seek revenge."
  },
  {
    name: "The Lion King",
    runtime: "88 min",
    synopsis:
      "A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities."
  },
  {
    name: "Back to the Future",
    runtime: "116 min",
    synopsis:
      "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown."
  },
  {
    name: "The Green Mile",
    runtime: "189 min",
    synopsis:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift."
  },
  {
    name: "The Prestige",
    runtime: "130 min",
    synopsis:
      "After a tragic accident two stage magicians engage in a battle to create the ultimate illusion whilst sacrificing everything they have to outwit the other."
  },
  {
    name: "Apocalypse Now",
    runtime: "147 min",
    synopsis:
      "During the Vietnam War, Captain Willard is sent on a dangerous mission into Cambodia to assassinate a renegade Colonel who has set himself up as a god among a local tribe."
  },
  {
    name: "The Departed",
    runtime: "151 min",
    synopsis:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston."
  },
  {
    name: "Alien",
    runtime: "116 min",
    synopsis:
      "After a space merchant vessel perceives an unknown transmission as a distress call, its landing on the source moon finds one of the crew attacked by a mysterious lifeform, and they soon realize that its life cycle has merely begun."
  },
  {
    name: "Whiplash",
    runtime: "107 min",
    synopsis:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential."
  },
  {
    name: "Psycho",
    runtime: "109 min",
    synopsis:
      "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother."
  },
  {
    name: "Raiders of the Lost Ark",
    runtime: "115 min",
    synopsis:
      "Archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis."
  },
  {
    name: "The Intouchables",
    runtime: "112 min",
    synopsis:
      "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver."
  },
  {
    name: "Terminator 2",
    runtime: "137 min",
    synopsis:
      "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg."
  },
  {
    name: "Memento",
    runtime: "113 min",
    synopsis:
      "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle."
  },
  {
    name: "American History X",
    runtime: "119 min",
    synopsis:
      "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did."
  },
  {
    name: "The Pianist",
    runtime: "150 min",
    synopsis:
      "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II."
  },
  {
    name: "Casablanca",
    runtime: "102 min",
    synopsis:
      "A cynical nightclub owner protects an old flame and her husband from Nazis in Morocco."
  }
];
