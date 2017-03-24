var mongoose = require('mongoose');


//schema to result
//not required for database only needed in application
//in schema we give all the field we want except id bcoz it is automatically generated
var res = mongoose.Schema({
	name:{
 
 type:String,
  required:true
	},
create_date:{
	type:Date
}
});


var result = module.exports = mongoose.model('result',res);   //made so that result is accessible from everywhere
                                           //name of object,name of schema

// this all can be done from route direct but we keep it in model

//function to get the object

module.exports.getresult = function(callback,limit){
	result.find(callback).limit(limit);
}