// Sound Function you can use her in HTML with onclick="" or in JS spell her sound(sound)
function sound(sound)
{
        let audio = document.createElement('audio');
        audio.preload = 'auto';

        let wavSource = document.createElement('source');
        wavSource.src = sound+'.wav';
        wavSource.type = 'audio/wav';

        let mp3Source = document.createElement('source');
        mp3Source.src = sound+'.mp3';
        mp3Source.type = 'audio/mpeg';

        audio.appendChild(wavSource);
        audio.appendChild(mp3Source);
        audio.play();
};

// Partitions
const easyMode = {
  S: [89.00,85.00,81.00,77.00,73.00,70.00,69.00,68.00,66.00,63.50,61.00,56.00,55.00,51.50,50.30,46.80,45.80,42.30,41.80,],
  D: [88.00,84.00,80.00,76.00,73.00,69.50,68.50,67.50,65.50,61.50,59.00,51.50,50.30,46.30,45.30,42.80,41.30,],
  K: [87.00,83.00,79.00,75.00,69.50,68.50,67.50,65.50,60.50,59.50,50.80,49.80,46.80,45.80,42.80,41.30,],
  L: [86.00,82.00,78.00,74.00,69.00,68.00,66.00,64.00,60.00,55.50,54.50,50.80,49.80,46.30,45.30,42.30,41.80,]

};

const mediumMode = {
  S: [59, 57, 55, 53, 51, 47, 46, 45, 43, 41, 39, 37, 36, 35, 34, 33, 29, 27, 25, 23, 21, 17, 16, 15, 11, 10, 7, 6, 5, 3],
  D: [57, 56, 55, 52, 51, 50, 48, 47, 45, 42, 40, 38, 37, 35, 33, 32, 30, 28, 27, 25, 22, 20, 17, 15, 12, 11, 10, 8, 7, 4, 2],
  K: [58, 56, 54, 52, 50, 45, 40, 38, 36, 34, 30, 28, 26, 24, 22, 20, 18, 16, 14, 10, 8, 6, 4, 2],
  L: [59, 58, 53, 50, 49, 44, 41, 40, 39, 34, 31, 30, 25, 22, 21, 16, 13, 12, 9, 5, 3, 1]
};

const hardMode = {
  S: [89, 88, 86, 8, 59, 58, 53, 52, 50, 46, 42, 37, 34, 30, 26, 22, 20, 16, 10, 1],
  D: [88.8, 88, 58, 57, 54, 45, 43, 39, 34, 32, 29, 19, 9],
  K: [88.6, 87.7, 57, 56, 51, 47, 46, 41, 35, 32, 28, 22, 17, 14, 11, 8],
  L: [88.3, 87.2, 59, 55, 48, 44, 31, 28, 22, 5]
};

// Scores du joueur 
let playerScore = 0
let playerMode = null;
const playerScoreDisplay = document.querySelector(".player-score");
playerScoreDisplay.innerHTML = playerScore.toString();

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
        sound('song/missNote');
        if (playerScore !== 0) {
          playerScore -= 20;
          playerScoreDisplay.innerHTML = playerScore.toString();
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
  buttonS.addEventListener("touchstart", function (buttonDown) { // Lorsqu'une touche est pressée
    if (buttonDown.defaultPrevented) {
      return; // Do nothing if event already handled
    }
    trackS.style.background = "linear-gradient(rgba(0, 0, 0, 0.54), 90%, green)";
    noteManagement("green");
    // Consume the event so it doesn't get handled twice
    touchstart.preventDefault();
  }, true);
  buttonS.addEventListener("touchend", function () {
    /*if (buttonDown.defaultPrevented) {
      return; // Do nothing if event already handled
    }*/
    trackS.style.background = "none";
    trackS.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
    // Consume the event so it doesn't get handled twice
    touchend.preventDefault();
  }, true);
  buttonD.addEventListener("touchstart", function (buttonDown) { // Lorsqu'une touche est pressée
    if (buttonDown.defaultPrevented) {
      return; // Do nothing if event already handled
    }
    trackD.style.background = "linear-gradient(rgba(0, 0, 0, 0.54), 90%, red)";
    noteManagement("red");
    // Consume the event so it doesn't get handled twice
    touchstart.preventDefault();
  }, true);
  buttonD.addEventListener("touchend", function () {
    /*if (buttonDown.defaultPrevented) {
      return; // Do nothing if event already handled
    }*/
    trackD.style.background = "none";
    trackD.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
    // Consume the event so it doesn't get handled twice
    touchend.preventDefault();
  }, true);
  buttonK.addEventListener("touchstart", function (buttonDown) { // Lorsqu'une touche est pressée
    if (buttonDown.defaultPrevented) {
      return; // Do nothing if event already handled
    }
    trackK.style.background = "linear-gradient(rgba(0, 0, 0, 0.54), 90%, yellow)";
    noteManagement("yellow");
    // Consume the event so it doesn't get handled twice
    touchstart.preventDefault();
  }, true);
  buttonK.addEventListener("touchend", function () {
    /*if (buttonDown.defaultPrevented) {
      return; // Do nothing if event already handled
    }*/
    trackK.style.background = "none";
    trackK.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
    // Consume the event so it doesn't get handled twice
    touchend.preventDefault();
  }, true);
  buttonL.addEventListener("touchstart", function (buttonDown) { // Lorsqu'une touche est pressée
    if (buttonDown.defaultPrevented) {
      return; // Do nothing if event already handled
    }
    trackL.style.background = "linear-gradient(rgba(0, 0, 0, 0.54), 90%, blue)";
    noteManagement("blue");
    // Consume the event so it doesn't get handled twice
    touchstart.preventDefault();
  }, true);
  buttonL.addEventListener("touchend", function () {
    /*if (buttonDown.defaultPrevented) {
      return; // Do nothing if event already handled
    }*/
    trackL.style.background = "none";
    trackL.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
    // Consume the event so it doesn't get handled twice
    touchend.preventDefault();
  }, true);
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
  sound('song/singleNoteLaunchMode');
  gameDifficult(easyMode);
})

mediumGame.addEventListener("click", function () {
  playerMode = "medium";
  sound('song/singleNoteLaunchMode');
  gameDifficult(mediumMode);
})

hardGame.addEventListener("click", function () {
  playerMode = "hard";
  sound('song/singleNoteLaunchMode');
  gameDifficult(hardMode);
})

let countdown = document.querySelector(".countdown"); // Paragraphe qui contient le décompte
let progressBar = document.querySelector("#progressBar"); // Barre de progression sur desktop
let countdownOnDesktop = document.querySelector("#countdownTextDesktop"); // Décompte affiché sur desktop
let countdownOnMobile = document.querySelector("#countdownTextMobile"); // Décompte affiché sur mobile
let endGamePopup = document.querySelector(".end-game-popup");
let timeleft = 1000;
let audio = new Audio('/song/game-song.mp3');

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
          localStorage.setItem("rockQuestEasy",playerScore);
      } else if (playerMode === "medium") {
        const mediumCurrentScore = localStorage.getItem("rockQuestMedium");
        if (mediumCurrentScore == null || mediumCurrentScore < playerScore)
          localStorage.setItem("rockQuestMedium",playerScore);
      } else {
        const hardCurrentScore = localStorage.getItem("rockQuestHard");
        if (hardCurrentScore == null || hardCurrentScore < playerScore)
          localStorage.setItem("rockQuestHard",playerScore);
      };
    }
    addListener();
    addListenerMobile()
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
  /*setTimeout(() => {
    if ((receptor.offsetTop + receptor.offsetHeight) < parseInt(newNoteDiv.style.top)) playerScore -= 10;
    newNoteDiv.remove(), 2000
  }); // Supprime les notes générées après 2 secondes*/
  setTimeout(() => {
    newNoteDiv.remove()
  }, 1000); // Supprime les notes générées après 2 secondes
}