
let timeleft = 60;
let downloadTimer = setInterval(function(){
    document.getElementById("progressBar").value = 60 - timeleft;
    timeleft-- ;
    document.getElementById("countdownText").innerHTML = timeleft;
    if(timeleft <= 0){clearInterval(downloadTimer);}
   							 	},1000);  