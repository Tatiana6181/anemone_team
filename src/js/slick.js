$('.slick').slick({
    prevArrow: '<button type="button" class="my-slick-prev">&xlarr;</button>',
    nextArrow: '<button type="button" class="my-slick-next">&xrarr;</button>',
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    adaptiveHeight: true,
    slidesToShow: 3,
    variableWidth: true, 
  
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  