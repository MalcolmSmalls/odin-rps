
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

console.log(getComputerChoice())

