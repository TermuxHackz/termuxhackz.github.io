$(document).ready(function() {
  var mainMenu = $('.main-menu');
  
  mainMenu.each(function() {
    var that = $(this), menuLink = that.find('.menu-link');
    var winWidth = $(window).width();
    
    menuLink.click(function(e) {

      var self = $(this), target = self.attr('href'), posTar = $(target).offset().top;
      winWidth = $(window).width();
      
      if ( target.charAt(0) == '#' ) {
        e.preventDefault();

        self.parent().addClass('active');
        self.parent().siblings().removeClass('active');
      }
      
      $("body, html").animate({
        scrollTop: posTar
      }, 1000 );

      if(winWidth < 600) {
        setTimeout(function() {
          $('.minibar').slideUp();
        }, 500);
      }
      return false;
      
      // if ( $(this).charAt(0) == '#' ) {
      //   e.preventDefault();

      //   var self = $(this), target = self.attr('href'), posTar = $(target).offset().top;
      //   winWidth = $(window).width();
        
      //   self.parent().addClass('active');
      //   self.parent().siblings().removeClass('active');
        
      //   $("body, html").animate({
      //     scrollTop: posTar
      //   }, 1000 );
        
      //   if(winWidth < 600) {
      //     setTimeout(function() {
      //       $('.minibar').slideUp();
      //     }, 500);
      //   }
      //   return false;
      // }
    });
  });
  
  $.fn.toggleSelected = function(options) {
    var defaults = $.extend({
      classes: 'selected',
      itemSelector: this.children(),
    });
    
    return this.each(function() {
      var that = $(this);
      var o = defaults;
      var sel = o.itemSelector;
      
      sel.click(function() {
        var self = $(this);
        self.addClass(o.classes);
        self.siblings().removeClass(o.classes);
      });
    });
  };
  
  $('[data-toggle="selected"]').toggleSelected();
});

$(document).ready(function() {
  // Nice select
  $('.vg-select').niceSelect();

  // Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Page animation initialize
  new WOW().init();
  
  // Back to top
  var backTop = $(".btn-back_to_top");
  
  $(window).scroll(function() {
    if($(document).scrollTop() > 400) {
      backTop.css('visibility', 'visible');
    }
    else if($(document).scrollTop() < 400) {
      backTop.css('visibility', 'hidden');
    }
  });
  
  backTop.click(function() {
    $('html').animate({
      scrollTop: 0
    }, 1000);
    return false;
  });
  
  var $grid = $('.gridder').isotope({
    itemSelector: '.grid-item',
    percentPosition: true
  });
  
  // filter items on button click
  $('.filterable-button').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
  $('.testi-carousel').owlCarousel({
    margin: 0,
    loop: true,
    autoplay: true,
    dots: false,
    autoplayTimeout: 4000,
    items: 1,
  });
  
  $('.toggle-menu').click(function() {
    $('.minibar').slideToggle();
  });
  
  $('#sideel').click(function() {
    $(this).parents('.config').toggleClass('active');
  });
  
  $('body').data('bodyClassList', '');
  
  $('.color-item').click(function() {
    var cls = $(this).data('class');
    
    $('body').attr('class', $('body').data('bodyClassList'));
    $('body').addClass(cls);
  });
  
  $('#change-page').on('change', function() {
    var url = $(this).val() + '.html';
    
    if($(this).val()) {
      window.location.assign(url);
    }
  });
  
  $('[data-animate="scrolling"]').each(function() {
    var self = $(this);
    var target = $(this).data('target') ? $(this).data('target') : $(this).attr('href');
    
    self.click(function(e) {
      $('body, html').animate({ scrollTop: $(target).offset().top }, 1000);
      return false;
    });
  });
});

/*
 *  Counter
 *
 *  Require(" jquery.animateNumber.min.js ", " jquery.waypoints.min.js ")
 */
$(document).ready(function() {
  var counterInit = function() {
  if ( $('.section-counter').length > 0 ) {
    $('.section-counter').waypoint( function( direction ) {

      if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
        $('.number').each(function(){
          var $this = $(this),
            num = $this.data('number');
          $this.animateNumber(
            {
              number: num,
              numberStep: comma_separator_number_step
            }, 5000
          );
        });
        
      }

    } , { offset: '95%' } );
  }

}
counterInit();
});