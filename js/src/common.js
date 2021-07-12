$('.more-service .plus').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.parent().next().hasClass('show')) {
        $this.parent().next().removeClass('show');
    } else {
        $this.parent().next().addClass('show');
    }
    if ($this.parent().find(".convert").hasClass("plus")) {
        $this.parent().find(".convert").removeClass('plus').addClass('minus');
    } else {
        $this.parent().find(".convert").removeClass('minus').addClass('plus');
    }
});

// menu trigger js
$('.menu-bar').on('click', function() {
    $('.menu-bar').toggleClass('active');
    $('body').toggleClass('noscroll');
    $('.l-hd-inn').toggleClass('show-menu');
    $('.l-hd-inn-logo').toggleClass('hide');
});

$('.sub-menu-02 li a').hover(
    function() {
        $('img.' + $(this).attr('class')).addClass('hovered');
        $('.l-mv-inn-image').addClass('unset');
    },
    
    function() {
        $('img.' + $(this).attr('class')).removeClass('hovered');
        $('.l-mv-inn-image').removeClass('unset');
    });

// $(".l-mv-inn-image").vegas({
//     overlay: true,
//     transition: 'fade',
//     transitionDuration: 3000,
//     delay: 9000,
//     animation: 'random',
//     animationDuration: 10000,
//     slides: [
//         { src: "images/slide1.png" },
//         { src: "images/slide2.png" },
//         { src: "images/slide3.png" },
//         { src: "images/slide4.png" },
//         { src: "images/slide5.png" },
//         { src: "images/slide6.png" },
//         { src: "images/slide7.png" },
//         { src: "images/slide8.png" },
//         { src: "images/slide9.png" }
//     ]
// });