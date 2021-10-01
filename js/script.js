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

// Countdown 60 to 0 sec
/*
let timeleft = 60;
let downloadTimer = setInterval(function(){
    document.getElementById("progressBar").value = 60 - timeleft;
    timeleft-- ;
    document.getElementById("countdownText").innerHTML = timeleft;
    if(timeleft <= 0){clearInterval(downloadTimer);}
   							 	},1000);  

// Countdown start new game and show content 

let timeout,interval;
let startNewPlay = 3000; // 3 secondes (3000ms)
let secondsleft= startNewPlay;
*/
// Quand je clique sur un launch-btn
  // La div launch-game-popup disparait && la div launch-game-countdown apparait
    // Dans la div launch-game-countdown, je veux affiche 3, 2, 1
      // A 0 la div launch-game-countdown disparait && le décompte des 60 sec démarre


let launchBtn =  document.querySelectorAll(".launch-btn");
                for(let i=0;i<launchBtn.length;i++){
                        launchBtn[i].addEventListener('click', function(){
                        document.querySelector(".launch-game-popup").style.display="none";
                        document.querySelector(".launch-game-countdown").style.display="flex"; 
                }                   
                )}                            



 /* function showContent()
 {
    secondsleft-=1000;
    document.querySelector(".div1").innerHTML = "New game start in " + Math.abs((secondsleft/1000))+" secs";  
    
    if(secondsleft == 0)
    {
        //document.getElementById("clickme").style.display="";
        clearInterval(interval);
        document.querySelector(".launch-game-popup").style.display="none";
        document.querySelector(".launch-game-countdown").style.display="flex"; // Pas sûr ici, à vérifier
    }
};

function startCountdown()
{
      clearInterval(interval);
      secondsleft=startNewPlay;
      document.querySelector(".launch-btn").innerHTML = "New game start in " + Math.abs((secondsleft/1000))+" secs";  
       interval= setInterval(function()
       {
           showContent();
       },1000)              
};

/* function resetTimer()
{
    startCountdown();
}; */
 
