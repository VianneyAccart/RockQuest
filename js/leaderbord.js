let scoreEasy = localStorage.getItem('rockQuestEasy');
let scoreMedium = localStorage.getItem('rockQuestMedium');
let scoreHard= localStorage.getItem('rockQuestHard');

const easyLeaderboard = [ // 149 notes x 20 points = 2980 max
  { name: "AdN", difficulty: "Easy", score: 2800 },
  { name: "Vianney", difficulty: "Easy", score: 2360 },
  { name: "Beerus", difficulty: "Easy", score: 1870 },
  { name: "Ario", difficulty: "Easy", score: 1230 }
];
let playerEasy;
if (scoreEasy != null){
playerEasy = {name: " You", difficulty: "Easy", score: scoreEasy}}
else{ playerEasy = {name: " You", difficulty: "Easy", score:"--"}}

easyLeaderboard.push(playerEasy);

const mediumLeaderboard = [ // 253 notes x 20 points = 5060 max
  { name: "Ario", difficulty: "Medium", score: 4020 },
  { name: "AdN", difficulty: "Medium", score: 3120 },
  { name: "Beerus", difficulty: "Medium", score: 2590 },
  { name: "Vianney", difficulty: "Medium", score: 2020 },
];
let playerMedium;
if (scoreMedium != null){
playerMedium = {name: " You", difficulty: "Medium", score:scoreMedium}}
else{ playerMedium = {name: " You", difficulty: "Medium", score:"--"}}

mediumLeaderboard.push(playerMedium);

const hardLeaderboard = [ // 357 notes x 20 points = 7140 max
  { name: "Ario", difficulty: "Hard", score: 6390 },
  { name: "Vianney", difficulty: "Hard", score: 4580 },
  { name: "Beerus", difficulty: "Hard", score: 2760 },
  { name: "AdN", difficulty: "Hard", score: 1430 }, 
];
let playerHard;
if (scoreHard != null){
playerHard = {name: " You", difficulty: "Hard", score:scoreHard}}
else{ playerHard = {name: " You", difficulty: "Hard", score:"--"}}

hardLeaderboard.push(playerHard);


// Classe les leaderboard par ordre décroissant
function ranking(leaderboard) {
  leaderboard.sort(function compare(a, b) {
    if (a.score < b.score) {
      return 1;
    } else if (a.score > b.score) {
      return -1;
    } else {
      return 0;
    }
  })
}

// Lance le classement de chacun des leaderboard
ranking(easyLeaderboard);
ranking(mediumLeaderboard);
ranking(hardLeaderboard);

// Affiche de base le leaderboard Easy
leaderboardFilling(easyLeaderboard);

// Lors du choix de la difficulté, affiche les valeurs correspondantes dans le tableau
let easyButton = document.querySelector("#leaderboardEasy");
let mediumButton = document.querySelector("#leaderboardMedium");
let hardButton = document.querySelector("#leaderboardHard");

// Fonction qui définit l'affichage du leaderboard correspondant au choix de l'utilisateur
function leaderboardDisplay(difficulty, leaderboard) {
  difficulty.addEventListener("click", function () {
    leaderboardFilling(leaderboard);
  });
}

// Affiche le leaderboard demandé
leaderboardDisplay(easyButton, easyLeaderboard);
leaderboardDisplay(mediumButton, mediumLeaderboard);
leaderboardDisplay(hardButton, hardLeaderboard);

// Alimente le tableau selon le leaderboard sélectionné 
function leaderboardFilling(leaderboard) {
  // Première place
  document.querySelector("#rowOneName").innerHTML = leaderboard[0].name;
  document.querySelector("#rowOneDifficulty").innerHTML = leaderboard[0].difficulty;
  document.querySelector("#rowOneScore").innerHTML = leaderboard[0].score;

  // Deuxième place
  document.querySelector("#rowTwoName").innerHTML = leaderboard[1].name;
  document.querySelector("#rowTwoDifficulty").innerHTML = leaderboard[1].difficulty;
  document.querySelector("#rowTwoScore").innerHTML = leaderboard[1].score;

  // Troisième place
  document.querySelector("#rowThreeName").innerHTML = leaderboard[2].name;
  document.querySelector("#rowThreeDifficulty").innerHTML = leaderboard[2].difficulty;
  document.querySelector("#rowThreeScore").innerHTML = leaderboard[2].score;

  // Quatrième place
  document.querySelector("#rowFourthName").innerHTML = leaderboard[3].name;
  document.querySelector("#rowFourthDifficulty").innerHTML = leaderboard[3].difficulty;
  document.querySelector("#rowFourthScore").innerHTML = leaderboard[3].score;

  // Cinquième place
  document.querySelector("#rowFifthName").innerHTML = leaderboard[4].name;
  document.querySelector("#rowFifthDifficulty").innerHTML = leaderboard[4].difficulty;
  document.querySelector("#rowFifthScore").innerHTML = leaderboard[4].score;
}

