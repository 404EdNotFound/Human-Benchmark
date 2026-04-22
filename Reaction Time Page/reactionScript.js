const reaction_Square = document.getElementById("reactionSquare")

let elapsedTime = 0
let startTime = 0
let running = false;

function randomisetime() {
    let time = Math.floor(Math.random() * 5)
    CountingDown(time)
}

function CountingDown(time) {
    if (time <= 0) {
        changeBackground()
        enableTime()
        return
    }

    setTimeout(() => CountingDown(time -1), 1000)
}

function changeBackground() {
    reaction_Square.style.backgroundColor = "#00FF00"
    reaction_Square.textContent = "Click Now!"
}

function enableTime() {
    running = !running
    startTime = performance.now() - elapsedTime
    measureTime()
}

function measureTime() {
    if (running) {
        elapsedTime = performance.now() - startTime
    }

    else {
        console.log(elapsedTime)
    }
}

function stopClick() {
    running = false;
    measureTime()
    reaction_Square.textContent = elapsedTime.toString().padStart(2, "0")
}

setInterval(measureTime, 10)
document.addEventListener("DOMContentLoaded", () => {randomisetime()})