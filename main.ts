/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack Eddy
 * Created on: Oct 2023
 * This program compares two different numbers and compares them
*/

// variables
const randomNumber1: number = randint(0, 99)
const randomNumber2: number = randint(0, 99)

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

// show random #1
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  basic.showString(' #1: ' + (randomNumber1).toString())
  basic.showIcon(IconNames.Happy)
  basic.pause(1000)
})

// show random #2
input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showString(' #2: ' + (randomNumber2).toString())
  basic.showIcon(IconNames.Happy)
  basic.pause(1000)
})

// compare #'s
input.onGesture(Gesture.Shake, function () {
  if (randomNumber1 < randomNumber2) {
    basic.clearScreen()
    basic.showString((randomNumber1).toString() + ' < ' + (randomNumber2).toString())
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
  } else {
    basic.clearScreen()
    basic.showString((randomNumber1).toString() + ' > ' + (randomNumber2).toString())
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
  }
})
