function playingCards(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const vaidSuits = ['S', 'H', 'D', 'C'];

    if(validFaces.indexOf(face) === -1){
        throw new Error('Error');
    }
    if(vaidSuits.indexOf(suit) === -1){
        throw new Error('Error');
    }

    if (suit === 'S') {
        suit = '\u2660 ';
    }else if(suit === 'H'){
        suit='\u2665';
    }else if(suit === 'D'){
        suit='\u2666';
    }else if(suit === 'C'){
        suit='\u2663';
    }else{
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


console.log(playingCards('1', 'r').toString());

console.log(playingCards('10', 'H').toString());