let quoteText = document.getElementById("textBox")
let characterType = document.getElementById("inputedText")
const wpmElement = document.getElementById("typingSpeed")
const accuracyText = document.getElementById("accuracy")
const timerText = document.getElementById("timerText")

const quotes = ["Hey, this is just a test", "Hello World.", "The quick brown fox jumps over the lazy dog."]

let quote = ""
let running = false
let startTime = 0 
let runningTime = 0
let minutes = 0
let seconds = 0
let accuracy = 0
let typedText = null

function generateQuote() {
    quote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteText.textContent = quote
    startTyping()
}

function startTyping() {
    running = true
    startTime = performance.now()
    updateTime()
}

function updateTime() {
    typedText = characterType.value
    if (running && (typedText.length < quote.length)) {
        runningTime = performance.now() - startTime

        seconds = Math.floor(runningTime / 1000) % 60
        minutes = Math.floor(runningTime / 1000 / 60) % 60

        
    timerText.textContent = minutes.toString() + ":" + seconds.toString().padStart(2, "0")
    calculateResult()
    }

    else {
        characterType.disabled = true
        generateResetButton()
    }
}

function resetTime() {
    running = false
    startTime = 0
    runningTime = 0

    generateQuote()
}

function calculateResult() {
    let target = quote
    typedText = characterType.value
    let mistakes = 0

    for (let i = 0; i <= typedText.length; i++) {
        if (typedText[i] !== target[i]) {
            mistakes++
        }
    }

    let speed = Math.round(((target.length / 5) / (runningTime / 1000 / 60)))
    accuracy = typedText.length > 0 ? Math.round(((typedText.length - mistakes) / typedText.length) * 100) : null
    let totalSpeed = Math.round(speed * (accuracy / 100))

    wpmElement.textContent = Math.max(totalSpeed, 0) + " " + "WPM"
    accuracyText.textContent = Math.max(accuracy, 0) + "%"
}

function generateResetButton() {
    let resetButton = document.createElement("button")
    resetButton.id = "resetButton"
    resetButton.innerText = "Reset"

    resetButton.onclick = () => {
        resetTime()
        runningTime = 0
    }
}

setInterval(updateTime, 100)
document.addEventListener("DOMContentLoaded", () => {generateQuote()})