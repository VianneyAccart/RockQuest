// Partitions
const easyMode = {
  S: [89.00, 85.00, 81.00, 77.00, 73.00, 70.00, 69.00, 68.00, 66.00, 63.50, 61.00, 56.00, 55.00, 51.50, 50.30, 46.80, 45.80, 42.30, 41.80, 38.30, 35.80, 35.40, 33.00, 31.40, 30.00, 25.00, 24.00, 22.50, 20.00, 19.00, 17.50, 16.00, 12.50, 11.50, 09.00, 08.00, 6.50, 4.00],
  D: [88.00, 84.00, 80.00, 76.00, 73.00, 69.50, 68.50, 67.50, 65.50, 61.50, 59.00, 57.50, 51.50, 50.30, 46.30, 45.30, 42.80, 41.30, 38.80, 35.20, 35.00, 32.60, 31.00, 29.50, 29.00, 25.50, 21.50, 20.00, 18.00, 17.00, 15.50, 13.00, 11.00, 09.50, 08.50, 6.00],
  K: [87.00, 83.00, 79.00, 75.00, 69.50, 68.50, 67.50, 65.50, 60.50, 59.50, 50.80, 49.80, 46.80, 45.80, 42.80, 41.30, 37.80, 34.60, 34.20, 32.20, 31.00, 29.00, 28.50, 27.50, 26.00, 24.50, 23.00, 22.50, 20.50, 18.00, 15.00, 13.50, 11.50, 10.00, 7, 30, 5.50],
  L: [86.00, 82.00, 78.00, 74.00, 69.00, 68.00, 66.00, 64.00, 60.00, 55.50, 54.50, 50.80, 49.80, 46.30, 45.30, 42.30, 41.80, 37.30, 33.80, 33.40, 31.80, 30.60, 28.50, 27.00, 26.50, 24.50, 24.00, 21.50, 21.00, 19.00, 17.50, 14.50, 14.00, 10.50, 10.00, 7.00, 5.00, 4.00]
};

const mediumMode = {
  S: [88.82, 88.53, 88.25, 87.96, 87.67, 87.38, 87.09, 86.81, 79.61, 79.32, 79.03, 78.74, 78.45, 78.17, 77.88, 77.59, 70.36, 61.71, 56.51, 54.21, 51.90, 50.78, 49.66, 43.24, 42.73, 41.21, 39.26, 38.77, 38.28, 37.79, 37.31, 35.37, 34.16, 33.68, 33.43, 32.23, 31.74, 31.50, 30.29, 29.81, 29.56, 28.36, 27.87, 27.63, 26.42, 25.94, 25.69, 24.49, 24.00, 23.76, 22.55, 22.07, 21.82, 20.62, 19.89, 18.68, 18.20, 17.95, 16.75, 16.02, 14.81, 14.33, 14.08, 12.88, 12.15, 10.94, 10.70, 10.46, 9.61, 8.52, 7.43, 6.95, 6.71, 5.01, 4.77, 4.52],
  D: [86.52, 86.23, 85.94, 85.65, 85.37, 85.08, 84.79, 84.50, 77.30, 77.01, 76.73, 76.44, 76.15, 75.86, 75.57, 75.29, 68.63, 68.05, 61.13, 60.55, 55.94, 47.45, 46.38, 45.31, 43.24, 42.73, 34.76, 33.92, 32.83, 31.98, 30.89, 30.05, 28.96, 28.11, 27.02, 26.18, 25.09, 24.24, 23.15, 22.31, 21.22, 20.49, 20.01, 19.65, 18.56, 17.71, 16.62, 16.14, 15.78, 14.69, 13.84, 12.75, 12.26, 11.54, 10.21, 9.00, 8.76, 8.04, 6.59, 6.10, 5.50],
  K: [84.21, 83.93, 83.64, 83.35, 83.06, 82.77, 82.49, 82.20, 75.00, 74.71, 74.42, 74.13, 73.85, 73.56, 73.27, 72.98, 66.32, 65.74, 59.98, 59.40, 55.36, 51.34, 50.22, 42.22, 41.72, 34.52, 33.80, 32.59, 31.86, 30.65, 29.93, 28.72, 27.99, 26.78, 26.06, 24.85, 24.12, 22.91, 22.19, 20.98, 20.37, 20.13, 19.28, 18.44, 17.35, 16.50, 16.26, 15.41, 14.57, 13.48, 12.63, 12.39, 11.30, 9.97, 8.88, 8.64, 8.28, 7.07, 6.83, 4.89, 4.65, 4.40],
  L: [81.91, 81.62, 81.33, 81.05, 80.76, 80.47, 80.18, 79.89, 64.01, 63.44, 58.82, 54.78, 46.92, 45.85, 42.22, 41.72, 41.21, 39.26, 38.77, 38.28, 37.79, 37.31, 35.13, 34.04, 33.19, 32.10, 31.26, 30.17, 29.32, 28.23, 27.39, 26.30, 25.45, 24.36, 23.52, 22.43, 21.58, 20.25, 19.04, 18.32, 17.11, 16.38, 15.17, 14.45, 13.24, 12.51, 11.91, 10.82, 10.58, 9.37, 7.67, 6.34, 5.74, 5.13]
};

const hardMode = {
  S: [89.99, 89, 88, 87.25, 87, 86.25, 85.25, 84.25, 83.5, 83.25, 82.25, 82, 81, 80, 79.25, 79, 78, 77.75, 76.75, 75.75, 74.75, 74, 73.75, 72.75, 72, 71.25, 70.25, 69.25, 68.25, 67.25, 66.25, 65.25, 64.25, 63.25, 62.25, 61, 60.5, 59, 57.5, 56, 54, 53, 52, 51, 50.5, 47.5, 45, 44.5, 43, 42, 41, 40, 39, 38, 37, 36, 34, 33, 32.75, 31.5, 31.25, 30, 29.75, 28.5, 27, 26.5, 26.25, 24.75, 24.25, 24, 22.5, 22, 21.75, 20.25, 19.75, 18.25, 17.75, 16, 15.5, 14.75, 13.9, 13.3, 12.7, 12.1, 11.5, 10.9, 10.3, 9.7, 8.5, 7.5, 6.5, 5.5, 4.5, 3, 2.8, 2.6, 2.4],
  D: [89.75, 88.75, 87.75, 87, 86.5, 86, 85, 84, 83.25, 82.75, 81.75, 80.75, 79.75, 79, 78.5, 77.5, 76.5, 75.5, 74.5, 73.75, 73.25, 69, 68, 67, 66.5, 65.75, 63.75, 62.5, 61.25, 60, 58.5, 57, 55.5, 54.5, 53.75, 53.25, 52.5, 51.75, 51.25, 50, 48, 47.25, 45.25, 44.75, 43.75, 42.5, 41.5, 40.5, 39.5, 38.5, 37.5, 36.5, 35.5, 34.5, 33.5, 32.5, 31, 29.5, 28, 27.5, 26.75, 25.75, 25.25, 24.5, 23.5, 23, 22.25, 21.25, 20.75, 20, 18.5, 18, 17.5, 17, 15.75, 15.5, 15, 14.5, 13.8, 13.2, 12.6, 12, 11.4, 10.8, 10.2, 9.6, 7, 5, 4, 3.25, 2.9, 2.7, 2.5, 2.3],
  K: [89.5, 88.5, 88, 87.5, 86.75, 85.75, 84.75, 84.25, 83.75, 83, 81.5, 80.5, 80, 79.5, 78.75, 77.25, 76.25, 75.25, 74.75, 74.25, 73.5, 68.5, 68, 67.5, 66.25, 64.25, 63.25, 62.75, 61.5, 60.5, 59, 57.5, 56, 54.5, 53, 52.5, 51, 49.5, 47.75, 46.75, 44.5, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 32.25, 30.75, 29.25, 28.25, 27.25, 26, 25, 24.25, 23.75, 22.75, 22, 21.5, 20.5, 19.75, 19.25, 18.75, 17.25, 16.75, 16.25, 16.75, 15.25, 15, 14.25, 13.7, 13.1, 12.5, 11.9, 11.3, 10.7, 10.1, 9.5, 8, 6, 5, 3.75, 2.2],
  L: [89.25, 88.25, 87.25, 86.75, 85.5, 84.5, 83.5, 83, 82.5, 81.25, 80.25, 79.25, 78.75, 78.25, 77, 76, 75, 74, 73.5, 73, 69, 67.5, 66.75, 64.75, 63, 61.75, 59.5, 58, 56.5, 55, 53.5, 51.5, 49, 46.5, 46, 44.25, 42.5, 41.5, 40.5, 39.5, 38.5, 37.5, 36.5, 35.5, 34.5, 33.5, 32, 31.75, 30.5, 30.2, 29, 28.75, 27.75, 26.5, 23.25, 22.25, 21, 20, 19.5, 16.5, 16, 15.25, 14, 13.6, 13, 12.4, 11.8, 11.2, 10.6, 10, 9.4, 9, 7.5, 7, 5.5, 4.5, 3.5, 2.1]
};

// Scores du joueur 
let playerScore = 0
let playerMode = null;
const playerScoreDisplay = document.querySelector(".player-score");
const playerScoreDisplayMobile = document.querySelector(".player-score-mobile");
playerScoreDisplay.innerHTML = playerScore.toString();
playerScoreDisplayMobile.innerHTML = playerScore.toString();

// Au clic sur un bouton de difficulté, lance la partition associée
let launchGamePopup = document.querySelector(".launch-game-popup");
let launchGameCountdown = document.querySelector(".launch-game-countdown"); // Pop-up 3, 2, 1...
let easyGame = document.getElementById("launch-btn-easy");
let mediumGame = document.getElementById("launch-btn-medium");
let hardGame = document.getElementById("launch-btn-hard");
const receptor = document.querySelector(".receptor");
let allReceptors = document.querySelectorAll(".receptor");

function noteManagement(color) { // L'argument doit être un string
  let colorNotes = document.getElementsByClassName(color);
  let colorNote = null;
  if (timeleft > 0) {
    if (colorNotes.length > 0) {
      if (colorNotes.length === 1) {
        colorNote = colorNotes[0];
      } else {
        colorNote = colorNotes[colorNotes.length - 1];
      }
      if (((parseInt(colorNote.style.top) + colorNote.offsetHeight) < receptor.offsetTop) && colorNote.classList.contains(color)) {
        colorNote.classList.add("grey");
        colorNote.classList.remove(color);
        colorNote.classList.add("miss");
        colorNote.innerHTML = "-20";
        miss.play();
        if (playerScore !== 0) {
          playerScore -= 20;
          playerScoreDisplay.innerHTML = playerScore.toString();
          playerScoreDisplayMobile.innerHTML = playerScore.toString();
        }
      } else if (((receptor.offsetTop - receptor.offsetHeight) < parseInt(colorNote.style.top) < (receptor.offsetTop + receptor.offsetHeight)) && colorNote.classList.contains(color)) {
        colorNote.remove();
        playerScore += 20;
        switch (color) {
          case "green":
            allReceptors[0].classList.add("success");
            allReceptors[0].classList.add("score");
            allReceptors[0].innerHTML = "+20";
            break;
          case "red":
            allReceptors[1].classList.add("success");
            allReceptors[1].classList.add("score");
            allReceptors[1].innerHTML = "+20";
            break;
          case "yellow":
            allReceptors[2].classList.add("success");
            allReceptors[2].classList.add("score");
            allReceptors[2].innerHTML = "+20";
            break;
          case "blue":
            allReceptors[3].classList.add("success");
            allReceptors[3].classList.add("score");
            allReceptors[3].innerHTML = "+20";
            break;
        }
      }
      playerScoreDisplay.innerHTML = playerScore.toString();
      playerScoreDisplayMobile.innerHTML = playerScore.toString();
    }
  }
}

const trackS = document.querySelector("#noteS");
const trackD = document.querySelector("#noteD");
const trackK = document.querySelector("#noteK");
const trackL = document.querySelector("#noteL");

function addListenerMobile() {
  const buttonS = document.querySelector(".button-s");
  const buttonD = document.querySelector(".button-d");
  const buttonK = document.querySelector(".button-k");
  const buttonL = document.querySelector(".button-l");
  buttonS.addEventListener(
    "touchstart",
    function (buttonDown) {
      // Lorsqu'une touche est pressée
      trackS.style.background =
        "linear-gradient(rgba(0, 0, 0, 0.54), 90%, green)";
      noteManagement("green");
    },
    true
  );
    buttonS.addEventListener(
      "touchend",
      function () {
      // Consume the event so it doesn't get handled twice
      trackS.style.background = "none";
      trackS.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
      allReceptors[0].classList.remove("success");
      allReceptors[0].classList.remove("score");
      allReceptors[0].innerHTML = "";
    },
    true
  );
  buttonD.addEventListener(
    "touchstart",
    function (buttonDown) {
      // Lorsqu'une touche est pressée
      trackD.style.background =
        "linear-gradient(rgba(0, 0, 0, 0.54), 90%, red)";
      noteManagement("red");
    },
    true
  );
  buttonD.addEventListener(
    "touchend",
    function () {
      trackD.style.background = "none";
      trackD.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
      allReceptors[1].classList.remove("success");
      allReceptors[1].classList.remove("score");
      allReceptors[1].innerHTML = "";
    },
    true
  );
  buttonK.addEventListener(
    "touchstart",
    function (buttonDown) {
      // Lorsqu'une touche est pressée
      trackK.style.background =
        "linear-gradient(rgba(0, 0, 0, 0.54), 90%, yellow)";
      noteManagement("yellow");
    },
    true
  );
  buttonK.addEventListener(
    "touchend",
    function () {
      trackK.style.background = "none";
      trackK.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
      allReceptors[2].classList.remove("success");
      allReceptors[2].classList.remove("score");
      allReceptors[2].innerHTML = "";
    },
    true
  );
  buttonL.addEventListener(
    "touchstart",
    function (buttonDown) {
      // Lorsqu'une touche est pressée
      trackL.style.background =
        "linear-gradient(rgba(0, 0, 0, 0.54), 90%, blue)";
      noteManagement("blue");
    },
    true
  );
  buttonL.addEventListener(
    "touchend",
    function () {
      trackL.style.background = "none";
      trackL.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
      allReceptors[3].classList.remove("success");
      allReceptors[3].classList.remove("score");
      allReceptors[3].innerHTML = "";
    },
    true
  );
}

function addListener() {
  document.addEventListener("keydown", function (buttonDown) { // Lorsqu'une touche est pressée
    if (buttonDown.defaultPrevented) {
      return; // Do nothing if event already handled
    }
    switch (buttonDown.code) {
      case "KeyS":
        trackS.style.background = "linear-gradient(rgba(0, 0, 0, 0.54), 90%, green)";
        noteManagement("green");
        break;
      case "KeyD":
        trackD.style.background = "linear-gradient(rgba(0, 0, 0, 0.54), 90%, red)";
        noteManagement("red");
        break;

      case "KeyK":
        trackK.style.background = "linear-gradient(rgba(0, 0, 0, 0.54), 90%, yellow)";
        noteManagement("yellow");
        break;
      case "KeyL":
        trackL.style.background = "linear-gradient(rgba(0, 0, 0, 0.54), 90%, blue)";
        noteManagement("blue");
        break;
    }

    // Consume the event so it doesn't get handled twice
    buttonDown.preventDefault();
  }, true);

  document.addEventListener("keyup", function (buttonDown) {
    if (buttonDown.defaultPrevented) {
      return; // Do nothing if event already handled
    }

    switch (buttonDown.code) {
      case "KeyS":
        trackS.style.background = "none";
        trackS.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
        allReceptors[0].classList.remove("success");
        allReceptors[0].classList.remove("score");
        allReceptors[0].innerHTML = "";
        break;
      case "KeyD":
        trackD.style.background = "none";
        trackD.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
        allReceptors[1].classList.remove("success");
        allReceptors[1].classList.remove("score");
        allReceptors[1].innerHTML = "";
        break;
      case "KeyK":
        trackK.style.background = "none";
        trackK.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
        allReceptors[2].classList.remove("success");
        allReceptors[2].classList.remove("score");
        allReceptors[2].innerHTML = "";
        break; s
      case "KeyL":
        trackL.style.background = "none";
        trackL.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
        allReceptors[3].classList.remove("success");
        allReceptors[3].classList.remove("score");
        allReceptors[3].innerHTML = "";
        break;
    }

    // Consume the event so it doesn't get handled twice
    buttonDown.preventDefault();
  }, true);
}

function gameDifficult(mode) {
  launchGamePopup.style.display = "none";
  launchGameCountdown.style.display = "flex";
  startCountdown(mode);
}

easyGame.addEventListener("click", function () {
  playerMode = "easy";
  launchSong.play();
  gameDifficult(easyMode);
})

mediumGame.addEventListener("click", function () {
  playerMode = "medium";
  launchSong.play();
  gameDifficult(mediumMode);
})

hardGame.addEventListener("click", function () {
  playerMode = "hard";
  launchSong.play();
  gameDifficult(hardMode);
})

let countdown = document.querySelector(".countdown"); // Paragraphe qui contient le décompte
let progressBar = document.querySelector("#progressBar"); // Barre de progression sur desktop
let countdownOnDesktop = document.querySelector("#countdownTextDesktop"); // Décompte affiché sur desktop
let countdownOnMobile = document.querySelector("#countdownTextMobile"); // Décompte affiché sur mobile
let endGamePopup = document.querySelector(".end-game-popup");
let timeleft = 9000;
let audio = new Audio('/song/game-song.mp3');
let miss = new Audio('song/missNote.mp3');
let launchSong = new Audio('song/singleNoteLaunchMode.mp3');

// Lancement du décompte : 3, 2, 1...
function startCountdown(mode) {
  let secondsleft = 3000;
  setInterval(function () {
    secondsleft -= 1000;
    countdown.innerHTML = Math.abs((secondsleft / 1000));
    if (secondsleft == 0) {
      launchGameCountdown.style.display = "flex";
      countdownTimer(mode);
    }
  }, 1000);
};

// Lancement du décompte de 90 à 0
function countdownTimer(mode) {
  launchGameCountdown.style.display = "none";
  audio.play();
  addListener();
  addListenerMobile()
  let round = setInterval(function () {
    timeleft--;
    countdownOnDesktop.innerHTML = timeleft / 100;
    countdownOnMobile.innerHTML = timeleft / 100;
    if (timeleft <= 0) {
      clearInterval(round);
      endGamePopup.style.display = "flex";
      let finalScore = document.querySelector(".end-played-score");
      finalScore.innerHTML = playerScore;
      if (playerMode === "easy") {
        const easyCurrentScore = localStorage.getItem("rockQuestEasy");
        if (easyCurrentScore == null || easyCurrentScore < playerScore)
          localStorage.setItem("rockQuestEasy", playerScore);
      } else if (playerMode === "medium") {
        const mediumCurrentScore = localStorage.getItem("rockQuestMedium");
        if (mediumCurrentScore == null || mediumCurrentScore < playerScore)
          localStorage.setItem("rockQuestMedium", playerScore);
      } else {
        const hardCurrentScore = localStorage.getItem("rockQuestHard");
        if (hardCurrentScore == null || hardCurrentScore < playerScore)
          localStorage.setItem("rockQuestHard", playerScore);
      };
    }
    noteGenerating(mode);
  }, 10);
}

// Définit combien de notes addNote() doit générer selon la difficulté choisie
function noteGenerating(mode) {
  if (mode.S.some(note => note === timeleft / 100)) {
    addNote("noteS", "green");
  }
  if (mode.D.some(note => note === timeleft / 100)) {
    addNote("noteD", "red");
  }
  if (mode.K.some(note => note === timeleft / 100)) {
    addNote("noteK", "yellow");
  }
  if (mode.L.some(note => note === timeleft / 100)) {
    addNote("noteL", "blue");
  }
}

// Génère une nouvelle note
function addNote(noteId, color) {
  const newNoteId = document.getElementById(noteId);
  const newNoteDiv = document.createElement("div");
  newNoteDiv.classList.add("note");
  newNoteDiv.classList.add(color);
  newNoteId.prepend(newNoteDiv);
  function myMove() { // Permet le défilement des notes
    let pos = 0; // newNoteDiv commence en position 0
    let tracksHeight = document.querySelector(".track").offsetHeight;
    let notePosIncrementer = tracksHeight / 50; // On peut ici modifier la vitesse de descente des notes
    setInterval(frame, 20); // Ne jamais modifier cette ligne
    function frame() {
      pos += notePosIncrementer;
      newNoteDiv.style.top = pos + 'px'; // La valeur du top de newNoteDiv augmente toutes les 1 frames = la note descend
    }
  }
  myMove();
  setTimeout(() => {
    newNoteDiv.remove()
  }, 1000); // Supprime les notes générées après 1 seconde
}