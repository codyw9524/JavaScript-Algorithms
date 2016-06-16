function flatten2(arr, sub, idx){
	if(!idx){
		idx = 0;
	}
	if(!sub){
		sub = [];
	}
	if(sub.length > 0){
		for(var j = 0; j < sub.length; j++){
			if(j > 0){
				arr.push(sub[j]);
			}
			else{
				arr[idx] = sub[j];
			}
		}
	}
	sub = [];
	for(var i = idx; i < arr.length; i++){
		if(Array.isArray(arr[i])){
			flatten2(arr, arr[i], i);
		}
	}
	return arr;
}

var result = flatten2([1,2,[3,4],5,[6]]);
console.log(result);