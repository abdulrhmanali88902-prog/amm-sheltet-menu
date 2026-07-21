let menuHadek = document.getElementById("menu-hadek");
let menuSandwich = document.getElementById("menu-sandwich");
let menuHelo = document.getElementById("menu-helo");
let menuextra = document.getElementById("menu-extra");
let menuDrinkis = document.getElementById("menu-drinkis");
let menuoffers = document.getElementById("menu-offers");


function showMenu(id, button){

    menuHadek.style.display = "none";
    menuSandwich.style.display = "none";
    menuHelo.style.display = "none";
    menuextra.style.display = "none";
    menuDrinkis.style.display = "none";
    menuoffers.style.display = "none";

    document.getElementById(id).style.display = "block";

    let buttons = document.querySelectorAll(".menu-scroll button");

    buttons.forEach(function(btn){
        btn.classList.remove("active");
    });

    button.classList.add("active");
}