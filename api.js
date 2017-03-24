//Dependencies
var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var url=require('url');

//MongoDB
 mongoose.connect('mongodb://localhost/mDB');

//Express
 var app=express();

//url
/*
var urlValue='http://rahul';
var parseUrl=url.parse(urlValue,true,true);
console.log(parseUrl.href);

function fullurl(req){
var requrl=url.format({
	protocol:req.protocol,
	host:req.get('host'),
	pathname:req.originalUrl
});
console.log(requrl);
}*/

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

//Routes
app.use('/api',require('./routes/api1'));

//Start server 
app.listen(1337,"0.0.0.0",function() {
	console.log('Listening at port 1337');
});
