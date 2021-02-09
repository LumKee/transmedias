$(document).ready(function () {
    $(this).scrollTop(0);
});

// setTimeout(function() {
//     $(".loader-wrapper").fadeToggle();
//     $('body').css('overflow','hidden');
// }, 3600);

let leafs = document.getElementById('Feuille');
let leafsLeft = document.getElementById('FG');
let leafsRight = document.getElementById('FD');

let perspective = document.querySelector('.perspective');

// function leafsOut() {
//     leafs.style.cssText = 'transform: translateY(225px);';
// };
// leafs.addEventListener('mouseover', leafsOut, false);

function leafsOut() {
    leafsLeft.style.cssText = 'transform: translateX(-225px) translateY(200px);';
    leafsRight.style.cssText = 'transform: translateX(225px) translateY(200px);';
};
leafs.addEventListener('mouseover', leafsOut, false);

// function leafsIn() {
//     leafs.style.cssText = 'transform: translateY(0px);';
// };
// leafs.addEventListener('mouseleave', leafsIn, false);

function leafsIn() {
    leafsLeft.style.cssText = 'transform: translateX(0px) translateY(0px);';
    leafsRight.style.cssText = 'transform: translateX(0px) translateY(0px);';
};
leafs.addEventListener('mouseleave', leafsIn, false);

function travelling() {
    perspective.style.animationPlayState = 'running';
};
leafs.addEventListener('click', travelling, false);
