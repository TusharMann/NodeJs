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

var obj4= {
	"name":"Rishabh",
	"roll":56,
	"male":true,
	"result":[obj1,obj2,obj3]
};

use mDB;
db.db.insert([obj4]);
db.db.find().pretty();