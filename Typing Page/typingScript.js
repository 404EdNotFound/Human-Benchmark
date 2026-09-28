let quoteText = document.getElementById("textBox")
let characterType = document.getElementById("inputedText")
const wpmElement = document.getElementById("typingSpeed")
const accuracyText = document.getElementById("accuracy")
const timerText = document.getElementById("timerText")

const quotes = ["Hey, this is just a test", "Hello World.", "The quick brown fox jumps over the lazy dog."]

let quote = ""
let running = false
let startingTime = 0 
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
    startingTime = performance.now()
    updateTime()
}

function updateTime() {
    typedText = characterType.value
    if (running && (typedText.length < quote.length)) {
        runningTime = performance.now() - startingTime

        seconds = Math.floor(runningTime / 1000) % 60
        minutes = Math.floor(runningTime / 1000 / 60) % 60

        
    timerText.textContent = minutes.toString() + ":" + seconds.toString().padStart(2, "0")
    }

    else {
        characterType.disabled = true
        generateResetButton()
    }
    calculateResult()
}

function resetTime() {
    running = false
    startingTime = 0
    runningTime = 0

    generateQuote()
}

function calculateResult() {
    let target = quote
    typedText = characterType.value
    let mistakes = 0

    for (let i = 0; i <= typedText.length; i++) {
        if (typedText[i] != target[i]) {
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
    let resetButton = document.getElementById("resetButton")
    if (resetButton === null) {
        const buttonSection = document.querySelector(".TypingPage")
        resetButton = document.createElement("button") 
        resetButton.id = "resetButton"
        resetButton.innerText = "Reset"
        buttonSection.appendChild((resetButton)) 
    }

    resetButton.hidden = false

    resetButton.onclick = () => {
        resetTime()
        runningTime = 0
        characterType.disabled = false
        resetButton.hidden = true
        characterType.value = ""
    }
}

setInterval(updateTime, 100)
document.addEventListener("DOMContentLoaded", () => {generateQuote()})