let quoteText = document.getElementById("textBox")
let characterType = document.getElementById("inputedText")
const wpmElement = document.getElementById("typingSpeed")
const timerText = document.getElementById("timerText")

const quotes = ["Hey, this is just a test", "Hello World.", "The quick brown fox jumps over the lazy dog."]

let quote = ""
let running = false
let startTime = 0 
let runningTime = 0
let minutes = 0
let seconds = 0
let typedText = null

function generateQuote() {
    quote = quotes[Math.floor(Math.random() * quotes.length)]
    quoteText.textContent = quote
}

function startTyping() {
    running = true
    startTime = performance.now()
    updateTime()
}

function updateTime() {
    typedText = characterType.value
    if (running && (typedText.length <= quote.length)) {
        runningTime = performance.now() - startTime

        seconds = Math.floor(runningTime / 1000) % 60
        minutes = Math.floor(runningTime / 1000 / 60) % 60

        
    timerText.textContent = minutes.toString() + ":" + seconds.toString().padStart(2, "0")
    }

    else {
        calculateResult()
    }
}

function resetTime() {
    running = false
    startTime = 0
    runningTime = 0

    generateQuote()
}

function calculateResult() {
    running = false
    let target = quote
    typedText = characterType.value
    let mistakes = 0

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] !== target[i]) {
            mistakes++
        }
    }

    let speed = Math.round(((target.length / 5) / (runningTime / 1000 / 60)))
    let accuracy = typedText.length > 0 ? Math.round(((typedText.length - mistakes) / typedText.length) * 100) : null

    wpmElement.textContent = speed + " " + "WPM"
}

setInterval(updateTime, 1000)
document.addEventListener("DOMContentLoaded", () => {resetTime()})