# MTA train times on an LCD screen

## Requires

* Arduino
* Hookup cables
* 10k potentiometer
* 16x2 Character LCD screen (like [this one](https://www.sparkfun.com/products/255))
* Solder + gun
* Breadboard

## Run

### Setup the Aruino

[Like this](https://github.com/rwaldron/johnny-five/blob/master/docs/lcd.md).

### Get an API key + create `config.js`

[Register for access to the MTA data feed](http://datamine.mta.info/), and note your developer API key.

Create a `config.js` file, based on `config.js.example`, and fill in your API key.

### Install submodules

```sh
npm install
```

### Upload Simple Firmata on the Arduino

In the Arduino IDE, navigate to `File > Examples > Firmata > Simple Firmata`, and upload
the program to the Arduino.

### Run the program

```sh
node index.js
```
