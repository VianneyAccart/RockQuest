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

  refresh();

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

  refresh();

  // Consume the event so it doesn't get handled twice
  buttonDown.preventDefault();
}, true);

// Generate a new note
function addNote(noteId, color) {
  const addNoteId = document.getElementById(noteId);
  const addNoteDiv = document.createElement("div");
  addNoteDiv.classList.add("note");
  addNoteDiv.classList.add(color);
  // L'insérer juste après addNoteId
  addNoteId.prepend(addNoteDiv);
}

addNote("noteK", "yellow");
addNote("noteK", "yellow");
addNote("noteL", "blue");