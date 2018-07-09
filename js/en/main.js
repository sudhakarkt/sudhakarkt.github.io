function sectionHeight()  {
    var windowHeight = $(window).height();
    var headerHeight = $('header').outerHeight();
    var fixedHeight=0;
    var videoHeight=0;
    if($(window).width()>768)
    {
    fixedHeight=$('.navbar-fixed-top.menuDesktop').outerHeight();
    videoHeight=windowHeight - fixedHeight + 52;
    }
    else
    {
    fixedHeight=$('.menuMobile').outerHeight();		
    videoHeight=windowHeight - fixedHeight;
    }  
    bannerHeight = windowHeight - fixedHeight;      
    if($(window).height()>500)
    {
    $('.banner').css('height',bannerHeight);
    $('.video-container').css('height',videoHeight);
    
    }
    else
    {		
    $('.banner').addClass("landscape");
    $('.video-container').addClass("landscape");    
    }
}
$(document).ready(function()    {   
$("#Div2").append('<link rel="stylesheet" type="text/css" href="/en/Style%20Library/NBO3/css/Mobile.owl.carousel.min.css" />\
                     <link rel="stylesheet" type="text/css" href="/en/Style%20Library/NBO3/css/Mobile.owl.theme.default.min.css" />\
                    <link rel="stylesheet" type="text/css" href="/en/Style%20Library/NBO3/css/mainmobile.css" />\
                    <link rel="stylesheet" type="text/css" href="/en/Style%20Library/NBO3/css/responsivemobile.css" />\
                    <script src="/en/Style%20Library/NBO3/js/Mobile.owl.carousel.js"></script>\
                    <!--[if lte IE 9]><link rel="stylesheet" type="text/css" href="/en/Style%20Library/NBO3/css/mobileIE.css" /><![endif]-->\
                    ');
mobileApp();
$('.tab-pane').append('<div class="backgroundtop"></div>');

//$('.playvideo').show();
//$('.pausevideo').hide();

});


$(window).bind("load", function() {
/*$('.owl-item .item').click(function(e){
    $(this).click();
});*/
$('#tabcarousel .item a, #tabcarousel .owl-prev span, #tabcarousel .owl-next span').click(function(){
    if(!$(this).hasClass('disabled') && !$("#tabcarousel button").hasClass('disabled'))
    {
        $(this).disabled=true;
        //$('.backgroundtop').show(0).delay(650).hide(0);
        $('.backgroundtop').show();
        setTimeout(function(){
            $('.backgroundtop').hide();
            $(this).disabled=false;
        },650);
       }
   });
});

function mobileApp(){
 /*Section-1 Carousel*/
$('#nbo-mobile-banking').owlCarousel({
    loop:true,
    responsiveClass:true,
    autoplay:true,
    autoplaySpeed : 1000,
    fluidSpeed: 1000,
    nav: true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


sectionHeight();
//playVideo();

/*Section-2 Video*/    

$('.pausevideo').click(function(){
    $(this).hide();
    $('.playvideo').show();
});

$('.playvideo').click(function(){
    $(this).hide();
    $('.pausevideo').show();
});

/*Section-4 App-Watch Carousel*/
$('#app-watch').owlCarousel({
    items: 1,
    autoPlay : false,
    fluidSpeed: 1000,
    nav: true,
    dots: false
});

/*Section-5 Tab-Heading Carousel*/
$('#tabcarousel').children().each( function( index ) {
    $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});
var centerval=true;
var responsiveval={"0":{"items":"1"},"769":{"items":"3","nav":"true"},"770":{"items":"5","nav":"true"},"1600":{"items":"5","nav":"true"}};
var loopval=false; 
$('#tabcarousel').addClass("nav-enable");
if ($('#tabcarousel .item').length==1)
{
    centerval=true;
    loopval=false;
    responsiveval={"0":{"items":"1"},"769":{"items":"1"},"770":{"items":"1"},"1600":{"items":"1"}};   
    $('#tabcarousel').removeClass("nav-enable");
}
else if ($('#tabcarousel .item').length==2)
{
    centerval=true;
    loopval=false;
    responsiveval={"0":{"items":"1"},"769":{"items":"2"},"770":{"items":"2"},"1600":{"items":"2"}};   
    width=200;
    $('#tabcarousel').addClass("non-center");
}
else if ($('#tabcarousel .item').length==4 || $('#tabcarousel .item').length==3)
{
    centerval=true;
    loopval=true;
    responsiveval={"0":{"items":"1"},"769":{"items":"3"},"770":{"items":"3"},"1600":{"items":"3"}};
    $('#tabcarousel').addClass("nav-enable");
}



$('#tabcarousel').owlCarousel({
    center: centerval,
    loop: loopval,
    fluidSpeed: 700,
    autoPlay : false,
    nav: true,
    mouseDrag : false,
    dots: false,
    responsive:responsiveval

  
});

$('#tabcarousel').on('click', '.owl-item>div', function() {
    $('#tabcarousel').trigger('to.owl.carousel', $(this).data( 'position' ) );
});
 
 $('#tabcarousel').on('click', 'button', function() {  
    $('#tabcarousel .owl-item.active.center').find("a").click();
    $.each($('#tabcarousel .owl-item'), function (index, value) {
        if($(this).hasClass('center'))
            {
                var match=$(this).find('a').attr('href');
                $.each($('#tabcarousel .owl-item'), function (index, value) {
                    if($(this).find('a').attr('href')==match)
                    {
                        $(this).addClass("active center");
                    }
                });
                
            }
    });
});

/*Section-5 Tab - Content Carousel*/
var tabcontentowl=$('.tab-pane .owl-carousel').owlCarousel({
    items:1,
    autoPlay : true,
    nav: true,
    fluidSpeed: 1000,
    mouseDrag : false,
    dots: true,
    navText: ['Prev','Next']
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


$('.owl-carousel').on('changed.owl.carousel', function(event) {    
        
        if($('.tab-pane.active .owl-prev').hasClass('disabled')){
            $('.tab-pane.active .owl-carousel .owl-nav .owl-prev').hide();
            $('.tab-pane.active .owl-carousel .owl-nav .owl-next').show();        
                                
        }
        if($('.tab-pane.active .owl-next').hasClass('disabled')){
            $('.tab-pane.active .owl-carousel .owl-nav .owl-prev').show();
            $('.tab-pane.active .owl-carousel .owl-nav .owl-next').hide();
            
        }	   
        
});
        
    navtextHeight =$('.tab-pane.active').find('.owl-item.active .col-sm-4.banking-instruction').height() + 20;			    
    if(navtextHeight < 400)
    {
        $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('top',navtextHeight);	
        $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('bottom','inherit');
    }
    else
    {
        $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('top','435px');
        $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('bottom','inherit');
    }

 tabcontentowl.on('changed.owl.carousel', function(event) {
      setTimeout(function(){
            var navtextHeight;
            navtextHeight =$('.tab-pane.active').find('.owl-item.active .col-sm-4.banking-instruction').height() + 20;			    
               if(navtextHeight < 400)
            {
                $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('top',navtextHeight);	
                $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('bottom','inherit');
            }
            else
            {
                $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('top','435px');
                $('.digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-next, .digitalguide-container .tab-pane.active .owl-carousel .owl-nav .owl-prev').css('bottom','inherit');
            }
        },300);
            
});



}
function mobileSlider() {
    var activeslideHeight = $('.owl-carousel .next-screen img').height();
    var activeslideWidth = $('.owl-carousel .active-screen img').width() + 20;
    var instructionHeight = $('.owl-carousel .banking-instruction').outerHeight();
    var slidercontHeight = activeslideHeight + instructionHeight + 10;

    $('.digitalguide-container .tab-content .owl-carousel').css({
        'height' : slidercontHeight,
        'background-size' : activeslideWidth
    });
}


$(window).load(function(){
//$("#mobileAPPPageLayout").show();    
$('#mobileAPPPageLayout .preloader').hide();	
if($(window).width() < 769 ) {
    //mobileSlider();
}

});

$(window).resize(function(){
sectionHeight();
});





$(document).ready(function() {
   
});

var isTop = true;
$(window).on('scroll',function(e){
    if($(this).scrollTop()>=200){
        if(isTop){
            isTop=!isTop;
            $('html').addClass('small-height');
        }
    }else{
        if(!isTop){
            isTop=!isTop;
            $('html').removeClass('small-height');
        }
    }
});