var https = require('https');
var i = 1;
var dataVar = ''

function getHTML (options, callback) {

    https.get(options, function(response){
            
        response.setEncoding('utf8');
    
        response.on('data', function(data){       

            console.log("Chunk Number : ", i);
            console.log("Data length: ", data.length);
            dataVar = dataVar + data;
            i += 1;
        });
            
        response.on('end', function(){
            callback(dataVar);
        //   console.log("Done");
        });
    });
        
      
    // getHTML(requestOptions, printHTML);
  
}

function printHTML (html) {
  console.log(html);
}
  
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
