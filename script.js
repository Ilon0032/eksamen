window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector(".burgermenu").addEventListener("click", burger);
}

function burger() {
    console.log("burgermenu change");
    this.classList.toggle("burger");
    document.querySelector("#menu").classList.toggle("hide_nav");

}

//
//
//function burger() {
//    console.log("burgermenu klik vis");
//
//}

//function visMenu() {
//    console.log("burgermenu vises")
//    document.querySelector(".burgermenu").classList.add("burgervis")
//}
