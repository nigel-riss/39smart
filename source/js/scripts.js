// ;
// (function (){
//     var ratings = document.querySelectorAll(".rating");

//     for (var i = 0; i < ratings.length; i++) {
        
//         ratings[i].addEventListener("mousemove", function(event){
//             console.log(event.offsetX);
//         });
//     }

//     // document.addEventListener("mousemove", function(event){
//     //     // if (event.target.className === "rating") {
//     //     //     console.log('hmm');
//     //     // }
//     //     console.log(event.target.className);

//     //     if (event.target.className === "button") {
//     //         alert("!");
//     //     }
//     // });
// }());

$(document).ready(function() {

    ///////////////
    // SLIDERS
    ///////////////
    var winWidth = (window.outerWidth > 0) ? window.innerWidth : screen.width;

    if (winWidth >= 768) {
        $(".section__container--new-items").owlCarousel({
            items: 3,
            itemsDesktop: [1020, 2],
            itemsDesktopSmall: false,
            itemsTablet: [737, 1],
            itemsMobile: false,
            responsiveBaseWidth: ".container",
        });

        $(".section__container--sale-items").owlCarousel({
            items: 3,
            itemsDesktop: [1020, 2],
            itemsDesktopSmall: false,
            itemsTablet: [737, 1],
            itemsMobile: false,
            responsiveBaseWidth: ".container",
        });
    }

    $(".hero-slider__container").owlCarousel({
        singleItem:true
        ,
        autoPlay: true
    });

    ///////////////
    // MAIN MENU
    ///////////////
    var mainMenuList = document.querySelector(".main-nav__list");
    var menuButton = document.querySelector(".menu-button");

    menuButton.addEventListener("click", function (event) {
        if (mainMenuList.classList.contains("main-nav__list--shown")){
            // alert("hiding menu");
            mainMenuList.classList.remove("main-nav__list--shown");
        } else {
            // alert("showint menu");
            mainMenuList.classList.add("main-nav__list--shown");
        }
    });
});