(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  // owlCarousel
  $(".game_slider").owlCarousel({
    loop: true,
    center : true,
    stagePadding: 0,
    margin: 30,
    items: 4,
    nav: false,
    dots: false,
    responsive: {
      0: {
        margin: 0,
        stagePadding: 10,
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        margin: 10,
        stagePadding: 100,
        items: 2
      },
      1200: {
        margin: 20,
        stagePadding: 0,
        items: 3
      },
      1500: {
        stagePadding: 0,
        items: 4
      },
      1820: {
        margin: 0,
        stagePadding: 0,
        items: 4
      }
    }
  });

  // owlCarousel
  $(".prod_item_slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    navText: [
      '<img src="assets/img/left.png" alt="">',
      '<img src="assets/img/right.png" alt="">'
    ],
    nav: true,
    dots: false
  });


  // owlCarousel
  $(".rating_slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    navText: [
      '<img src="assets/img/left.png" alt="">',
      '<img src="assets/img/right.png" alt="">'
    ],
    nav: true,
    dots: false
  });

  let gameBlk = document.querySelectorAll('.game_poster_blk')

  gameBlk.forEach(gameBlkAll => {
      gameBlkAll.addEventListener('click', () => {
          removeThis()
          gameBlkAll.classList.add('active')
      })
  });

  function removeThis () {
      gameBlk.forEach(gameBlkAll => {
          gameBlkAll.classList.remove('active')
      } )
  }


 
})(jQuery);
