var restful = require('node-restful');
var mongoose = restful.mongoose;

var thinkerSchema = new mongoose.Schema({
	result:[{
		language:String,
		key: String,
		image: String,
		context: String
	}]
});
module.exports = restful.model('Thethinker',thinkerSchema); 