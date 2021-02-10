const ost = new Audio();
ost.src = "sounds/sound-band.mp3";

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
        ost.volume = 0.7;
        ost.play();
        soundOn.style.display = "block";
        soundOff.style.display = "none";
    }
}
soundOff.addEventListener('click', playOst, false);

function pauseOst() {
    if (ost && ost.readyToRock) {
        ost.pause();
        soundOn.style.display = "none";
        soundOff.style.display = "block";
    }
}
soundOn.addEventListener('click', pauseOst, false);

