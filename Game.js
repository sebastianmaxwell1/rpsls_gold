const Player = required("./Player")
const AI = required("./AI")




class Game {
    constructor() {
        this.playerOne = new Player("Player One");
        this.playerTwo = new Player("Player Two");
        this.computerPlayer = new Player("Computer");

        this.choices = [];

        this.choices.push(new this.choice("rock"));
        this.choices.push(new this.choice("paper"));
        this.choices.push(new this.choice("scissors"));
        this.choices.push(new this.choice("lizard"));
        this.choices.push(new this.choice("spock"));
    }

    // runGame(player1Choice, computerMove, playerOne){
    //     let winner = "";
    //     if (player1Choice === computerMove.AI) {
    //         winner = "no one";
    //     } else if (player1Choice === 'rock') {
    //         if (computerMove.AI === ['paper' || 'spock']) {
    //             winner = "computer"
    //         } else {
    //             winner = `${playerOne}`;
    //         }
    //     } else if (player1Choice === 'paper') {
    //         if (computerMove.AI === ['scissors' || 'lizard']) {
    //             winner = "computer"
    //         } else {
    //             winner = `${playerOne}`;
    //         }
    //     } else if (player1Choice === 'scissors') {
    //         if (computerMove.AI === ['rock' || 'spock']) {
    //             winner = "computer"
    //         } else {
    //             winner = `${playerOne}`;
    //         }
    //     }  else if (player1Choice === 'lizard') {
    //         if (computerMove.AI === ['rock' || 'scissors']) {
    //             winner = "computer"
    //         } else {
    //             winner = `${playerOne}`;
    //         }
    //     } else if (player1Choice === 'spock') {
    //         if (computerMove.AI === ['paper' || 'lizard']) {
    //             winner = "computer"
    //         } else {
    //             winner = `${playerOne}`;
    //         }
    //     } else {
    //         console.log("Something went wrong. Please try again.");
    //         process.exit();
    //     }
    // }
    

}

module.exports = Game



// Game Rules:
// Rock crushes Scissors
// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock