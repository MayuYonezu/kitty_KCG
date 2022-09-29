jQuery(function($) {
    $(document).ready(function(){
        $('.slider').slick({
            dots:false,
            slidesToShow:3,
            infinite: true, 
            responsive:[
                {
                    breakpoint: 1024,
                    settings:{
                        slidesToShow:3,
                    }
                },
                {
                    breakpoint: 768,
                    settings:{
                        slidesToShow:2,
                        arrows: false, 
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                },
                {
                    breakpoint: 480,
                    settings:{
                        slidesToShow:1,
                        arrows: false, 
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                },
            ]
        });
    });
});