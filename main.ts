let xvalue = 0
let yvalue = 0
let nuber20 = 0
input.onButtonPressed(Button.A, function () {
    xvalue = 0
    yvalue = 0
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(xvalue, yvalue)
            basic.pause(200)
            xvalue += 1
        }
        xvalue = 0
        yvalue += 1
    }
})
input.onButtonPressed(Button.B, function () {
    xvalue = 0
    nuber20 = 0
    for (let index = 0; index < 5; index++) {
        led.plot(xvalue, nuber20)
        basic.pause(200)
        xvalue += 1
    }
    for (let index = 0; index < 2; index++) {
        nuber20 += 1
        for (let index = 0; index < 6; index++) {
            led.plot(xvalue, nuber20)
            basic.pause(100)
            xvalue += -1
        }
        nuber20 += 1
        for (let index = 0; index < 6; index++) {
            led.plot(xvalue, nuber20)
            basic.pause(200)
            xvalue += 1
        }
    }
})
