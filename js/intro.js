//從NASA API抓取網頁背景(每天的背景皆不同)
$.getJSON("https://api.nasa.gov/planetary/apod?api_key=awdjSLpdm9HXLdMUAbDCMQc7OqFCQpkVNtf4gpSv",
    function (getdata) {
        console.log(getdata);
        var bgimg = getdata.hdurl
        console.log(bgimg)
        $("#bg").css('background-image', 'url(' + bgimg + ')');
    }
);
//introduction展開和關閉
$(function () {
    var $popup = $('#popup');
    var HIDE_CLASS = 'is-hide';

    $('#intro-btn').on('click', function () {
        $popup.removeClass(HIDE_CLASS);

    });

    $('.closeIntro').on('click', function () {
        $popup.addClass(HIDE_CLASS);
    });
});


/*$("#blur").click(function () {
    $("#popup").show();
});

$("").click(function () {
    $("").hide();
});*/
/*function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
}*/
/*$(document).ready(function (toggle()) {
   
    var blur = $("#blur")
    blur.classList.toggle('active')
});*/
/*$(document).ready(function () {
    $("#blur").click(function () {
        var blur = $('#blur');
        $("h2").toggle();
    });
});*/