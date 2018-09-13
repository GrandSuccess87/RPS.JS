var wins = 0
var losses = 0
var ties = 0
// var result = null

var directionsText = document.getElementById('directions-text')
var userChoiceText = document.getElementById('userChoice-text')
var compChoiceText = document.getElementById('compChoice-text')
var winsText = document.getElementById('wins-text')
var lossesText = document.getElementById('losses-text')
var tiesText = document.getElementById('ties-text')
var resultText = document.getElementById('result-text')
var consoleText = document.getElementById('console-text')
// var userScore = document.getElementById('user-score')

var computerChoices = ['r', 'p', 's']

document.onkeyup = function (event) {
  var userGuess = event.key
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

  // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
  if ((userGuess === 'r') || (userGuess === 'p') || (userGuess === 's')) {
    if ((userGuess === 'r') && (computerGuess === 's')) {
      wins++
      console.log('User Guess: ' + userGuess)
      console.log('Computer Guess: ' + computerGuess)
      console.log('Wins: ' + wins)
      console.log('Losses: ' + losses)
      console.log('Ties: ' + ties)
    } else if ((userGuess === 'r') && (computerGuess === 'p')) {
      losses++
      console.log('User Guess: ' + userGuess)
      console.log('Computer Guess: ' + computerGuess)
      console.log('Wins: ' + wins)
      console.log('Losses: ' + losses)
      console.log('Ties: ' + ties)
    } else if ((userGuess === 's') && (computerGuess === 'r')) {
      losses++
      console.log('User Guess: ' + userGuess)
      console.log('Computer Guess: ' + computerGuess)
      console.log('Wins: ' + wins)
      console.log('Losses: ' + losses)
      console.log('Ties: ' + ties)
    } else if ((userGuess === 's') && (computerGuess === 'p')) {
      wins++
      console.log('User Guess: ' + userGuess)
      console.log('Computer Guess: ' + computerGuess)
      console.log('Wins: ' + wins)
      console.log('Losses: ' + losses)
      console.log('Ties: ' + ties)
    } else if ((userGuess === 'p') && (computerGuess === 'r')) {
      wins++
      console.log('User Guess: ' + userGuess)
      console.log('Computer Guess: ' + computerGuess)
      console.log('Wins: ' + wins)
      console.log('Losses: ' + losses)
      console.log('Ties: ' + ties)
    } else if ((userGuess === 'p') && (computerGuess === 's')) {
      losses++
      console.log('User Guess: ' + userGuess)
      console.log('Computer Guess: ' + computerGuess)
      console.log('Wins: ' + wins)
      console.log('Losses: ' + losses)
      console.log('Ties: ' + ties)
    } else if (userGuess === computerGuess) {
      ties++
      console.log('User Guess: ' + userGuess)
      console.log('Computer Guess: ' + computerGuess)
      console.log('Wins: ' + wins)
      console.log('Losses: ' + losses)
      console.log('Ties: ' + ties)
    }

    directionsText.textContent = ' '
    consoleText.textContent = ' '
    userChoiceText.textContent = 'User Guess: ' + userGuess
    // userScore.textContent = 'User Score: ' + wins
    compChoiceText.textContent = 'Computer Choice: ' + computerGuess
    winsText.textContent = 'Wins: ' + wins
    lossesText.textContent = 'Losses: ' + losses
    tiesText.textContent = 'Ties: ' + ties
    resultText.textContent = ' '
  }
}
