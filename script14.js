var express=require('express');
var app=express();
var path=express('path');

app.get('/', function(request,response){
	// body...
	response.sendFile('index.html',{root:path.join(_dirname,'./files')}) ;
})

app.listen(1337,function() {
	console.log('Listeing at port 1337');
});
