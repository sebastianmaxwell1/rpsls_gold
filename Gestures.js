
class Gestures {
    constructor(){
        this.humanPlayer = "";
        this.computerPlayer = "";
        this.number = "";
        this.name = "";
    }

    assignedNumbertoGesture(){
        if(this.number == 0){
            console.log('Rock');
        }
        else if(this.number == 1){
            console.log('Paper');
        }
        else if(this.number == 2){
            console.log('Scissors');
        }
        else if(this.number == 3){
            console.log('Lizard');
        }
        else if(this.number == 4){
            console.log('Spock');
        }
        else(console.log('Error, please print a listed gesture.'))

    }

    assignedGesturetoNumber(){
        if(this.name == 'Rock'){
            console.log('0');
        }
        else if(this.name == 'Paper'){
            console.log('1');
        }
        else if(this.name == 'Scissors'){
            console.log('2');
        }
        else if(this.name == 'Lizard'){
            console.log('3');
        }
        else if(this.name == 'Spock'){
            console.log('4');
        }
        else(console.log(`${this.name} is not a gesture in this game!`))
    }
}

module.exports = Gestures