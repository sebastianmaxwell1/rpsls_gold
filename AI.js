const Player = require('./Player');


class AI extends Player{
    constructor(name) {
        super(name);
    }

    gestureSelector() {
        this.gesture =  this.possibleGesture[Math.floor(Math.random() * this.possibleGesture.length)];
    }
}

module.exports = AI