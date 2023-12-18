


var squard = document.querySelector(".squard");

document.addEventListener("scroll", function(){
    squard.style.transform = `rotate(` + (window.scrollY) + `deg)` ;  // ekranda neyise scrool ile animasiya vermke ucun window.scrolly nen istifade olunur

});

window.location.pathname