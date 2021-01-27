// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    //ambil isi dari href
    var tujuan = $(this).attr('href');
    //tamgkap elemen
    var elemenTujuan = $(tujuan);

    //pindahkan scroll
    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1200, 'easeInOutExpo');

    e.preventDefault();
});

//parallax
//about
$(window).on('load', function () {
    $('.kiri').addClass('muncul');
    $('.kanan').addClass('muncul');
});


$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform': 'translate(0px,' + wScroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px,' + wScroll / 2 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px,' + wScroll / 1.1 + '%)'
    });

    //portfolio
    if (wScroll > 780) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i + 1));
        });
    }

});