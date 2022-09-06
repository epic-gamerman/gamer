input.onButtonPressed(Button.A, function () {
    bots__all__lot += 1
    basic.pause(1000)
    basic.showNumber(bots__all__lot)
    basic.clearScreen()
    basic.showLeds(`
        # . . . .
        # # # . .
        # . . # .
        # . . # .
        # # # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("TIE")
})
input.onButtonPressed(Button.B, function () {
    let TIE = 0
    awesome_dude += 1
    basic.pause(1000)
    basic.showNumber(awesome_dude)
    basic.clearScreen()
    basic.showNumber(TIE)
    basic.clearScreen()
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . # #
        . # # . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(awesome_dude)
})
let awesome_dude = 0
let bots__all__lot = 0
bots__all__lot = 0
bots__all__lot = 0
