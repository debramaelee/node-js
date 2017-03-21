var x = 4;
var y = 3;
var x2 = square(x);
//CPS form
square (x, function(x2) {

});

var y2 = square(y);
//CPS form
square (y, function(y2){

});

var sum = x2 + y2;
//CPS form
square (x, function(x2) {
	square (y, function(y2){
		var sum = x2 + y2;
		console.log(sum);
	});
});

//CPS
function square(num) {
	return num * num;
}