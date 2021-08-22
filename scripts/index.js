const handOptions = {
    "rock": "/assets/Rock.png",
    "paper": "/assets/Paper.png",
    "scissors": "/assets/Scissors.png"
}

let SCORE = 0;

const pickUserHand = (hand) => {
    console.log(hand);
    const hands = document.querySelector('.hands');
    hands.style.display = 'none';

    let contest = document.querySelector(".contest");
    contest.style.display = 'flex';

    const userPickImage = document.querySelector('#userPickImage');
    userPickImage.src = handOptions[hand];
    const computerHand = pickComputerHand();
    referee(hand, computerHand)
}

const pickComputerHand = () => {
    const hands = ["rock", "paper", "scissors"];
    const randNum = Math.floor(Math.random() * 3);
    const computerPickImage = document.querySelector('#computerPickImage')
    computerPickImage.src = handOptions[hands[randNum]]
    return hands[randNum]
}

const referee = (userHand, computerHand) => {
    if((userHand == 'scissors' && computerHand == 'paper') || 
        (userHand == 'rock' && computerHand == 'scissors') ||
        (userHand == 'paper' && computerHand == 'rock')) {
        setDecision('YOU WIN');
        SCORE += 1;
        setScore(SCORE);
    }
    else if(userHand == computerHand) {
        setDecision('MATCH TIE');
    }
    else {
        setDecision('YOU LOSE');
    }
    
}

const playAgain = () => {
    console.log('PLay')
    const hands = document.querySelector('.hands');
    hands.style.display = 'flex';

    let contest = document.querySelector(".contest");
    contest.style.display = 'none';
}

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

const setScore = (score) => {
    document.querySelector(".score h1").innerText = SCORE;
}