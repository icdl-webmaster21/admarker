//service side-bar
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

// for go to top
$('.l-ft-inn-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 300);
    return false;
});

// switch images for top page
$('.sub-menu-02 li a').hover(
    function() {
        $('img.' + $(this).attr('class')).addClass('hovered');
        $('.l-mv-inn-image').addClass('unset');
    },

    function() {
        $('img.' + $(this).attr('class')).removeClass('hovered');
        $('.l-mv-inn-image').removeClass('unset');
    }
);