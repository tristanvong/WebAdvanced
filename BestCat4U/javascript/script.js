let form = document.getElementById('template');
let button1 = document.getElementById('radio-knop-1');
let button2 = document.getElementById('radio-knop-2');
let buttonVorige = document.getElementById('vorige-knop');
let buttonVolgende = document.getElementById('volgende-knop');
let buttonVerzenden = document.getElementById('verzend-knop')
let gebruikersInputVolledigeArray = [];
let gebruikersInput1;
let counter = 0;
let tekstVraag = document.getElementById('vraag-tekst');
let afbeeldingVeranderen = document.getElementById('image-changer')
// const radioKnoppenDiv = document.createElement("div");
// radioKnoppenDiv.innerHTML = "Test"
// radioKnoppenDiv.style.backgroundColor = "blue"
// const parentVanRadioKnoppenDiv = document.querySelector("body");
// parentVanRadioKnoppenDiv.appendChild(radioKnoppenDiv)


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


if(counter == 1){

        tekstVraag.innerText = "Test"
        afbeeldingVeranderen.setAttribute('src', "../images/cat.jpg")
        if(gebruikersInputVolledigeArray.indexOf("jaVraag2") == -1 && gebruikersInputVolledigeArray.indexOf("neeVraag2") == -1){
            
            if(button1.checked){
                gebruikersInput1 = "jaVraag2";
            }
            if(button2.checked){
                gebruikersInput1 = "neeVraag2";
            }

            if(gebruikersInput1 == "jaVraag2" || gebruikersInput1 == "neeVraag2"){
                gebruikersInputVolledigeArray.push(gebruikersInput1);
                counter++
                button1.checked = false
                button2.checked = false
            }
            
        }

        // als ja is geantwoord en vervangen moet worden door nee
        if(gebruikersInputVolledigeArray.indexOf("jaVraag2") == 1 && gebruikersInputVolledigeArray.indexOf("neeVraag2") == -1){
            if(button2.checked){
                gebruikersInput1 = "neeVraag2"
                gebruikersInputVolledigeArray.pop()
                gebruikersInputVolledigeArray.push(gebruikersInput1)
                button1.checked = false
                button2.checked = false
                counter++
            }
        }

        if(gebruikersInputVolledigeArray.indexOf("neeVraag2") == 1 && gebruikersInputVolledigeArray.indexOf("jaVraag2") == -1){
            if(button1.checked){
                gebruikersInput1 = "jaVraag2"
                gebruikersInputVolledigeArray.pop()
                gebruikersInputVolledigeArray.push(gebruikersInput1)
                button1.checked = false
                button2.checked = false
                counter++
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