var express=require('express');
var app=express();

app.get('/helloThere', function(request,response){
	// body...
	response.send('Hello there'); 
});

app.listen(1337,function() {
	console.log('Listeing at port 1337');
});
