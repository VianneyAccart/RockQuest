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

let timeleft = 60;
let downloadTimer = setInterval(function(){
    document.getElementById("progressBar").value = 60 - timeleft;
    timeleft-- ;
    document.getElementById("countdownText").innerHTML = timeleft;
    if(timeleft <= 0){clearInterval(downloadTimer);}
   							 	},1000);  

// Countdown start new game and show content 

let timeout,interval;
let startNewPlay = 3000;
let secondsleft= startNewPlay;

 function showContent()
 {
    secondsleft-=1000;
    document.querySelector(".div1").innerHTML = "New game start in " + Math.abs((secondsleft/1000))+" secs";  
    
    if(secondsleft == 0)
    {
        //document.getElementById("clickme").style.display="";
        clearInterval(interval);
        document.querySelector(".div1").style.display="none";
        document.querySelector(".div2").style.display="";
    }
};

function startCountdown()
{
      clearInterval(interval);
      secondsleft=startNewPlay;
      document.querySelector(".div1").innerHTML = "New game start in " + Math.abs((secondsleft/1000))+" secs";  
       interval= setInterval(function()
       {
           showContent();
       },1000)              
};

/* function resetTimer()
{
    startCountdown();
}; */
 
