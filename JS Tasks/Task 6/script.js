/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */
'use strict'

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

// 1 amziaus vidurkis
let getUserAverageAge = masyvas => {
  let reducer = (total, currentValue) => total + currentValue;
  let sum = masyvas.reduce(reducer)
  return (sum / masyvas.length).toFixed(0);
 }
 let ages = users.map(person => person.age);
 console.log(getUserAverageAge(ages));
// veikia


// 2 naujas masyvas

function getUserNames(users) {
  const userNames = [];  // tuscias masyvas
  for (let a = 0; a < users.length; a++) {
      userNames.push(users[a].name);  // sudedam name
    }
console.log(userNames);
}
getUserNames(users); 

// veikia