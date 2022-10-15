radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
})
let yValue = 0
let xValue = 0
music.playMelody("C D E F G - - - ", 120)
radio.setGroup(7)
basic.forever(function () {
    cuteBot.motors(yValue + xValue, yValue - xValue)
})
