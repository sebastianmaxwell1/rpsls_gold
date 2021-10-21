// const Player = require("./Player");
// const AI = require("./AI");
// const Human = require("./Human");



class Game {
    constructor(){
        this.gesture = "";
        this.possibleGesture = "";
        this.aiGesture = "";
    }

    runGame(){
        this.gesture = prompt("Enter a choice: 0 = Rock, 1 = Paper, 2 = Scissors, 3 = Lizard, 4 = Spock");
        this.possibleGesture = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'];
        this,this.aiGesture = "";

        if(this.gesture === this.aiGesture){
            console.log(`Both players selected ${this.possibleGesture}! It's a tie!`)
        }
        else if(this.gesture == 'rock'){
            if(this.aiGesture == 'scissors' || 'lizard'){
                console.log(`${this.possibleGesture} crushes Scissors! You win!` || `${this.possibleGesture} cruhses Lizard! You Win!`)
  
            }else(this.aiGesture == 'paper' || 'spock')
                console.log("Paper covers Rock! You Lose!" || "Spock vaporizes Rock! You Lose!")
            }

        else if(this.gesture == 'paper'){
            if(this.aiGesture == 'rock' || 'spock'){
                 console.log(`${this.possibleGesture} covers Rock! You win!` || `${this.possibleGesture} disproves Spock! You Win!`)
      
            }else(this.aiGesture == 'scissors' || 'lizard')
                 console.log("Scissors cuts Paper! You Lose!" || "Lizard eats Paper! You Lose!")
            }

        else if(this.gesture == 'scissors'){
            if(this.aiGesture == 'paper' || 'lizard'){
                 console.log(`Scissors cuts Paper! You win!` || `Lizard eats Paper! You Win!`)
          
            }else(this.aiGesture == 'rock' || 'spock')
                 console.log("Rock smashes Scissors! You Lose!" || "Spock smashes Scissors! You Lose!")
            }
        else if(this.gesture == 'lizard'){
            if(this.aiGesture == 'spock' || 'paper'){
                 console.log(`Lizard poisons Spock! You win!` || `Lizard eats Paper! You Win!`)
              
            }else(this.aiGesture == 'rock' || 'scissors')
                 console.log("Rock smashes Lizard! You Lose!" || "Scissors decapitates Lizard! You Lose!")
            }
        else if(this.gesture == 'spock'){
            if(this.aiGesture == 'rock' || 'scissors'){
                console.log(`Spock vaporizes Rock! You win!` || `Spock smashes Scissors! You Win!`)
      
            }else(this.aiGesture == 'lizard' || 'paper')
                console.log("Lizard poisons Spock! You Lose!" || "Paper disproves Spock! You Lose!")
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


// class Game {
    //     constructor() {
    //         this.playerOne = new Player("Player One");
    //         this.playerTwo = new Player("Player Two");
    //         this.computerPlayer = new Player("Computer");
    
    //         this.choices = [];
    
    //         this.choices.push(new this.choice("rock"));
    //         this.choices.push(new this.choice("paper"));
    //         this.choices.push(new this.choice("scissors"));
    //         this.choices.push(new this.choice("lizard"));
    //         this.choices.push(new this.choice("spock"));
    //     }
    
    
        
    
    // }