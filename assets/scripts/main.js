// main.js

// TODO

function horn_Player(){
  event.preventDefault();
  document.getElementById("horn-sound").play();
}

function change_Horn(){
    if(document.getElementById("radio-air-horn").checked){
        document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
    }
    else if(document.getElementById("radio-car-horn").checked){
        document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    }
    else if(document.getElementById("radio-party-horn").checked){
        document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
        document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    }
}
document.getElementById("honk-btn").addEventListener("click",horn_Player);
document.getElementById("audio-selection").addEventListener("change",change_Horn);
