function square(num) {
  return num * num;
}
///
function square (num, callback){
	callback(num * num);
}

function squareRoot(num) {
  return Math.sqrt(num);
}
///
funciton squareRoot(num, callback) {
	callback(Math.sqrt(num));
}


var x = 4;
var y = 3;
///
var x2 = square(x);
///
square (x, function(x2){
});

var y2 = square(y);
////
square (y, function(y2){
});

var sum = x2 + y2;
////
square (x, function(x2){
	square(y, function(y2){
		var sum = x2 + y2;
		squareRoot(sum, function(answer){
			console.log('The answer is ' + answer);
		});
	});
});

var answer = squareRoot(sum);
console.log('The answer is: ' + answer);

