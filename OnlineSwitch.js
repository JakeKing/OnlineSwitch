var http = require('http');
var sys = require('sys')
var exec = require('child_process').exec;
var child;

http.createServer(function(request,response){
response.writeHead(200);

request.on('data',function(message){

  if (message=="on"){

    function puts(error, stdout, stderr) { sys.puts(stdout) }
    exec("python gpio-on.py");
    response.write("\nGPIO PIN ON\n");
    
    } else if (message=="off"){

      function puts(error, stdout, stderr) { sys.puts(stdout) }
      exec("python gpio-off.py");
      response.write("\nGPIO PIN OFF\n");
      } else {
        response.write("\nNot a valid request\n");
        
        }

  });

request.on('end',function(){
response.end();
});

}).listen(1280);
