/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
'use strict'
// hidden isvedimas

document.getElementById('output').style.visibility = 'hidden';

// Įvedus skaičių konvertuoja ir parodo html'e
document.getElementById('submit-btn').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('output').style.visibility = 'visible';
    let kg = document.getElementById('search').value;
    document.getElementById('lbOutput').innerHTML = (kg*2.2046).toFixed(3);
    document.getElementById('gramsOutput').innerHTML = kg/0.0010000;
    document.getElementById('ozOutput').innerHTML = (kg*35.274).toFixed(3);
})

// oki