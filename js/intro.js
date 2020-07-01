//從NASA API抓取網頁背景(每天的背景皆不同)
$.getJSON("https://api.nasa.gov/planetary/apod?api_key=awdjSLpdm9HXLdMUAbDCMQc7OqFCQpkVNtf4gpSv",
    function (getdata) {
        console.log(getdata);
        var bgimg = getdata.hdurl
        console.log(bgimg)
        $("#bg").css('background-image', 'url(' + bgimg + ')');

    }
);
//intro的展開和關閉
$(function () {
    var $popup1 = $('#popup1');
    var $popup2 = $('#popup2');
    var $popup3 = $('#popup3');
    var $popup4 = $('#popup4');
    var HIDE_CLASS = 'is-hide';

    $('#intro-btn1').on('click', function () {
        $popup1.removeClass(HIDE_CLASS);

    });

    $('.closeIntro1').on('click', function () {
        $popup1.addClass(HIDE_CLASS);
    });

    $('#intro-btn2').on('click', function () {
        $popup2.removeClass(HIDE_CLASS);

    });

    $('.closeIntro2').on('click', function () {
        $popup2.addClass(HIDE_CLASS);
    });

    $('#intro-btn3').on('click', function () {
        $popup3.removeClass(HIDE_CLASS);

    });

    $('.closeIntro3').on('click', function () {
        $popup3.addClass(HIDE_CLASS);
    });

    $('#intro-btn4').on('click', function () {
        $popup4.removeClass(HIDE_CLASS);

    });

    $('.closeIntro4').on('click', function () {
        $popup4.addClass(HIDE_CLASS);
    });

    $('#intro-btn5').on('click', function () {
        $popup5.removeClass(HIDE_CLASS);

    });

    $('.closeIntro5').on('click', function () {
        $popup5.addClass(HIDE_CLASS);
    });


});

//copyright時間更新

$(function () {
    $('#footer').each(function () {
        var $today = new Date();
        var $year = $today.getFullYear();
        $(this).append('<p>Copyright &copy;' + $year + ' Huang Hsiang Ming</p>');
    })
});