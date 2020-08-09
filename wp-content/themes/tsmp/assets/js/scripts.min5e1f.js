//==============================================================
// CUSTOM SCRIPTS
// Author: Surendra Budhathoki (www.surendrabudhathoki.com.np)
// 2017
// ==============================================================
$ = jQuery;
var
        loader = $('#loader'),
        author = $('.loader-content .author'),
        companyType = $('.loader-content .company-type'),
        slideMenu = $('.slide-in-menu'),
        menuTitle = $('.slide-in-menu h5'),
        menuItems = $('#secondary-nav'),
        btmLinks = $('.slide-in-menu .btm-links'),
        burgerLines = $(".burger span"),
        closeLines = $(".right-menu-close .close-btn span"),
        slideMenuLeft = $('.slide-in-menu-left'),
        leftMenuTitle = $('.slide-in-menu-left .header-group'),
        leftMenuContent = $('.slide-in-menu-left .peoples-list'),
        dots = $('.lft-nav-trigger .dots span'),
        closeLinesLeft = $(".lft-nav-trigger .close-btn span"),
        highlightSpan1 = $(".fade1"),
        highlightSpan2 = $(".fade2"),
        highlightSpan3 = $(".fade3"),
        highlightSpan4 = $(".fade4"),
        swipeInfo = $("#swipe-tut"),
        wipeText2 = $(".animate-2"),
        tlSplitText = new TimelineMax(),
        tlTitlefade = new TimelineMax(),
        tlMenu = new TimelineLite({paused: true}),
        tlSpans = new TimelineMax({paused: true}),
        tlLeftMenu = new TimelineLite({paused: true}),
        tlLoaderInner = new TimelineLite()
        ;

 


  if ($('body.home').length) {
    var mySplitText = new SplitText('.quote', {type:"chars, words"}),
    numChars = mySplitText.chars.length;
    $('#loader .loader-content').addClass('appear');
  }
  
  if ($('body.interior').length) {
    $('#loader .loader-content').addClass('appear');
    var compLogo = document.querySelector(".loader-content .company-logo");
    compLogo.maskStop = 50,
    compLogo.maskAlpha = 220,
    maskFunc(compLogo),
    tlLoaderInner
  }


// right menu animation
tlMenu
        .staggerTo(burgerLines, 0.2, {x: '100%', ease: Power2.easeIn}, 0.2)
        .add('animateall')
        .fromTo(slideMenu, 0.6, {autoAlpha: 0}, {x: '0%', autoAlpha: 1, ease: Power4.easeInOut}, 'animateall')
        .fromTo(menuTitle, 1.2, {x: '20%', autoAlpha: 0}, {x: '0%', autoAlpha: 1, ease: Power4.easeInOut}, 'animateall-=0.2')
        .fromTo(menuItems, 1.2, {x: '20%', autoAlpha: 0}, {x: '0%', autoAlpha: 1, ease: Power4.easeInOut}, 'animateall-=0.2')
        .fromTo(btmLinks, 1.2, {x: '20%', autoAlpha: 0}, {x: '0%', autoAlpha: 1, ease: Power4.easeInOut}, 'animateall-=0.2')
        .staggerTo(closeLines, 0.2, {width: '25px', ease: Power2.easeIn}, 0.2, 'animateall+=0.3');



// left menu animation
tlLeftMenu
        .staggerTo(dots, 0.2, {scale: '0%', ease: Power2.easeIn}, 0.1)
        .add('animateall')
        .fromTo(slideMenuLeft, 0.6, {autoAlpha: 0}, {x: '0%', autoAlpha: 1, ease: Power4.easeInOut}, 'animateall')
        .fromTo(leftMenuTitle, 1, {x: '-20%', autoAlpha: 0}, {x: '0%', autoAlpha: 1, ease: Power4.easeInOut}, 'animateall')
        .fromTo(leftMenuContent, 1, {x: '-20%', autoAlpha: 0}, {x: '0%', autoAlpha: 1, ease: Power4.easeInOut}, 'animateall')
        .staggerTo(closeLinesLeft, 0.2, {width: '25px', ease: Power2.easeIn}, 0.2, 'animateall+=0.2');

//initiate banner span timeline
if ($('.highlight-text').length) {
    var firstElem = document.querySelector(".animate-1");

    firstElem.maskStop = 0,
            firstElem.maskAlpha = 0,
            maskFunc(firstElem);

    var elemSecond = document.querySelector(".animate-2");
    if ($('.animate-2').length) {
        elemSecond.maskStop = 0,
                elemSecond.maskAlpha = 0,
                maskFunc(elemSecond);
        tlSpans
                //.to(highlightSpan1, 1.5, {autoAlpha: 1, ease: Power4.easeIn})
                .set(highlightSpan1, {className:'+=appear'})
                .to(firstElem, 1.8, {maskAlpha: 220, maskStop: 50, onUpdate: maskFunc, onUpdateParams: [firstElem], ease: Power1.easeInOut
                }, "-=0.5")
                //.to(highlightSpan2, 1.5, {autoAlpha: 1, ease: Power4.easeIn}, "-=1.5")
                .set(highlightSpan2, {className:'+=appear'})
                .to(elemSecond, 1.8, {maskAlpha: 220, maskStop: 50, onUpdate: maskFunc, onUpdateParams: [elemSecond], ease: Power1.easeInOut}, "-=0.1")

                //.to(highlightSpan3, 1.5, {autoAlpha: 1, ease: Power4.easeIn}, "-=1.5")
                .set(highlightSpan3, {className:'+=appear'})
                //.to(highlightSpan4, 1.5, {autoAlpha: 1, ease: Power4.easeIn}, "-=1")
                .set(highlightSpan4, {className:'+=appear'})
                .to(swipeInfo, 1.5, {autoAlpha: 1, ease: Power4.easeIn}, "-=1")
                ;
    } else {
        tlSpans
                //.to(highlightSpan1, 1.5, {autoAlpha: 1, ease: Power4.easeIn})
                .set(highlightSpan1, {className:'+=appear'})
                .to(firstElem, 1.8, {maskAlpha: 220, maskStop: 50, onUpdate: maskFunc, onUpdateParams: [firstElem], ease: Power1.easeInOut
                }, "-=0.5")
                //.to(highlightSpan2, 1.5, {autoAlpha: 1, ease: Power4.easeIn}, "-=1.5")
                .set(highlightSpan2, {className:'+=appear'})
                //.to(highlightSpan3, 1.5, {autoAlpha: 1, ease: Power4.easeIn}, "-=1.5");
                .set(highlightSpan3, {className:'+=appear'});
    }




}

//prevent default search action
jQuery('.searchform').on('submit',function(){
    return false;
});

var rightoffsetY;

// right menu trigger
$(".right-menu-trig").click(function () {
    tlMenu.play();
    rightoffsetY = window.pageYOffset;
    var topY = -rightoffsetY + 'px';
    $('body').addClass('rgt-menu-on');
    $('body').css('top', topY);
    $('.overlay-right').fadeIn(1000);
});

$(".right-menu-close").click(function () {
    tlMenu.reverse();
    $('body').removeClass('rgt-menu-on');
    $('body').scrollTop(rightoffsetY);
    $('.overlay-right').fadeOut(1000);
});

$('.overlay-right').click(function () {
    tlMenu.reverse();
    $('body').removeClass('rgt-menu-on');
    $('body').scrollTop(rightoffsetY);
    $('.overlay-right').fadeOut(1000);
    
});

// Hide Swipe Block
$("#swipe-tut .button").click(function () {
    $('#swipe-tut').fadeOut(1000);
});

// Fade box  trigger
$(".fade-trigger").each(function () {
    var
            fadeBoxWrap = $(this).attr('data-fade-id'),
            $fadeBoxWrap = $('.' + fadeBoxWrap),
            fadeBoxContent = $fadeBoxWrap.find('.fade-content'),
            fadeBoxCloseLines = $fadeBoxWrap.find(".close-btn span"),
            fadeBoxCloseBtn = $fadeBoxWrap.find(".nav-trigger"),
            tlFadeBox = new TimelineMax({paused: true});
    tlFadeBox
            .fromTo($fadeBoxWrap, 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power4.easeInOut})
            .add('animateall')
            .fromTo(fadeBoxContent, 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power4.easeInOut}, 'animateall-=0.5')
            .staggerTo(fadeBoxCloseLines, 0.2, {width: '25px', ease: Power2.easeIn}, 0.2, 'animateall-=0.5');

    $(this).click(function () {
        tlFadeBox.play();
        $('body').addClass('fade-trigger-on');
    });
    fadeBoxCloseBtn.click(function () {
        tlFadeBox.reverse();
        $('body').removeClass('fade-trigger-on');
    });

});

var leftoffsetY;

// left menu trigger
$(".lft-menu-trig").click(function () {
    tlLeftMenu.play();
    leftoffsetY = window.pageYOffset;
    var topY = -leftoffsetY + 'px';
    $('body').addClass('lft-menu-on');
    $('body').css('top', topY);
    $('.overlay-left').fadeIn(1000);
    

});

$(".lft-menu-close").click(function () {
    tlLeftMenu.reverse();
    $('body').removeClass('lft-menu-on');
    $('body').scrollTop(leftoffsetY);
    $('.overlay-left').fadeOut(1000, function(){
        $('.mCSB_container').css('top', 0);
    });
    
    
    
});

$('.overlay-left').click(function () {
    tlLeftMenu.reverse();
    $('body').removeClass('lft-menu-on');
    $('body').scrollTop(leftoffsetY);
    $('.overlay-left').fadeOut(1000, function(){
        $('.mCSB_container').css('top', 0);
    });
    
});







$(document).ready(function () {

  var waypoint = new Waypoint({
    element: document.getElementById('footer'),
    handler: function(direction) {
      document.getElementById('footer-vid').play();
    }
  })
  
  
  var aboutcontroller = new ScrollMagic.Controller();
    //about page 
	if ($('body.about').length && $(window).width() >= 768) {
	
		$("#endless-slider").endlessRiver({
            speed: 30,
            pause: false
        });
	}
	
    if ($('body.about').length && $(window).width() > 1024) {
        

        // pin our main section
        var pinMain = new ScrollMagic.Scene({
            triggerElement: '#main-content',
            triggerHook:0,
            duration:'3200%'
        }) 
        .setPin('#main-content .pin-wrapper', {pushFollowers: false})
        .addTo(aboutcontroller);

        //section quote 2 animation
        var secQ2Tl = new TimelineMax();
        secQ2Tl
            .add('animateall')
            .to($('.sec-quote1'), 1, {autoAlpha:0, ease: Power0.easeNone})
            .to($('.sec-quote2'), 1, {autoAlpha:1, ease: Power0.easeNone},'animateall')
            .to($('.sec-quote1 .txt-wrap'), 1, {css: {top: "-50px"}, ease: Power0.easeNone}, 'animateall-=0.4')
            .fromTo($('.sec-quote2 .txt-wrap'), 1, {css:{top: "50px"}}, {css: {top: "0px"}, ease: Power0.easeNone},'animateall-=0.4')
            ;
        var secQ2AnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-quote2-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '100%'
        })
        .on('enter', function () {
            $('.sec-quote2').addClass('on-top');
        })
        .setTween(secQ2Tl)
        .addTo(aboutcontroller);

        //section quote 3 animation
        var secQ3Tl = new TimelineMax();
        secQ3Tl
            .add('animateall')
             .to($('.sec-quote2'), 1, {autoAlpha:0, ease: Power0.easeNone})
             .to($('.sec-quote3'), 1, {autoAlpha:1, ease: Power0.easeNone},'animateall')
             .fromTo($('.sec-quote2 .txt-wrap'), 1, {css:{top: "0px"}}, {css: {top: "-50px"}, ease: Power0.easeNone}, 'animateall-=0.4')
            .fromTo($('.sec-quote3 .txt-wrap'), 1, {css:{top: "50px"}}, {css: {top: "0px"}, ease: Power0.easeNone},'animateall-=0.4')
            ;
        var secQ2AnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-quote3-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '120%'
        })
                .on('enter', function () {
                    $('.sec-quote3').addClass('on-top');
                })
                .setTween(secQ3Tl)
                .addTo(aboutcontroller);



        //section 3 animation
        var sec3Tl = new TimelineMax();
        sec3Tl
                .add('animateall')
                .to($('.sec-quote3'), 1, {autoAlpha:0, ease: Power0.easeNone})
                .to($('.sec-3'), 1, {autoAlpha:1, ease: Power0.easeNone}, 'animateall')
                .fromTo($('.sec-quote3 .txt-wrap'), 1, {css:{top: "0px"}}, {css: {top: "-50px"}, ease: Power0.easeNone},'animateall-=0.4')
                .fromTo($('.sec-3 .txt-wrap'), 1, {css:{top: "50px"}}, {css: {top: "0px"}, ease: Power0.easeNone},'animateall-=0.4')
                ;
        var sec3AnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-3-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '120%'
        })
                .on('enter', function () {
                    $('.sec-3').addClass('on-top');
                })
                .setTween(sec3Tl)
                .addTo(aboutcontroller);

        //section 3a animation
        var sec3aTl = new TimelineMax();
        sec3aTl
                .add('animateall')
                .to($('.sec-3'), 1, {autoAlpha:0, ease: Power0.easeNone})
                .to($('.sec-3a'), 1, {autoAlpha:1, ease: Power0.easeNone}, 'animateall')
                .fromTo($('.sec-3 .txt-wrap'), 1, {css:{top: "0px"}}, {css: {top: "-50px"}, ease: Power0.easeNone},'animateall-=0.4')
                .fromTo($('.sec-3a .txt-wrap'), 1, {css:{top: "50px"}}, {css: {top: "0px"}, ease: Power0.easeNone},'animateall-=0.4')                
                ;
        var sec3aAnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-3a-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '120%'
        })
                .on('enter', function () {
                    $('.sec-3a').addClass('on-top');
                })
                .setTween(sec3aTl)
                .addTo(aboutcontroller);                

        //section 4 animation
        var sec4Tl = new TimelineMax();
        sec4Tl
                .add('animateall4')
                .to($('.sec-3a'), 1, {autoAlpha:0, ease: Power0.easeNone})
                .to($('.sec-4'), 1, {autoAlpha:1, ease: Power0.easeNone}, 'animateall4')
                .fromTo($('.sec-4 .bg1'), 1, {autoAlpha:0, scale:1}, {autoAlpha:1, scale:1.2, ease: Power0.easeNone},  'animateall4')
                .fromTo($('.sec-3a .txt-wrap'), 1, {css:{top: "0px"}}, {css: {top: "-50px"}, ease: Power0.easeNone},'animateall4-=0.4')
                .fromTo($('.sec-4 .txt-wrap'), 1, {css:{top: "50px"}}, {css: {top: "0px"}, ease: Power0.easeNone},'animateall4-=0.1')                 
                ;
        var sec4AnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-4-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '120%'
        })
                .on('enter', function () {
                    $('.sec-4').addClass('on-top');
                })
                .setTween(sec4Tl)
                .addTo(aboutcontroller);

        //section 4a animation
        var sec4aTl = new TimelineMax();
        sec4aTl
                .add('animateall4a')
                .fromTo($('.sec-4 .bg1'), 1,{autoAlpha:1, scale:1.2}, {autoAlpha:0, scale:1.4, ease: Power0.easeNone},  'animateall4a')
                .to($('.sec-4 .bg2'), 1, {autoAlpha:1, scale:1.2, ease: Power0.easeNone},  'animateall4a')               
                ;
        var sec4aAnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-4a-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '120%'
        })
                .setTween(sec4aTl)
                .addTo(aboutcontroller);

        //section 4b animation
        var sec4bTl = new TimelineMax();
        sec4bTl
                .add('animateall')
                .to($('.sec-4 .bg2'), 1, {autoAlpha:0, scale:1.4, ease: Power0.easeNone},  'animateall')
                .to($('.sec-4 .bg3'), 1, {autoAlpha:1, scale:1.2, ease: Power0.easeNone},  'animateall')               
                ;
        var sec4bAnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-4b-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '120%'
        })
                .setTween(sec4bTl)
                .addTo(aboutcontroller);                

        //section 5 animation
        var sec5Tl = new TimelineMax();
        sec5Tl
                .add('animateall')
                .to($('.sec-4'), 1, {autoAlpha:0, ease: Power0.easeNone})
                .to($('.sec-4 .bg3'), 1, {autoAlpha:0, scale:1.4, ease: Power0.easeNone},  'animateall')
                .to($('.sec-5 .bg-img'), 1, {autoAlpha:1, scale:1.2, ease: Power0.easeNone}, 'animateall')
                .to($('.sec-5'), 1, {autoAlpha:1, ease: Power0.easeNone},  'animateall')
                .fromTo($('.sec-4 .txt-wrap'), 1, {css:{top: "0px"}}, {css: {top: "-50px"}, ease: Power0.easeNone},'animateall-=0.4')
                .fromTo($('.sec-5 .txt-wrap'), 1, {css:{top: "50px"}}, {css: {top: "0px"}, ease: Power0.easeNone},'animateall-=0.4')                 
                ;
        var sec5AnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-5-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '120%'
        })
                .on('enter', function () {
                    $('.sec-5').addClass('on-top');
                })
                .setTween(sec5Tl)
                .addTo(aboutcontroller);

        //section 6 animation
        var blurElem = {a: 20};
        var sec6Tl = new TimelineMax();

            sec6Tl
                .add('animateall')
                .to($('.sec-5'), 1, {autoAlpha:0 , ease: Power0.easeNone})
                .to($('.sec-5 .bg-img'), 1, {autoAlpha:0, scale:1.4, ease: Power0.easeNone}, 'animateall')
                .to($('.sec-6'), 1, {autoAlpha:1 , ease: Power0.easeNone}, 'animateall')
                .fromTo('.who-we-are .fade-down', 1, {css:{bottom:"-50px"}}, {css:{bottom:"50px"}}, 'animateall')
                .fromTo('.who-we-are .fade-up', 1, {css:{top:"-50px"}}, {css:{top:"50px"}}, 'animateall')
                .to(blurElem, 1, {a:0, onUpdate:applyBlur}, 'animateall')
                .fromTo($('.sec-5 .txt-wrap'), 1, {css:{top: "0px"}}, {css: {top: "-50px"}, ease: Power0.easeNone},'animateall-=0.4')
                .fromTo($('.sec-6 .txt-wrap'), 1, {css:{top: "50px"}}, {css: {top: "0px"}, ease: Power0.easeNone},'animateall-=0.4')                  

                ;
        var sec6AnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-6-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '120%'
        })
                .on('enter', function () {
                    $('.sec-6').addClass('on-top');
                })
                .setTween(sec6Tl)
                .addTo(aboutcontroller);
        function applyBlur() {
            TweenMax.set($('.who-we-are .blur-img'), {webkitFilter: "blur(" + blurElem.a + "px)", filter: "blur(" + blurElem.a + "px)"});
        }

        //section 7 animation
        var blurElem1 = {b: 20};
        var sec7Tl = new TimelineMax();
            sec7Tl
                .add('animateall')
                .to($('.sec-6'), 1, {autoAlpha:0, ease: Power0.easeNone})
                .to($('.sec-7'), 1, {autoAlpha:1 , ease: Power0.easeNone}, 0)
                .fromTo('.who-we-are .fade-down', 1, {css:{bottom:"50px"}}, {css:{bottom:"-50px"}}, 0)
                .fromTo('.who-we-are .fade-up', 1, {css:{top:"50px"}}, {css:{top:"-50px"}}, 0)
                .fromTo('.img-showcase .fade-down', 1, {css:{bottom:"-50px"}}, {css:{bottom:"50px"}}, 0)
                .fromTo('.img-showcase .fade-up', 1, {css:{top:"-50px"}}, {css:{top:"50px"}}, 0)
                .to(blurElem, 1, {a:20, onUpdate:applyBlur},0)
                .to(blurElem1, 1, {b:0, onUpdate:applyBlur1},0)
                .fromTo($('.sec-6 .txt-wrap'), 1, {css:{top: "0px"}}, {css: {top: "-50px"}, ease: Power0.easeNone},'animateall-=0.4')

                ;
        var sec7AnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-7-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '120%'
        })
                .on('enter', function () {
                    $('.sec-7').addClass('on-top');
                })
                .setTween(sec7Tl)
                .addTo(aboutcontroller);
        function applyBlur1() {
            TweenMax.set($('.img-showcase .blur-img'), {webkitFilter: "blur(" + blurElem1.b + "px)", filter: "blur(" + blurElem1.b + "px)"});
        }

        //section 8 animation

        var sec8Tl = new TimelineMax();

            sec8Tl
                 .add('animateall')
                .to($('.sec-7'), 1, {autoAlpha:0 , ease: Power0.easeNone})
                .to($('.sec-8'), 1, {autoAlpha:1 , ease: Power0.easeNone}, 0)
                .fromTo('.img-showcase .fade-down', 1, {css:{bottom:"50px"}}, {css:{bottom:"-50px"}}, 0)
                .fromTo('.img-showcase .fade-up', 1, {css:{top:"50px"}}, {css:{top:"-50px"}}, 0)
                .to(blurElem1, 1, {b:20, onUpdate:applyBlur1},0)
                .fromTo($('.sec-8 .txt-wrap'), 1, {css:{top: "50px"}}, {css: {top: "0px"}, ease: Power0.easeNone},'animateall-=0.4') 
                ;
        var sec8AnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-8-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '120%'
        })
                .on('enter', function () {
                    $('.sec-8').addClass('on-top');
                })
                .setTween(sec8Tl)
                .addTo(aboutcontroller);


        //section 8a animation
        var sec8aTl = new TimelineMax();
        sec8aTl
                .add('animateall')
                .to($('.sec-8'), 1, {autoAlpha:0, ease: Power0.easeNone})
                .to($('.sec-8a'), 1, {autoAlpha:1, ease: Power0.easeNone}, 'animateall')
                .fromTo($('.sec-8 .txt-wrap'), 1, {css:{top: "0px"}}, {css: {top: "-50px"}, ease: Power0.easeNone},'animateall-=0.4')
                .fromTo($('.sec-8a .txt-wrap'), 1, {css:{top: "50px"}}, {css: {top: "0px"}, ease: Power0.easeNone},'animateall-=0.4')                 
                ;
        var sec8aAnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-8a-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '120%'
        })
                .on('enter', function () {
                    $('.sec-8a').addClass('on-top');
                })
                .setTween(sec8aTl)
                .addTo(aboutcontroller);  


        //section 9 animation
        var logoLength = $('.award-logo');
        var sec9Tl = new TimelineMax();
        var sec9aTl = new TimelineMax({paused:true});
            sec9Tl
                .add('animateall')
                .to($('.sec-8a'), 1, {autoAlpha:0 , ease: Power0.easeNone})
                .to($('.sec-9'), 1, {autoAlpha:1 , ease: Power0.easeNone}, 0)
                .fromTo($('.sec-8a .txt-wrap'), 1, {css:{top: "0px"}}, {css: {top: "-50px"}, ease: Power0.easeNone},'animateall-=0.4')
                ;
            sec9aTl
                .staggerFromTo($('.award-logo'), 1, {autoAlpha:0},{autoAlpha:1, ease: Power0.easeNone}, 0.5);
                               
        var sec9AnimateScene= new ScrollMagic.Scene({
            triggerElement: '.sec-9-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '120%'
        })
        .on('enter',function(){
           $('.sec-9').addClass('on-top');
           sec9aTl.play();
        })                 
        .setTween(sec9Tl)
        .addTo(aboutcontroller); 
      
      
        //section 9a animation

        var sec9bTl = new TimelineMax();

            sec9bTl
                .add('animateall')
                .to($('.sec-9'), 1, {autoAlpha:0 , ease: Power0.easeNone})
                .to($('.sec-9b'), 1, {autoAlpha:1 , ease: Power0.easeNone}, 0)
                .fromTo($('.sec-9b .txt-wrap'), 1, {css:{top: "50px"}}, {css: {top: "0px"}, ease: Power0.easeNone},'animateall-=0.4') 
                ;
        var sec9bAnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-9b-alternate',
            triggerHook: 1,
            duration: '120%'
        })
                .on('enter', function () {
                    $('.sec-9b').addClass('on-top');
                })
                .setTween(sec9bTl)
                .addTo(aboutcontroller);
      
      
      

        //section 10 animation
        var sec10Tl = new TimelineMax();
            sec10Tl
                .add('animateall')
                .to($('.sec-9b'), 1, {autoAlpha:0, ease: Power0.easeNone})
                .to($('.sec-10'), 1, {autoAlpha:1 , ease: Power0.easeNone}, 'animateall')
                .fromTo($('.sec-10 .txt-wrap'), 1, {css:{opacity:0,top: "50px"}}, {css: {top: "0px",opacity: 1}, ease: Power0.easeNone},'animateall-=0.4') 
                ;
        var sec10AnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-10-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '120%'
        })
                .on('enter', function () {
                    $('.sec-10').addClass('on-top');
                })
                .setTween(sec10Tl)
                .addTo(aboutcontroller);

        //section 12 animation
        var sec11Tl = new TimelineMax();

            sec11Tl
                .add('animateall')
                .to($('.sec-10'), 1, {y:'-100%', ease: Power0.easeNone})
                .to($('#footer,.footer-video'), 1, {css:{visibility:'visible'} , ease: Power0.easeNone}, 0)
                .fromTo($('#footer'), 1,{css:{zIndex:0}}, {css:{zIndex:2} , ease: Power0.easeNone}, 0.7)
                .fromTo($('.sec-10 .txt-wrap'), 1, {css:{opacity:1,top: "0px"}}, {css: {top: "-50px",opacity: 0}, ease: Power0.easeNone},'animateall-=0.4')
                ;
        var sec11AnimateScene = new ScrollMagic.Scene({
            triggerElement: '.sec-11-alternate',
            triggerHook: 1,
            //duration: '225%'
            duration: '120%'
        })

        .setTween(sec11Tl)
        .addTo(aboutcontroller);                        


    }


    // fade in loader on page change
    $('#primary-nav a, .slide-in-menu-left a, .slide-in-menu a, #footer-nav a,.btn, .branding, .main-content a, .people-item a').click(function (event) {
        event.preventDefault();
        var url = $(this).attr('href');
        $(".mask").addClass("show").delay(500).queue(function (next) {
            document.location.href = url;
            next();
        });
        return false;
    });


    //page-title-fade
    tlTitlefade
            .fromTo($('.page-title'), 1, {autoAlpha: 1}, {autoAlpha: 0, ease: Power4.easeInOut});

    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '.page-title',
        triggerHook: 0.5,
        duration: '50%'
    })
            .setTween(tlTitlefade)
            .addTo(controller);

    $(".image-slider").owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 500,
        margin: 70,
        loop: false,
        items: 1,
        responsive: {
            0: {
                margin: 20
            },
            768: {
                margin: 30
            },
            1280: {
                margin: 70
            }
        }
    });


    //menu color change
    /*$('.white-module').each(function (count) {
        var dh = $(this).outerHeight();
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.1,
            duration: dh
        })
                .setClassToggle('body', 'nav-switched')
                .addTo(controller);
    });*/

    /*if ($('.switch-color-light').length) {
        //background color switch
        new ScrollMagic.Scene({
            triggerElement: '.switch-color-light',
            triggerHook: 'onEnter'
        })
                .setClassToggle('body', 'switched-light')
                .addTo(controller);
    }*/
    /*if ($('.switch-color-dark').length) {
        new ScrollMagic.Scene({
            triggerElement: '.switch-color-dark',
            triggerHook: 'onEnter'
        })
                .setClassToggle('body', 'switched-dark')
                .addTo(controller);

    }*/
    /*if ($('.switch-color-light1').length) {
        new ScrollMagic.Scene({
            triggerElement: '.switch-color-light1',
            triggerHook: 'onEnter'
        })

                .setClassToggle('body', 'switched-light1')
                .addTo(controller);

    }*/
    if ($('.next-post').length) {
        new ScrollMagic.Scene({
            triggerElement: '#banner',
            triggerHook: 'onLeave',
            offset:300
        })

                .setClassToggle('.next-post', 'next-post-on')
                .addTo(controller);
        
        new ScrollMagic.Scene({
            triggerElement: '#footer',
            triggerHook: 'onEnter'
        })

                .setClassToggle('.next-post', 'next-post-off')
                .addTo(controller);

    }
    
    if ($('.show-bar').length) {
        new ScrollMagic.Scene({
            triggerElement: '.show-bar',
            triggerHook: 0.5

        })
                .setClassToggle('.btm-sticky-bar', 'show-bar')
                .addTo(controller);
        new ScrollMagic.Scene({
            triggerElement: '#footer',
            triggerHook: 1

        })
                .setClassToggle('.btm-sticky-bar', 'hide-bar')
                .addTo(controller);
    }
    //fadeup elements
    $('.fadeUp').each(function (count) {
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.5
        })
                .setClassToggle(this, 'show')
                .addTo(controller);
    });
    
    if ($('body.home .first-fold-desc').length) {
        new ScrollMagic.Scene({
            triggerElement: 'body.home .first-fold-desc',
            triggerHook: 'onLeave',
            offset:-10
        })
                //.setClassToggle('body.home .first-fold-desc', 'invert')
                .on('start', function () {
                    $('#header').toggleClass('dark-sm');
                })
                .addTo(controller);

    }
    
    if ($('body.home .first-fold-desc').length) {
        new ScrollMagic.Scene({
            triggerElement: 'body.home .spotlight',
            triggerHook: 'onEnter',
            offset: 100
        })
                //.setClassToggle('body.home .first-fold-desc', 'invert')
                .on('start', function () {
                    $('body.home .first-fold-desc .container').toggleClass('hide');
                })
                .addTo(controller);

    }
    
    if ($('body.home .spotlight').length) {
        new ScrollMagic.Scene({
            triggerElement: 'body.home .spotlight',
            triggerHook: 'onEnter',
            offset: 100
        })
                .on('start', function () {
                    $('.highlight-text').toggleClass('hide');
                })
                .addTo(controller);

    }

    if ($('body.about').length ) {
        new ScrollMagic.Scene({
            triggerElement: '.footer-waypoint',
            triggerHook: 1,

        })
                .setClassToggle('#header', 'hidden')
                .addTo(controller); 

    }else{
        new ScrollMagic.Scene({
            triggerElement: '#footer',
            triggerHook: 'onLeave',
            offset: -100
        })
                .setClassToggle('#header', 'hidden')
                .addTo(controller); 
    }





    //background parallax animation
    var parallaxController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
    $('.parallax-bg').each(function (count) {
        new ScrollMagic.Scene({
            triggerElement: this
        })
                .setTween(this, {backgroundPosition: "center 110%", ease: Linear.easeNone})
                .addTo(parallaxController);
    });


    //video animation
    $('.play-btn').on('click', function () {
        var video = $(this).prev('video').get(0);
        if (video.paused === false) {
            video.pause();
             $(this).parent().removeClass('is-playing');
            $(this).fadeIn();
            $(this).next('.video-poster').fadeIn();
        } else {
            video.play();
            $(this).parent().addClass('is-playing');
            $(this).fadeOut();
            $(this).next('.video-poster').fadeOut();
        }
        $(video).bind("ended", function () {

            $(this).next('.play-btn').fadeIn();
            $(this).next().next('.video-poster').fadeIn();
        });

    });

    // Entering fullscreen mode
    $('video').bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
        var a = $(this);
        var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
        var event = state ? enter() : exit();
        
        function enter(){
           a.closest('.post-entry').addClass('show-box');
        }
        function exit(){
           a.closest('.post-entry').removeClass('show-box');
        }    
        
    });
    //block-accordion
    
    new ScrollMagic.Scene({
        triggerElement: ".block-accordion",
        triggerHook: 1
    })
            .on("enter", function (event) {
                $('.block-accordion .block-accordion-item').removeClass('is-active');
                $('.block-accordion > .block-accordion-detail').detach();
            })
            .addTo(controller);    

    //fadein animation 
    var animateupdesktopcontroller = new ScrollMagic.Controller();
	var animateuptabletcontroller = new ScrollMagic.Controller();
    var animateuptabletaltcontroller = new ScrollMagic.Controller();
    var animateupmobilecontroller = new ScrollMagic.Controller();
    var accordLength = $(".block-accordion .block-accordion-item").length;
    if ($(window).width() > 1279) {
        desktopstaggerupanimation(animateupdesktopcontroller);
        $(".block-accordion .block-accordion-item:nth-child(4n)").addClass('last');
        if (accordLength % 4 != 0) {
            $(".block-accordion .block-accordion-item").last().addClass('last');
        }

    } else if ($(window).width() > 767 && $(window).width() < 1280) {
        tabletstaggerupanimation(animateuptabletcontroller);
        $(".block-accordion .block-accordion-item:nth-child(3n)").addClass('last');
        if (accordLength % 3 != 0) {
            $(".block-accordion .block-accordion-item").last().addClass('last');
        } 
		if ($(window).width() <= 1024) {
			tabletstaggerupanimationalt(animateuptabletaltcontroller);	
		}
    } else {
        $(".block-accordion .block-accordion-item").addClass('last');
        mobilestaggerupanimation(animateupmobilecontroller);
    }
    function desktopstaggerupanimation(animateupdesktopcontroller) {
        // columns stagger animation fadeinup

        $('.desktopanimateup1').each(function () {
            var animateupTl = new TimelineMax();
            animateupTl
                    .fromTo($(this), 0.5, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0, ease: Power0.easeInOut})

            var animatescene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9,
                reverse: false,
            })
                    .setTween(animateupTl)
                    .addTo(animateupdesktopcontroller);


        });
        $('.desktopanimateup2').each(function () {
            var animateupTl = new TimelineMax();
            animateupTl
                    .fromTo($(this), 0.5, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0, ease: Power0.easeInOut}, '+=0.3')

            var animatescene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9,
                reverse: false,
            })
                    .setTween(animateupTl)
                    .addTo(animateupdesktopcontroller);


        });
        $('.desktopanimateup3').each(function () {
            var animateupTl = new TimelineMax();
            animateupTl
                    .fromTo($(this), 0.5, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0, ease: Power0.easeInOut}, '+=0.6')

            var animatescene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9,
                reverse: false,
            })
                    .setTween(animateupTl)
                    .addTo(animateupdesktopcontroller);
        });
        $('.desktopanimateup4').each(function () {
            var animateupTl = new TimelineMax();
            animateupTl
                    .fromTo($(this), 0.5, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0, ease: Power0.easeInOut}, '+=0.9')

            var animatescene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9,
                reverse: false,
            })
                    .setTween(animateupTl)
                    .addTo(animateupdesktopcontroller);


        });
    }
	function tabletstaggerupanimationalt(animateuptabletaltcontroller) {
		console.log("test");
		$('.tabletanimateupalt').each(function () {
            var animateupTl = new TimelineMax();
            animateupTl
                    .fromTo($(this), 0.6, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0, ease: Power0.easeInOut})

            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9,
                reverse: false,
            })
                    .setTween(animateupTl)
                    .addTo(animateuptabletaltcontroller);
        });
	}
    function tabletstaggerupanimation(animateuptabletcontroller) {
        $('.tabletanimateup1').each(function () {
            var animateupTl = new TimelineMax();
            animateupTl
                    .fromTo($(this), 0.5, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0, ease: Power0.easeInOut})

            var animatescene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9,
                reverse: false,
            })
                    .setTween(animateupTl)
                    .addTo(animateuptabletcontroller);

        });
        $('.tabletanimateup2').each(function () {
            var animateupTl = new TimelineMax();
            animateupTl
                    .fromTo($(this), 0.5, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0, ease: Power0.easeInOut}, '+=0.3')

            var animatescene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9,
                reverse: false,
            })
                    .setTween(animateupTl)
                    .addTo(animateuptabletcontroller);


        });
        $('.tabletanimateup3').each(function () {
            var animateupTl = new TimelineMax();
            animateupTl
                    .fromTo($(this), 0.5, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0, ease: Power0.easeInOut}, '+=0.6')

            var animatescene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9,
                reverse: false,
            })
                    .setTween(animateupTl)
                    .addTo(animateuptabletcontroller);

        });
    }
    function mobilestaggerupanimation(animateupmobilecontroller) {
        //mobile resourcelist animation
        $('.mobileanimateup').each(function () {
            var animateupTl = new TimelineMax();
            animateupTl
                    .fromTo($(this), 0.6, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0, ease: Power0.easeInOut})

            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.9,
                reverse: false,
            })
                    .setTween(animateupTl)
                    .addTo(animateupmobilecontroller);
        });
    }

    $(window).resize(function () {

        if ($(window).width() > 1279) {
            desktopstaggerupanimation(animateupdesktopcontroller, 1);
            $(".block-accordion .block-accordion-item").removeClass('last');
            $(".block-accordion .block-accordion-item:nth-child(4n)").addClass('last');
            if (accordLength % 4 != 0) {
                $(".block-accordion .block-accordion-item").last().addClass('last');
            }            
        } else if ($(window).width() > 767 && $(window).width() < 1280) {

            //tabletstaggerupanimation(animateuptabletcontroller, 1);
            $(".block-accordion .block-accordion-item").removeClass('last');
            $(".block-accordion .block-accordion-item:nth-child(3n)").addClass('last');
            if (accordLength % 3 != 0) {
                $(".block-accordion .block-accordion-item").last().addClass('last');
            }            
        } else {
            //mobilestaggerupanimation(animateupmobilecontroller, 1);
            $(".block-accordion .block-accordion-item").addClass('last');
        }
        $('.sticky-block').hcSticky('reinit');
    });




    $('.sticky-block').hcSticky({
        offResolutions: [-1280],
        top: 120
    });

    if($('body.page-template-template-contact').length){
        $('body.interior #header').addClass('dark-inner');
    }
    if($('body.page-template-template-directory').length || $('body.page-id-237').length){
        $('body.interior #header').addClass('dark-inner');
    }
    if($('body.single:not(".single-expertise")').length){
        $('body.interior #header').addClass('dark-inner');
    }
    if($('body.page-template-template-sub-careers').length){
        $('body.interior #header').addClass('dark-inner');
    }

    
    


    $(window).scroll(function () {
        var percentage = 0;
        var upper;
        var lower;
        var statusWidth = 0;
        upper = $(window).scrollTop();
        lower = $(document).height() - $(window).height();
        if (upper > 0) {
            percentage = upper / lower;
            statusWidth = $(window).width() * percentage;
        }
        $('.bar').css('width', statusWidth);
        if (upper > 300){
            $('.footer-video').css('opacity', 1);
            $('body.home #header').addClass('dark-xs');
            if ($('body.interior').hasClass('page-template-template-about')){
                //do nothing
            }
            else if ($('body.interior').hasClass('page-template-template-contact')){
                //do nothing
            }
            else if ($('body.interior').hasClass('page-template-template-sub-careers')){
                //do nothing
            }
            else if ($('body.interior').hasClass('single')){
                if ($('body.interior').hasClass('single-expertise')){
                    $('body.interior #header').addClass('dark-inner');
                }
                else {
                    //do nothing
                }
            }
            else {
                $('body.interior #header').addClass('dark-inner');
            }
        }
        else if (upper <= 300){
            $('.footer-video').css('opacity', 0);
            $('body.home #header').removeClass('dark-xs');
            if ($('body.interior').hasClass('page-template-template-about')){
                //do nothing
            }
            else if ($('body.interior').hasClass('page-template-template-contact')){
                //do nothing
            }
            else if ($('body.interior').hasClass('page-template-template-sub-careers')){
                //do nothing
            }
            else if($('body.page-template-template-directory').length || $('body.page-id-237').length){
                //do nothing
            }
            else if ($('body.interior').hasClass('single')){
                if ($('body.interior').hasClass('single-expertise')){
                    $('body.interior #header').removeClass('dark-inner');
                }
                else {
                    //do nothing
                }
            }
            else {
                $('body.interior #header').removeClass('dark-inner');
            }
        }
      
      
        
    });
    
    function a1() {
              $('.home #loader').addClass('disappear');
              setTimeout(function(){
                $('.home #loader').remove();
                $('body').removeClass('loading');
                tlSpans.play();
              }, 600);
      
      
              


    }
  
  
    function a2() {
            $('.interior #loader').addClass('disappear');
            setTimeout(function(){
                $('.interior #loader').remove();
                $('body').removeClass('loading');
                tlSpans.play();
            }, 600);

    }


    // loader line animation
    if($('body.site-loaded').length){
        
        if ($('.home').length) {
            a1();
        }


        //text split animation
        $('html.no-touch .split-text-wrap').each(function () {
            var
                    splitObj = [],
                    tltopSplitText = new TimelineMax({delay: 1});

            var animateText = new SplitText($(this).find('.split-text'), {type: 'lines,chars'});
            // loader animation
            
            /*tltopSplitText.staggerFromTo($(this).find('.fadespantop'), 0.8, {autoAlpha: 0}, {autoAlpha: 1}, 0.4, "-=1");
            tltopSplitText.staggerFromTo($(this).find('.fadespan'), 1.0, {autoAlpha: 0}, {autoAlpha: 1, onComplete: function(){
                if ($('.fadeVideoUp').length) {
                    $('.fadeVideoUp').addClass('show');
                }       
            } }, 0.3, "-=1");*/
          
            tltopSplitText.staggerTo($(this).find('.fadespantop'), 0, {className:'+=appear'}, 0.5, "-=1");
            tltopSplitText.staggerTo($(this).find('.fadespan'), 0, {className:'+=appear', onComplete: function(){
                if ($('.fadeVideoUp').length) {
                    $('.fadeVideoUp').addClass('show');
                }       
            }}, 0.5, "-=1");
            

            for (var t = 0; t < animateText.lines.length; t++) {
                var r = animateText.lines[t].querySelectorAll("div"),
                        i = reorderArray(r, Math.floor(3 * Math.random()));
                splitObj.push(i)
            }
            for (var r = 0; r < animateText.lines.length; r++) {
                var h = 40 + 10 * r;
                tltopSplitText.from(animateText.lines[r], 3, {
                    y: h
                }, 0)
            }
            for (var r = 0; r < splitObj.length; r++) {
                tltopSplitText.staggerFrom(splitObj[r], 0.8, {opacity: 0, delay: .5 * r}, .04, 0);
            }

            

            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.8
            })
                    .setTween(tltopSplitText)
                    .addTo(controller);

        });
        
    } else {
        if ($('.home').length) {

            $("body").queryLoader2({
                barColor: "#4c8785",
                backgroundColor: "#005153",
                percentage: false,
                barHeight: 3,
                completeAnimation: "",
                minimumTime: 4000,
                maxTime:7000,
                onComplete: function () {
                   
                    for(var i = 0; i < numChars; i++){
                          //random value used as position parameter
                          tlSplitText.set(mySplitText.chars[i], {className:'disappear'}, Math.random() * 2);

                          if (i == (numChars-1)){
                            tlSplitText.to(author, 2, {delay: 2, y: '10px', opacity: 0, onComplete:a1}, "-=3");
                                      
                          }
                    }
                  
                  
                    //text split animation
                    $('html.no-touch .split-text-wrap').each(function () {
                        var splitObj = [], tltopSplitText = new TimelineMax({delay: 1});

                        var animateText = new SplitText($(this).find('.split-text'), {type: 'lines,chars'});
                        
                         // loader animation
                        /*tltopSplitText.staggerFromTo($(this).find('.fadespantop'), 1, {autoAlpha: 0}, {autoAlpha: 1}, 0.5, "-=1");
                        //tltopSplitText.staggerFromTo($(this).find('.fadespan'), 1.0, {autoAlpha: 0}, {autoAlpha: 1}, 0.3, "-=1");
                        tltopSplitText.staggerFromTo($(this).find('.fadespan'), 1.0, {autoAlpha: 0}, {autoAlpha: 1, onComplete: function(){
                        if ($('.fadeVideoUp').length) {
                            $('.fadeVideoUp').addClass('show');
                        }       
                        } }, 0.3, "-=1");*/
                      
                      
                        tltopSplitText.staggerTo($(this).find('.fadespantop'), 0, {className:'+=appear'}, 0.5, "-=1");
                        tltopSplitText.staggerTo($(this).find('.fadespan'), 0, {className:'+=appear', onComplete: function(){
                            if ($('.fadeVideoUp').length) {
                                $('.fadeVideoUp').addClass('show');
                            }       
                        }}, 0.5, "-=1");

                        for (var t = 0; t < animateText.lines.length; t++) {
                            var r = animateText.lines[t].querySelectorAll("div"),
                                    i = reorderArray(r, Math.floor(3 * Math.random()));
                            splitObj.push(i)
                        }
                        for (var r = 0; r < animateText.lines.length; r++) {
                            var h = 5 + 10 * r;
                            tltopSplitText.from(animateText.lines[r], 3, {
                                y: h
                            }, 0)
                        }
                        for (var r = 0; r < splitObj.length; r++) {
                            tltopSplitText.staggerFrom(splitObj[r], 1.5, {opacity: 0, delay: .5 * r}, .04, 0);
                           
                        }

                        

                        new ScrollMagic.Scene({
                            triggerElement: this,
                            triggerHook: 0.8
                        })
                                .setTween(tltopSplitText)
                                .addTo(controller);

                    });
                  
                  
                
                }
            }); 

          
        } else {
            $("#loader-logo").queryLoader2({
                barColor: "#4c8785",
                backgroundColor: "#005153",
                percentage: false,
                barHeight: 3,
                completeAnimation: "",
                minimumTime: 800,
                onComplete: function () {
                  
                    a2();
                    
                  
                    //text split animation
                    $('html.no-touch .split-text-wrap').each(function () {
                        var
                                splitObj = [],
                                tltopSplitText = new TimelineMax({delay: 1});

                        var animateText = new SplitText($(this).find('.split-text'), {type: 'lines,chars'});
                        
                         // loader animation
                        /*tltopSplitText.staggerFromTo($(this).find('.fadespantop'), 1, {autoAlpha: 0}, {autoAlpha: 1}, 0.5, "-=1");
                        //tltopSplitText.staggerFromTo($(this).find('.fadespan'), 1.0, {autoAlpha: 0}, {autoAlpha: 1}, 0.3, "-=1");
                        tltopSplitText.staggerFromTo($(this).find('.fadespan'), 1.0, {autoAlpha: 0}, {autoAlpha: 1, onComplete: function(){
                        if ($('.fadeVideoUp').length) {
                            $('.fadeVideoUp').addClass('show');
                        }       
                        } }, 0.3, "-=1");*/
                      
                      
                        tltopSplitText.staggerTo($(this).find('.fadespantop'), 0, {className:'+=appear'}, 0.5, "-=1");
                        tltopSplitText.staggerTo($(this).find('.fadespan'), 0, {className:'+=appear', onComplete: function(){
                            if ($('.fadeVideoUp').length) {
                                $('.fadeVideoUp').addClass('show');
                            }       
                        }}, 0.5, "-=1");

                        for (var t = 0; t < animateText.lines.length; t++) {
                            var r = animateText.lines[t].querySelectorAll("div"),
                                    i = reorderArray(r, Math.floor(3 * Math.random()));
                            splitObj.push(i)
                        }
                        /*for (var r = 0; r < animateText.lines.length; r++) {
                            var h = 5 + 10 * r;
                            tltopSplitText.from(animateText.lines[r], 3, {
                                y: h
                            }, 0)
                        }*/
                        for (var r = 0; r < splitObj.length; r++) {
                            tltopSplitText.staggerFrom(splitObj[r], 1.5, {opacity: 0, delay: .5 * r}, .04, 0);

                        }

                        

                        new ScrollMagic.Scene({
                            triggerElement: this,
                            triggerHook: 0.8
                        })
                                .setTween(tltopSplitText)
                                .addTo(controller);

                    });
                  
                    
                }
            });                 
        }
    }



});





$(window).load(function () {
    
    $(".slide-in-menu-left-scroll").mCustomScrollbar({
        theme: "minimal",
        scrollInertia: 200,
    });

});
//==============================================================
// Function List
// ==============================================================
// gradient mask
function maskFunc(e) {
    e.style["-webkit-mask-image"] = "radial-gradient(circle at center, black " + e.maskStop + "%, transparent " + e.maskAlpha + "%)"
}


// reorder array for split text animation
function reorderArray(e, t) {
    var r, n = [];
    switch (t) {
        case 0:
            n = e;
            break;
        case 1:
            for (r = 0; r < e.length; r++)
                n.unshift(e[r]);
            break;
        case 2:
            r = Math.ceil(e.length / 2);
            for (var i = r - 1; i >= 0; )
                n.push(e[i--]), r < e.length && n.push(e[r++])
    }
    return n
}






// swipe detection code

// TOUCH-EVENTS SINGLE-FINGER SWIPE-SENSING JAVASCRIPT
// Courtesy of PADILICIOUS.COM and MACOSXAUTOMATION.COM

// this script can be used with one or more page elements to perform actions based on them being swiped with a single finger

var triggerElementID = null; // this variable is used to identity the triggering element
var fingerCount = 0;
var startX = 0;
var startY = 0;
var curX = 0;
var curY = 0;
var deltaX = 0;
var deltaY = 0;
var horzDiff = 0;
var vertDiff = 0;
var minLength = 160; // the shortest distance the user may swipe
var swipeLength = 0;
var swipeAngle = null;
var swipeDirection = null;
// The 4 Touch Event Handlers

// NOTE: the touchStart handler should also receive the ID of the triggering element
// make sure its ID is passed in the event call placed in the element declaration, like:
// <div id="picture-frame" ontouchstart="touchStart(event,'picture-frame');"  ontouchend="touchEnd(event);" ontouchmove="touchMove(event);" ontouchcancel="touchCancel(event);">


function touchStart(event, passedName) {
    // disable the standard ability to select the touched object
    //event.preventDefault();
    // get the total number of fingers touching the screen
    fingerCount = event.touches.length;
    // since we're looking for a swipe (single finger) and not a gesture (multiple fingers),
    // check that only one finger was used
    if (fingerCount == 1) {
        // get the coordinates of the touch
        startX = event.touches[0].pageX;
        startY = event.touches[0].pageY;
        // store the triggering element ID
        triggerElementID = passedName;
    } else {
        // more than one finger touched so cancel
        touchCancel(event);
    }
}

function touchMove(event) {
//event.preventDefault();
    if (event.touches.length == 1) {
        curX = event.touches[0].pageX;
        curY = event.touches[0].pageY;
    } else {
        touchCancel(event);
    }    
}


function touchEnd(event) {
//event.preventDefault();
// check to see if more than one finger was used and that there is an ending coordinate
    if (fingerCount == 1 && curX != 0) {
// use the Distance Formula to determine the length of the swipe
        swipeLength = Math.round(Math.sqrt(Math.pow(curX - startX, 2) + Math.pow(curY - startY, 2)));
        // if the user swiped more than the minimum length, perform the appropriate action
        if (swipeLength >= minLength) {
            caluculateAngle();
            determineSwipeDirection();
            processingRoutine();
            touchCancel(event); // reset the variables
        } else {
            touchCancel(event);
        }
    } else {
        touchCancel(event);
    }
}

function touchCancel(event) {
// reset the variables back to default values
    fingerCount = 0;
    startX = 0;
    startY = 0;
    curX = 0;
    curY = 0;
    deltaX = 0;
    deltaY = 0;
    horzDiff = 0;
    vertDiff = 0;
    swipeLength = 0;
    swipeAngle = null;
    swipeDirection = null;
    triggerElementID = null;
}

function caluculateAngle() {
    var X = startX - curX;
    var Y = curY - startY;
    var Z = Math.round(Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2))); //the distance - rounded - in pixels
    var r = Math.atan2(Y, X); //angle in radians (Cartesian system)
    swipeAngle = Math.round(r * 180 / Math.PI); //angle in degrees
    if (swipeAngle < 0) {
        swipeAngle = 360 - Math.abs(swipeAngle);
    }
}

function determineSwipeDirection() {
    if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
        swipeDirection = 'left';
    } else if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
        swipeDirection = 'left';
    } else if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
        swipeDirection = 'right';
    } else if ((swipeAngle > 45) && (swipeAngle < 135)) {
        swipeDirection = 'down';
    } else {
        swipeDirection = 'up';
    }
}

function processingRoutine() {
    var swipedElement = document.getElementById(triggerElementID);
    if (swipeDirection == 'left') {
        if ($('html.touch').length && !$('.no-swipe').length) {
            tlLeftMenu.reverse();
            tlMenu.play();
            $('body').removeClass('lft-menu-on');
            $('body').addClass('rgt-menu-on');
        }




    } else if (swipeDirection == 'right') {
        if ($('html.touch').length && !$('.no-swipe').length) {
            tlMenu.reverse();
            tlLeftMenu.play();
            $('body').removeClass('rgt-menu-on');
            $('body').addClass('lft-menu-on');
        }
    }
}

 function directorySearch() {
   
    var value = $('#directorySearch').val().toLowerCase();
   
    $("#directoryList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
   
  }

function directoryPopulate() {
    $('#directoryList li').each(function(index) {
      
      
        var email = $(this).find('.email').attr('data-email') + "@tsmplaw.com";
        var emailURL = "mailto:" + email;
        var emailDisplay = $(this).find('.email').attr('data-email') + '<br class="sm-hidden">@tsmplaw.com';
      
        var mobileNum = "+65 " + $(this).find('.mobile').attr('data-mobile');
        var mobileURL = "https://api.whatsapp.com/send?phone=" + mobileNum.replace(/\s+/g, '');
        var mobileDisplay = "(65) " + $(this).find('.mobile').attr('data-mobile');
      
        var didNum = "+65 " + $(this).find('.did').attr('data-did');
        var didURL = "tel:" + didNum.replace(/\s+/g, '');
        var didDisplay = "(65) " + $(this).find('.did').attr('data-did');
      
        $(this).find('.email').append( '<a class="emailIcon" href="'+emailURL+'"></a><a class="emailTxt" href="'+emailURL+'">'+emailDisplay+'</a>' );
      
        $(this).find('.did').append( '<a class="didIcon" href="'+didURL+'"></a><a class="didTxt" href="'+didURL+'">'+didDisplay+'</a>' );
      
        $(this).find('.mobile').append( '<a class="mobileIcon" href="'+mobileURL+'"></a><a class="mobileTxt" href="'+mobileURL+'">'+mobileDisplay+'</a>' );
      
        
      
        
      
    });
  
}


if($('body.page-template-template-directory').length){
        directoryPopulate();
  
        $('.vcardBtn').on('click',function(){
            
            var fName = $(this).closest('li').find('.staff').attr('data-fname');
            var lName = $(this).closest('li').find('.staff').attr('data-lname');
            var vName = lName+";"+fName+";;"
            var displayName = $(this).closest('li').find('.staff').html();

            console.log (fName + " " + lName + " " + vName + " " + displayName);

            var emailAdd = $(this).closest('li').find('.email').attr('data-email') + "@tsmplaw.com";

            var mobileNum = "+65 " + $(this).closest('li').find('.mobile').attr('data-mobile');
      
            var didNum = "+65 " + $(this).closest('li').find('.did').attr('data-did');
          
            var newCard = vCard.create(vCard.Version.FOUR)
            newCard.add(vCard.Entry.NAME, vName);
            newCard.add(vCard.Entry.FORMATTEDNAME, displayName);
            newCard.add(vCard.Entry.PHONE, mobileNum, vCard.Type.CELL);
            newCard.add(vCard.Entry.PHONE, didNum, vCard.Type.WORK)
            newCard.add(vCard.Entry.EMAIL, emailAdd, vCard.Type.WORK)
            newCard.add(vCard.Entry.ORGANIZATION, "TSMP Law")

            var link = vCard.export(newCard, displayName, true) // use parameter true to force download
        });
}

