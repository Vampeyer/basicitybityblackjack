new (function() { 
    let real = function (){
        console.log("this is new JavaScript ")
    }
})(); // this is an example of an IFFIE or an immediately invoking statement 

let animals = { 
    dog:1, 
    cat:2, 
    fly:3
}       


 animals.fly = 1; 
 animals.cat = 2;
 animals.dog = 3; 

 let winningAnimals = console.log( "YOu won the poker game" + animals.dog + animals[0] + " 's "   )
 
 let losingAnimals = console.log( " You only won a " + animals[2])
 
 

 let cardDealer = function() { 
    let element = cards + number;
    array.forEach(element => {
     let cards = [ "hearts" , "clubs", "diamonds", "spades" ]
     let number = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ] 
    let cardSelection =  cards[0] || cards[1] || cards[2] || cards[3]
    let numberSelection = number[0] || number[1] || number[2] || number[3] || number[4] || number[5] || number[6] || number[7] || number[8] || number[9] || number[10] || number[11] || number[12] || number[13]
     //let deckOfCards = 
        });



console.log("I am the dealer and I will deal you a deck of cards")

let deckOfCards = cardSelection + numberSelection 

console.log( "this is your card " + (deckOfCards))  } 

cardDealer();