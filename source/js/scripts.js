;
(function (){
    var ratings = document.querySelectorAll(".rating");

    for (var i = 0; i < ratings.length; i++) {
        
        ratings[i].addEventListener("mousemove", function(event){
            console.log(event.offsetX);
        });
    }

    // document.addEventListener("mousemove", function(event){
    //     // if (event.target.className === "rating") {
    //     //     console.log('hmm');
    //     // }
    //     console.log(event.target.className);

    //     if (event.target.className === "button") {
    //         alert("!");
    //     }
    // });
}());