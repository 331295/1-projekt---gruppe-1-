let length = 0
let Data: number[] = []
let Moisture = 0
function sucessCriteriaMet () {
    length = Data.length
    if (Data[Moisture] > Data[Moisture - 1] && Data[Moisture - 1] > Data[Moisture - 2]) {
        return true
    } else {
        return false
    }
}
basic.forever(function () {
    radio.setGroup(42)
    for (let index = 0; index < 25; index++) {
        Moisture = randint(0, 20)
        basic.pause(5000)
        basic.showNumber(Moisture)
        Data.push(Moisture)
        if (Moisture < 2) {
            radio.sendString("Done")
        }
        if (sucessCriteriaMet()) {
            radio.sendString("Rain")
        }
    }
})
