const prompt = require('prompt-sync');
const AI = require('./AI');
const Player = require('./Player');
// const Gestures = require('./Gestures');




class Game {
    constructor(){
        this.gesture = '';
        this.possibleGesture = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
        this.aiGesture = new AI('Computer Player');
        this.playerOne = new Player('Player One');
        this.playerTwo = new Player('Player Two');
    }

    runGame(){
        this.displayRules();

        let playerOneInput = prompt("Player One enter a gesture: 0 = Rock, 1 = Paper, 2 = Scissors, 3 = Lizard, 4 = Spock");
        // let playerTwoInput = prompt("Player Two enter a gesture: 0 = Rock, 1 = Paper, 2 = Scissors, 3 = Lizard, 4 = Spock");
        // alert(`${this.playerOne} chose ${playerOneInput} and ${this.playerTwo} chose ${playerTwoInput}!`)
        alert(`Player One chose ${this.playerOneInput}`);
       
        if(this.gesture === this.aiGesture){
            console.log(`Both players selected ${this.gesture}! It's a tie!`)
        }
        else if(this.gesture == 'rock'){
            if(this.aiGesture == 'scissors' || 'lizard'){
                console.log(`You chose ${this.gesture}`);

                console.log(`${this.gesture} crushes Scissors! You win!` || `${this.gesture} cruhses Lizard! You Win!`)
  
            }else(this.aiGesture == 'paper' || 'spock')
                console.log("Paper covers Rock! You Lose!" || "Spock vaporizes Rock! You Lose!")
        }

        else if(this.gesture == 'paper'){
            if(this.aiGesture == 'rock' || 'spock'){
                console.log(`You chose ${this.gesture}`);

                 console.log(`${this.gesture} covers Rock! You win!` || `${this.gesture} disproves Spock! You Win!`)
      
            }else(this.aiGesture == 'scissors' || 'lizard')
                 console.log("Scissors cuts Paper! You Lose!" || "Lizard eats Paper! You Lose!")
        }

        else if(this.gesture == 'scissors'){
            if(this.aiGesture == 'paper' || 'lizard'){
                console.log(`You chose ${this.gesture}`);

                 console.log(`Scissors cuts Paper! You win!` || `Lizard eats Paper! You Win!`)
          
            }else(this.aiGesture == 'rock' || 'spock')
                 console.log("Rock smashes Scissors! You Lose!" || "Spock smashes Scissors! You Lose!")
        }
        else if(this.gesture == 'lizard'){
            if(this.aiGesture == 'spock' || 'paper'){
                console.log(`You chose ${this.gesture}`);

                 console.log(`Lizard poisons Spock! You win!` || `Lizard eats Paper! You Win!`)
              
            }else(this.aiGesture == 'rock' || 'scissors')
                 console.log("Rock smashes Lizard! You Lose!" || "Scissors decapitates Lizard! You Lose!")
        }
        else if(this.gesture == 'spock'){
            if(this.aiGesture == 'rock' || 'scissors'){
                console.log(`You chose ${this.gesture}`);

                console.log(`Spock vaporizes Rock! You win!` || `Spock smashes Scissors! You Win!`)
      
            }else(this.aiGesture == 'lizard' || 'paper')
                console.log("Lizard poisons Spock! You Lose!" || "Paper disproves Spock! You Lose!")
        }      
        
        this.displayPlayerVsPlayerWinner();
        this.displayPlayerVsAiWinner();
    }


    displayRules() {
        console.log("Lets play Rock, Paper, Scissors, Lizard, Spock!")
        console.log("Choose between Rock, Paper, Scissors, Lizard and Spock!")
        console.log("The first player to two wins, wins the game!");
      }

      displayPlayerVsPlayerWinner() {
        if(this.playerOne.score > this.playerTwo.score) {
          console.log(this.playerOne.name + " wins this game!");
        }
        else {
          console.log(this.playerTwo.name + " wins this game!");
        }
      }

      displayPlayerVsAiWinner() {
        if(this.playerOne.score > this.aiGesture.score) {
          console.log(this.playerOne.name + " wins this game!");
        }
        else {
          console.log(this.aiGesture + " wins this game!");
        }
      }

      
        
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
