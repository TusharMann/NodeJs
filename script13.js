var express=require('express');

var app=express();

app.use('/cssFiles',express.static(__dirname+'/files'));

app.get('/hello', function(request,response){
	// body...
	//response.end('test');
	response.send('hello everyone') 
})


app.listen(1337,function() {
	console.log('Listeing at port 1337');
});
