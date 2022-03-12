class Card {
  constructor(suit, value){
    this.suit = suit;
    this.value = value;
    this.player = "";
}

showCard(){
  return `Suit: ${this.suit}, Value: ${this.value}`;
}

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
  createPlayers(){
    
  }
}
