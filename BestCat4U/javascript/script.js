import { haalKatFotoOp } from './foto.js';

let form = document.getElementById('template');
let div = document.getElementById('template-div')
// Buttons van de form (volgende vraag, verzenden/submit op het einde)
let buttonVolgende = document.getElementById('volgende-knop');
let buttonVerzenden = document.getElementById('verzend-knop');
// Radio buttons (1 - 6)
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
// Hier worden de keuzes opgeslagen
let gebruikersInputVolledigeArray = [];
// Tijdelijk gemaakt om te debuggen
let gebruikersInput1;
// Counter om vraag nr, bij te houden
let counter = 1;
// Variabelen om tekst en afbeelding (respectievelijk), te veranderen
let tekstVraag = document.getElementById('vraag-tekst');
let afbeeldingVeranderen = document.getElementById('image-changer');

// Divs met radioknoppen voor de vragen (max 6)
let radioKnoppenDiv1 = document.createElement("div");
let radioKnoppenDiv2 = document.createElement("div");
let radioKnoppenDiv3 = document.createElement("div");
let radioKnoppenDiv4 = document.createElement("div");
let radioKnoppenDiv5 = document.createElement("div");
let radioKnoppenDiv6 = document.createElement("div");
// Parent div om de radioknoppen in te steken
let parentVanRadioKnoppenDiv = document.getElementById('radio-knop-groep-parent');
let buttonFoto = document.getElementById("button-volgend-foto");
let fotoTekst = document.getElementById("imgCaption");

let formValidatieTekst = document.getElementById('errorBerichtenValidatie');
let aantalKeerGeklikt = 0;
let aantalKeerGeklikt2 = 0;
let mainPagina = document.querySelector("main");

async function maakKatElement(naamKat, ras, omschrijving) {
    try {
        const fotoUrl = await haalKatFotoOp(ras);
        let katElement = document.createElement("div");
        katElement.setAttribute("class", "katContainer");
        katElement.innerHTML = 
            `<h2 class="naamKat">${naamKat}</h2>
            <img src="${fotoUrl}" alt="${naamKat}" class="fotoKat">
            <p class="omschrijvingKat">${omschrijving}</p>`;
        return katElement;
    } catch (error) {
        console.error("Er was een fout bij het ophalen van de foto:", error);
        return null;
    }
}

// Initialisatie: aanmaken van eerste radioknoppen

resetter(counter);
buttonVerzenden.toggleAttribute("hidden");

function resetter(county){

    if (county == 1){

        (async function() {
            try {
                const ras = "bsho";
                const fotoUrl = await haalKatFotoOp(ras);
                afbeeldingVeranderen.setAttribute("src", fotoUrl);
                fotoTekst.innerText = "Voorbeeld van Cobby kenmerken: klein, bolvormig. (ras: British Shorthair)";
            } catch (error) {
                console.error("Er was een fout bij het ophalen van de foto:", error);
            }
        })();
        tekstVraag.innerText = "Welk lichaamstype verkiest u?";
        // afbeeldingVeranderen.setAttribute('src', '../images/Cobby1.jpg');
        
        for(let i = 1; i <= 6; i++){
    
            if(i == 1){
                radioKnoppenDiv1.setAttribute("class", "radio-knop-groep");
                radioKnoppenDiv1.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Cobby</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-1\">";
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv1);
                button1 = document.getElementById("button-1");
            }
             if (i == 2){
                radioKnoppenDiv2.setAttribute("class", "radio-knop-groep");
                radioKnoppenDiv2.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Dwerg</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-2\">";
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv2);
                button2 = document.getElementById("button-2");
            }
            if (i == 3){
                radioKnoppenDiv3.setAttribute("class", "radio-knop-groep");
                radioKnoppenDiv3.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Exotisch (Foreign)</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-3\">";
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv3);
                button3 = document.getElementById("button-3");
            }
            if (i == 4){
                radioKnoppenDiv4.setAttribute("class", "radio-knop-groep");
                radioKnoppenDiv4.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Groot</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-4\">";
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv4);
                button4 = document.getElementById("button-4");
            }
            if (i == 5){
                radioKnoppenDiv5.setAttribute("class", "radio-knop-groep");
                radioKnoppenDiv5.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Normaal</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-5\">";
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv5);
                button5 = document.getElementById("button-5");
            }
            if (i == 6){
                radioKnoppenDiv6.setAttribute("class", "radio-knop-groep");
                radioKnoppenDiv6.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Oosters (Oriental)</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-6\">";
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv6);
                button6 = document.getElementById("button-6");
            }
        }
        fotoTekst.innerText = "Voorbeeld van Cobby, kenmerken: klein, bolvormig.";
        buttonFoto.innerText = "Toon Dwerg";
    }

    if(county == 2){
        parentVanRadioKnoppenDiv.removeChild(radioKnoppenDiv1);
        parentVanRadioKnoppenDiv.removeChild(radioKnoppenDiv2);
        parentVanRadioKnoppenDiv.removeChild(radioKnoppenDiv3);
        parentVanRadioKnoppenDiv.removeChild(radioKnoppenDiv4);
        parentVanRadioKnoppenDiv.removeChild(radioKnoppenDiv5);
        parentVanRadioKnoppenDiv.removeChild(radioKnoppenDiv6);
        for(let i = 1; i <= 5; i++){
            if(i == 1){
                radioKnoppenDiv1.setAttribute("class", "radio-knop-groep");
                radioKnoppenDiv1.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Kaal</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-1\">";
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv1);
                button1 = document.getElementById("button-1");
            }
            if(i == 2){
                radioKnoppenDiv2.setAttribute("class", "radio-knop-groep");
                radioKnoppenDiv2.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Kort</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-2\">";
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv2);
                button2 = document.getElementById("button-2");
            }
             if (i == 3){
                radioKnoppenDiv3.setAttribute("class", "radio-knop-groep");
                radioKnoppenDiv3.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Medium</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-3\">";
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv3);
                button3 = document.getElementById("button-3");
            }
            if (i == 4){
                radioKnoppenDiv4.setAttribute("class", "radio-knop-groep");
                radioKnoppenDiv4.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Lang</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-4\">";
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv4);
                button4 = document.getElementById("button-4");
            }
            if (i == 5){
                radioKnoppenDiv5.setAttribute("class", "radio-knop-groep");
                radioKnoppenDiv5.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Rex (gekruld)</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-5\">";
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv5);
                button5 = document.getElementById("button-5");
            }
        }

        (async function() {
            try {
                const ras = "sphy";
                const fotoUrl = await haalKatFotoOp(ras);
                afbeeldingVeranderen.setAttribute("src", fotoUrl);
                fotoTekst.innerText = "Voorbeeld van kaal (ras: Sphynx)";
            } catch (error) {
                console.error("Er was een fout bij het ophalen van de foto:", error);
            }
        })();
        // fotoTekst.innerText = "Voorbeeld van Kaal";
        buttonFoto.innerText = "Toon kort";
    }

    if(county == 3){
        parentVanRadioKnoppenDiv.removeChild(radioKnoppenDiv3);
        parentVanRadioKnoppenDiv.removeChild(radioKnoppenDiv4);
        parentVanRadioKnoppenDiv.removeChild(radioKnoppenDiv5);
        afbeeldingVeranderen.toggleAttribute("hidden");
        fotoTekst.toggleAttribute("hidden");
        buttonFoto.toggleAttribute("hidden");

        for(let i = 1; i <= 2; i++){
    
            if(i == 1){
                radioKnoppenDiv1.setAttribute("class", "radio-knop-groep");
                radioKnoppenDiv1.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Ja</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-1\">";
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv1);
                button1 = document.getElementById("button-1");
            }
             if (i == 2){
                radioKnoppenDiv2.setAttribute("class", "radio-knop-groep");
                radioKnoppenDiv2.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Nee</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-2\">";
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv2);
                button2 = document.getElementById("button-2");
            }
        }
    }
}

buttonVolgende.addEventListener('click', function(){
    console.log(`counter: ${counter}`);

// Vraag 1: Welk lichaamstype wilt u?
if(counter == 1){
        tekstVraag.innerText = "Welk lichaamstype verkiest u?";
        // afbeeldingVeranderen.setAttribute('src', "../images/Cobby1.jpg");

        if(gebruikersInputVolledigeArray.indexOf("Cobby") == -1 && gebruikersInputVolledigeArray.indexOf("Dwerg") == -1 && gebruikersInputVolledigeArray.indexOf("Foreign") == -1 && gebruikersInputVolledigeArray.indexOf("Groot") == -1 && gebruikersInputVolledigeArray.indexOf("Normaal") == -1 && gebruikersInputVolledigeArray.indexOf("Oriental") == -1) {
                if(button1.checked){
                    gebruikersInput1 = "Cobby";
                }
                if(button2.checked){
                    gebruikersInput1 = "Dwerg";
                }
                if(button3.checked){
                    gebruikersInput1 = "Foreign";
                }
                if(button4.checked){
                    gebruikersInput1 = "Groot";
                }
                if(button5.checked){
                    gebruikersInput1 = "Normaal";
                }
                if(button6.checked){
                    gebruikersInput1 = "Oriental";
                }
            
                if(gebruikersInput1 == "Cobby" || gebruikersInput1 == "Dwerg" || gebruikersInput1 == "Foreign" || gebruikersInput1 == "Groot" || gebruikersInput1 == "Normaal" || gebruikersInput1 == "Oriental"){
                    gebruikersInputVolledigeArray.push(gebruikersInput1);
                    counter++;
                    resetter(2);
                    button1.checked = false;
                    button2.checked = false;
                    button3.checked = false;
                    button4.checked = false;
                    button5.checked = false;
                    button6.checked = false;
                    formValidatieTekst.innerText = "";
                } else {
                    formValidatieTekst.innerText = "Gelieve een keuze te maken";
                }
        } 
    }

// Vraag 2: Hoe moet de haarlengte zijn?
    if(counter == 2){
        tekstVraag.innerText = "Hoe moet de haarlengte zijn?";
        // afbeeldingVeranderen.setAttribute('src', "../images/Sphynx Kat.jpg");

        if(gebruikersInputVolledigeArray.indexOf("Kaal") == -1 && gebruikersInputVolledigeArray.indexOf("Kort") == -1 && gebruikersInputVolledigeArray.indexOf("Medium") == -1 && gebruikersInputVolledigeArray.indexOf("Lang") == -1 && gebruikersInputVolledigeArray.indexOf("Rex") == -1){
            if(button1.checked){
                gebruikersInput1 = "Kaal";
            }
            if(button2.checked){
                gebruikersInput1 = "Kort";
            }
            if(button3.checked){
                gebruikersInput1 = "Medium";
            }
            if(button4.checked){
                gebruikersInput1 = "Lang";
            }
            if(button5.checked){
                gebruikersInput1 = "Rex";
            }
            if(gebruikersInput1 == "Kaal" || gebruikersInput1 == "Kort" || gebruikersInput1 == "Medium" || gebruikersInput1 == "Lang" || gebruikersInput1 == "Rex"){
                // condities die geacepteerd worden
                if ((gebruikersInputVolledigeArray[0] == "Cobby" && (gebruikersInput1 == "Kort" || gebruikersInput1 == "Lang")) || (gebruikersInputVolledigeArray[0] == "Dwerg" && (gebruikersInput1 == "Kort" || gebruikersInput1 == "Lang")) || (gebruikersInputVolledigeArray[0] == "Foreign" && gebruikersInput1 == "Medium") || (gebruikersInputVolledigeArray[0] == "Groot" && (gebruikersInput1 == "Medium" || gebruikersInput1 == "Lang")) || (gebruikersInputVolledigeArray[0] == "Oriental" && (gebruikersInput1 == "Kaal" || gebruikersInput1 == "Kort"))){
                gebruikersInputVolledigeArray.push(gebruikersInput1)
                counter++;
                resetter(3);
                button1.checked = false;
                button2.checked = false;
                button3.checked = false;
                button4.checked = false;
                button5.checked = false;
                formValidatieTekst.innerText = "";
                }

                // condities die niet geacepteerd worden
                if ((gebruikersInputVolledigeArray[0] == "Cobby" || gebruikersInputVolledigeArray[0] == "Dwerg" || gebruikersInputVolledigeArray[0] == "Foreign" || gebruikersInputVolledigeArray[0] == "Groot" || gebruikersInputVolledigeArray[0] == "Normaal") && gebruikersInput1 == "Kaal"){
                    formValidatieTekst.innerText = `Kaal is niet mogelijk bij de keuze van lichaamstype: ${gebruikersInputVolledigeArray[0]}`;
                } 
                if ((gebruikersInputVolledigeArray[0] == "Foreign" || gebruikersInputVolledigeArray[0] == "Groot") && gebruikersInput1 == "Kort"){
                    formValidatieTekst.innerText = `Kort haar is niet mogelijk bij de keuze van lichaamstype: ${gebruikersInputVolledigeArray[0]}`;
                } 
                if ((gebruikersInputVolledigeArray[0] == "Cobby" || gebruikersInputVolledigeArray[0] == "Dwerg" || gebruikersInputVolledigeArray[0] == "Normaal" || gebruikersInputVolledigeArray[0] == "Oriental") && gebruikersInput1 == "Medium"){
                    formValidatieTekst.innerText = `Normale haarlengte is niet mogelijk bij de keuze van lichaamstype: ${gebruikersInputVolledigeArray[0]}`;
                }
                if ((gebruikersInputVolledigeArray[0] == "Foreign" || gebruikersInputVolledigeArray[0] == "Normaal" || gebruikersInputVolledigeArray[0] == "Oriental") && gebruikersInput1 == "Lang"){
                    formValidatieTekst.innerText = `Lang haar is niet mogelijk bij de keuze van lichaamstype: ${gebruikersInputVolledigeArray[0]}`;
                }
                if ((gebruikersInputVolledigeArray[0] == "Cobby" || gebruikersInputVolledigeArray[0] == "Dwerg" || gebruikersInputVolledigeArray[0] == "Foreign" || gebruikersInputVolledigeArray[0] == "Groot" || gebruikersInputVolledigeArray[0] == "Oriental") && gebruikersInput1 == "Rex"){
                    formValidatieTekst.innerText = `Gekruld haar (rex) is niet mogelijk bij de keuze van lichaamstype: ${gebruikersInputVolledigeArray[0]}`;
                }
            }

            if (aantalKeerGeklikt !== 0){
                formValidatieTekst.innerText = "Gelieve een keuze te maken";
            }

            aantalKeerGeklikt++;
        }
    }

    // Vraag 3: Hebt u jonge kinderen (-12 jaar)?
    if(counter == 3){
        formValidatieTekst.innerText = "";
        tekstVraag.innerText = "Hebt u jonge kinderen (-12 jaar)?";
        afbeeldingVeranderen.setAttribute('src', "../images/placeholder.png");

        if(gebruikersInputVolledigeArray.indexOf("jaVraag3") == -1 && gebruikersInputVolledigeArray.indexOf("neeVraag3") == -1){
            if(button1.checked){
                gebruikersInput1 = "jaVraag3";
            }
            if(button2.checked){
                gebruikersInput1 = "neeVraag3";
            }

            if(gebruikersInput1 == "jaVraag3" || gebruikersInput1 == "neeVraag3"){
                gebruikersInputVolledigeArray.push(gebruikersInput1);
                buttonVolgende.toggleAttribute("hidden");
                buttonVerzenden.toggleAttribute("hidden");
                formValidatieTekst.innerText = "";
            } else if (aantalKeerGeklikt2 !== 0){
                formValidatieTekst.innerText = "Gelieve een keuze te maken";
            }
        }
        aantalKeerGeklikt2++;
    }

    console.log(`counter einde: ${counter}`)
    console.log(gebruikersInputVolledigeArray);
    console.log(gebruikersInputVolledigeArray.toString());
    console.log(`aantalkeren geklikt: ${aantalKeerGeklikt}`)
})

buttonVerzenden.addEventListener('click', function(){
    maakPaginaLeegBehalveHeader();
    function maakPaginaLeegBehalveHeader() {
        let pagina = document.querySelector("main");    
        pagina.innerHTML = "";
    }
    
    // Destructuring
    const [keuze1, keuze2, keuze3] = gebruikersInputVolledigeArray;
    localStorage.setItem('quiz-keuze1', keuze1);
    localStorage.setItem('quiz-keuze2', keuze2);
    localStorage.setItem('quiz-keuze3', keuze3);
    // localStorage.setItem('quiz-keuzes', gebruikersInputVolledigeArray);

    let keuzesParagraaf = document.createElement("p");
    let keuzesTekst = "";

    for (let i = 0; i < gebruikersInputVolledigeArray.length; i++){
        console.log(`Keuze ${i+1}: ${gebruikersInputVolledigeArray[i]}`);
        keuzesTekst += `Keuze ${i+1}: ${gebruikersInputVolledigeArray[i]}, `;
    }

    keuzesParagraaf.innerText = keuzesTekst;
    mainPagina.appendChild(keuzesParagraaf);

    // Voorbeeld: TODO: werk morgen af
    // if (localStorage.getItem('quiz-keuze1') == "Cobby" && localStorage.getItem('quiz-keuze2') == "Kaal" && localStorage.getItem('quiz-keuze3') == "jaVraag3"){
    // }

    // maakKatElement("naam kat", "bsho", "korte omschrijving")
    // .then((element) => {
    //     if (element) {
    //         mainPagina.appendChild(element);
    //     } else {
    //         console.log("Er trad een fout op bij het aanmaken van het katelement, probeer binnen enkele ogenblikken opnieuw.")
    //     }
    // });
})

form.addEventListener('submit', function(event){
    event.preventDefault();
})