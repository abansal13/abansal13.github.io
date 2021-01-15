// Call a certain function every second

setInterval(setClock, 1000)

// Set data attributes from HTML

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

// Function to set clock

function setClock() {
    const currentDate = new Date() // New Date Contructor
    const secondsRatio = currentDate.getSeconds() / 60 // Ratio is a % for minute
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

// function to set rotation and rotation property in CSS

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

// Set clock as soon as page reloads 

setClock()