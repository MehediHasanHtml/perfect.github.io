

jQuery(document).ready(function(){

  $('.fan-area .owl-carousel').owlCarousel({
    'items': 2,
    'center': true,
    'autoplay': true,
    'loop': true,
    'dots': true,
    'nav': true,
    responsiveClass:true,
    responsive:{
        0:{
            
            items:1
        },
        375:{
            items:1
           
        },
        480:{
            items:1
           
        },
        575:{
            items:1
           
        },
        767:{
            items:1
           
        },
        768:{
            items:1,
            center:true
           
        },
        1000:{
            items:2,
           center:true
        }
    }
    

    

  }); 



    $('.gallery-area .owl-carousel').owlCarousel({
    'items': 6,
    
    'autoplay': true,
    'loop': true,
    'dots': true,
    'nav': true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            
        },
        600:{
            items:3,
           
        },

        800:{
            items:4,
           
        },

        1000:{
            items:6,
           
        }
    }
    

  }); 
  

$(window).scroll(function(){
   if($(this).scrollTop() > 300){
    $('.scroll-Top').fadeIn();
   }else{
    $('.scroll-Top').fadeOut();
   }
   
   
  });
   
  $('.scroll-Top').click(function(){
    $('html,body').animate({scrollTop:0}, 1000);
});




  var wow = new WOW(
  {
    boxClass:     'wow',      
    animateClass: 'animated',
    offset:       0,          
    mobile:       true,       
    live:         true,       
    callback:     function(box) {
     
    },
    scrollContainer: null,  
    resetAnimation: true,  
  }
);
wow.init();

});

