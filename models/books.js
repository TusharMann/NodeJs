//Dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//Schema

var bookSchema=new mongoose.Schema({
	name:String,
	roll:Number,
	male:Boolean,
	result:[{
		name:String,
		roll:Number
	}]
});

var gen=module.exports=restful.model('book',bookSchema)
module.exports.getGen=function  (callback,limit) {
	// body...
	gen.find(callback).limit(limit);
}