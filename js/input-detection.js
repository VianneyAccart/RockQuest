const trackS = document.querySelector(".track-s")
const trackD = document.querySelector(".track-d")
const trackK = document.querySelector(".track-k")
const trackL = document.querySelector(".track-l")

window.addEventListener("keydown", function(buttonDown) {
    if (buttonDown.defaultPrevented) {
      return; // Do nothing if event already handled
    }
  
    switch(buttonDown.code) {
      case "KeyS":
        trackS.style.backgroundColor = "green";
        break;
      case "KeyD":
        trackD.style.backgroundColor = "red";
        break;
      case "KeyK":
        trackK.style.backgroundColor = "yellow";
        break;s
      case "KeyL":
        trackL.style.backgroundColor = "blue";
        break;
    }
  
    refresh();
  
    // Consume the event so it doesn't get handled twice
    buttonDown.preventDefault();
  }, true);

  window.addEventListener("keyup", function(buttonDown) {
    if (buttonDown.defaultPrevented) {
      return; // Do nothing if event already handled
    }
  
    switch(buttonDown.code) {
      case "KeyS":
        trackS.style.backgroundColor = "black";
        break;
      case "KeyD":
        trackD.style.backgroundColor = "black";
        break;
      case "KeyK":
        trackK.style.backgroundColor = "black";
        break;s
      case "KeyL":
        trackL.style.backgroundColor = "black";
        break;
    }
  
    refresh();
  
    // Consume the event so it doesn't get handled twice
    buttonDown.preventDefault();
  }, true);