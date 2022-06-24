/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
'use strict'
const ENDPOINT = 'https://api.github.com/users';

const output = document.getElementById('output');
output.innerHTML = `
<table id="usersTable" style="display: none;" width="100%" border="1px solid black">
        <thead>
            <tr>
                <th id="header-style" width="15%">id</th>
                <th id="header-style" width="35%">login</th>
                <th id="header-style" width="50%">avatar</th>
            </tr>
        </thead>
    <tbody dataPlace></tbody>
</table>
`

// paima info
function myData() {
    return fetch('https://api.github.com/users')
    .then(response => response.json())
};
console.log(myData());

// lentele

function createTable(data) {
    const dataPlace = document.querySelector('[dataPlace]');
    dataPlace.innerHTML = '';
}



myData().then(data => {
    createTable(data)
});
//.catch(event => console.log(event))