jQuery(function ($) {
   'use strict';
   (function () {})();
   (function () {
      $('#status').fadeOut();
      $('#preloader').delay(200).fadeOut('slow');
   })();
   (function () {
      $('a.scroll').on('click', function (event) {
         var $anchor = $(this);
         $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
         }, 1500, 'easeInOutExpo');
         event.preventDefault();
      });
   }());
   (function () {
      $('.full-height').height($(window).height());
      $(window).resize(function () {
         $('.full-height').height($(window).height());
      });
   })();
   (function () {
      jQuery('.player').mb_YTPlayer();
   })();
   (function () {
      $('#countdown').countdown({ date: '1 july 2024 12:00:00', format: 'on' });
   })();

});
