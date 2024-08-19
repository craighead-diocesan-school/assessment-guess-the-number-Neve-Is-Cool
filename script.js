let boardOfScores = [
]
//Empty array for the scoreboard -- players and their scores will be pushed into this array.

function guessTheNumber() {

    alert ("Let's play guess the number")
    let usersName = prompt ('What is your name?')

    const randomGeneratorRange = 20
    let theNumber = Math.floor (Math.random() *randomGeneratorRange)
    theNumber = theNumber + 1

    alert(theNumber)

    
    //Generates a random number between 1 and 20 inclusive.
    
    let numOfAttempts = 0
    let usersAttempt = 0
    //
    alert ('Hi ' + usersName + '! lets play a game of guess the number! Try to guess a number between 1 and 20 inclusive in the fewest guesses possible.')
    
    while (usersAttempt != theNumber ) {
        usersAttempt = prompt ('What is your guess?')
        usersAttempt = usersAttempt.trim()
        usersAttempt = Number (usersAttempt)
        
        if (usersAttempt == theNumber) {
            alert ('Congrats, you got it!!')
            numOfAttempts = numOfAttempts + 1
        } else if (usersAttempt > 20 || usersAttempt < 1) {
            alert ('The number you guessed in not within a range of 1-20')
        } else if (usersAttempt != theNumber) {
            alert ('Nope, try again.')
            numOfAttempts = numOfAttempts + 1 
        } else {
            alert ('Invalid attempt, please try again.')
        }
    }

    alert (usersName + ' = ' + numOfAttempts)

}