function deckOfCards(cards) {

    let result=[];

    for(let c of cards){
        let face = c.slice(0,-1);
        let suit = c.slice(-1);
        try {
            let card = playingCards(face,suit);
            result.push(card);
        } catch (error) {
            result = ['Invalid card: ' + c];
        }

    }
    console.log(result.join(' '));

    function playingCards(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const vaidSuits = ['S', 'H', 'D', 'C'];

        if (validFaces.indexOf(face) === -1) {
            throw new Error('Error');
        }
        if (vaidSuits.indexOf(suit) === -1) {
            throw new Error('Error');
        }

        if (suit === 'S') {
            suit = '\u2660 ';
        } else if (suit === 'H') {
            suit = '\u2665';
        } else if (suit === 'D') {
            suit = '\u2666';
        } else if (suit === 'C') {
            suit = '\u2663';
        } else {
            console.log("Error")
        }

        return {
            face: face,
            suit: suit,
            toString() {
                return this.face.toUpperCase() + this.suit.toUpperCase();
            }
        };
    }
}


deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);