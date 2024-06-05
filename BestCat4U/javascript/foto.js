"use strict";

const API_URL = "https://api.thecatapi.com/v1/images/search";

let knop = document.getElementById("button-volgend-foto");
let foto = document.getElementById("image-changer");
let grabVraag;
let button;
let fotoTekst2 = document.getElementById("imgCaption");
let nummer = 0;

const haalKatFotoOp = async (ras) => {
    try {
        const response = await fetch(`${API_URL}?breed_ids=${ras}`);
        const data = await response.json();
        return data[0].url;
    } catch (error) {
        console.error("Er was een error:", error);
        return "../images/placeholder.jpg";
    }
}

async function veranderFotoKat(grabVraag) {
    let ras = "";
    let beschrijving = "";
    nummer++;
    
    if (grabVraag == "Welk lichaamstype verkiest u?") {
        if (nummer == 0) {
            ras = "bsho";
            beschrijving = "Voorbeeld van Cobby kenmerken: klein, bolvormig. (ras: British Shorthair)";
            button.innerText = "Toon Dwerg";
        }
        if (nummer == 1) {
            ras = "munc";
            beschrijving = "Voorbeeld van Dwerg kenmerken: (zeer klein), gemuteerd. (ras: Munchkin)";
            button.innerText = "Toon Exotisch";
        }
        if (nummer == 2) {
            ras = "nebe";
            beschrijving = "Voorbeeld van Exotisch (ras: Nebelung)";
            button.innerText = "Toon Groot";
        }
        if (nummer == 3) {
            ras = "mcoo";
            beschrijving = "Voorbeeld van Groot (ras: Maine Coon)";
            button.innerText = "Toon Normaal";
        }
        if (nummer == 4) {
            ras = "amis"; // Lijkt het meest op een huistkat, de API heeft geen kat zonder ras
            beschrijving = "Voorbeeld van Normaal (ras: Australian Mist)";
            button.innerText = "Toon Oosters";
        }
        if (nummer == 5) {
            ras = "orie";
            beschrijving = "Voorbeeld van Oosters (ras: Oriental (Oosters) Shorthair)";
            button.innerText = "Ga terug naar foto1";
            nummer = -1;
        }
    }
    
    if (grabVraag == "Hoe moet de haarlengte zijn?") {
        if (nummer == 0) {
            ras = "sphy";
            beschrijving = "Voorbeeld van kaal (ras: Sphynx)";
            button.innerText = "Toon kort";
        }
        if (nummer == 1) {
            ras = "asho";
            beschrijving = "Voorbeeld van kort (ras: American Shorthair)";
            button.innerText = "Toon Medium";
        }
        if (nummer == 2) {
            ras = "mcoo";
            beschrijving = "Voorbeeld van Medium (ras: Maine Coone)";
            button.innerText = "Toon Lang";
        }
        if (nummer == 3) {
            ras = "bslo";
            beschrijving = "Voorbeeld van Lang (ras: British Longhair)";
            button.innerText = "Toon Rex (gekruld)";
        }
        if (nummer == 4) {
            ras = "lape";
            beschrijving = "Voorbeeld van rex (gekruld) (ras: LaPerm)";
            button.innerText = "Ga terug naar foto1";
            nummer = -1;
        }
    }

    const fotoUrl = await haalKatFotoOp(ras);
    foto.setAttribute("src", fotoUrl);
    fotoTekst2.innerText = beschrijving;
}

knop.addEventListener("click", function() {
    grabVraag = document.getElementById('vraag-tekst').innerText;
    button = document.getElementById("button-volgend-foto");
    veranderFotoKat(grabVraag);
});