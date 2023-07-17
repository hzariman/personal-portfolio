/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/
var words = ['Web Development.', 'Computer Architecture Synthesis.', 'Robotic Systems and Automation.'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 50,
    speed = 70;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

(function($) {

   /**
    * Copyright 2012, Digital Fusion
    * Licensed under the MIT license.
    * http://teamdf.com/jquery-plugins/license/
    *
    * @author Sam Sehnert
    * @desc A small plugin that checks whether elements are within
    *     the user visible viewport of a web browser.
    *     only accounts for vertical position, not horizontal.
    */
 
   $.fn.visible = function(partial) {
     
       var $t            = $(this),
           $w            = $(window),
           viewTop       = $w.scrollTop(),
           viewBottom    = viewTop + $w.height(),
           _top          = $t.offset().top,
           _bottom       = _top + $t.height(),
           compareTop    = partial === true ? _bottom : _top,
           compareBottom = partial === true ? _top : _bottom;
     
     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
 
   };
     
 })(jQuery);

 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);
    

    
/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').live('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $('section');
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();
         // console.log(sections);
			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');
         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});

   $('section#resume').waypoint({function(direction){
      if (direction === "down") {
         alert('Scrolling to Contact');
      } else {
         alert('Scrolling to About');
      }
   },
   context : 'section'});


/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var header = $('header').height();
      var about = $('section#about').outerHeight() + header;
      var resume = $('section#resume').outerHeight() + about;
      var portfolio = $('section#portfolio').outerHeight() + resume;
      var contact = $('section#contact').outerHeight() + portfolio; 

		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');
      var navigation_links = $("#nav-wrap a");

      // console.log("y: " + y + " header: " + header + " about: " + about + " resume: " + resume + " portfolio: " + portfolio + " contact: " + contact);

	   if ( (y > header*.20) && (y < header) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < header*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');

         }
      }

      // if ( (y > about*.20) && (y < about) && ($(window).outerWidth() > 768 ) ) {
      //    navigation_links.parent().removeClass("current");
      //    $("#nav-wrap a[href='#about']").parent().addClass("current");
      // } else {
      //    if (y < about*.20) {
      //       navigation_links.parent().removeClass("current");
      //       $("#nav-wrap a[href='#home']").parent().addClass("current");
      //    }
      // }


      
      // var cond = (y > header) && (y < about);
      // console.log("y: " + y + " header: " + header + " about: " + about + " cond: " + cond);
      switch (true) {
         case (y >= header) && (y < about):
            navigation_links.parent().removeClass("current");
            $("#nav-wrap a[href='#about']").parent().addClass("current");
            break;

         case (y >= about) && (y < resume):
            navigation_links.parent().removeClass("current");
            $("#nav-wrap a[href='#resume']").parent().addClass("current");
            break;
         
         case (y >= resume) && (y < portfolio):
            break;
         
         case (y >= portfolio) && (y < contact):
            navigation_links.parent().removeClass("current");
            $("#nav-wrap a[href='#portfolio']").parent().addClass("current");
            break;
         
         default:
            navigation_links.parent().removeClass("current");
            $("#nav-wrap a[href='#home']").parent().addClass("current");
            // console.log("DEFAULT REACHED");
      }

      $(".item").each(function(i, el) {
         var el = $(el);
         if (el.visible(true)) {
           el.addClass("come-in"); 
         } 
       }
       
       );

       $(".row.about").each(function(i, el) {
         var el = $(el);
         if (el.visible(true)) {
           el.addClass("fadeIn"); 
         } 
       }
       
       );

	});


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });

/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });
      return false;
   });

   wordflick();


});








