// Given this code, extract a reusable function saveWebPage(url, filename, callback). You should be able to use the function like so.

var request = require('request');
var fs = require('fs');

// var url = 'https://en.wikipedia.org/wiki/Continuation-passing_style';
// var filename = 'output.html';
// request.get(url, function(err, response, html) {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   fs.writeFile(filename, html, function(err) {
//     if (err) {
//       console.log(err.message);
//       return;
//     }
//     console.log('It worked');
//   });
// });

function saveWebPage(url, filename, callback){
	request.get(url, function(err, resp, html){
		if (err){
				callback(err);
				return;
			}
		fs.writeFile(filename, html, function(err){
			if (err){
				callback(err);
				return;
			}
		callback(null);
		});
	});
}

saveWebPage('https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png', 'image.png', function(err){
	if(err){
		console.log(err.message);
		return;
	}
	console.log('It worked.');
});