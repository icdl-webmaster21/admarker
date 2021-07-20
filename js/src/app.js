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
    $('.nav-tabs a').click(function() {

        $('.tabs-inn').hide();
        $('.nav-tabs a.active').removeClass('active');
        $(this).addClass('active');

        var panel = $(this).attr('href');
        $(panel).fadeIn(1000);

        return false; // prevents link action

    }); // end click 

    $('.nav-tabs li:first a').click();

});

//servie with related tab jquery
var showTab = function(selector) {
    $('.tabs-inn').hide();
    $(selector).show();
    $(selector).addClass('active');
    $('.nav-tabs li:first a').removeClass('active');
}


$('.tabs a').click(function(event) {
    var $el = $(event.target).closest('a');
    var id = $el.attr('id');
    showTab('#' + id);
});

$(function() {
    var selector = window.location.hash;
    if (selector) {
        showTab(selector);
        $('.nav-tabs a[href="' + selector + '"]').addClass('active');
    }
})