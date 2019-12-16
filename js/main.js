
let deck = [
    {
        value: 2,
        image: 'playingCards/2C.jpg'
    },
    {
        value: 2,
        image: 'playingCards/2D.jpg'
    },
    {
        value: 2,
        image: 'playingCards/2H.jpg'
    },
    {
        value: 2,
        image: 'playingCards/2S.jpg'
    },
    {
        value: 3,
        image: 'playingCards/3C.jpg'
    },
    {
        value: 3,
        image: 'playingCards/3D.jpg'
    },
    {
        value: 3,
        image: 'playingCards/3H.jpg'
    },
    {
        value: 3,
        image: 'playingCards/3S.jpg'
    },
    {
        value: 4,
        image: 'playingCards/4C.jpg'
    },
    {
        value: 4,
        image: 'playingCards/4D.jpg'
    },
    {
        value: 4,
        image: 'playingCards/4H.jpg'
    },
    {
        value: 4,
        image: 'playingCards/4S.jpg'
    },
    {
        value: 5,
        image: 'playingCards/5C.jpg'
    },
    {
        value: 5,
        image: 'playingCards/5D.jpg'
    },
    {
        value: 5,
        image: 'playingCards/5H.jpg'
    },
    {
        value: 5,
        image: 'playingCards/5S.jpg'
    },
    {
        value: 6,
        image: 'playingCards/6C.jpg'
    },
    {
        value: 6,
        image: 'playingCards/6D.jpg'
    },
    {
        value: 6,
        image: 'playingCards/6H.jpg'
    },
    {
        value: 6,
        image: 'playingCards/6S.jpg'
    },
    {
        value: 7,
        image: 'playingCards/7C.jpg'
    },
    {
        value: 7,
        image: 'playingCards/7D.jpg'
    },
    {
        value: 7,
        image: 'playingCards/7H.jpg'
    },
    {
        value: 7,
        image: 'playingCards/7S.jpg'
    },
    {
        value: 8,
        image: 'playingCards/8C.jpg'
    },
    {
        value: 8,
        image: 'playingCards/8D.jpg'
    },
    {
        value: 8,
        image: 'playingCards/8H.jpg'
    },
    {
        value: 8,
        image: 'playingCards/8S.jpg'
    },
    {
        value: 9,
        image: 'playingCards/9C.jpg'
    },
    {
        value: 9,
        image: 'playingCards/9D.jpg'
    },
    {
        value: 9,
        image: 'playingCards/9H.jpg'
    },
    {
        value: 9,
        image: 'playingCards/9S.jpg'
    },
    {
        value: 10,
        image: 'playingCards/10C.jpg'
    },
    {
        value: 10,
        image: 'playingCards/10D.jpg'
    },
    {
        value: 10,
        image: 'playingCards/10H.jpg'
    },
    {
        value: 10,
        image: 'playingCards/10C.jpg'
    },
    {
        value: 11,
        ace: true,
        image: 'playingCards/AC.jpg'
    },
    {
        value: 11,
        ace: true,
        image: 'playingCards/AD.jpg'
    },
    {
        value: 11,
        ace: true,
        image: 'playingCards/AH.jpg'
    },
    {
        value: 11,
        ace: true,
        image: 'playingCards/AS.jpg'
    },
    {
        value: 11,
        image: 'playingCards/JC.jpg'
    },
    {
        value: 10,
        image: 'playingCards/JD.jpg'
    },
    {
        value: 10,
        image: 'playingCards/JH.jpg'
    },
    {
        value: 10,
        image: 'playingCards/JS.jpg'
    },
    {
        value: 10,
        image: 'playingCards/KC.jpg'
    },
    {
        value: 10,
        image: 'playingCards/KD.jpg'
    },
    {
        value: 10,
        image: 'playingCards/KH.jpg'
    },
    {
        value: 10,
        image: 'playingCards/KS.jpg'
    },
    {
        value: 10,
        image: 'playingCards/QC.jpg'
    },
    {
        value: 10,
        image: 'playingCards/QD.jpg'
    },
    {
        value: 10,
        image: 'playingCards/QH.jpg'
    },
    {
        value: 10,
        image: 'playingCards/QS.jpg'
    }
];

let deckArray = deck.sort(() => Math.random() - 0.5)
const playOne = document.getElementById('play-1');
const playTwo = document.getElementById('play-2');
const dealerOne = document.getElementById('deal-1');
const dealerTwo = document.getElementById('deal-2');
const stayB = document.getElementById('stay');
const hitB = document.getElementById('hit');
const betFive = document.querySelector('#bet5');
const betTen = document.querySelector('#bet10');
const dealCounter = document.getElementById('deal-count');
const playCounter = document.getElementById('play-count');
const playMessage = document.getElementById('play-mess');
const dealerMessage = document.getElementById('deal-mess');
const cards = document.getElementsByTagName('img');

let currentBet = '';
let balance    = 100;
let bet = false;
let playerHand = [];
let playerTotal = [];
let dealerHand = [];
let dealerTotal = [];
let playerAdd = 0;
let dealerAdd = 0;

stayB.disabled = true;
hitB.disabled = true;
betFive.disabled = false;
betTen.disabled = false;

// const init = () => {
//     currentBet = '';
//     balance = 100;
//     stayB.disabled = true;
//     hitB.disabled = true;
//     betFive.disabled = false;
//     betTen.disabled = false;
//     playerHand = [];
//     dealerHand = [];
//     playerTotal = [];
//     dealerTotal = [];
//     playOne.src = '/playingCards/backImage.webp';
//     playTwo.src = '/playingCards/backImage.webp';
//     dealerOne.src = '/playingCards/backImage.webp';
//     dealerTwo.src = '/playingCards/backImage.webp';
//     playMessage.textContent = 'MAKE YOUR BET!'
//     playerAdd = playerTotal.reduce((a, b) => a + b, 0);
//     dealerAdd = dealerTotal.reduce((a, b) => a + b, 0);
//     bet = false;
// }

betFive.addEventListener("click", function(){
    currentBet = 5;
    checkBalance(currentBet);
});
betTen.addEventListener("click", function(){
    currentBet = 10;
    checkBalance(currentBet);
});
function checkBalance(betAmount){
    if(betAmount > balance){
        playMessage.textContent = 'Sorry Insufficient Funds, Would you like to reset?';
        return;
    } else{
        balance -= currentBet;
        bet = true;
        checkForTwentyOne()
    }
}
function checkForTwentyOne(){
    for(let i = 0; i < 2; i++){
        var x = deckArray.pop()
        playerHand.push(x);
        playerTotal.push(x.value);
  }
  playerAdd = playerTotal.reduce((a, b) => a + b, 0);
    if(playerAdd === 21){
        blackJack();
        return;
    }else{
        bet = true;
        inBet();
        deal();
    }
}
function blackJack(){
    playOne.src = playerHand[0].image;
    playTwo.src = playerHand[playerHand.length - 1].image;
    playMessage.textContent = "BlackJack!"
    playCounter.textContent = playerAdd;
    balance += currentBet * 2;
    window.setTimeout(waitForbet, 3000)
    render();
}
function deal(){
  for(let i = 0; i < 2; i++){
    let x = deckArray.pop();
    dealerHand.push(x);
    dealerTotal.push(x.value);
};
    playMessage.textContent = 'YOUR MOVE.'
    showCards();
}
function showCards(){
    playOne.src = playerHand[0].image;
    playTwo.src = playerHand[1].image;
    dealerOne.src = dealerHand[0].image;
    dealerAdd = dealerHand[0].value;
    render();
}
function compareHands(){
    playerAdd = playerTotal.reduce((a, b) => a + b, 0);
    dealerAdd = dealerTotal.reduce((a, b) => a + b, 0);
    let lastDeal = dealerHand[dealerHand.length-1].image;
    dealerTwo.src = lastDeal;
    stayB.disabled = true;
    hitB.disabled = true;

    if(dealerAdd > 21){
        balance += currentBet * 2;
        render();
        playMessage.textContent = 'YOU WIN THIS HAND! DEALER BUST!';
        console.log(dealerHand)
        window.setTimeout(waitForbet, 3000)
    } else if(playerAdd > dealerAdd){
        balance += currentBet * 2.5;
        playMessage.textContent = 'YOU WIN THIS HAND!';
        render();
        window.setTimeout(waitForbet, 3000)
    } else if(dealerAdd > playerAdd){
        playMessage.textContent = 'DEALER WINS THIS HAND!';
        render();
        window.setTimeout(waitForbet, 3000)
    }
}
function inBet(){
    betFive.disabled = true;
    betTen.disabled = true;
    stayB.disabled = false;
    hitB.disabled = false;
}
function waitForbet(){
    stayB.disabled = true;
    hitB.disabled = true;
    betFive.disabled = false;
    betTen.disabled = false;
    playerHand = [];
    dealerHand = [];
    playerTotal = [];
    dealerTotal = [];
    playOne.src = '/playingCards/backImage.webp';
    playTwo.src = '/playingCards/backImage.webp';
    dealerOne.src = '/playingCards/backImage.webp';
    dealerTwo.src = '/playingCards/backImage.webp';
    playMessage.textContent = 'MAKE YOUR BET!'
    playerAdd = playerTotal.reduce((a, b) => a + b, 0);
    dealerAdd = dealerTotal.reduce((a, b) => a + b, 0);
    bet = false;
    render();
}
function playerTurn(){
    if(playerAdd === 21){
        blackJack()
        return;
    } else if(playerAdd > 21){
        for(let i = 0; i < playerHand.length; i++){
            if(i.value === 11){
                i.value = 1;
            }
            for(let i = 0; i < playerTotal.length; i++){
                if(i === 11){
                    i = 1;
                    render();
                }
            }
            playMessage.textContent = 'HIT OR STAY? MAKE MY DAY.'
            render();
        }
        playerAdd = playerTotal.reduce((a, b) => a + b, 0);
        if(playerAdd === 21){
            blackJack();
            return;
        } else if(playerAdd < 21){
            compareHands();
        } else {
        playMessage.textContent = 'BUST! MAKE YOUR NEXT BET.';
        window.setTimeout(waitForbet, 2500)
        render();
        return; 
        }
    } else {
        playMessage.textContent = 'HIT OR STAY? MAKE MY DAY.'
        render();
        return;
    }
}
function dealerTurn () {
        dealerAdd = dealerTotal.reduce((a, b) => a + b, 0);
        if( dealerAdd < 17){
            let x = deckArray.pop();
            dealerHand.push(x);
            dealerTotal.push(x.value);
            dealerAdd = dealerTotal.reduce((a, b) => a + b, 0);
            dealerTurn();
        } else {
            compareHands();
        }
}
function render(){
    playerAdd = playerTotal.reduce((a, b) => a + b, 0);
    dealCounter.innerHTML = dealerAdd;
    playCounter.innerHTML = playerAdd;
    document.querySelector('#bet-amount').textContent = `$${currentBet}`;
    document.querySelector('#balance').textContent = `$${balance}`;
}
hitB.addEventListener('click', function(){
    var x = deckArray.pop()
    playTwo.src = x.image;
    playerHand.push(x);
    playerTotal.push(x.value);
    playerAdd = playerTotal.reduce((a, b) => a + b, 0);
    playerTurn();
});
stayB.addEventListener('click', function(){
    dealerTwo.src = dealerHand[1].image;
    render();
    dealerTurn();
});

