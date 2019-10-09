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
    var mixer = mixitup('.products__inner-box');
    
});
$('.multiple-items').slick({
  slidesToShow: 3, //сколько слайдов показывать в карусели
  slidesToScroll: 3 // сколько слайдов прокручивать за раз
});

