'use strict';

//declare 3 variables to hold enemy ship locations. each ship takes sup 3 spaces in the grid
let location1 = Math.trunc(Math.random() * 6);
let location2 = location1 + 1;
let location3 = location2 + 1;
console.log(location1, location2, location3);
// const guess = prompt('Enter a number between 0 and 6 to to begin bombing: ');
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk === false) {
    let guess = prompt('Enter a number between 0 and 6 to to begin bombing: ');
    if (guess < 0 && guess > 6) {
        alert('Invalid! Please enter a number between 0 and 6');
    } else {
        guesses++;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert('Hit!');
            hits++;
        } else {
            alert('Miss!');
        }
        if (hits === 3) {
            isSunk = true;
            alert('You sank my battleship!');
            alert("You took " + guesses + " guesses to sink the battleship!");
        }
    }
}