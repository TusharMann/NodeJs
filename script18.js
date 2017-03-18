var express=require('express');
var path=require('path');
var app=express();
var bodyparser=require('body-parser');

app.use(bodyparser());

app.use('/cssFiles',express.static(__dirname+'/files'));

app.get('/', function(request,response){
	// body...
	response.sendFile('index.html',{root: path.join(__dirname,'./files')}) ;
	//response.end(JSON.stringify(request.query))	;
});

app.post('/',function(request,response){
	response.end(JSON.stringify(request.body));
});

app.listen(1337,function() {
	console.log('Listening at port 1337');
});
