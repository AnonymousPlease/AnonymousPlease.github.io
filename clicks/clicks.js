/*global $*/
/*jslint sloppy:true, browser: true*/
$("h1.page-title").text("My code runs!");
function randomMargin() {
    return Math.random() * 200 - 100;
}
var x = $(window).width() / 2;
var y = $(window).height() / 2;
var theta = 0;
var vtheta = Math.PI / 180;
var r = 60;
setInterval(function () {
    $('.logo').css({
        'left': x + r * Math.cos(theta),
        'top': y + r * Math.sin(theta)
    });
    theta = theta + vtheta;
}, 20);