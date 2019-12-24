$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        $('.bodyoverlay').removeClass('activee');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.bodyoverlay').addClass('activee');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});











$(document).ready(function() {
    
    var owl1=$("#owl-demo1");
 
       
     $('#owl-demo1').owlCarousel({
       loop:true,
       items : 7,
       slideSpeed : 2000,
       nav: false,
       autoplay: true,
       dots: false,
       responsiveClass:true,
       responsive:{
           0:{
               items:2,
               nav:false
           },
           900:{
               items:5,
               nav:false
           },
           1000:{
               items:7,
               nav:false
           }
       }
     });
    });



    $('.owl-2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText : ['<img src="imgs/left.png">','<img src="imgs/right.png">'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })


    








   