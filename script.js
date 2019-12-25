window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector(".burgermenu").addEventListener("click", burger);
}
//
function burger() {
    console.log("burgermenu change");
    this.classList.toggle("burger");
    this.classList.remove("nav_hide");
}

//function menuVis() {
//    console.log("burgermenu klik vis");
//    document.querySelector(".burgermenu").classList.remove(".nav_hide");
//
//}

//function visMenu() {
//    console.log("burgermenu vises")
//    document.querySelector(".burgermenu").classList.add("burgervis")
//}
