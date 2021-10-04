// JS for navbar and responsive menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Close the menu when click a link
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

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
}

// Partitions
const easyMode = {
    S: [59, 55, 52, 50, 46, 42, 37, 34, 30, 26, 22, 20, 16, 10, 1],
    D: [57, 49, 45, 43, 39, 34, 32, 29, 19, 9],
    K: [55, 53, 51, 47, 48, 46, 41, 35, 32, 28, 22, 17, 14, 11, 8],
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
            // Créer une nouvelle fonction pour le D.R.Y
        for (let i = 0; i < easyMode.S.length; i++) {
            if (easyMode.S[i] === timeleft) {
                addNote("noteS", "green");
            }
        }
        for (let i = 0; i < easyMode.D.length; i++) {
            if (easyMode.D[i] === timeleft) {
                addNote("noteD", "red");
            }
        }
        for (let i = 0; i < easyMode.K.length; i++) {
            if (easyMode.K[i] === timeleft) {
                addNote("noteK", "yellow");
            }
        }
        for (let i = 0; i < easyMode.L.length; i++) {
            if (easyMode.L[i] === timeleft) {
                addNote("noteL", "blue");
            }
        }
    }, 1000);
}

// Cible la note et les boutons
let myNote = document.querySelectorAll(".note");

// Supprime la note après 2 secondes

setTimeout(function() { 
    for (let i = 0; i < myNote.length; i++) {
        myNote[i].style.display = "none";
    }
}, 2000);

/* PISTES A EXPLORER
* Quand ma note touche le bas de la lettre, elle se supprime.
* DOM.top : position du top + hauteur de l'élément = position bottom
* Faire gaffe, si on appuie trop tot, la note est supprimée => je supprime la note la plus basse.
*/