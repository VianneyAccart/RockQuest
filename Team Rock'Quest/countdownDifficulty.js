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

function resetTimer()
{
    startCountdown();
};