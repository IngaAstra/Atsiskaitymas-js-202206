/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
' use strict'
const ENDPOINT = 'cars.json';

const dataPlace = document.getElementById("output");

function getData(){
    return fetch(ENDPOINT)
    .then(response => response.json())
}

getData()
.then(data => {
    appendData(data)
})
.catch(e => console(e))

function appendData(data){
    data.map(x => {
        const newCard = document.createElement("div");
        newCard.classList.add("card");

        const models = x.models;
        newCard.innerHTML =
        `
        <div id="modelstyle">
        <h2>${x.brand}</h2>
            <h4>Models:<h4>
            </div>
            <ul id="carmodel">
                ${models.map(x => `<li id="liststyle">${x}</li>`).join("")}
            </ul>
        `
        dataPlace.append(newCard);
    })
}
// veikia
