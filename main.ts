let t = 0
basic.forever(function () {
    t = input.compassHeading()
    if (t < 45) {
        basic.showString("B")
    } else if (t < 135) {
        basic.showString("D")
    } else if (t < 225) {
        basic.showString("N")
    } else if (t < 315) {
        basic.showString("T")
    } else {
        basic.showString("B")
    }
})
