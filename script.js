// * player selection elements
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const rock = document.getElementById("rock");
// player & CPU display elements
const playerPickDisplay = document.querySelector(".player-pick-display");
const computerPickDisplay = document.querySelector(".computer-pick-display");
// score board display elements
const playerScoreBoard = document.querySelector(".player-score");
const computerScoreBoard = document.querySelector(".computer-score");
const tieGameScoreBoard = document.querySelector(".tie-game-score");
const roundWinnerDisplay = document.querySelector(".roundWinnerDisplay");
const restartButton = document.querySelector(".restart-button");
const playerScoreContainer = document.querySelector(".player-score-container");
const computerScoreContainer = document.querySelector(
  ".computer-score-container"
);
const tieGameScoreContainer = document.querySelector(
  ".tie-game-score-container"
);
const rulesBtn = document.querySelector(".rulesBtn");
const rulesModal = document.querySelector(".rulesModal");
const closeModal = document.querySelector(".closeModal");
// score trackers
let playerScore = 0;
let computerScore = 0;
let tieGameScore = 0;
const gameWinnerScore = 5;

rulesBtn.onclick = () => {
  rulesModal.style.display = "block";
};
closeModal.onclick = () => {
  rulesModal.style.display = "none";
};
// function openModal() {}
// * getComputerChoice() generates a random choice for the computer
const getComputerChoice = () => {
  let compChoices = ["Rock", "Paper", "Scissor"];
  let computerSelection =
    compChoices[Math.floor(Math.random() * compChoices.length)];
  return computerSelection;
};

const playersChoices = [rock, paper, scissor];
let selectedPlayerChoice;
let selectedComputerChoice;
// * this function displays the player & Computer choice.
const playerSelectedChoice = playersChoices.forEach((choice) => {
  choice.addEventListener("click", () => {
    //displays players pick on screen
    playerPickDisplay.textContent = choice.textContent;
    //displays computers pick on screen
    let selectedComputerChoice = (computerPickDisplay.textContent =
      getComputerChoice());
    // console.log(selectedComputerChoice);
    //stores value of players choice from this loop in selectedPlayerChoice
    selectedPlayerChoice = choice.textContent;
    playRound(selectedPlayerChoice, selectedComputerChoice);
  });
});

const playRound = (player, computer) => {
  // checks if it's a tie game
  if (player === computer) {
    tieGameScore++;
    return (
      (roundWinnerDisplay.textContent = "Tie Game!"),
      (roundWinnerDisplay.style.color = "#eaa418"),
      (tieGameScoreBoard.textContent = tieGameScore),
      (tieGameScoreContainer.style.border = "3px solid orange"),
      (playerScoreContainer.style.border = "3px solid #1c2d4c"),
      (computerScoreContainer.style.border = "3px solid #1c2d4c")
    );
    // checks if computer is the winner then adds +1
  } else if (
    (player === "Rock" && computer === "Paper") ||
    (player === "Paper" && computer === "Scissor") ||
    (player === "Scissor" && computer === "Rock")
  ) {
    computerScore++;
    (tieGameScoreContainer.style.border = "3px solid #1c2d4c"),
      (playerScoreContainer.style.border = "3px solid #1c2d4c"),
      (computerScoreContainer.style.border = "3px solid red");
    // nested conditional checks if computer score is equal to game winner score
    if (computerScore === gameWinnerScore) {
      return (
        (roundWinnerDisplay.textContent = "You loose, the computer beat you!"),
        (roundWinnerDisplay.style.color = "red"),
        (computerScoreBoard.textContent = computerScore),
        //changes score board color to red/white
        (computerScoreContainer.style.color = "white"),
        (computerScoreContainer.style.backgroundColor = "red"),
        (tieGameScoreContainer.style.border = "3px solid #1c2d4c"),
        (playerScoreContainer.style.border = "3px solid #1c2d4c"),
        (computerScoreContainer.style.border = "3px solid #1c2d4c"),
        //disable all 3 buttons when computer wins
        (paper.disabled = true),
        (scissor.disabled = true),
        (rock.disabled = true)
      );
    }
    // checks if computer is winner displays winner and adds one point to computer score
    (roundWinnerDisplay.style.color = "red"),
      (roundWinnerDisplay.textContent = "Computer Wins!");

    return (computerScoreBoard.textContent = computerScore);
  }
  //checks if player is winner then adds +1
  else if (
    (computer === "Rock" && player === "Paper") ||
    (computer === "Paper" && player === "Scissor") ||
    (computer === "Scissor" && player === "Rock")
  ) {
    playerScore++;
    (tieGameScoreContainer.style.border = "3px solid #1c2d4c"),
      (playerScoreContainer.style.border = "3px solid #43ba18"),
      (computerScoreContainer.style.border = "3px solid #1c2d4c");
    // checks if player score is equal to game winner score
    if (playerScore === gameWinnerScore) {
      return (
        (roundWinnerDisplay.textContent =
          " You are the winner, you beat the computer!"),
        (playerScoreBoard.textContent = playerScore),
        (roundWinnerDisplay.style.color = "#43ba18"),
        //changes score board color to green/white
        (playerScoreContainer.style.color = "white"),
        ((playerScoreContainer.style.backgroundColor = "green"),
        (playerScoreContainer.style.border = "3px solid #1c2d4c"),
        //disable all 3 buttons when player wins
        (paper.disabled = true)),
        (scissor.disabled = true),
        (rock.disabled = true),
        (Window.onload = startConfetti())
      );
    }
    // checks if player is winner displays winner and adds one point to computer score
    roundWinnerDisplay.style.color = "#43ba18";
    roundWinnerDisplay.textContent = "You Win!";
    return (playerScoreBoard.textContent = playerScore);
  }
};
//restart game button
restartButton.addEventListener("click", () => {
  window.location.reload();
  stopConfettiInner();
});
