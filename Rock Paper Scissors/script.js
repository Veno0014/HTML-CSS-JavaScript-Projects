//Retrieves HTML elements
const options = ["rock", "paper", "scissors"];
const userDisplay = document.getElementById("userDisplay");
const comDisplay = document.getElementById("comDisplay");
const resultDisplay = document.getElementById("resultsDisplay");

//Allows the computer to make a choice when competing against the user
function Play(playerChoice) {
    const computerChoice = options[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE";
    } else {
        switch (playerChoice) {
            //When rock is chosen by user or computer
            case "rock":
                result = (computerChoice === "scissors") ? "You win! rock beats scissors" : "You Lose! scissors beats rock";
                break;
            //When paper is chosen by user or computer
            case "paper":
                result = (computerChoice === "rock") ? "You win! paper beats rock" : "You lose! rock beats paper";
                break;
            //When scissors is chosen by user or computer
            case "scissors":
                result = (computerChoice === "paper") ? "You win! scissors beats paper" : "You Lose! rock beats scissors";
                break;
        }
    }

    // Update the display elements only when a button is clicked
    resultDisplay.textContent = result;
}
