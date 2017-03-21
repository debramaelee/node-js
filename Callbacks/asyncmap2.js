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
// var requestOptions = {
//   url: url,
//   encoding: null
// };

var dirpath = './images1';
fs.readdir(dirpath, function(err, list){
	if (err){
		callback(err);
		return;
	}
	entries.forEach(function(imageName) {
		console.log('Found file ' + imageName);
	});



//Resize
function downloadAndCreateThumbnail(imageName, imageName, callback) {
	// request(requestOptions, function(err, resp, data){
	// 	if(err){
	// 		callback(err);
	// 		return;
	// 	}
	
	// request(url, function(err, resp, data){
	// 	if(err){
	// 		callback(err);
	// 		return;
	// 	}
		
	// })
	// fs.writeFile(filename, data, function(err){
	// 	if(err){
	// 		callback(err);
	// 		return;
	// 	}
	
	gm(imageName)
	.resize(240, 240)
	.write(imageName, function(err) {
		if(err){
			callback(err);
			return;
		}
	callback(null);
	// });
	// });
	// });
});
	// });
	}
});
// async.map(list, transform, function(err, imageName){
// 	console.log('Success');
// });



