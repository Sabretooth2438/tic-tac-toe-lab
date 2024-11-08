//I worked on this project mostly on my own, using some help from AI to guide me to the answers. I also used what I learned from a previous lab we did in class.

/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], //Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], //Columns
  [0, 4, 8],
  [2, 4, 6] //Diagonals
]
/*---------------------------- Variables (state) ----------------------------*/
let board
let turn
let winner
let tie
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
/*-------------------------------- Functions --------------------------------*/
const updateBoard = () => {
  /*for (let index = 0; index < board.length; index++) {
    const cell = board[index];
    squareEls[index].textContent = cell;
  }*/

  board.forEach((cell, index) => {
    squareEls[index].textContent = cell
  })
}

const updateMessage = () => {
  if (winner === false && tie === false) {
    messageEl.textContent = `Player ${turn}, it's your turn!`
  } else if (winner === false && tie === true) {
    messageEl.textContent = 'It’s a tie!'
  } else {
    messageEl.textContent = `Congratulations, Player ${turn}! You've won the game! 🎉`
  }
}

const render = () => {
  updateBoard()
  updateMessage()
}

const init = () => {
  board = ['', '', '', '', '', '', '', '', '']
  turn = 'X'
  winner = false
  tie = false
  render()
}
// init()

/*----------------------------- Event Listeners -----------------------------*/
