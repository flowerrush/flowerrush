AppName.Modules.ThemeModule = (function() {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  var _privateMethod = function() {
    // private stuff
  };

  var _slider = function() {
  $('.hero-slider').slick({
    lazyLoad: 'ondemand',
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<i class="slick-next fas fa-chevron-right"></i>',
    prevArrow: '<i class="slick-prev fas fa-chevron-left"></i>',
    responsive: [
      {
        breakpoint: 600,
        settings: {
          dots: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
        }
      }
    ]
  });
};

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function() {
    _privateMethod();
    _slider();
  };

  return {
    init: init
  };
})();
