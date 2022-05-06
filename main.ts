input.onButtonPressed(Button.A, function () {
    radio.sendString("bihotza")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("pozik")
})
radio.onReceivedString(function (receivedString) {
    if ("bihotza" == receivedString) {
        basic.showIcon(IconNames.Heart)
    }
    if ("triste" == receivedString) {
        basic.showIcon(IconNames.Sad)
    }
    if ("pozik" == receivedString) {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("triste")
})
radio.setGroup(20)
basic.forever(function () {
	
})
