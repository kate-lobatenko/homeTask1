$(document).ready(function () {

  // Add current year to footer
  let currentYear = (new Date).getFullYear();
  $('#year').text(currentYear);

  // Banners and slider initialisation
  $('.album-banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    accessibility: true,
    dots: true
  });

  $('.clients-slider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    accessibility: true,
    responsive: [{
        breakpoint: 769,
        settings: {
          arrows: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 481,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.our-jobs-slider').slick({
    centerPadding: '60px',
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // Add active for links on header's navbar
  $('.nav-list li').not('.nav-list li.col-search').click(function () {
    $('.nav-list li').not(this).removeClass('active');
    $(this).toggleClass('active');
  });

  // Search field
  $('.search-field').click(function () {
    $('.search-field').toggleClass('active-search');
  });

  // Burger menu
  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('#navigation').toggleClass('open');
  });

  // Progress bar
  $(".progress-bar").each(function(){
    var bar = $(this).find(".bar");
    var val = $(this).find("span");
    var per = parseInt( val.text(), 10);
    var $right = $('.right');
    var $back = $('.back');
  
    $({p:0}).animate({p:per}, {
      duration: 3000,
      step: function(p) {
        bar.css({
          transform: "rotate("+ (45+(p*1.8)) +"deg)"
        });
        val.text(p|0);
      }
    }).delay( 200 );
    
    if (per == 100) {
       $back.delay( 2600 ).animate({'top': '18px'}, 200 );
    }
        
    if (per == 0) {
      $('.left').css('background', 'gray');
    }
      
  });

});