class Card {
  constructor(suit, value){
    this.suit = suit;
    this.value = value;
}

showCard(){
  return `Suit: ${this.suit}, Value: ${this.value}`;
}

let c = new Card("clubs", 9);
console.log(c.showCard());

class Deck {
  constructor(){
    let cards = [
        //fill the deck with Card objects of the
        //appropriate suit and value
      ];
  createDeck(){
    cards.push(new Card("spades", 1));
    
  }
  
}

class Player {
  constructor(name){
    this.name = name;
}
  
showPlayer() {
  return this.name;
}
  
class Game {
  constructor(){
    
  }
  startGame(){
    
  }
  compareScore(){
    
  }
}
