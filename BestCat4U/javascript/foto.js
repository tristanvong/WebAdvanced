"use strict"
let knop = document.getElementById("button-volgend-foto")
let foto = document.getElementById("image-changer")
let grabVraag;
let button;
let fotoTekst2 = document.getElementById("imgCaption");
let nummer = 0;


knop.addEventListener("click", function(){

    grabVraag = document.getElementById('vraag-tekst').innerText
    button = document.getElementById("button-volgend-foto")

    console.log(nummer)
    

    if(grabVraag == "Welk lichaamstype verkiest u?"){
        nummer++
        if(nummer == 1){
            foto.setAttribute("src", "../images/Munchkin.jpg")
            fotoTekst2.innerText = "Voorbeeld van Dwerg, kenmerken: (zeer klein), gemuteerd. (ras: Munchkin)"
            button.innerText = "Toon Foreign"
        }
        if(nummer == 2){
            foto.setAttribute("src", "../images/Foreign2.jpg")
            fotoTekst2.innerText = "Voorbeeld van Foreign, (ras: Russian Blue)"
            button.innerText = "Toon Groot"
        }
        if(nummer == 3){
            foto.setAttribute("src", "../images/MaineCoone1edit.jpg")
            fotoTekst2.innerText = "Voorbeeld van Groot, (ras: Maine Coone)"
        }
    }
})