setTimeout(function() {
    $(".loader-wrapper").fadeToggle();
    $('body').css('overflow','hidden');
}, 3600);

let leafs = document.getElementById('Feuille');
let leafsLeft = document.getElementById('FG');
let leafsRight = document.getElementById('FD');
let entrance = document.getElementById('grotteEntrance_1_')
let perspective = document.querySelector('.perspective');

function leafsOut() {
    leafsLeft.classList.add("left-transition");
    leafsRight.classList.add("right-transition");
    entrance.style.display = 'contents';

    setTimeout(function () {
        leafsLeft.classList.remove("left-transition");
        leafsRight.classList.remove("right-transition");
        entrance.style.display = 'none';
    }, 5000);
};
leafs.addEventListener('mouseover', leafsOut, false);


function travelling() {
    perspective.style.animationPlayState = 'running';
    
    setTimeout(function () {
        perspective.style.display = 'none';
    }, 1200);
};
entrance.addEventListener('click', travelling, false);