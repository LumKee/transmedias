setTimeout(function() {
    $(".loader-wrapper").fadeToggle();
    $('body').css('overflow','hidden');
}, 3600);

let leafs = document.getElementById('Feuille');
let leafsLeft = document.getElementById('FG');
let leafsRight = document.getElementById('FD');
let webgl = document.querySelector('.webgl-content');
let perspective = document.querySelector('.perspective');

function leafsOut() {
    leafsLeft.classList.add("left-transition");
    leafsRight.classList.add("right-transition");
    setTimeout(function() {
            leafsLeft.classList.remove("left-transition");
            leafsRight.classList.remove("right-transition");
    }, 5000);
};
leafs.addEventListener('mouseover', leafsOut, false);


function travelling() {
    perspective.style.animationPlayState = 'running';
    setTimeout(function() {
        webgl.style.display='block';
        perspective.style.display='none';
    }, 1200);
};
leafs.addEventListener('click', travelling, false);
