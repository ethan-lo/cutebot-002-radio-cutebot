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
    if (name == "heart") {
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
    }
    if (name == "smile") {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (name == "diamond") {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    }
    if (name == "circle") {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
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
    if (distance < 30 && stop == 0) {
        cuteBot.stopcar()
        stop = 1
        music.playMelody("C5 B C5 B C5 B C5 B ", 200)
    }
    cuteBot.motors(yValue + xValue, yValue - xValue)
})
