//Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out. Trigger an error condition by providing an invalid domain. See that the error gets displayed.

//USER PROMPT

var dns = require('dns');
var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('What is the domain name? ', function(name){
	rl.close(); //considers input finished once close is called

//LOOK UP IP ADDRESS
dns.lookup(name, function(err, ip){

//PRINT OUT
	if (err) {
		console.log('Error! Domain not found.');
		return;
	}
	console.log('Domain name: ' + name + '\n' + 'IP address: ' + ip);
});

});