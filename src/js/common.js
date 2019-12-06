define(["jquery"], function($) {
    
//    console.log('Fobiya'); 

  
    
    
// ===========================================================  
// Pixel Perfect MODUL
// ===========================================================  
    
//    $(document).ready(function() {
//                $('body').each(function() {
//                    var body = $(this);
//                    var img_url = $(this).data('img');
//                    var img = new Image();
//                    img.src = img_url;
//                    img.onload = function() {
//                        var ppbox = '<div id="images__back" style="background: url(' + img_url + ') no-repeat 50% 0%;top:0;width:100%;position:absolute;z-index:1000;opacity:.9;height:' + img.height + 'px"></div>';
//                        body.append(ppbox);
//                    };
//                });
//
//        $('html').click(function() {
//            $('#images__back').toggleClass('front__end');
//        });
//    }); 

// =========================================================== 
// END Pixel Perfect MODUL
// =========================================================== 
    
    

// =========================================================== 
// Scroll LINK
// =========================================================== 
    
   $('a[href^="#"].scroll').click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    
// =========================================================== 
// END Scroll LINK
// =========================================================== 
    
    
    
// =========================================================== 
// Scroll BAR
// ===========================================================  
    

    $(window).scroll(function() {
        // calculate the percentage the user has scrolled down the page
        var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

        $('.bar-long').css('width', scrollPercent + "%");

    });
    
 
// =========================================================== 
// END Scroll BAR 
// ===========================================================
    
    
    
    
    
    $('.blue').click(function progress() {
        var pers = 0;
        var interval = setInterval(function() {
            let t = pers++ + "%";
            $(".pers").text(t);
            $(".pl_l").css("width", t);
            if (pers == 60) $(".pr span").css("color", "#fff");
            if (pers > 80) clearInterval(interval);
        }, 1);
    });

    
$('.anim-button').click(function(){

  $('ul.menu__ul').toggleClass('open');

});  
    
// =========================================================== 
// SLICK SLIDER FULL NAVIGATION
// ===========================================================    

//    
//  $('.slick7__arrow__next').click(function() { 
//    $slider__block__7.slick('slickNext');
//  });
// 
//  $('.slick7__arrow__prev').click(function() {
//    $slider__block__7.slick('slickPrev');
//  });
//    
//    
//  var $slider__block__7 = $('.slider__block__7');
//
//
//    $( document ).ready(function() {
//        $slider__block__7.slick({
//            prevArrow: '.slick7__arrow__prev',
//            nextArrow: '.slick7__arrow__next',
//            arrows: false,
//
//
//            fade: false,
//            dots: false,
//            arrows: false,
//
//            infinite: true,
//
//            slidesToShow: 1,
//            slidesToScroll: 1,
//
//              speed: 500,
//              fade: true,
//              cssEase: 'linear'
//
//    //        responsive: [{
//    //            breakpoint: 1620,
//    //            settings: {
//    //
//    //                vertical: false,
//    //                dots: true,
//    //                arrows: false,
//    //                slidesToShow: 3,
//    //                slidesToScroll: 1,
//    //
//    //            }
//    //        }, {
//    //            breakpoint: 950,
//    //            settings: {
//    //                vertical: false,
//    //                dots: true,
//    //                arrows: true,
//    //                slidesToShow: 2,
//    //                slidesToScroll: 1,
//    //            }
//    //        }, {
//    //            breakpoint: 650,
//    //            settings: {
//    //                vertical: false,
//    //                dots: true,
//    //                arrows: true,
//    //                slidesToShow: 1,
//    //                slidesToScroll: 1,
//    //            }
//    //        }]
//
//        });
//    });
//
//    $slider__block__7.on('init', function(event, slick){
//      slideCount = slick.slideCount;
//      setSlideCount();
//      setCurrentSlideNumber(slick.currentSlide);
//    });
//
//    $slider__block__7.on('beforeChange', function(event, slick, currentSlide, nextSlide){
//      setCurrentSlideNumber(nextSlide);
//    });
//
//    function setSlideCount() {
//      var $el = $('.slide-count-wrap').find('.total');
//      $el.text(slideCount);
//    }
//
//    function setCurrentSlideNumber(currentSlide) {
//      var $el = $('.slide-count-wrap').find('.current');
//      $el.text(currentSlide + 1);
//    } 

// =========================================================== 
// END SLICK SLIDER FULL NAVIGATION 
// ===========================================================       
    
    
    
//    
//    
//    
//    
//function timerToCookie() {
//    function getCookie(c_name) {
//        var i, x, y, ARRcookies = document.cookie.split(";");
//        for (i = 0; i < ARRcookies.length; i++) {
//            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
//            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
//            x = x.replace(/^\s+|\s+$/g, "");
//            if (x == c_name) {
//                return unescape(y);
//            }
//        }
//    }
//    function setCookie(c_name, value, exdays) {
//        var exdate = new Date();
//        exdate.setDate(exdate.getDate() + exdays);
//        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
//        document.cookie = c_name + "=" + c_value;
//    }
//
//    var coki = getCookie('timer');
//    //coki = false
//    var end;
//    console.log(coki);
//
//    if (coki) {
//        end = coki;
//    } else {
//        end = new Date();
//        setCookie('timer', end.getTime(), 14)
//    }
//
//    var _milisec = 10;
//    var _second = _milisec * 100;
//    var _minute = _second * 60;
//    var _hour = _minute * 60;
//    var _day = _hour * 24;
//
//    var parentElem = $('.timer'),
//        day = parentElem.find('.timer-days span.val'),
//        hour = parentElem.find('.timer-hours span.val'),
//        min = parentElem.find('.timer-minutes span.val'),
//        sec = parentElem.find('.timer-seconds span.val'),
//        mili = parentElem.find('.timer-milliseconds span.val');
//
//    function showRemaining() {
//        var now = new Date();
//        var distance = end - now + 480000;
//
//        if (distance < 0) {
//
//            day.text("00");
//            hour.text("00");
//            min.text("00");
//            sec.text("00");
//            mili.text("00");
//
//            clearInterval(intervalTimer);
//            return;
//        }
//
//        var days = Math.floor(distance / _day);
//        var hours = Math.floor((distance % _day) / _hour);
//        var minutes = Math.floor((distance % _hour) / _minute);
//        var seconds = Math.floor((distance % _minute) / _second);
//        var miliseconds = Math.floor((distance % _second) / _milisec);
//
//        if (seconds < 10) seconds = '0' + seconds;
//        if (minutes < 10) minutes = '0' + minutes;
//        if (hours < 10) hours = '0' + hours;
//        if (days < 10) days = '0' + days;
//
//        day.text(days);
//        hour.text(hours);
//        min.text(minutes);
//        sec.text(seconds);
//        mili.text(miliseconds);
//    };
//
//    var intervalTimer = setInterval(showRemaining, 8);
//}
//    
//    
    
    

  
// =========================================================== 
// Fancybox
// =========================================================== 


    //$("#open-policy").on('click', function() {
    //  
    //  $.fancybox.open({
    //    src : '',
    //    type : 'html',
    //    smallBtn : false
    //  });
    //    
    ////    $('.next-form').click(function() {
    ////
    ////        $.fancybox.open({
    ////	   src  : '#trueModal'
    ////
    ////});
    ////});
    //  
    //});


    
// =========================================================== 
// END Fancybox
// ===========================================================    
    
    
    
    
    
// =========================================================== 
// INPUT MASK
// ===========================================================    


    $(document).ready(function(){
//        $('[type="tel"]').inputmask("+1(999)999-99-99");
//        $('[name="zipcode"]').inputmask('99999'); 
//        $('[name="ferstname"]').inputmask();
//        $('[name="lastname"]').inputmask();
    });

// =========================================================== 
// END INPUT MASK
// ===========================================================     
    
    
    
    
    
// =========================================================== 
// checkbox input click
// ===========================================================   


    //$(document).ready(function(){ 
    //    
    //    
    //    
    //  $('[type="checkbox"]').click(function(){
    //      
    ////      console.log('1');
    //      
    //  
    //      
    //
    //        if ($(this).prop('checked')) {
    //           $('#bot').addClass('chek');
    //          
    //              $('#bot').removeAttr('disabled');
    //             $('[type="checkbox"]').removeClass('errore');
    //            
    //            
    //        } else {
    //             $('#bot').attr('disabled', true);
    //            $('[type="checkbox"]').addClass('errore');
    //        };
    //
    //  });
    //
    //});


    
// =========================================================== 
// END checkbox input click
// ===========================================================    
    
    
    
    
  
 /* Countdown start */

			
//           $(document).ready(function(){ 
//		
//		
//				$('#countdown_dashboard').countDown({
//					targetDate: {
//						'day': 		1,
//						'month': 	9,
//						'year': 	2019,
//						'hour': 	23,
//						'min': 		0,
//						'sec': 		0
//					}
//				});
//
//				
//		});	


/* Countdown END */


});