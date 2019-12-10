export default class Deck {
  constructor(cards) {
    this.cards = [...cards];
  }

  cardRemove = (card) => {
    let index = this.cards.indexOf(card);
    if(index > -1) {
      this.cards.splice(index, 1);
    }
  }

  dealHand = () => {
    let player1Hand = [];
    let player2Hand = [];
    let player3Hand = [];
    let card = this.getCard();
    for(let i = 1; i < 3; i++) {
    player1Hand.push(card);
    this.cardRemove(card);
    card = this.getCard();
    player2Hand.push(card);
    this.cardRemove(card);
    card = this.getCard();
    player3Hand.push(card);
    this.cardRemove(card);
    card = this.getCard();
    }
    let hands = {
      player1Hand,
      player2Hand,
      player3Hand
    }
    return hands;
  }

  getCard = () => {
    return this.cards[Math.ceil(((Math.ceil(Math.random() * this.cards.length)) + Math.ceil(Math.random() * this.cards.length)) / 2) - 1];
  }
}