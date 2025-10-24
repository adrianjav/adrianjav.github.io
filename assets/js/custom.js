
$(function() {
    $('ul.nav-tabs li a.nav-link').click(function() {
        var href = $(this).attr('data-ref');

        $('li a.active.nav-link', $(this).parent().parent()).removeClass('active');
        $(this).addClass('active');

        $('.tab-pane.active', $(href).parent()).removeClass('active');
        $(href).addClass('active');

        /*
        var toScroll = $(this).parent().parent().parent().parent();

        $('html, body').animate({
    		scrollTop: toScroll.offset().top
		}, 1000);
		*/

        return false;
    });
});