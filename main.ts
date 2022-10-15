radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
    }
    if (name == "y") {
        yValue = value
    }
    if (name == "stop") {
        stop = value
    }
})
let distance = 0
let stop = 0
let yValue = 0
let xValue = 0
music.playMelody("C D E F G - - - ", 120)
radio.setGroup(7)
basic.forever(function () {
    distance = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (distance < 10 && stop == 0) {
        cuteBot.stopcar()
        stop = 1
        music.playMelody("C5 B C5 B C5 B C5 B ", 200)
    }
    cuteBot.motors(yValue + xValue, yValue - xValue)
})
