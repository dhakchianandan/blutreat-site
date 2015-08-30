/**
 * Created by Dhakchianandan on 24/08/15.
 */

function highlightNav(nav) {
    var selectedLink = "a[href='" + nav + "']";
    $(selectedLink).addClass("active");
}

$(function() {
    $('.product-section').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    );
});