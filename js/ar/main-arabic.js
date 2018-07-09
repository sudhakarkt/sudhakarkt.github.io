$(document).ready(function()    {
    /*Section-1 Banner Carousel*/


    function updateSliderClass () {
        $(this.owl.baseElement.context).find(".owl-item").removeClass('active-item last-active-item');
        $(this.owl.baseElement.context).find(".owl-item").eq(this.owl.currentItem).addClass('active-item');
        $(this.owl.baseElement.context).find(".owl-item").eq(this.owl.currentItem+this.owl.visibleItems.length).addClass('last-active-item');
    }



    $('#nbo-mobile-banking').owlCarousel({
        itemsCustom: [[0, 1], [769, 1], [770, 1], [1600, 1]],
        autoPlay : 2500,
        rtl:true,
        direction :'rtl',
        slideSpeed: 1000,
        navigation: true,
        pagination: true,
        rewindNav: false
     });

     function sectionHeight()  {
        var windowHeight = $(window).height();
        var headerHeight = $('header').outerHeight();
        var bannerHeight = windowHeight - headerHeight;
        $('.banner').css('height',bannerHeight);
    }
    sectionHeight();

    /*Section-2 Video*/
    $('.pausevideo').click(function(){
        $(this).hide();
        $('.playvideo').show();
    });

    $('.playvideo').click(function(){
        $(this).hide();
        $('.pausevideo').show();
    });

    /*Section-3 (Enabling carousel above mobile device)*/
    if ( $(window).width() > 580 ) {
        $('#mobile-banking-app').owlCarousel({
            itemsCustom: [[0, 1], [580, 2], [1000, 3], [1600, 3]],
            rtl:true,
            direction :'rtl',
            autoPlay : false,
            slideSpeed: 1000,
            navigation: true,
            pagination: false,
            rewindNav: false
        });
    }
    $(".mobilebanking-container .owl-controls").appendTo($(".mobilebanking-container"));
    
    /*Section-4 App-Watch Carousel*/
    $('#app-watch').owlCarousel({
        itemsCustom: [[0, 1], [769, 1], [770, 1], [1600, 1]],
        rtl:true,
        direction :'rtl',
        autoPlay : false,
        slideSpeed: 1000,
        navigation: true,
        pagination: false,
        rewindNav: false,
        afterAction : updateSliderClass
    });

    /*Section-5 Tab-Heading Carousel*/    
    $('#tabcarousel').owlCarousel({
        itemsCustom: [[0, 1], [769, 3], [770, 5], [1600, 5]],
        rtl:true,
        direction :'rtl',
        center: true,
        slideSpeed: 700,
        autoPlay : false,
        navigation: true,
        mouseDrag : false,
        pagination: false,
        rewindNav: false
    });

    $('#tabcarousel .owl-item:first-child .item a').addClass('active');

    $('#tabcarousel .item a').click(function() {
        $('#tabcarousel .item a').removeClass('active');
        $(this).addClass('active');
    });

    /*Section-5 Tab - Content Carousel*/
    $('.tab-pane .owl-carousel').owlCarousel({
        itemsCustom: [[0, 1], [769, 1], [770, 1], [1600,1]],
        rtl:true,
        direction :'rtl',
        autoPlay : false,
        center: true,
        navigation: true,
        slideSpeed: 1000,
        mouseDrag : false,
        pagination: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        rewindNav: false,
        afterAction : updateSliderClass
    });
    
    $('.tab-pane .owl-carousel .owl-next').click(function(){
        if($(this).hasClass('disabled')){
            $(this).hide();
            $(this).prev().show();
        }
    });

    $('.tab-pane .owl-carousel .owl-prev').click(function(){
        if($(this).hasClass('disabled')){
            $(this).hide();
            $(this).next().show();
        }
    });

    /*Section-5 Tab - Content Carousel in mobile*/
    function mobileSlider() {
        var activeslideHeight = $('.next-screen img').height();
        var activeslideWidth = $('.active-screen img').width();
        var instructionHeight = $('.banking-instruction').outerHeight();

        var slidercontHeight = activeslideHeight + instructionHeight + 10;

        console.log(slidercontHeight);    

        $('.digitalguide-container .tab-content .owl-carousel').css({
            'height' : slidercontHeight,
            'background-size' : activeslideWidth
        });
    }

    if($(window).width() < 769 ) {
        mobileSlider();
    }
});

$(window).resize(function(){
    sectionHeight();
});


