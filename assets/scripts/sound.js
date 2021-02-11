const ost = new Audio();
ost.src = "sounds/sound-band.mp3";
ost.loop = true;

let soundOn = document.querySelector('.sound-on');
let soundOff = document.querySelector('.sound-off');

ost.oncanplaythrough = function () {
    ost.readyToRock = true;
};
ost.onerror = function () {
    console.log("ost file ostFileURL.mp3 failed to load.")
};

function playOst() {
    if (ost && ost.readyToRock) {
        ost.volume = 0.2;
        ost.play();
        ost.muted = false;
        soundOn.style.display = "block";
        soundOff.style.display = "none";
    }
}
soundOff.addEventListener('click', playOst, false);

function muteOst() {
    if (ost && ost.readyToRock) {
        ost.muted = true;
        soundOn.style.display = "none";
        soundOff.style.display = "block";
    }
}
soundOn.addEventListener('click', muteOst, false);

