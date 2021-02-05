// main.js

// TODO

function honk_Player(){
  event.preventDefault();
  document.getElementById("horn-sound").play();
}

document.getElementById("honk-btn").addEventListener("click",honk_Player);
