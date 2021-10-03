const topPlayer = [
    {name: "Ario", difficulty:"Easy", score: 879},
    {name: "AdN", difficulty:"Hard", score: 865},
    {name: "Beerus", difficulty:"Hard", score: 800},
    {name: "Vianney", difficulty:"Easy", score: 785},
    {name: "You", difficulty:"Easy", score: 800},
  ];

// Test pour la démo : topPlayer[4].score = prompt("enter score");

//Fonction de Classement par ordre décroissant du Leaderboard.
topPlayer.sort(function compare(a, b) {
  if (a.score < b.score){
      return 1;
  } else if (a.score > b.score) {
      return -1;
  } else {
      return 0;
  }
})

//Ajout du contenu des cellules du tableau, Ligne/Ligne. 

//firstPlace:
document.querySelector("#rowOneName").innerHTML = topPlayer[0].name;
document.querySelector("#rowOneDifficulty").innerHTML = topPlayer[0].difficulty;
document.querySelector("#rowOneScore").innerHTML = topPlayer[0].score;

//secondPlace:
document.querySelector("#rowTwoName").innerHTML = topPlayer[1].name;
document.querySelector("#rowTwoDifficulty").innerHTML = topPlayer[1].difficulty;
document.querySelector("#rowTwoScore").innerHTML = topPlayer[1].score;

//thirdPlace:
document.querySelector("#rowThreeName").innerHTML = topPlayer[2].name;
document.querySelector("#rowThreeDifficulty").innerHTML = topPlayer[2].difficulty;
document.querySelector("#rowThreeScore").innerHTML = topPlayer[2].score;

//fourthPlace:
document.querySelector("#rowFourthName").innerHTML = topPlayer[3].name;
document.querySelector("#rowFourthDifficulty").innerHTML = topPlayer[3].difficulty;
document.querySelector("#rowFourthScore").innerHTML = topPlayer[3].score;

//fifthPlace:
document.querySelector("#rowFifthName").innerHTML = topPlayer[4].name;
document.querySelector("#rowFifthDifficulty").innerHTML = topPlayer[4].difficulty;
document.querySelector("#rowFifthScore").innerHTML = topPlayer[4].score;


