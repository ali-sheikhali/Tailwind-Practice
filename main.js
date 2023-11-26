$(document).ready(function () {
   $('.event-bar').click(function () { 
      $('.active').toggleClass('hidden');
        
    });
   $('.event-hover-nav-bar').mouseenter(function () { 
    $('.all-category').removeClass('hidden')
    });
    $('.event-hover-nav-bar').mouseleave(function () { 
        $('.all-category').addClass('hidden')
        });

     $('.event-top-new-arrival-1').mouseenter(function () { 
      $('.top-new-arrival-1').removeClass('hidden')
     });
     $('.event-top-new-arrival-1').mouseleave(function () { 
      $('.top-new-arrival-1').addClass('hidden')
     });
     $('.event-top-new-arrival-2').mouseenter(function () { 
      $('.top-new-arrival-2').removeClass('hidden')
     });
     $('.event-top-new-arrival-2').mouseleave(function () { 
      $('.top-new-arrival-2').addClass('hidden')
     });
     $('.event-top-new-arrival-3').mouseenter(function () { 
      $('.top-new-arrival-3').removeClass('hidden')
     });
     $('.event-top-new-arrival-3').mouseleave(function () { 
      $('.top-new-arrival-3').addClass('hidden')
     });
     $('.event-top-new-arrival-4').mouseenter(function () { 
      $('.top-new-arrival-4').removeClass('hidden')
     });
     $('.event-top-new-arrival-4').mouseleave(function () { 
      $('.top-new-arrival-4').addClass('hidden')
     });
     $('.Mobile-bar').click(function () { 
      $('.active-mobile-nav').toggleClass('hidden');
     });
     $('.search-nav').click(function () { 
      $('.active-search').toggleClass('hidden');
     });
     $('.active-category').click(function () { 
      $('.cate-mobile-bar').removeClass('hidden');
     });
     $('.Close-category').click(function () { 
      $('.cate-mobile-bar').addClass('hidden');
     });
     $('.active-brand').click(function () { 
      $('.brand-mobile-bar').removeClass('hidden');
     });
     $('.Close-category').click(function () { 
      $('.brand-mobile-bar').addClass('hidden');
     });
     $('.price-active').click(function () { 
      $('.Price-mobile-bar').removeClass('hidden');
     });
     $('.Close-category').click(function () { 
      $('.Price-mobile-bar').addClass('hidden');
     });
     $('.main-shop-acive1').mouseenter(function () { 
      $('.shop-main-active1').removeClass('hidden')
     });
     $('.main-shop-acive1').mouseleave(function () { 
      $('.shop-main-active1').addClass('hidden')
     });
     $('.main-shop-acive2').mouseenter(function () { 
      $('.shop-main-active2').removeClass('hidden')
     });
     $('.main-shop-acive2').mouseleave(function () { 
      $('.shop-main-active2').addClass('hidden')
     });
     $('.main-shop-acive3').mouseenter(function () { 
      $('.shop-main-active3').removeClass('hidden')
     });
     $('.main-shop-acive3').mouseleave(function () { 
      $('.shop-main-active3').addClass('hidden')
     });
     $('.main-shop-acive4').mouseenter(function () { 
      $('.shop-main-active4').removeClass('hidden')
     });
     $('.main-shop-acive4').mouseleave(function () { 
      $('.shop-main-active4').addClass('hidden')
     });
     $('.main-shop-acive5').mouseenter(function () { 
      $('.shop-main-active5').removeClass('hidden')
     });
     $('.main-shop-acive5').mouseleave(function () { 
      $('.shop-main-active5').addClass('hidden')
     });
     $('.main-shop-acive6').mouseenter(function () { 
      $('.shop-main-active6').removeClass('hidden')
     });
     $('.main-shop-acive6').mouseleave(function () { 
      $('.shop-main-active6').addClass('hidden')
     }); 
     $('.click1').click(function(){
      $('.main-img').addClass('hidden')
      $('.main-click1').removeClass('hidden')
      $('.main-click2').addClass('hidden')
      $('.main-click3').addClass('hidden')
      $('.main-click4').addClass('hidden')
     })
     $('.click2').click(function(){
      $('.main-img').addClass('hidden')
      $('.main-click2').removeClass('hidden')
      $('.main-click1').addClass('hidden')
      $('.main-click3').addClass('hidden')
      $('.main-click4').addClass('hidden')
     })
     $('.click3').click(function(){
      $('.main-img').addClass('hidden')
      $('.main-click3').removeClass('hidden')
      $('.main-click2').addClass('hidden')
      $('.main-click1').addClass('hidden')
      $('.main-click4').addClass('hidden')
     })
     $('.click4').click(function(){
      $('.main-img').addClass('hidden')
      $('.main-click4').removeClass('hidden')
      $('.main-click2').addClass('hidden')
      $('.main-click3').addClass('hidden')
      $('.main-click1').addClass('hidden')
     })
     $('.color-click1').click(function () { 
      $('.color-click1').toggleClass('ring-2 ring-red-500');
     });
     $('.color-click2').click(function () { 
      $('.color-click2').toggleClass('ring-2 ring-red-500');
     });
     $('.color-click3').click(function () { 
      $('.color-click3').toggleClass('ring-2 ring-red-500');
     });
     
});

