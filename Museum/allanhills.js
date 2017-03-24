var restful = require('node-restful');
var mongoose = restful.mongoose;

var AllanhillsSchema = new mongooseSchema({
	result:[{
		language:String,
		key: String,
		image: String,
		context: String
	}]
});
module.exports = restful.model('Allanhills',AllanhillsSchema); 