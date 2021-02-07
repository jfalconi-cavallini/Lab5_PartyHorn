// main.js

// TODO

function horn_Player(){
  event.preventDefault();
  document.getElementById("horn-sound").play();
}

function change_horn_sound(){
    if(document.getElementById("radio-air-horn").checked){
        document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
    }
    else if(document.getElementById("radio-car-horn").checked){
        document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
    }
    else if(document.getElementById("radio-party-horn").checked){
        document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
    }
}
function change_horn_image(){
  if(document.getElementById("radio-air-horn").checked){
        document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
    }
    else if(document.getElementById("radio-car-horn").checked){
        document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    }
    else if(document.getElementById("radio-party-horn").checked){
        document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    }
}
function update_volume_image(){
    let original_volume = (document.getElementById("horn-sound").volume) * 100;
    if(original_volume == 0){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
        document.getElementById("honk-btn").disabled = true;
    }
    else if(original_volume < 34){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else if(original_volume < 67){
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
        document.getElementById("honk-btn").disabled = false;
    }
    else{
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
        document.getElementById("honk-btn").disabled = false;
    }
}
function update_volume_sound(){
    document.getElementById("horn-sound").volume = (document.getElementById("volume-number").value) / 100;
    document.getElementById("volume-slider").value = document.getElementById("volume-number").value;
    update_volume_image();
}
document.getElementById("honk-btn").addEventListener("click",horn_Player);
document.getElementById("audio-selection").addEventListener("change",change_horn_sound);
document.getElementById("audio-selection").addEventListener("change",change_horn_image);
document.getElementById("volume-number").addEventListener("input", update_volume_sound);
