//Dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//Schema

var productSchema=new mongoose.Schema({
	name:String,
	sku:String,
	price:Number
});

var gen=module.exports=restful.model('Products',productSchema)
module.exports.getGen=function  (callback,limit) {
	// body...
	gen.find(callback).limit(limit);
}