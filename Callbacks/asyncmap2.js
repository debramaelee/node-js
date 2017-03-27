// You can use fs.readdir function to list all the files that exist in a directory. Write a program to resize all .png files within a directory into 240x240 thumbnails. Hint: you can use the downloadAndCreateThumbnail function you made.
// STEPS
// 1. read dir to get files
// 2. async.each/map - transform each file
// 3. in function transform
// 		a. prepend directory name to file
// 		b. gm to resize and write the thumbnail(call the callback)

//List all files
var fs = require('fs');
var async = require('async');
var gm = require('gm')
// var requestOptions = {
//   url: url,
//   encoding: null
// };

function resizeImage(filename, callback){
	gm('images/' + filename)
	.resize(240, 240)
	.write(filename, callback);
}


var dirpath = './images1';

fs.readdir(dirpath, function(err, files){
	if (err){
		callback(err);
		return;
	}
	console.log('before', files);
	files = files.map(function(filename){
		return 'images/' + filename
	});
		async.each(files, resizeImage, funciton(err){
			if(err){
				console.log(err.message);
				return;
			}
			console.log('It worked.');
		});
	});




