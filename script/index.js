const START_HP = 20;
const START_SP = 10;
const DEAFULT_ATK = 5;
const DEAFULT_DEF = 5
const DEAFULT_TEK = 5


class Fighter {
  constructor(name, charaName) {
    //'contructor' is in all JS classes
    // It gets run immediately when a new object is created from a class

    // Set all of our default values for this new fighter here
    this.name = name;
    this.hp = START_HP;
    this.sp = START_SP;
    this.atk = DEAFULT_ATK;
    this.def = DEAFULT_DEF;
    this.tek = DEAFULT_TEK;
    this.charaName = charaName;
  }
  attack(target) {
    console.log(this.name + " attacked " + target.name)
  }
  single(target) {
    this.attack(target);
  }
  double(target) {
    this.attack(target);
    this.attack(target);
  }
  recover() {
    console.log("Recovered!")
  }
}


let Player0;
let Player1;

function startup() {
  Player0 = new Fighter(P0NAME, P0CHARA);
  Player1 = new Fighter(P1NAME, P1CHARA);

  console.log("My name is " + Player0.name + " and my ATK is " + Player0.atk)
  console.log("My name is " + Player1.name + " and my ATK is " + Player1.atk)
}








/*
MHW = 'delicious'
MHWoutput > MHWinput
*/
