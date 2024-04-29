let form = document.getElementById('template');
let button1 = document.getElementById('radio-knop-1');
let button2 = document.getElementById('radio-knop-2');
let buttonVorige = document.getElementById('vorige-knop');
let buttonVolgende = document.getElementById('volgende-knop');

buttonVorige.addEventListener('click', function(){
    console.log('test')
    alert('Dit is de eerste vraag je kan niet terug')
})

buttonVolgende.addEventListener('click', function(){
    console.log('test2')
})


form.addEventListener('submit', function(event){
    event.preventDefault()

    if(button1.checked){
        console.log('Jij wilt een sociale kat!')
    }
    if(button2.checked){
        console.log('Jij wilt geen sociale kat!')
    }
})