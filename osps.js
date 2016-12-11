//Operating system process scheduler module
//Written by Benyamin Noori


//sort processes in the list based on time of arrival
var sortByArrival = function(obj_list){
	for(var i = 0; i < obj_list.length; i++){
		for(var j = i; j < obj_list.length; j++){
			if(obj_list[i].arrival_time > obj_list[i].arrival_time) {
				var temp = obj_list[i];
				obj_list[i] = obj_list[j];
				obj_list[j] = temp;
			}
		}
	}
	return obj_list;
}


//sort processes in the list based on length of execution
var sortByLength = function(obj_list){
	for(var i = 0; i < obj_list.length; i++){
		for(var j = i; j < obj_list.length; j++){
			if(obj_list[i].len > obj_list[j].len) {
				var temp = obj_list[i];
				obj_list[i] = obj_list[j];
				obj_list[j] = temp;
			}
		}
	}
	return obj_list;	
}

//add processes that have arrived by curr_time to queue of processes
var updateCur = function(queue, proc_list, curr_time){

	while(proc_list.length > 0 && proc_list[0].arrival_time <= curr_time){
		queue.push(proc_list.shift());
	}

	return queue;
}


//proc_info contains the following: 
//1. "proc_list": a list of {"id", "len", "arrival_time"} objects each representing a process
//2. "cs_time": context switch time. 
//3. "alg": The algorithm that is used. Can be one of 
//{"fifo", "sjf", "srjf", "rr"}
//4. "quanta" which shows that quanta for every process
//Returns a list of json objects {"proc_id", "begin_time", "end_time", "is_cs", "is_idle"}
exports.schedule = function(proc_info){
	switch(proc_info.alg){
		case "fifo": return fifo(proc_info);
		case "sjf": return sjf(proc_info);
		case "rr": return rr(proc_info);
	}
}