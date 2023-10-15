/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Oct 2023
 * This program compares two different numbers and compares them
*/

// variables
let randomNumber1: number
let randomNumber2: number

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

// generate random #
randomNumber1 = randint(0, 99)
randomNumber2 = randint(0, 99)

// show random #1
input.onButtonPressed(Button.A, function () {
  basic.showString(' #1: ' + (randomNumber1).toString())
  basic.showIcon(IconNames.Happy)
  basic.pause(1000)
})

// show random #2
input.onButtonPressed(Button.B, function () {
  basic.showString(' #2: ' + (randomNumber2).toString())
  basic.showIcon(IconNames.Happy)
  basic.pause(1000)
})

// compare #'s
input.onGesture(Gesture.Shake, function () { 
if (randomNumber1 < randomNumber2) {
  basic.clearScreen()
  basic.showString((randomNumber1).toString() + ' < ' + (randomNumber2).toString())
  basic.showIcon(IconNames.Happy)
  basic.pause(1000)
} else {
  basic.clearScreen()
  basic.showString((randomNumber1).toString() + ' > ' + (randomNumber2).toString())
  basic.showIcon(IconNames.Happy)
  basic.pause(1000)
}
})
