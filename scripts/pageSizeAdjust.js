$(document).ready(
    function primaryAdjust() {
        var pageWidth = $( window ).width();
        if(pageWidth < 425) {
            //이 곳이 호출되면 모바일 환경에서 접속한 것으로 간주함
            
            //header.html
            $('html').css('font-size', '75%');
            $('.headerIcon').attr('height', '18px');
            $('.headerRavitLogo').attr('height', '33px');
            $('.headerText').css('display', 'none'); //아니 이거 왜 적용안돼에에ㅔㅔㅔ

            //faq.html
            $('.ques').css('padding', '10px');
            $('.ques').css('padding-left', '17px');
            $('.ques').css('padding-right', '20px');
            $('.ans').css('padding', '10px');
            $('.ans').css('padding-left', '17px');
            $('.ans').css('padding-right', '20px');

            //campusMap.html
            $('#mapImageSelector button').css('width', '47%');
        }
        else if(pageWidth < 575) {
            $('html').css('font-size', '70%');
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
            //$('html').css('font-size', '45%');
            $('.headerText').css('display', 'none');
        }
        else if(pageWidth < 575) {
            //$('html').css('font-size', '55%');
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