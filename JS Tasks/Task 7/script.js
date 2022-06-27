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

// 1 variantas
const showObjectKeys1 = Object.keys(audi);
console.log(showObjectKeys1);

// 2 variantas
console.log(Object.keys(audi));

// 3 variantas su funkcija
function showObjectKeys(object) {
  return Object.keys(object)
}
console.log(showObjectKeys(audi));

//veikia visi
