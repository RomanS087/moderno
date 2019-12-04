$(function(){

      $('.products-slider__inner').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false
      });

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        ratedFill: "#ffa726",
        readOnly: true
      });
      
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 0,
        to: 600,
        prefix: "$"
  });
  
  $('.icon-th-list').on('click', function(){
    $('.products__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active');
  });
  $('.icon-th-large').on('click', function(){
    $('.products__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
  });

  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  }); 
  $('.header__btn-menu').on('click', function(){
    $('.header__box').toggleClass('active');
  }); 
  $('.multiple-items').slick({
    slidesToShow: 3, //сколько слайдов показывать в карусели
    slidesToScroll: 3 // сколько слайдов прокручивать за раз
  });
  var mixer = mixitup('.products__inner-box');
  
    
});

