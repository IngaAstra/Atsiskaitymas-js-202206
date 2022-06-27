/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
'use strict'

function Calculator() {
    this.read = function() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    };
    this.sum = function() {
      return this.a + this.b;
    };
    this.sub = function() {
      return this.a - this.b;
    };
    this.mul = function() {
      return this.a * this.b;
    };
    this.div = function() {
      return this.a / this.b;
    };
  }
  let calculator = new Calculator();
  calculator.read();
  
  console.log( "Sudėta: " + calculator.sum() );
  console.log( "Atimta: " + calculator.sub() );
  console.log( "Dauginta: " + calculator.mul() );
  console.log( "Dalinta: " + calculator.div() );

  // veikia **11
  