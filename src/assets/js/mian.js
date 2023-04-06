(function ($) {
    'use strict'; 
    // product img popup
    $('[data-fancybox="gallery"]').fancybox({
      buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
      ],
      loop: false,
      protect: true
    }); 
   




    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        vertical: true,
     verticalSwiping: true
      });
     
      $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
      });
     
      $(document).ready(function(){
        $('.my-slider').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          speed: 300,
          infinite: true,
          autoplaySpeed: 5000,
          autoplay: true,
          responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
        });
      });
      $(".common-slider").each(function () {
        var $this = $(this);
        var verticalSlide = $(this).attr("data-vertical-slider");
  
        if ($this.children().length > 1) {
          var selectorAppendDots = $this.parent().find(".activate-dots");
          var selectorAppendArrows = $this.parent().find(".activate-arrows");
          var selectorPrevArrow =
            `<span class="arrow-slider arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#FEFEFE" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-left"><polyline points="15 18 9 12 15 6"></polyline></svg></span>`;
          var selectorNextArrow =
            `<span class="arrow-slider arrow-next"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#FEFEFE" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="icon-arrow-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span>`;
  
          $($this).slick({
            infinite: false,
            speed: 500,
            cssEase: "ease",
            swipeToSlide: true,
            vertical: verticalSlide ? true : false,
            verticalSwiping: verticalSlide ? true : false,
            appendDots: selectorAppendDots,
            appendArrows: selectorAppendArrows,
            prevArrow: selectorPrevArrow,
            nextArrow: selectorNextArrow,
            responsive: [{
              breakpoint: 768,
              settings: {
                vertical: false,
                verticalSwiping: false,
              },
            }, ],
          });
        }
      });
           

      $('.pdp-color ').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 7,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1
            }
          }
        
        ]
      });







  })(jQuery);
  const button = document.querySelector("#menu-button");
  const menu = document.querySelector("#menu");

  button.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  $(".button").on("click", function () {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    $button.blur();
    if ($button.hasClass("inc")) {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }

    $button.parent().find("input").val(newVal);

});