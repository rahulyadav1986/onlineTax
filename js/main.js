$(document).ready(function () {

    $('#menu').slicknav({});

    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    $(".cd-dropdown-trigger").click(function () {
        $(".cd-dropdown").toggleClass("dropdown-is-active");
        $(this).toggleClass("cd-dropdown-trigger-active");
    });

    $('#owl-demo1').owlCarousel({
        loop: true,
        autoWidth: false,
        items: 1,
        nav: false,
        autoplay: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 2000,
        //fluidSpeed : 600
        responsive: {
            0: {
                items: 1,
                dots: false,
            },
            320: {
                items: 1,
                dots: false,
            },
            767: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('#owl-demo2').owlCarousel({
        ltr: true,
        items: 3,
        loop: true,
        margin: 25,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 2500,
        smartSpeed: 3000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            767: {
                items: 3,
                nav: false,
            },
            1000: {
                items: 3,
            }
        }
    });
    $(".fancybox").fancybox({
        openEffect: 'none',
        closeEffect: 'none'
    });

    //Vertical Tab
    $('#parentVerticalTab').easyResponsiveTabs({
        type: 'vertical', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        closed: 'accordion', // Start closed if in accordion view
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function (event) {// Callback function if tab is switched
            var $tab = $(this);
            var $info = $('#nested-tabInfo2');
            var $name = $('span', $info);
            $name.text($tab.text());
            $info.show();
        }
    });
    $('.righttoleft').Css3Marquee();

});

window.addEventListener('load', function(){
    var load_screen = document.getElementById('load_screen');
    document.body.removeChild(load_screen);
})