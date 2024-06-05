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


// Initialisatie: aanmaken van eerste radioknoppen

resetter(counter);
buttonVerzenden.toggleAttribute("hidden");

function resetter(county){

    if (county == 1){
        tekstVraag.innerText = "Welk lichaamstype verkiest u?";
        afbeeldingVeranderen.setAttribute('src', '../images/Cobby1.jpg');
        
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
        fotoTekst.innerText = "Voorbeeld van Kaal";
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
        afbeeldingVeranderen.setAttribute('src', "../images/Cobby1.jpg");

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
                }
        } 
    }

// Vraag 2: Hoe moet de haarlengte zijn?
    if(counter == 2){
        tekstVraag.innerText = "Hoe moet de haarlengte zijn?";
        afbeeldingVeranderen.setAttribute('src', "../images/Sphynx Kat.jpg");

        if(gebruikersInputVolledigeArray.indexOf("Kort") == -1 && gebruikersInputVolledigeArray.indexOf("Medium") == -1 && gebruikersInputVolledigeArray.indexOf("Lang") == -1 && gebruikersInputVolledigeArray.indexOf("Rex") == -1){
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
                gebruikersInputVolledigeArray.push(gebruikersInput1)
                counter++;
                resetter(3);
                button1.checked = false;
                button2.checked = false;
                button3.checked = false;
                button4.checked = false;
                button5.checked = false;
            }
        }
    }

    // Vraag 3: Hebt u jonge kinderen (-12 jaar)?
    if(counter == 3){

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
            }
        }
    }

    console.log(`counter einde: ${counter}`)
    console.log(gebruikersInputVolledigeArray);
    console.log(gebruikersInputVolledigeArray.toString());
})

buttonVerzenden.addEventListener('click', function(){
    location.href="./resultaat.html"
    // Destructuring
    const [keuze1, keuze2, keuze3] = gebruikersInputVolledigeArray;
    localStorage.setItem('quiz-keuze1', keuze1);
    localStorage.setItem('quiz-keuze2', keuze2);
    localStorage.setItem('quiz-keuze3', keuze3);
    // localStorage.setItem('quiz-keuzes', gebruikersInputVolledigeArray);

    for (let i = 0; i < gebruikersInputVolledigeArray.length; i++){
        console.log(gebruikersInputVolledigeArray[i]);
    }
    // if (gebruikersInputVolledigeArray[0].toString() == "jaVraag1"){
    //     console.log('test')
    // }else {
    //     console.log('test2')
    // }

    // Scherm leegmaken/ form verwijderen
    // div.removeChild(form);

    // voorbeeld
    // for(let i = 1; i <= 3; i++){
    //     let katResultaatDiv = document.createElement("div");
    //     katResultaatDiv.style.margin = "5px"
    //     katResultaatDiv.style.backgroundColor = "blue"    
    //     katResultaatDiv.innerHTML = "<div><h2>naam kat</h2><img src=\"\" alt=\"\"><p>Korte omschrijveing</p></div>"
    //     div.appendChild(katResultaatDiv);
    //     console.log("uh")
    // }
})

form.addEventListener('submit', function(event){
    event.preventDefault();
})