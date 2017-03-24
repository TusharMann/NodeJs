var express  =require('express'); //we need express
var app = express();//object to express our web application
var bodyparser = require('body-parser');
var mongoose =  require('mongoose');


var Genre = require('./result'); //here we gave the address of the place where our schema is saved

//connect to mongoose
mongoose.connect('mongodb://localhost/mDB'); //give url of database
var db = mongoose.connection;//db object

//route
app.get('/rapi',function(req,res){                     //http request
	res.send('hello world');
});                                    //handle 'get' requests


app.get('/rapi/result',function(req,res)    //calling the result object in the database
	                                        //and when result is called it will perform following function
{
Genre.getresult(function(err,genres){
	if(err){
		throw err;

	}
	res.json(genres);        //res is respnse we get when we call the function
	                          //and genres is the respons

})
})
app.listen(1337);             //listen to port o rrun on port 1337
console.log('running on port 1337...');