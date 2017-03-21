//Dependencies
var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');

//MongoDB
 mongoose.connect('mongodb://localhost/mDB');

//Express
 var app=express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//Routes
app.use('/api',require('./routes/api1'));

//Start server 
app.listen(1337,function() {
	console.log('Listening at port 1337');
});
