//Dependencies
var restful=require('node-restful');
var mongoose=restful.mongoose;

//Schema

var studentSchema=new mongoose.Schema({
	name:String,
	roll:Number,
	male:Boolean
});

var gen=module.exports=restful.model('student',studentSchema)
module.exports.getGen=function  (callback,limit) {
	// body...
	gen.find(callback).limit(limit);
}