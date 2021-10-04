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
    }, 1000);
}