# MTA train times on an LCD screen

## Requires

* Arduino
* hookup cables
* 10k potentiometer
* 16x2 Character LCD screen (like [this one](https://www.sparkfun.com/products/255))
* Solder + gun
* Breadboard

## Run

Set up the Arduino [like this](https://github.com/rwaldron/johnny-five/blob/master/docs/lcd.md).

Install submodules

```sh
npm install
```

In the Arduino IDE, navigate to `File > Examples > Firmata > Simple Firmata`, and upload
the program to the arduino.

Run the program

```sh
node index.js
```
