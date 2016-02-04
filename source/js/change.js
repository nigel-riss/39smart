$(document).ready(function() {
    $(window).load(function() {
        $(".change-hero__image").fadeIn(2000);
        $(".change-hero__text").delay(1500).fadeIn("slow");
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
