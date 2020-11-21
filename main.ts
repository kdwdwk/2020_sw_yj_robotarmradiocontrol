radio.setGroup(3)
basic.forever(function () {
    radio.sendValue("가변저항1", pins.analogReadPin(AnalogPin.P0) / 5)
    radio.sendNumber(pins.analogReadPin(AnalogPin.P1) / 5)
})
