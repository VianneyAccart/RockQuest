const trackS = document.querySelector("#noteS")
const trackD = document.querySelector("#noteD")
const trackK = document.querySelector("#noteK")
const trackL = document.querySelector("#noteL")

document.addEventListener("keydown", function (buttonDown) {
  if (buttonDown.defaultPrevented) {
    return; // Do nothing if event already handled
  }

  switch (buttonDown.code) {
    case "KeyS":
      trackS.style.background = "linear-gradient(rgba(0, 0, 0, 0.54), 90%, green)";
      break;
    case "KeyD":
      trackD.style.background = "linear-gradient(rgba(0, 0, 0, 0.54), 90%, red)";
      break;
    case "KeyK":
      trackK.style.background = "linear-gradient(rgba(0, 0, 0, 0.54), 90%, yellow)";
      break;
    case "KeyL":
      trackL.style.background = "linear-gradient(rgba(0, 0, 0, 0.54), 90%, blue)";
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
      break;
    case "KeyD":
      trackD.style.background = "none";
      trackD.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
      break;
    case "KeyK":
      trackK.style.background = "none";
      trackK.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
      break; s
    case "KeyL":
      trackL.style.background = "none";
      trackL.style.backgroundColor = "rgba(0, 0, 0, 0.54)";
      break;
  }

  // Consume the event so it doesn't get handled twice
  buttonDown.preventDefault();
}, true);

// Permet aux boutons Easy, Medium et Hard de lancer le décompte
let launchBtn = document.querySelectorAll(".launch-btn");
for (let i = 0; i < launchBtn.length; i++) {
  launchBtn[i].addEventListener('click', function () {
    document.querySelector(".launch-game-popup").style.display = "none";
    document.querySelector(".launch-game-countdown").style.display = "flex";
    startCountdown();
  }
  )
}

// Partitions
const easyMode = {
  S: [59, 55, 51, 47, 43, 39, 35, 31, 27, 23, 19, 15, 11, 7, 3],
  D: [57, 55, 52, 50, 47, 45, 42, 40, 37, 35, 32, 30, 27, 25, 22, 20, 17, 15, 12, 10, 7, 5, 2],
  K: [58, 56, 54, 52, 50, 45, 40, 38, 36, 34, 30, 28, 26, 24, 22, 20, 18, 16, 14, 10, 8, 6, 4, 2],
  L: [59, 58, 53, 50, 49, 44, 41, 40, 39, 34, 31, 30, 25, 22, 21, 16, 13, 12, 9, 5, 3, 1]
};

const mediumMode = {
  S: [59, 57, 55, 53, 51, 47, 46, 45, 43, 41, 39, 37, 36, 35, 34, 33, 29, 27, 25, 23, 21, 17, 16, 15, 11, 10, 7, 6, 5, 3],
  D: [57, 56, 55, 52, 51, 50, 48, 47, 45, 42, 40, 38, 37, 35, 33, 32, 30, 28, 27, 25, 22, 20, 17, 15, 12, 11, 10, 8, 7, 4, 2],
  K: [58, 56, 54, 52, 50, 45, 40, 38, 36, 34, 30, 28, 26, 24, 22, 20, 18, 16, 14, 10, 8, 6, 4, 2],
  L: [59, 58, 53, 50, 49, 44, 41, 40, 39, 34, 31, 30, 25, 22, 21, 16, 13, 12, 9, 5, 3, 1]
};

const hardMode = {
  S: [59, 55, 52, 50, 46, 42, 37, 34, 30, 26, 22, 20, 16, 10, 1],
  D: [57, 49, 45, 43, 39, 34, 32, 29, 19, 9],
  K: [55, 53, 51, 47, 46, 41, 35, 32, 28, 22, 17, 14, 11, 8],
  L: [58, 54, 48, 44, 31, 28, 22, 5]
};

// Génère une nouvelle note
function addNote(noteId, color) {
  const newNoteId = document.getElementById(noteId);
  const newNoteDiv = document.createElement("div");
  newNoteDiv.classList.add("note");
  newNoteDiv.classList.add(color);
  newNoteId.prepend(newNoteDiv);

  // Permet le défilement des notes
  function myMove() {
    let pos = 0; // newNoteDiv commence en position 0
    let tracksHeight = document.querySelector(".track").offsetHeight;
    let notePosIncrementer = tracksHeight / 250; // On peut ici modifier la vitesse de descente des notes
    setInterval(frame, 1);
    function frame() {
      pos += notePosIncrementer;
      newNoteDiv.style.top = pos + 'px';
    }
  }
  myMove();
  setTimeout(() => newNoteDiv.remove(), 2000); // Supprime les notes générées après 2 secondes
}

// Génère des notes selon la difficulté choisie
function noteGenerating(mode) {
  if (mode.S.some(note => note === timeleft)) {
    addNote("noteS", "green");
  }
  if (mode.D.some(note => note === timeleft)) {
    addNote("noteD", "red");
  }
  if (mode.K.some(note => note === timeleft)) {
    addNote("noteK", "yellow");
  }
  if (mode.L.some(note => note === timeleft)) {
    addNote("noteL", "blue");
  }
}

let countdown = document.querySelector(".countdown"); // Paragraphe qui contient le décompte
let timeleft = 60; // Durée d'une partie en secondes

// Lancement du décompte : 3, 2, 1...
function startCountdown() {
  let secondsleft = 3000;
  setInterval(function () {
    secondsleft -= 1000;
    countdown.innerHTML = Math.abs((secondsleft / 1000));
    if (secondsleft == 0) {
      document.querySelector(".launch-game-countdown").style.display = "flex";
      countdownTimer();
    }
  }, 1000);
};

// Lancement du décompte de 60 à 0
function countdownTimer() {
  document.querySelector(".launch-game-countdown").style.display = "none";
  let downloadTimer = setInterval(function () {
    document.querySelector("#progressBar").value = 60 - timeleft;
    timeleft--;
    document.querySelector("#countdownTextDesktop").innerHTML = timeleft;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.querySelector(".end-game-popup").style.display = "flex";
    }
    document.querySelector("#countdownTextMobile").innerHTML = timeleft;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.querySelector(".end-game-popup").style.display = "flex";
    }

    noteGenerating(mediumMode);

  }, 1000);
}
