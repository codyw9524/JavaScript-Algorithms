function rand_range(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function rand_arr(){
	var output = [];
	var length = rand_range(10,50);
	for(let i = 0; i < length; i++){
		output[i] = rand_range(1,100);
	}
	return output;
}

function get_combos(arr, sub=[], perm=[]){
	var length = arr.length;
	if(length === 0){
		return arr;
	}
	// for(var i = 0; i < length; i++){
	// 	var sub2
	// }
}

console.log(rand_arr())