let id = null;
function myMove() {
  note = document.querySelector(".note-s");
  let tracks = document.querySelector(".tracks");
  let pos = 0;
  let tracksTopPos = tracks.offsetTop;
    console.log(tracksTopPos);
  let tracksHeight = tracks.offsetHeight;
    console.log(tracksHeight);
  let tracksBottomPos = tracksTopPos + tracksHeight;
    console.log(tracksBottomPos);
  let notePosIncrementer = tracksHeight/250
  console.log(notePosIncrementer);
  let id = setInterval(frame, 1);
  function frame() {
    if (pos == tracksBottomPos) {
      clearInterval(id);
    } else {
      pos = pos+notePosIncrementer;
      note.style.top = pos + 'px';
    }
  }
} 

myMove();

