$('.more-service').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
    } else {
        $this.next().addClass('show');
    }
    if ($this.find(".convert").hasClass("plus")) {
        $this.find(".convert").removeClass('plus').addClass('minus');
    } else {
        $this.find(".convert").removeClass('minus').addClass('plus');
    }
});

// menu trigger js
$('.menu-bar').on('click', function() {
    $('.menu-bar').toggleClass('active');
    $('body').toggleClass('noscroll');
    $('.l-hd-inn').toggleClass('show-menu');
    $('.l-hd-inn-logo').toggleClass('hide');
});


$(".l-mv-inn-image").vegas({
    overlay: true,
    transition: 'fade',
    transitionDuration: 3000,
    delay: 9000,
    animation: 'random',
    animationDuration: 10000,
    slides: [
        { src: "images/slide1.png" },
        { src: "images/slide2.png" },
        { src: "images/slide3.png" },
        { src: "images/slide4.png" },
        { src: "images/slide5.png" },
        { src: "images/slide6.png" },
        { src: "images/slide7.png" },
        { src: "images/slide8.png" },
        { src: "images/slide9.png" }
    ]
});