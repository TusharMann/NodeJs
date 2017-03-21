////Dependencies
var express=require('express');
var router=express.Router();

//Models
var Product=require('../models/products');
Product.methods(['get','put','post','delete']);

Product.register(router,'/products');

//Routes
/*router.get('/products',function(req,res) {
	//res.send('api is working');
	Product.getGem(function(err,generes){
		if(err){
			throw err;
		}
		res.json(generes);
	});
	// body...
});*/

var Student=require('../models/students');
Student.methods(['get','put','post','delete']);

Student.register(router,'/students');

/*router.get('/students',function(req,res) {
	//res.send('api is working');
	Student.getGem(function(err,generes){
		if(err){
			throw err;
		}
		res.json(generes);
	});
	
});*/

var Book=require('../models/books');
Book.methods(['get','put','post','delete']);

Book.register(router,'/books');




//Return route
module.exports=router;