var restful = require('node-restful');
var mongoose = restful.mongoose;

var MonalisaSchema = new mongooseSchema({
	result:[{
		language:String,
		key: String,
		image: String,
		context: String
	}]
});
module.exports = restful.model('Monalisa',MonalisaSchema); 