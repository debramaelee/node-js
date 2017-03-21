// Write a program to save a web page. Prompt the user for a URL for the web page he wants to save, and for the filename to save to. As result cover-book.html should have the HTML source code from the entered URL.
// Trigger an error by running the program with an invalid URL, ensure the error is properly displayed. Trigger an error by running the program with an output file in a non-existent directory ,such as thisdirdoesntexist/output.txt, ensure that the error is properly displayed.

var dns = require('dns')
var fs = require('fs');
var request = require('request');
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//USER PROMPT - READ FILE
rl.question('What is the webpage you want? ', function(url){
	dns.lookup(url, function(err, ip){

//ERROR IF URL NOT EXIST
	if(err){
			console.log(err.message);
			return;
		}

//USER PROMPT - WRITE FILE
	rl.question('What is the file you want to save to? ', function(fileName){
		rl.close();

	request.get(url, function(err, resp, html){
		if(err){
			console.log(err.message);
			return;
		}

//WRITE FILE
		fs.writeFile(fileName, html, function(err){
			if(err){
				console.log(err.message);
				return;
			}
		})
		console.log('SUCCESS! ' + url + ' is now written to ' + fileName);
	});
	});
});
});
