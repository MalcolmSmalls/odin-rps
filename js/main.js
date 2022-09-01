
const getComputerChoice = () => {
    let results = Math.random()
    if(results < .33){
        return 'rock'
    }else if(results > .33 && results < .66 ){
        return 'scissors'
    }else{
        return 'paper'
    }
}

let cpuChoice = getComputerChoice()


const playRound = (playerSelection, computerSelection) => {
    let choice = playerSelection.toLowerCase()
    let cpuResults = computerSelection.substring(0,1).toUpperCase() + computerSelection.substr(1)
    let playerResults = playerSelection.substring(0,1).toUpperCase() + playerSelection.substr(1)
    if(choice === computerSelection){
        return `Draw! Both chose ${choice}.`
    }else if(choice === 'rock' && computerSelection === 'scissors' ||
    choice === 'scissors' && computerSelection === 'paper' ||
    choice === 'paper' && computerSelection === 'rock'){
        return `You win! ${playerResults} beats ${computerSelection}.`
    }else{
        return `You lose! ${cpuResults} beats ${choice}.`
    }
}

const playGame = function(){
    let playerChoice = prompt('What is your choice?')
    console.log(playRound(playerChoice, cpuChoice))
}

playGame()

// function game(arr){
//     for(i=0;i<arr.length;i++){
//         console.log(playRound(arr[i],getComputerChoice()))
//     }
// }

// game(['rock', 'paper', 'paper', 'scissors', 'rock'])