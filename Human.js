const Player = require('./Player');


class Human extends Player{
    constructor(name) {
        super(name);
    }

    gestureSelector() {
        console.log("Welcome to RPSLS!");
        console.log(this.gestureList);

        this.name = prompt("Player One please enter your Gesture!");
        while(this.gesture != 0 && this.gesture != 1 && this.gesture != 2 && this.gesture != 3 && this.gesture != 4);
        console.log("Invalid Input, please try again!");

       console.log(`${this.name} chooses ${this.gesture}`)
        

        
    }
}

module.exports = Human