let form = document.getElementById('template');
let buttonVorige = document.getElementById('vorige-knop');
let buttonVolgende = document.getElementById('volgende-knop');
let buttonVerzenden = document.getElementById('verzend-knop')
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let gebruikersInputVolledigeArray = [];
let gebruikersInput1;
let counter = 0;
let tekstVraag = document.getElementById('vraag-tekst');
let afbeeldingVeranderen = document.getElementById('image-changer')

let radioKnoppenDiv1 = document.createElement("div");
let radioKnoppenDiv2 = document.createElement("div");
let radioKnoppenDiv3 = document.createElement("div");
let radioKnoppenDiv4 = document.createElement("div");
let radioKnoppenDiv5 = document.createElement("div");
let radioKnoppenDiv6 = document.createElement("div");
let parentVanRadioKnoppenDiv = document.getElementById('radio-knop-groep-parent');

// Initialisatie: aanmaken van eerste radioknoppen

tekstVraag.innerText = "Wilt u een naaktkat?"
afbeeldingVeranderen.setAttribute('src', '../images/Sphynx Kat.jpg')
for(let i = 1; i <= 2; i++){

    if(i == 1){
        radioKnoppenDiv1.setAttribute("class", "radio-knop-groep")
        radioKnoppenDiv1.innerHTML = "<label for=\"template-1\">Ja</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" value=\"sociale-kat-ja\" id=\"button-1\">"
        parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv1)
        button1 = document.getElementById('button-1')
    } else {
        radioKnoppenDiv2.setAttribute("class", "radio-knop-groep")
        radioKnoppenDiv2.innerHTML = "<label for=\"template-1\">Nee</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" value=\"sociale-kat-ja\" id=\"button-2\">"
        parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv2)
        button2 = document.getElementById('button-2')
    }
}

buttonVolgende.addEventListener('click', function(){
    console.log(`counter: ${counter}`)

if(counter == 0){
    console.log(gebruikersInputVolledigeArray.indexOf("jaVraag1"))
    // als "jaVraag1" en "neeVraag1" niet bestaan in "gebruikersInputVolledigeArray" vul deze dan aan
    if(gebruikersInputVolledigeArray.indexOf("jaVraag1") == -1 && gebruikersInputVolledigeArray.indexOf("neeVraag1") == -1){
        
        if(button1.checked){
            gebruikersInput1 = "jaVraag1";
        }
        if(button2.checked){
            gebruikersInput1 = "neeVraag1";
        }
    
        if(gebruikersInput1 == "jaVraag1" || gebruikersInput1 == "neeVraag1"){
            gebruikersInputVolledigeArray.push(gebruikersInput1);
            counter++
            button1.checked = false
            button2.checked = false
        }
        
    }

    if(gebruikersInputVolledigeArray.indexOf("jaVraag1") == 0 && gebruikersInputVolledigeArray.indexOf("neeVraag1") == -1){
        if(button2.checked){
            gebruikersInput1 = "neeVraag1";
            gebruikersInputVolledigeArray.shift()
            gebruikersInputVolledigeArray.push(gebruikersInput1)
            counter++
            button1.checked = false
            button2.checked = false
        }
    }

    if(gebruikersInputVolledigeArray.indexOf("neeVraag1") == 0 && gebruikersInputVolledigeArray.indexOf("jaVraag1") == -1){
        if(button1.checked){
            gebruikersInput1 = "jaVraag1";
            gebruikersInputVolledigeArray.shift()
            gebruikersInputVolledigeArray.push(gebruikersInput1)
            counter++
            button1.checked = false
            button2.checked = false
        }
    }
}

// Verwijder de radioknoppen van vraag1 voor vraag2 begint
parentVanRadioKnoppenDiv.removeChild(radioKnoppenDiv1);
parentVanRadioKnoppenDiv.removeChild(radioKnoppenDiv2);

// Vraag 2: Welk lichaamstype wilt u?
if(counter == 1){

        tekstVraag.innerText = "Welk lichaamstype verkiest u?"
        afbeeldingVeranderen.setAttribute('src', "../images/cat.jpg")
        

        for(let i = 1; i <= 6; i++){

            if(i == 1){
                radioKnoppenDiv1.setAttribute("class", "radio-knop-groep")
                radioKnoppenDiv1.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Cobby</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-1\">"
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv1)
                button1 = document.getElementById("button-1")
            }
             if (i == 2){
                radioKnoppenDiv2.setAttribute("class", "radio-knop-groep")
                radioKnoppenDiv2.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Dwerg</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-2\">"
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv2)
                button2 = document.getElementById("button-2")
            }
            if (i == 3){
                radioKnoppenDiv3.setAttribute("class", "radio-knop-groep")
                radioKnoppenDiv3.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Foreign (slank)</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-3\">"
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv3)
                button3 = document.getElementById("button-3")
            }
            if (i == 4){
                radioKnoppenDiv4.setAttribute("class", "radio-knop-groep")
                radioKnoppenDiv4.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Groot</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-4\">"
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv4)
                button4 = document.getElementById("button-4")
            }
            if (i == 5){
                radioKnoppenDiv5.setAttribute("class", "radio-knop-groep")
                radioKnoppenDiv5.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Normaal</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-5\">"
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv5)
                button5 = document.getElementById("button-5")
            }
            if (i == 6){
                radioKnoppenDiv6.setAttribute("class", "radio-knop-groep")
                radioKnoppenDiv6.innerHTML = "<label for=\"template-1\" style=\"width: 70px;\">Oriental (slank)</label> <input type=\"radio\" name=\"template-radio\" class=\"radio-knop\" id=\"button-6\">"
                parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv6)
                button6 = document.getElementById("button-6")
            }
        }

        if(gebruikersInputVolledigeArray.indexOf("jaVraag2") == -1 && gebruikersInputVolledigeArray.indexOf("neeVraag2") == -1){
            
            if(button1.checked){
                gebruikersInput1 = "Cobby";
                console.log('test')
            }
            if(button2.checked){
                gebruikersInput1 = "Dwerg";
            }
            if(button3.checked){
                gebruikersInput1 = "Foreign";
            }
            if(button4.checked){
                gebruikersInput1 = "Groot";
                console.log('test362738')
            }
            if(button5.checked){
                gebruikersInput1 = "Normaal";
            }
            if(button6.checked){
                gebruikersInput1 = "Oriental";
            }
            if(gebruikersInput1 == "Cobby" || gebruikersInput1 == "Dwerg" || gebruikersInput1 == "Foreign" || gebruikersInput1 == "Groot" || gebruikersInput1 == "Normaal" || gebruikersInput1 == "Oriental"){
                gebruikersInputVolledigeArray.push(gebruikersInput1);
                counter++
                button1.checked = false
                button2.checked = false
            }
            
        }

    }

    if(counter == 2){

        tekstVraag.innerText = "t2est"
        afbeeldingVeranderen.setAttribute('src', "../images/cat2.jpg")
        if(gebruikersInputVolledigeArray.indexOf("jaVraag3") == -1 && gebruikersInputVolledigeArray.indexOf("neeVraag3") == -1){
            
            if(button1.checked){
                gebruikersInput1 = "jaVraag3";
            }
            if(button2.checked){
                gebruikersInput1 = "neeVraag3";
            }

            if(gebruikersInput1 == "jaVraag3" || gebruikersInput1 == "neeVraag3"){
                gebruikersInputVolledigeArray.push(gebruikersInput1);
                // counter++
                button1.checked = false
                button2.checked = false
            }
            
        }

        // als ja is geantwoord en vervangen moet worden door nee
        if(gebruikersInputVolledigeArray.indexOf("jaVraag3") == 2 && gebruikersInputVolledigeArray.indexOf("neeVraag3") == -1){
            if(button2.checked){
                gebruikersInput1 = "neeVraag3"
                gebruikersInputVolledigeArray.pop()
                gebruikersInputVolledigeArray.push(gebruikersInput1)
                button1.checked = false
                button2.checked = false
            }
        }

        if(gebruikersInputVolledigeArray.indexOf("neeVraag3") == 2 && gebruikersInputVolledigeArray.indexOf("jaVraag3") == -1){
            if(button1.checked){
                gebruikersInput1 = "jaVraag3"
                gebruikersInputVolledigeArray.pop()
                gebruikersInputVolledigeArray.push(gebruikersInput1)
                button1.checked = false
                button2.checked = false
            }
        }

    }
    console.log(`counter einde: ${counter}`)
    console.log(gebruikersInputVolledigeArray)
    console.log(gebruikersInputVolledigeArray.toString())
})

buttonVerzenden.addEventListener('click', function(){
    // if (gebruikersInputVolledigeArray[0].toString() == "jaVraag1"){
    //     console.log('test')
    // }else {
    //     console.log('test2')
    // }
})

form.addEventListener('submit', function(event){
    event.preventDefault();
})