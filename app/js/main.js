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

  $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-one__tabs .tabs, settings__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
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

