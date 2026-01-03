input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000)
    basic.showIcon(IconNames.Happy)
    basic.pause(700)
    basic.setLedColors(0xff8000, 0xff8000, 0xff8000)
    basic.pause(700)
    basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
    basic.pause(700)
    Position = randint(0, 25)
    Buchstabe = Buchstabenliste[Position]
    basic.showString("" + (Buchstabe))
})
let Buchstabe = ""
let Position = 0
let Buchstabenliste: string[] = []
basic.showIcon(IconNames.Happy)
Buchstabenliste = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
]
basic.forever(function () {
	
})
