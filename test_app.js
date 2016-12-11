var osps = require("./osps.js");


res = osps.schedule({
	"proc_list": [{
		"id": 1,
		"len": 10,
		"arrival_time": 0,
	}, {
		"id": 2, 
		"len": 5,
		"arrival_time": 0,
	}, {
		"id": 3, 
		"len": 1,
		"arrival_time": 100,
	}],
	"cs_time": 2,
	"alg": "rr",
	"quanta": 2,
})

console.log(res);