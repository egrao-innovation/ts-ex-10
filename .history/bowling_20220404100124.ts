export class Bowling {
  standingPins = 10;
  totalScore:number = 0;
  game:number [] = []
  currentRoll:number = 1;
  cont:number = 0;
  gameOver:boolean = false;

  public roll(pins: number): void {
    //validity checks
    debugger
    if(pins < 0){
      throw new Error('Negative roll is invalid');
    }
    else if(pins > 10){
      throw new Error('Pin count exceeds pins on the lane');
    }



    ///tiradas bonus
    if(this.currentRoll === 10 && this.cont > 0){
      this.standingPins = (pins === 10) ? this.standingPins = 10: this.standingPins -= pins;
      this.standingPins = (((this.game[this.game.length-1])+(pins)) === 10) ? this.standingPins = 10: this.standingPins = this.standingPins;
      if(this.standingPins < 0 || (pins === 10 && !((this.game[this.game.length-1]) === 10) && !(((this.game[this.game.length-1]) + (this.game[this.game.length-2])) === 10))){
        throw new Error('Pin count exceeds pins on the lane');
      }
      this.game.push(pins)
      if(this.cont === 3){
        this.gameOver = true;
        conso
      }
    }
    else{
      this.currentRoll = (this.cont === 2) ? this.currentRoll+1 : this.currentRoll;
      this.standingPins = (this.cont === 2) ? this.standingPins = 10 - pins : this.standingPins -= pins;
      this.cont = (this.cont === 2) ? this.cont = 0 : this.cont;
      if(this.standingPins < 0){
        throw new Error('Pin count exceeds pins on the lane');
      }
      this.game.push(pins)
    }

    if(pins === 10 && !(this.currentRoll === 10)){
      this.cont++;
      this.standingPins = 10;
    }
    else if(pins === 10 && this.currentRoll === 10){
      this.standingPins = 10;
    }
    this.cont++;
  }

  public score(): number {
    for (var i = 0; i < this.game.length; i++) {
      if(this.game[i] === 10){
        this.totalScore += this.game[i] + this.game[i+1] + this.game[i+2]
        if(i === this.game.length-3){
          return this.totalScore
        }
      }
      
      else if( (this.game[i] + this.game[i+1] === 10) && !(this.game[i+1] === 10)){
        this.totalScore += 10 + this.game[i+2]
        i++
        if(i === this.game.length-2){
          return this.totalScore
        }
      }
      else{
        this.totalScore += this.game[i]
      }
    }
    return this.totalScore;
  }
}
