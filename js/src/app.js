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

// $(function() {
//     var activeTab = document.querySelector(location.hash);
//     if (activeTab) {
//       activeTab.click();
//     }
//   });


// $(document).ready(function() {

//     //When page loads...
//     $(".tabs-content .tabs-inn").hide(); //Hide all content
//     $(".tabs li:first a").addClass("active").show(); //Activate first tab
//     $(".tabs-content .tabs-inn:first").show(); //Show first tab content

//     //On Click Event
//     $(".tabs li a").click(function() {

//         $(".tabs li a").removeClass("selected"); //Remove any "active" class
//         $(this).addClass("selected"); //Add "active" class to selected tab
//         $(".tabs-content .tabs-inn").hide(); //Hide all tab content

//         var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
//         $(activeTab).fadeIn(); //Fade in the active ID content
//         $(".tabs-content .tabs-inn").show();
//         return true;
//     });


// });

var showTab = function(selector) {
    $('.tabs-inn').hide()
    $(selector).show();
}

$('.tabs a').click(function(event) {
    var $el = $(event.target).closest('a')
    var id = $el.attr('id')
    showTab('#' + id)
});

$(function() {
    var selector = window.location.hash
    if (selector) {
        showTab(selector)
    }
    // $('.nav-tabs a').addClass('active');
})