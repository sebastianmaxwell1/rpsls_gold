


class AI{
    constructor(aiChoice) {
        this.aiChoice = aiChoice;
    }

    generateRandomMove() {
        let randomChoice = Math.floor(Math.random() * this.aiChoice) + 1;
        return randomChoice;
    }
}

module.exports = AI