var obj1= {
	"name":"Tushar",
	"roll":96,
	"male":true
};

var obj2= {
	"name":"Rishabh",
	"roll":56,
	"male":true
};

use mDB;
db.mDB.insert([obj1,obj2]);
db.mDB.find().pretty();