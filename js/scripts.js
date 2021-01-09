$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplaySpeed: 2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

/* MENU FIJO EN PANTALLA*/
$(document).ready(function(){

    $(window).scroll(function(){
        scroll=$(window).scrollTop();
        if(scroll > 100){
            $(".menu").css({"position":"fixed"});
            $(".menu").css({"width":"100%"});
            $(".menu").css({"top":"0"});
            $(".menu").css({"background":"rgba(0, 0, 0)"});
            $(".menu").css({"box-shadow":"rgba(153,0,102, 0.7) 6px 2px 10px"});
            $(".menu").css({"z-index":"10"});
        }else{
            $(".menu").css({"height":"80px"});
            $(".menu").css({"position":"relative"});
            $(".menu").css({"background":"transparent"});
            $(".menu").css({"box-shadow":"0 0 0"});
        }
    })
})

