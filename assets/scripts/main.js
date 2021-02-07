$(document).ready(function(){
    $(this).scrollTop(0);
});

setTimeout(function() {
    $(".loader-wrapper").fadeToggle();
    $('body').css('overflow','visible');
}, 1600);

function closeMenu(){
    document.getElementById("navbar").style.height = "0%";
}
function openMenu(){
    document.getElementById("navbar").style.height = "100%";
}