;
(function () {
    ///////////////
    // FILTERS
    ///////////////
    var filterContainers = document.querySelectorAll(".catalog-filter__container");
    var filterContainersNum = filterContainers.length;
    var filterButton = document.querySelector(".catalog-filter__button");

    filterButton.addEventListener("click", function(event) {
        for (var i = 0; i < filterContainersNum; i++) {
            if (filterContainers[i].classList.contains("catalog-filter__container--hide")){
                filterContainers[i].classList.remove("catalog-filter__container--hide");
            } else {
                filterContainers[i].classList.add("catalog-filter__container--hide");
            }
        }
    });
}());