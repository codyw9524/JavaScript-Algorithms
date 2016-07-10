function replace(arr){
	var length = arr.length;
	for(var i = 0; i < length; i ++){
		if(arr[i] < 0){
			arr[i] = 0;
		}
	}
	return arr;
}
var result = replace([-1,0,-1,0,-1])
console.log(result);