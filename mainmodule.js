function cons_function(){
	var nameHolder;

	return {
	name:function(fName,lName){
		nameHolder=fName+' '+lName;
	},

	consolelog:function () {
		// body...
		console.log(nameHolder);
	 }

   }
}

module.exports=cons_function;