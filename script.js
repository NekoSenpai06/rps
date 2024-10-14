var show = document.querySelector(".game");
var hide = document.querySelector(".playBtn");

function playGame() {
    show.style.display = "block";
    hide.style.display = "none";
}

var rand = Math.floor(Math.random() * 3);
var result = document.getElementById("display");
var player = document.getElementById("player");
var cpu = document.getElementById("cpu");

function play(option) {
    if(option === "rock") {
        if(rand === 0) {
            player.innerHTML = "YOU: ROCK";
            cpu.innerHTML = "COMPUTER: ROCK";
            result.innerHTML = "TIE";
            result.style.background = "#8cb8ff";
        }
        
        else if(rand === 1) {
            player.innerHTML = "YOU: ROCK";
            cpu.innerHTML = "COMPUTER: PAPER";
            result.innerHTML = "YOU LOSE";
            result.style.background = "#ff7d7d";
        }
        
        else if(rand === 2) {
            player.innerHTML = "YOU: ROCK";
            cpu.innerHTML = "COMPUTER: SCISSORS";
            result.innerHTML = "YOU WIN!";
            result.style.background = "#7affa2";
        }
    }
    
    else if(option === "paper") {
        if(rand === 0) {
            player.innerHTML = "YOU: PAPER";
            cpu.innerHTML = "COMPUTER: ROCK";
            result.innerHTML = "YOU WIN!";
            result.style.background = "#7affa2";
        }
        
        else if(rand === 1) {
            player.innerHTML = "YOU: PAPER";
            cpu.innerHTML = "COMPUTER: PAPER";
            result.innerHTML = "TIE";
            result.style.background = "#8cb8ff";
        }
        
        else if(rand === 2) {
            player.innerHTML = "YOU: PAPER";
            cpu.innerHTML = "COMPUTER: SCISSORS";
            result.innerHTML = "YOU LOSE";
            result.style.background = "#ff7d7d";
        }
    }
    
    else if(option === "scissors") {
        if(rand === 0) {
            player.innerHTML = "YOU: SCISSORS";
            cpu.innerHTML = "COMPUTER: ROCK";
            result.innerHTML = "YOU LOSE";
            result.style.background = "#ff7d7d";
        }
        
        else if(rand === 1) {
            player.innerHTML = "YOU: SCISSORS";
            cpu.innerHTML = "COMPUTER: PAPER";
            result.innerHTML = "YOU WIN!";
            result.style.background = "#7affa2";
        }
        
        else if(rand === 2) {
            player.innerHTML = "YOU: SCISSORS";
            cpu.innerHTML = "COMPUTER: SCISSORS";
            result.innerHTML = "TIE";
            result.style.background = "#8cb8ff";
        }
    }
}
