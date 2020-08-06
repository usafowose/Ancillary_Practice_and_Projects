// This file should demonstrate somewhat basic use of the createWriteStream method of the fs core module. 

const fs = require('fs'); 

const myStream = fs.createWriteStream('./writeHere.txt'); 

for (var i=0; i<= 1e2; i++){
myStream.write('This is my first time streaming data to a file \n');
myStream.write('i wonder if this method accepts any callbacks \n');
myStream.write('This has a new line');
}
myStream.end(); 


// seems too simple