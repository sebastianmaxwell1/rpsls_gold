

class Player {
    constructor(name) {
        this.score = 0;
        this.name = name;
    }

    playerChoice(choice){
        let playerResult = choice.generateChoice();
        return choiceResult;
    }

    allChoices(choiceArray) {
        let choiceTotal = 0;

        for(let i = 0; i < choiceArray.length; i++) {
            let result = this.playerChoice(choiceArray[i]);
            choiceTotal += result;
        }

        return choiceTotal;
    }


}

module.exports = Player