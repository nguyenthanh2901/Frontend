$(document).ready(function(){
    //////////////SLICK///////////////////////////////
    $('.news-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      responsive: [{

        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }
  
      }, 
      {
  
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          dots: true
        }
  
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      },
       {
  
        breakpoint: 300,
        settings: "unslick" // destroys slick
  
      }]
    });
    //FOOTER-MENU-TOOGLE///
    $('.footer-top-items .items-title').click(function(){
        if($(this).parent().find('.items-detail').attr('class') !== 'items-detail active' ){
            $('.items-detail').removeClass('active');
            $(this).parent().find('.items-detail').toggleClass('active');
        }
        else{
            $(this).parent().find('.items-detail').toggleClass('active');
        }
    })
    $('.menu-toggle').click(function(){
        $('.navbar-menu').addClass('active');
        $('.cover').addClass('active');

    })
    $('.cover').click(function(){
      $('.cover').removeClass('active');
      $('.navbar-menu').removeClass('active');
    })
});