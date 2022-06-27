/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
'use strict'  

const countButton = document.getElementById('btn__element');
const countNumber = document.getElementById('btn__state');

countButton.addEventListener('click', countUp);

function countUp() {
    countNumber.innerHTML++;
}
// veikia :)
