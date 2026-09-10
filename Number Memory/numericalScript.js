const numberInputValue = document.getElementById("numberInput")
const playerInputValue = document.getElementById("playerInput")

let numericalLength = 1
let digit = 0
let number = ""

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
        allowInput()
        numberInputValue.textContent = "What number was shown!"
        return
    }

    setTimeout(() => memoriseNummber(time-1), 1000)
}

function allowInput() {
    playerInputValue.disabled = false
}

function sendInput() {
    let message = document.getElementById("message")
    if (message === null) {
        const numericalSection = document.querySelector(".numericalSection")
        message = document.createElement("p")
        message.id = "message"
        numericalSection.appendChild(message)
    }

    playerInputValue.disabled = true
    let playerAnswer = playerInputValue.value

    if (playerAnswer === number) {
        numericalLength++
        generateNumber()
    }

    else {
        numberInputValue.textContent = "The number was: " + number
        message.innerText = "You have reached up to: " + numericalLength + " " + "Characters!"
    }
}

document.addEventListener("DOMContentLoaded", () => generateNumber())