//= require ../lib/_jquery
//= require ../lib/_jquery_ui
//= require ../lib/_jquery.tocify
//= require ../lib/_imagesloaded.min
(function (global) {
  'use strict';

  var closeToc = function() {
    $(".tocify-wrapper").removeClass('open');
    $("#nav-button").removeClass('open');
  };

  var makeToc = function(scrollToHeight) {

    global.toc = $("#toc").tocify({
      selectors: 'h1, h2',
      extendPage: false,
      theme: 'none',
      smoothScroll: false,
      showEffectSpeed: 0,
      showAndHideOnScroll: true,
      hideEffectSpeed: 180,
      ignoreSelector: '.toc-ignore',
      highlightOffset: scrollToHeight + 1,
      scrollTo: scrollToHeight,
      scrollHistory: true,
      hashGenerator: function (text, element) {
        return element.prop('id');
      }
    }).data('toc-tocify');

    $("#nav-button").click(function() {
      $(".tocify-wrapper").toggleClass('open');
      $("#nav-button").toggleClass('open');
      return false;
    });

    $(".page-wrapper").click(closeToc);
    $(".tocify-item").click(closeToc);
  };

  // Hack to make already open sections to start opened,
  // instead of displaying an ugly animation
  function animate() {
    setTimeout(function() {
      toc.setOption('showEffectSpeed', 180);
    }, 50);
  }

  $(function() {  
    var width = $( window ).width();
    var scrollToHeight = 95;
    if (width < 930) {
      scrollToHeight = 25;
    }

    makeToc(scrollToHeight);
    animate();
    setupLanguages($('body').data('languages'));
    $('.content').imagesLoaded( function() {
      global.toc.calculateHeights();
    });

    $('body').on('click', '.page-wrapper a, .search-results a', function(e) {    
      var id = $(this).attr('href');
      if (id.substring(0,1) == '#') {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(id).offset().top - scrollToHeight
        }, 500);
      }    
    });
    
  });
})(window);

