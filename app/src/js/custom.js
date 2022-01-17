$(document).ready(function () {
  $('#HomdeSlider').carousel({
    interval: false,
    wrap: false
  });

  $('#HomdeSlider').on('slid.bs.carousel', '', function () {
    var $this = $(this);
    
    $('.carousel-control-start').hide();

    if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
      $('.carousel-control-next').hide();
      $('.carousel-control-start').show();
    }
    else if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
      $('.carousel-control-prev').hide();
    }
    else {
      $('.carousel-control-next').show();
      $('.carousel-control-prev').show();
    }
  });
})