const Player = require('./Player');


class AI extends Player{
    constructor(name) {
        super(name);
    }

    gestureSelector() {
        this.gesture =  this.gestureList[Math.floor(Math.random() * this.gestureList.length)];
    }
}

module.exports = AI