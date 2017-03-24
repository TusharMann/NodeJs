var restful = require('node-restful');
var mongoose = restful.mongoose;

var KohinoorSchema = new mongooseSchema({
	result:[{
		language:String,
		key: String,
		image: String,
		context: String
	}]
});
module.exports = restful.model('Kohinoor',KohinoorSchema); 