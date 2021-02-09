$(document).ready(function(){
    $(this).scrollTop(0);
});

setTimeout(function() {
    $(".loader-wrapper").fadeToggle();
    $('body').css('overflow','hidden');
}, 3600);
