$(document).ready(function () {
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
    accessibility: true
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
  // Banners and slider initialisation end

  // Add active for links on header's navbar
  $('.navigation li').click(function () {
    $('.navigation li').not(this).removeClass('active');
    $(this).toggleClass('active');
  });

// Search field
  $('.search-field').click(function() {
		$('.search-field').toggleClass('active-search');
	});
});