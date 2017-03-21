//Write a program that prompts the user to enter a file name, and reads in the contents of the file, convert the text to all caps, and prints it out.

//USER PROMPT
var fs = require('fs');
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//USER PROMPT
rl.question('What is the file name ? ', function(name){
	console.log('Reading ' + name + '...'); 
	rl.close();

//READ FILE
	fs.readFile(name, function(err, buffer){
	if (err) {
		console.log('filename: ' + name + '\n' + err.message);
		return;
	}

//WRITE FILE
var contents = buffer.toString().toUpperCase(); //buffer needs to convert to string first

fs.writeFile(name, contents, function(err) {
	if (err) {
		console.log(err.message);
		return;
	}
	console.log('filename: ' + name + '\n' + contents)
	});
	});
});








