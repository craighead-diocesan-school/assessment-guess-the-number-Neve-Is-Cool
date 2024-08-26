let boardOfScores = [
]
//Empty array for the scoreboard -- players and their scores will be pushed into this array.

function guessTheNumber() {
    //Simulates a game of guess the number from 1-20 for a user, generates number, asks their input, gives adequate output to the user and updates their score.

    alert ("Let's play guess the number")
    let usersName = prompt ('What is your name?')
    //Introduction to the game and asks the user for their name and places it under the variable name: usersName.

    const max = 20
    const min = 1
    let theNumber = Math.floor (Math.random() * (max - min + 1)) + min;
    //Generates a random number between 1 and 20 inclusive.
    
    let numOfAttempts = 0
    let usersAttempt = 0
    //Sets both to 0 so they can be updated through the course of the game.
    //Sets the maximum and minimum ranges for comparisons to determine the output following their attempts.

    alert ('Hi ' + usersName + '! lets play a game of guess the number! Try to guess a number between 1 and 20 inclusive in the fewest guesses possible.')
    //Explains the game to the user and includes their name in the greeting.
    
    while (usersAttempt != theNumber ) {
        //Loops the question to the user of 'What is your guess' until the usersAttempt is equal to the randomly generated number.
        usersAttempt = prompt ('What is your guess?')
        usersAttempt = usersAttempt.trim()
        usersAttempt = Number (usersAttempt)
        //Asks the user for their guess and removes additional spaces before and after the input before being converted into a number.
        
        if (usersAttempt == theNumber) {
            alert ('Congrats, you got it!!')
            numOfAttempts++
            boardOfScores.push('\n' + usersName + '=' + numOfAttempts)
            //When the usersAttempt is equal to the random generated number, one attempt is added to the total number of attempts and the usersName and final number of attempts is pushed to a new line within the boardOfScores array.
        } else if (usersAttempt > max || usersAttempt < min) {
            alert ('Sorry, the number you guessed in not within a range of 1-20, please try again')
            //If the users attempt is not within the range of 1-20 this message will be displayed and no new attempts will be added to the total number of attempts.
        } else if (usersAttempt != theNumber && usersAttempt >= min && usersAttempt <= max ) {
            alert ('Nope, try again.')
            numOfAttempts++
            //When the usersattempt is not equal to the number and within the range of 1-20, the user receives the message 'Nope, try again' and one is added to the total number of attempts.
        } else {
            alert ('Invalid attempt, please try again.')
            //If the users input is not a number or if any other error occurs, this message will be outputted to the user.
        }
    } 
}


function showScoreboard () {
    ////Adds a space and comma to the end of each line, and changes the boardOfScores array into a variable named scoreBoard which it outputs.

    let arrayLength = boardOfScores.length
    let count = 0
    let scoreBoard = ''
    while (count<arrayLength) {
        scoreBoard = scoreBoard + boardOfScores[count] + ', '
        count++
    }

    alert ('This is the scoreboard, the person with the lowest score is winning! ' +scoreBoard)
    //Alerts the final scoreboard to the user.
}