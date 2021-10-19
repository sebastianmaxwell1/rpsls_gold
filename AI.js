


class AI{
    constructor(rpslsChoice) {
        this.rpslsChoice = rpslsChoice;
    }

    generateRandomMove() {
        let randomChoice = Math.floor(Math.random() * this.rpslsChoice) + 1;
        return randomChoice;
    }
}

module.exports = AI