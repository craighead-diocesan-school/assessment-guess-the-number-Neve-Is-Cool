let boardOfScores = [
]
//Empty array for the scoreboard -- players and their scores will be pushed into this array.

function guessTheNumber() {
    //Overall summary of this function.

    alert ("Let's play guess the number")
    let usersName = prompt ('What is your name?')
    //The introduction to the game and asks the user for their name and places it under the variable name: usersName.

    const randomGeneratorRange = 20
    let theNumber = Math.floor (Math.random() *randomGeneratorRange)
    theNumber = theNumber + 1
    //Generates a random number between 1 and 20 inclusive.
    
    let numOfAttempts = 0
    let usersAttempt = 0
    //These blah blah blah.
    alert ('Hi ' + usersName + '! lets play a game of guess the number! Try to guess a number between 1 and 20 inclusive in the fewest guesses possible.')
    //Explains the game etc....
    
    while (usersAttempt != theNumber ) {
        usersAttempt = prompt ('What is your guess?')
        usersAttempt = usersAttempt.trim()
        usersAttempt = Number (usersAttempt)
        //...
        
        if (usersAttempt == theNumber) {
            alert ('Congrats, you got it!!')
            numOfAttempts = numOfAttempts + 1
            boardOfScores.push(usersName + '=' + numOfAttempts)
            // Explanation
        } else if (usersAttempt > 20 || usersAttempt < 1) {
            alert ('The number you guessed in not within a range of 1-20')
            //Explanation
        } else if (usersAttempt != theNumber) {
            alert ('Nope, try again.')
            numOfAttempts = numOfAttempts + 1 
            //Explanation
        } else {
            alert ('Invalid attempt, please try again.')
            //Explanation
        }
    } 
}

function showScoreboard () {
    //Overall summary of this function.

    let arrayLength = boardOfScores.length
    let count = 0
    let scoreBoard = ''
    while (count<arrayLength) {
        scoreBoard = scoreBoard + boardOfScores[count] + ', '
        count = count + 1
    }
    //Adds a space and makes the... explain it better dude.
    alert ('This is the scoreboard, the person with the lowest score is winning! ' +scoreBoard)
    //Alerts the scoreboard...
}