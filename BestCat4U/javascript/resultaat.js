let titel = document.getElementById('keuze-gebruiker');
console.log(titel)

console.log(localStorage.getItem('quiz-keuzes').split(','))
let resultaten= localStorage.getItem('quiz-keuzes').split(',');

titel.innerText = resultaten