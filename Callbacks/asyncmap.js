// Make an array of file names like so. Write a program using the async module to create all of these files in the directory, each file should contain the text: "Hello, world!".

var filenames = [
  '1.txt',
  '2.txt',
  '3.txt',
  '4.txt',
  '5.txt',
  '6.txt',
  '7.txt',
  '8.txt',
  '9.txt',
  '10.txt'
];

var fs = require('fs');
var fileText = 'Hello, world!'

var async = require('async');

// async.map(filenames, fs.writeFile, fileText, function(err, fileText){
// 	console.log('All files written');
// });

function transform(filenames, callback) {
	fs.writeFile(filenames, fileText, function(err){
		if (err){
			callback(err);
			return;
		}
		callback(null);
	});
}
async.map(filenames, transform, function(err, fileText){
	console.log('All files written successfully');
});