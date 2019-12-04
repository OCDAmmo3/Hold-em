let randomCard = Math.ceil((Math.ceil(Math.random() * 52)) * Math.ceil(Math.random() * 52) / 2);

export default class Deck {
  constructor(cards) {
    this.cards = [...cards];
  }

  dealHand = () => {
    let player1Hand = [];
    let player2Hand = [];
    let player3Hand = [];
    player1Hand.push(this.getCard());
    player2Hand.push(this.getCard());
    player3Hand.push(this.getCard());
    let card = this.getCard();
    while(player1Hand.length < 2) {
      if(player1Hand.includes(card) || player2Hand.includes(card) || player3Hand.includes(card)) {
        card = this.getCard();
      } else {
        player1Hand.push(card);
      }
    }
    while(player2Hand.length < 2) {
      if(player1Hand.includes(card) || player2Hand.includes(card) || player3Hand.includes(card)) {
        card = this.getCard();
      } else {
        player2Hand.push(card);
      }
    }
    while(player3Hand.length < 2) {
      if(player1Hand.includes(card) || player2Hand.includes(card) || player3Hand.includes(card)) {
        card = this.getCard();
      } else {
        player3Hand.push(card);
      }
    }
  }

  getCard = () => {
    return this.cards[randomCard];
  }
}