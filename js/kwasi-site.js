// var controller = new ScrollMagic.Controller();

// $(function () {
//     var scene = new ScrollMagic.Scene({triggerElement: ".sidebar"})
//                 .setPin("#sidebar-menu", {pushFollowers: false})
//                 .addIndicators({name: "this is the pin"})
//                 .addTo(controller);
// });

$.ajaxSetup({
  cache: true
});

function initializeMobileGallery() {
    $("#projects-dest").append('<div class="swiper-container"></div>');
    $(".swiper-container").append('<div class="swiper-wrapper">').append('<div class="swiper-pagination"></div>').append('<div class="swiper-button-prev"></div>').append('<div class="swiper-button-next"></div>').append('<div class="swiper-scrollbar"></div>');
    $(".project-entry img").each(function () {
        $(".swiper-wrapper").append('<div class="swiper-slide"></div>');
        $(".swiper-slide").append(this).append('<div class="caption">ExplainExplaoinExplain</div>');
    });

    mySwiper = new Swiper ('.swiper-container', {
        loop: false,
        direction: 'vertical',
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        scrollbar: '.swiper-scrollbar',
        slidesPerView: 1,
        autoHeight: true,
        centeredSlides: true
    });
}

$(function () {
    if (window.matchMedia("(max-width: 780px)").matches) {
        $(".gallery-entry.active").toggleClass("active inactive");

        $(".gallery-entry").each(function () {
            var curr_id = this["id"];
            var pattern = /\d/g;
            var match = pattern.exec(curr_id);
            var curr_idx = match[0];
            var curr_link = "project"+curr_idx;
            $(this).wrap('<a href="'+curr_link+'.html" ></a>');
        })
    //     $("head").append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.css">');
    //     $.getScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.jquery.js", function(data, status, jqxhr) {
    //         cache: true;
    //         // console.log(status);
    //         initializeMobileGallery();
    //     });

    }

    $(".project-entry.inactive").css({display: "none"});

    $("#sidebar-menu").stick_in_parent();

    $('#about-link').click(function () {
        $('#about-dest').animatescroll();
    });

    $('#start-button').click(function () {
        $('#mid').animatescroll();
    });

    $('#projects-link').click(function () {
        $('#projects-dest').animatescroll();
    });

    $('#contact-link').click(function () {
        $('#contact-dest').animatescroll();
    });

    $(".gallery-entry").click(function () {
        var curr_gal_entry = this;
        if ( $(this).hasClass("active") ) {
            return;
        };
        
        $("#project-expanded").css("border-color") == "rgb(227, 8, 0)" ?  $("#project-expanded").css({"border-color": "#3e0909"}) : $("#project-expanded").css({"border-color": "#e30800"});
       

        var active_entry = $(".project-entry.active");
        var active_gal = $(".gallery-entry.active");
        // console.log(active_entry);        

        var curr_id = curr_gal_entry["id"];
        var pattern = /\d/g;
        var match = pattern.exec(curr_id);
        var curr_idx = match[0];
        
        var entry_to_toggle_id = "#entry-"+curr_idx;
        var entry_to_toggle = $(entry_to_toggle_id);

        active_entry.toggleClass("active inactive");
        active_entry.fadeOut();
        active_gal.toggleClass("active inactive");

        entry_to_toggle.toggleClass("active inactive").delay(500).fadeIn();
        $(curr_gal_entry).toggleClass("active inactive");
        
    });

    // $('#project-expanded').slick({
    //     // slidesToShow: 1,
    //     arrows: false,
    //     // centerMode: true,
    //     // centerPadding: '1%',
    //     // fade: true,
    //     vertical: true,
    //     infinite: false,
    //     asNavFor: '#project-gallery'
    // // });

    // $('#project-gallery').slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     // asNavFor: '#project-expanded',
    //     vertical: true,
    //     adaptiveHeight: true,
    //     focusOnSelect: true,
    //     infinite: false,
    //     variableWidth: false,
    //     centerMode: true,
    //     centerPadding: '1%',
    //     arrows: true
    // })
});

document.addEventListener('DOMContentLoaded', function () {
    Typed.new('#header-info', {
        strings: ["Developer. ^500 Gamer. ^500 Enthusiast."],
        typeSpeed: 20,
        cursorChar: ''
    });
});
