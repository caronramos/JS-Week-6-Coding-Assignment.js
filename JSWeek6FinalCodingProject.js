class Card {
  //Defines pip, suit, and value of a card
  constructor(pip, suit, value){
    this.pip = pip;
    this.suit = suit;
    this.value = value;
  }

  //Shows the Value and Suit of a Card
  showCard(){
    return `Value: ${this.pip}, Suit: ${this.suit}`;
  }
}

class Deck {
  //Creates an array of deck
  constructor(){
    this.deck = [];
  }

  //Defines the deck in greater detail by elaborating the suits (with the associated values) and pips.
  createDeck(){
    var suits = ["Spades", "Diamonds", "Clubs", "Hearts"];
    var pips = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    for(let s=0; s<suits.length; s++){
      for(let p=0; p<pips.length; p++){
        this.deck.push(new Card(suits[s], pips[p], values[p]));
      }
    }
  }

  //Shuffles the deck of cards
    shuffleDeck(){
      for(let sd=0; sd<52; sd++){
        var temp = this.deck[sd];
        var index = Math.floor(Math.random()*52);
        this.deck[sd] = this.deck[index];
        this.deck[index] = temp;
      }
    }

  //Splits the deck between Player 1 and 2
  splitDeck(){                            
    for(let sd=51; sd>=0; sd--){
        if(sd%2==0){
            player1.cards.push(this.deck[sd]);
        }
        else{
            player2.cards.push(this.deck[sd]);
        }
        this.deck.pop();
    }
  }
  
}

const playerDeck = new Deck();
playerDeck.createDeck();
playerDeck.shuffleDeck(playerDeck.deck);
console.log(playerDeck.deck);
class Player{
  //Creates an array cards and defines score of the players
  constructor(){
    this.cards = [];
    this.score = 0;
  }
}

  //Defines Player 1 and 2
  const player1 = new Player();
  const player2 = new Player();
  console.log(player1.cards);
  console.log(player2.cards);

  
  function startWar(player1, player2){       
      const scoreReport = [''];                         
      for(let w=0; w<=26; w++){
          if (player1.cards[w].value > player2.cards[w].value){
              player1.score++;
              let a = `Game ${w+1}: ${player1.cards[w].value.showCard()}  / ${player2.cards[w].showCard()} (Player 1 wins)`;
              scoreReport.push(a);
          }
          else if(player2.cards[w].value > player1.cards[w].value){
              player2.score++;
              let b = `Game ${w+1}: ${player2.cards[w].showCard()}  /  ${player2.cards[w].showCard()} (Player 2 wins)`;
              scoreReport.push(b);
          }
          else{
              let c = `Game ${w+1}:  TIE:  ${player1.cards[w].showCard()}  matches  ${player2.cards[w].showCard()} `;
              scoreReport.push(c);
          }
    }
  }

  alert(`Player 1: ${player1.score} 
        Player 2: ${player2.score} 
            ${scoreReport.join("\n")}`
  );

  playerDeck.splitDeck(playerDeck.deck);
  startWar(player1, player2);
