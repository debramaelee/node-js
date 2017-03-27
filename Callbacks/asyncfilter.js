// Given an array of file names like, use async.filter to return and print only the files in that array which exist in your current directory.

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

function doWeWant(filename, callback){
  fs. acess(filename, 'r', function(err){
    callback(null, !err);
  });
}

async.filter(filenames, doWeWant, function(err, validFiles){
  if (err) {
    console.log(err.message);
  }
});