var clivas = require('./index.js');

var width = 0;
var draw = function() {
	clivas.clear();

	width++;
	if (width > 20) return clivas.line('({red:boom!})');
	clivas.line('[{20+_white+black:'+Array(width).join('=')+'>}]');

};

setInterval(draw, 200);