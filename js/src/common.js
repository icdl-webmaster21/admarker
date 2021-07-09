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

$(".l-mv-inn-image").vegas({
    overlay: true,
    transition: 'fade',
    transitionDuration: 4000,
    delay: 10000,
    animation: 'random',
    animationDuration: 20000,
    slides: [
        { src: "images/slide1.png" },
        { src: "images/slide2.png" },
        { src: "images/slide3.png" }
    ]
});