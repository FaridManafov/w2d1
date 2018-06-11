var https = require('https');
var i = 1;

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

function getAndPrintHTML(options) {

    https.get(options, function(response){
        
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
  getAndPrintHTML(requestOptions);