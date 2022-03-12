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
