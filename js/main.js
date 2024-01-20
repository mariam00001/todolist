"use strict"
$("#setting i").on("click", function () {
    let gearWidth = $(".gear-box").innerWidth();
    $("#setting").animate({ left: `-${gearWidth}` }, 1000)
})
$("#setting span").on("click", function () {
    $("#setting").animate({ left: '0px' }, 1000)
})
$(".gear-box [href='#']").on("click", function (e) {
    let click = $(e.target).attr("href");
    let topElement = $(click).offset().top;
    $("html,body").animate({ scrollTop: topElement }, 2000)
})
$(".comb-content:first").css("display", "block")
$(".item").on("click", function () {
    $(".comb-content").slideUp()
    $(this).next(".comb-content").slideDown()
})
let countDown = new Date("sept 21,2024 24").getTime();
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDife = countDown - dateNow
    let days = Math.floor(dateDife / (1000 * 60 * 60 * 24))
    let hours = Math.floor((dateDife % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minuts = Math.floor((dateDife % (1000 * 60 * 60)) / (1000 * 60))
    let second = Math.floor((dateDife % (1000 * 60)) / 1000);
    document.querySelector(".days").innerHTML = -days
    document.querySelector(".hours").innerHTML = hours
    document.querySelector(".minuts").innerHTML = minuts
    document.querySelector(".second").innerHTML = second
}, 1000)
let textarea = $("textarea").attr("maxlength")
$(".text").html(`<span class='text-danger'>${textarea}</span>Characyer Reamining`)
$("textarea").on("keyup", function () {
    let key = $(this).val().length;
    console.log(key);
    let final = textarea - key
    $(".text").html(`<span class='text-danger'>${final}</span> Characyer Reamining`)
})



