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

    // console.log(nummer)
    

    if(grabVraag == "Welk lichaamstype verkiest u?"){
        nummer++
        if(nummer == 0){
            foto.setAttribute("src", "../images/Cobby1.jpg")
            fotoTekst2.innerText = "Voorbeeld van Cobby kenmerken: klein, bolvormig. (ras: British Shorthair)"
            button.innerText = "Toon Dwerg"
        }
        if(nummer == 1){
            foto.setAttribute("src", "../images/Munchkin.jpg")
            fotoTekst2.innerText = "Voorbeeld van Dwerg kenmerken: (zeer klein), gemuteerd. (ras: Munchkin)"
            button.innerText = "Toon Exotisch"
        }
        if(nummer == 2){
            foto.setAttribute("src", "../images/Foreign1.jpg")
            fotoTekst2.innerText = "Voorbeeld van Exotisch (ras: Nebelung)"
            button.innerText = "Toon Groot"
        }
        if(nummer == 3){
            foto.setAttribute("src", "../images/MaineCoone1edit.jpg")
            fotoTekst2.innerText = "Voorbeeld van Groot (ras: Maine Coone)"
            button.innerText = "Toon Normaal"
        }
        if(nummer == 4){
            foto.setAttribute("src", "../images/Huiskat1.jpg")
            fotoTekst2.innerText = "Voorbeeld van Normaal (ras: Huiskat)"
            button.innerText = "Toon Oosters"
        }
        if(nummer == 5){
            foto.setAttribute("src", "../images/OrientalShorthair.jpg")
            fotoTekst2.innerText = "Voorbeeld van Oosters (ras: Oriental (Oosters) Shorthair)"
            button.innerText = "Ga terug naar foto1"
            nummer = -1
        }
    }
    // Vraag 2  
    if(grabVraag == "Hoe moet de haarlengte zijn?"){
        console.log(`NUMMER= ${nummer}`)
        console.log(`DIT IS VRAAG2`)
        nummer++
        // kaal
        if(nummer == 0){
            foto.setAttribute("src", "../images/Sphynx Kat.jpg")
            button.innerText = "Toon kort"
            fotoTekst2.innerText = "Voorbeeld van kaal"
        }
        // kort
        if(nummer == 1){
            foto.setAttribute("src", "../images/kort-haar-kat.jpg")
            button.innerText = "Toon Medium"
            fotoTekst2.innerText = "Voorbeeld van kort"
        }
        // medium
        if(nummer == 2){
            foto.setAttribute("src", "../images/medium-haar-kat.jpg")
            button.innerText = "Toon Lang"
            fotoTekst2.innerText = "Voorbeeld van Medium"
        }
        // lang
        if(nummer == 3){
            foto.setAttribute("src", "../images/lang-haar-kat.jpg")
            button.innerText = "Toon Rex"
            fotoTekst2.innerText = "Voorbeeld van Lang"
        }
        // rex
        if(nummer == 4){
            foto.setAttribute("src", "../images/Rex-haar-kat.jpg")
            button.innerText = "Ga terug naar foto1"
            fotoTekst2.innerText = "Voorbeeld van rex (gekruld)"
            nummer = -1
        }
    }
})