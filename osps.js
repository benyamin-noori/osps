
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