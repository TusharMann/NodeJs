var obj1= {
	"name":"Tushar",
	"roll":96,
	"male":true
};

var obj2= {
	"name":"Rahul",
	"roll":95,
	"male":true
};

var obj3= {
	"name":"Tarun",
	"roll":94,
	"male":true
};

use mDB;

db.students.insert([obj1,obj2,obj3]);
db.students.find().pretty();