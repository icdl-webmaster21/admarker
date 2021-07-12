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

//servie details tab jquery
$(document).ready(function() {
    $('.tabs a').click(function() {

        $('.service-tab').hide();
        $('.tabs a.active').removeClass('active');
        $(this).addClass('active');

        var panel = $(this).attr('href');
        $(panel).fadeIn(1000);

        return false; // prevents link action

    }); // end click 
    $('.tabs li:first a').click();
});