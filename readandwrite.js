//Write a program to prompt the user for two file names, the first file will be the input and the second file will be the output. The program will read in the contents of the input file, convert its text to all caps, and then write the resulting contents to the output file.

var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//USER PROMPT - READ FILE
rl.question('What is the file to read? ', function(readFile1){
	fs.readFile(readFile1, function(err, buffer){

//ERROR IF READ FILE NOT EXIST
	if (err){
		console.log(err.message);
		rl.close();
		return;
	}

//USER PROMPT - WRITE FILE
rl.question('What is the file to write? ', function(writeFile2){
	rl.close();

///WRITE FILE
var contents = buffer.toString().toUpperCase();
fs.writeFile(writeFile2, contents, function(err){
	if(err){
		console.log(err.message);
		return;
	}
	console.log('SUCCESS! ' + readFile1 + ' contents written to ' + writeFile2 + ' in caps.')
	});
	});
	});
});