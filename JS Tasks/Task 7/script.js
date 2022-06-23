/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

const showObjectKeys = Object.keys(audi);
console.log(showObjectKeys);

// console.log(Object.keys(audi));

// gavau key masyve, bet nesuprantu užduotie kai su ta finkcija

