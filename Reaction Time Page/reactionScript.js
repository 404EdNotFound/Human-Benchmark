const reaction_Square = document.getElementById("reactionSquare")
const startButton = document.getElementById("StartButton")

let elapsedTime = 0
let startTime = 0
let running = false;
let clickable = false;
let activeRound = false;

function randomisetime() {
    let time = Math.floor(Math.random() * ((5 - 2) + 1) + 2)
    CountingDown(time)
}

function CountingDown(time) {
    if (time <= 0) {
        changeBackground()
        enableTime()
        return
    }

    if (!activeRound) return

    setTimeout(() => CountingDown(time -1), 1000)
}

function changeBackground() {
    reaction_Square.style.backgroundColor = "#00FF00"
    clickable = true;
    reaction_Square.textContent = "Click Now!"
}

function enableTime() {
    running = true
    startTime = performance.now() - elapsedTime
    measureTime()
}

function measureTime() {
    if (running) {
        elapsedTime = performance.now() - startTime
    }

    else {
        running = false
        console.log(elapsedTime)
    }
}

function preStart() {
    activeRound = false;
    clickable = false;
    reaction_Square.style.backgroundColor = "#0000FF"
    reaction_Square.textContent = "Press the Start Button to Start"
}

function Start() {
    activeRound = true
    clickable = false;
    startButton.remove()
    reaction_Square.style.backgroundColor = "#FF0000"
    reaction_Square.textContent = "When you see green, click as quickly as you can!"
    reaction_Square.onclick = stopClick
    randomisetime()
    const removeButton = document.getElementById("TryAgain")
    removeButton.remove()
}

function stopClick() {
    if (!clickable && reaction_Square.style.backgroundColor != "#0000FF") {
        reaction_Square.innerText = "Too Soon!"
        GenerateTryAgain()
        activeRound = false
        return
    }
    
    running = false;
    measureTime()
    reaction_Square.textContent = elapsedTime.toFixed(0).toString().padStart(2, "0")
    GenerateTryAgain()
}

function GenerateTryAgain() {
let TryAgainButton = document.getElementById("TryAgain")
if (TryAgainButton === null) {
        TryAgainButton = document.createElement("button")
        const ReactionSectionClass = document.querySelector(".reactionSection")
        TryAgainButton.id = "TryAgain"
        TryAgainButton.innerText = "Try Again!"
        ReactionSectionClass.appendChild(TryAgainButton)
    } 

    TryAgainButton.onclick = () => {
        elapsedTime = 0
        Start()
    }
}

setInterval(measureTime, 10)
document.addEventListener("DOMContentLoaded", () => {preStart()})