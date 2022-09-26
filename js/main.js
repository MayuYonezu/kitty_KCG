jQuery(function($) {
    $(document).ready(function(){
        $('.slider').slick({
            dots:false,
            slidesToShow:3,
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
                    }
                },
                {
                    breakpoint: 480,
                    settings:{
                        slidesToShow:1,
                    }
                },
            ]
        });
    });
});