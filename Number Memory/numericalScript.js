const numberInputValue = document.getElementById("numberInput")
const submitButton = document.getElementById("submitButton")
const playerInputValue = document.getElementById("playerInput")

let numericalLength = 1
let digit = 0
let number = ""

let message = document.getElementById("message")
    if (message === null) {
        let numericalSection = document.querySelector(".numericalSection")
        message = document.createElement("p")
        message.id = "message"
        numericalSection.appendChild(message)
    }

let TryAgainButton = document.getElementById("TryAgainButton")
    if (TryAgainButton === null) {
        numericalSection = document.querySelector(".numericalSection")
        TryAgainButton = document.createElement("button")
        TryAgainButton.id = "TryAgainButton"
        TryAgainButton.innerText = "Try Again!"
        numericalSection.appendChild(TryAgainButton)
        TryAgainButton.hidden = true
    }

function generateNumber() {
    let numericalString = ""
    playerInputValue.disabled = true
    playerInputValue.value = ""
    for (let i = 0; i < numericalLength; i++) {
        digit = Math.floor(Math.random() * 10)
        numericalString += digit
    }

    number = numericalString
    numberInputValue.textContent = numericalString
    memoriseNummber(numericalLength)
}

function memoriseNummber(time) {
    if (time <= 0) {
        playerInputValue.disabled = false
        numberInputValue.textContent = "What number was shown!"
        return
    }

    setTimeout(() => memoriseNummber(time-1), 1000)
}

function sendInput() {
    let playerAnswer = playerInputValue.value

    if (playerAnswer === number) {
        numericalLength++
        generateNumber()
    }

    else {
        playerInputValue.hidden = true
        submitButton.hidden = true
        numberInputValue.textContent = "The number was: " + number
        message.textContent = "You have reached up to: " + numericalLength + " " + "Characters!"
        numericalLength = 1
        TryAgain()
    }
}

function TryAgain() {
    TryAgainButton.hidden = false
    TryAgainButton.onclick = () => {
        generateNumber()
        playerInputValue.hidden = false
        submitButton.hidden = false
        TryAgainButton.hidden = true
        message.textContent = ""
    }
}

document.addEventListener("DOMContentLoaded", () => generateNumber())