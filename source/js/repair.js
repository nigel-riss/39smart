$(document).ready(function() {
    $(window).load(function() {
        $(".repair-hero__image").fadeIn(2000);
        $(".repair-hero__item:nth-of-type(1)").delay(500).fadeIn("slow");
        $(".repair-hero__item:nth-of-type(2)").delay(1500).fadeIn("slow");
        $(".repair-hero__item:nth-of-type(3)").delay(2500).fadeIn("slow");
        $(".repair-hero__item:nth-of-type(4)").delay(3500).fadeIn("slow");
        $(".repair-hero__item:nth-of-type(5)").delay(4500).fadeIn("slow");
        $(".repair-hero__item:nth-of-type(6)").delay(5500).fadeIn("slow");
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
