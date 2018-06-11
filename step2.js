var https = require('https');
var i = 1;
function getAndPrintHTML() {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };


    https.get(requestOptions, function(response){
        response.setEncoding('utf8');

        response.on('data', function(data){
          
          console.log("Chunk Number : ", i);
          console.log("Data length: ", data.length);
          i += 1;
        });
        
        response.on('end', function(){
          console.log("Done");
        });
    });
    
  }
  getAndPrintHTML();