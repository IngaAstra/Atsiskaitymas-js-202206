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

const kilogramai = parseInt(document.getElementById('search').value);
console.log(kilogramai)
// const svaraiKoef = search * 2.2046
// console.log(svaraiKoef)

// function convertWeight(search){
//     document.getElementById('output').innerHTML = search + 'kg = ' + svaraiKoef.toFixed(3) + 'lb.'
// }
function convertWeight(search) {
    document.getElementById("output").innerHTML=search/2.2046;

}