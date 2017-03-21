var express=require('express');
var path=require('path');
var app=express();

app.use('/cssFiles',express.static(__dirname+'/files'));

app.get('/', function(request,response){
	// body...
	//response.end('test');
	response.sendFile('dbscript2.js',{root: path.join(__dirname,'')}) ;
})


app.listen(1337,function() {
	console.log('Listeing at port 1337');
});
