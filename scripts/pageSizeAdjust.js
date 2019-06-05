$(document).ready(
    function primaryAdjust() {
        var pageWidth = $( window ).width();
        if(pageWidth < 425) {
            $('html').css('font-size', '45%');
            $('.headerText').css('display', 'none');
        }
        else if(pageWidth < 575) {
            $('html').css('font-size', '55%');
            $('.headerText').css('display', 'none');
        }
        else if (pageWidth < 800) {
            $('html').css('font-size', '85%');
            $('.headerText').css('display', 'inline-block');
        }
        else {
            $('html').css('font-size', '100%');
            $('.headerText').css('display', 'inline-block');
        }
    }
);


$(window).resize(
    function autoAdjust() {
        pageWidth = $(window).width();
        if(pageWidth < 425) {
            $('html').css('font-size', '45%');
            $('.headerText').css('display', 'none');
        }
        else if(pageWidth < 575) {
            $('html').css('font-size', '55%');
            $('.headerText').css('display', 'none');
        }
        else if (pageWidth < 800) {
            $('html').css('font-size', '85%');
            $('.headerText').css('display', 'inline-block');
        }
        else {
            $('html').css('font-size', '100%');
            $('.headerText').css('display', 'inline-block');
        }
    }
);