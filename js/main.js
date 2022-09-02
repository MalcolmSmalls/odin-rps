
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

// let cpuChoice = getComputerChoice()

const displayedResultsDiv = document.querySelector('.textHolder') 
const displayedScoreDiv = document.querySelector('.score')
const buttons = document.querySelectorAll('button')
const displayedWinnerDiv = document.querySelector('.results')

let playerChoice
buttons.forEach(button => {
    button.addEventListener('click', function() {
        playerChoice = button.value
        displayedResultsDiv.textContent = playRound(playerChoice, getComputerChoice())
        playGame()})
});

let cpuCount = 0
let playerCount = 0

const playGame = () => {
    displayedScoreDiv.textContent = `CPU: ${cpuCount} 
    You: ${playerCount}`
    if(playerCount === 5){
        displayedWinnerDiv.textContent = "You Win! Congratulations!"
        playerCount = 0
        cpuCount = 0
    }else if(cpuCount === 5){
        displayedWinnerDiv.textContent = "You lose! Play again."
        playerCount = 0
        cpuCount = 0
    }else{
        displayedWinnerDiv.textContent = ""
    }
}

const playRound = (playerSelection, computerSelection) => {
    let choice = playerSelection.toLowerCase()
    let cpuResults = computerSelection.substring(0,1).toUpperCase() + computerSelection.substr(1)
    let playerResults = playerSelection.substring(0,1).toUpperCase() + playerSelection.substr(1)
    if(choice === computerSelection){
        return `Draw! Both chose ${choice}.`
    }else if(choice === 'rock' && computerSelection === 'scissors' ||
    choice === 'scissors' && computerSelection === 'paper' ||
    choice === 'paper' && computerSelection === 'rock'){
        playerCount++
        return `You win! ${playerResults} beats ${computerSelection}.`
    }else{
        cpuCount++
        return `You lose! ${cpuResults} beats ${choice}.`
    }
}





// const playGame = function(){
//     let playerChoice = prompt('What is your choice?')
//     console.log(playRound(playerChoice, cpuChoice))
// }

// playGame()

// function game(arr){
//     for(i=0;i<arr.length;i++){
//         console.log(playRound(arr[i],getComputerChoice()))
//     }
// }

// game(['rock', 'paper', 'paper', 'scissors', 'rock'])