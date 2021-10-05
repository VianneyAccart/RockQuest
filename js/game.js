const trackS = document.querySelector("#noteS")
const trackD = document.querySelector("#noteD")
const trackK = document.querySelector("#noteK")
const trackL = document.querySelector("#noteL")

window.addEventListener("keydown", function (buttonDown) {
  if (buttonDown.defaultPrevented) {
    return; // Do nothing if event already handled
  }

  switch (buttonDown.code) {
    case "KeyS":
      trackS.style.background = "linear-gradient(black, 90%, green)";
      break;
    case "KeyD":
      trackD.style.background = "linear-gradient(black, 90%, red)";
      break;
    case "KeyK":
      trackK.style.background = "linear-gradient(black, 90%, yellow)";
      break;
    case "KeyL":
      trackL.style.background = "linear-gradient(black, 90%, blue)";
      break;
  }

  // Consume the event so it doesn't get handled twice
  buttonDown.preventDefault();
}, true);

window.addEventListener("keyup", function (buttonDown) {
  if (buttonDown.defaultPrevented) {
    return; // Do nothing if event already handled
  }

  switch (buttonDown.code) {
    case "KeyS":
      trackS.style.background = "none";
      trackS.style.backgroundColor = "black";
      break;
    case "KeyD":
      trackD.style.background = "none";
      trackD.style.backgroundColor = "black";
      break;
    case "KeyK":
      trackK.style.background = "none";
      trackK.style.backgroundColor = "black";
      break; s
    case "KeyL":
      trackL.style.background = "none";
      trackL.style.backgroundColor = "black";
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

// Generate a new note
function addNote(noteId, color) {
  const addNoteId = document.getElementById(noteId);
  const addNoteDiv = document.createElement("div");
  addNoteDiv.classList.add("note");
  addNoteDiv.classList.add(color);
  // L'insérer juste après addNoteId
  addNoteId.prepend(addNoteDiv);
  setTimeout(() => addNoteDiv.remove(), 2000);
}

// Partitions
const easyMode = {
  S: [59, 55, 52, 50, 46, 42, 37, 34, 30, 26, 22, 20, 16, 10, 1],
  D: [57, 49, 45, 43, 39, 34, 32, 29, 19, 9],
  K: [55, 53, 51, 47, 46, 41, 35, 32, 28, 22, 17, 14, 11, 8],
  L: [58, 54, 48, 44, 31, 28, 22, 5]
};

// Countdown start new game and show content 
let timeout, interval;
let startNewPlay = 3000; // 3 secondes
let secondsleft = startNewPlay;
let countdown = document.querySelector(".countdown"); // Paragraphe qui contient le décompte

// Décompte
function showContent() {
  secondsleft -= 1000;
  countdown.innerHTML = Math.abs((secondsleft / 1000));
  if (secondsleft == 0) {
    clearInterval(interval);
    // document.querySelector(".launch-game-popup").style.display="none";
    document.querySelector(".launch-game-countdown").style.display = "flex";
    progressBarCount();
  }
};

// Lancement du décompte
function startCountdown() {
  clearInterval(interval);
  interval = setInterval(function () {
    showContent();
  }, 1000)
};

// Décompte de 60 à 0
function progressBarCount() {
  document.querySelector(".launch-game-countdown").style.display = "none";
  let timeleft = 60;
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
    // Génère les notes de la partition Easy
    
    if (easyMode.S.some(note => note === timeleft)) {
      addNote("noteS", "green");
    }
    if (easyMode.D.some(note => note === timeleft)) {
      addNote("noteD", "red");
    }
    if (easyMode.K.some(note => note === timeleft)) {
      addNote("noteK", "yellow");
    }
    if (easyMode.L.some(note => note === timeleft)) {
      addNote("noteL", "blue");
    }
  }, 1000);
}