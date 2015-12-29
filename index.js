var config = require('./config'),
  five = require("johnny-five"),
  Mta = require('mta-gtfs'),
  mta, board, lcd;

board = new five.Board();
mta = new Mta({
  key: config.apiKey, // only needed for mta.schedule() method
  feed_id: 1                  // optional, default = 1
});

board.on("ready", function() {

  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [7, 8, 9, 10, 11, 12],
    backlight: 6,
    rows: 2,
    cols: 20


    // Options:
    // bitMode: 4 or 8, defaults to 4
    // lines: number of lines, defaults to 2
    // dots: matrix dimensions, defaults to "5x8"
  });

  this.loop(10000, function() {
    var stopID = 133;
    mta.schedule( stopID, function (err, result) {
      if ( err ) {
        console.log( err );
        return;
      }

      var northboundArrivals = result['schedule'][stopID]['N'];
      var now = new Date();
      lcd.clear()
        .cursor(0, 0)
        .print("eggs:");
      var text = '';
      northboundArrivals = northboundArrivals.filter(function(arrival) { return new Date( arrival.departureTime * 1000 ) > now }).slice(0,2);
      northboundArrivals.forEach(function( arrival ) {
        var departureTime = new Date( arrival.departureTime * 1000 );
        var difference = Math.round( ( ( departureTime - now ) / 1000 ) / 60 );
        text += difference + ' min ';
      });
      lcd.cursor(1, 0);
      lcd.print(text);
    });
  });

  this.repl.inject({
    lcd: lcd
  });
});
