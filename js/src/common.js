//service side-bar
$('.more-service .plus').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.parent().next().hasClass('show')) {
        $this.parent().next().removeClass('show');
        $('.hd-copy').css('position', 'absolute');
    } else {
        $this.parent().next().addClass('show');
        $('.hd-copy').css('position', 'relative');
    }
    if ($this.parent().find(".convert").hasClass("plus")) {
        $this.parent().find(".convert").removeClass('plus').addClass('minus');
        $('.hd-copy').css('position', 'relative');
    } else {
        $this.parent().find(".convert").removeClass('minus').addClass('plus');
        $('.hd-copy').css('position', 'absolute');
    }
});

$(function() {
    $('#mv-img').css({ 'height': (($(window).height()) - 150) + 'px' });

    $(window).bind('resize', function() {
        $('#mv-img').css({ 'height': (($(window).height()) - 150) + 'px' });
    });
});

// menu trigger js
$('.menu-bar').on('click', function() {
    $('.menu-bar').toggleClass('active');
    $('body').toggleClass('noscroll');
    $('.l-hd-inn').toggleClass('show-menu');
    $('.l-hd-inn-logo').toggleClass('hide');
});

// for go to top
$('.l-ft-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 300);
    return false;
});

//Entry Modal
$('#entry-button').click(function(event) {
    event.preventDefault();
    $("#entry").fadeIn();
});
$('#about-recruit').click(function() {
    $("#entry").fadeOut();
});