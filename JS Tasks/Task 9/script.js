/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
'use strict'

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
    if (this.budget >= 100000000) {
    console.log(`${this.title} - true, budget more 100 mln. USD`);
} else {
    console.log(`${this.title} - false, budget less 100 mln. USD`);
}
}
}
 // filmu budget pvz
const movie1 = new Movie('No Time to Die', 'XX', 250000000);
const movie2 = new Movie('Sherlock Holmes', 'XX', 90000000);

movie1.wasExpensive();
movie2.wasExpensive();