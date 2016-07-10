function mergeSort(arr){
	var length = arr.length;
	var left = [];
	var right = [];
	if(length < 2){
		return arr;
	}
	for(var i = 0; i < length; i++){
		if(i < length / 2){
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
	var output = [];
	while(true) {
		if(left.length == 0){
			return output.concat(right);
		}
		if(right.length == 0){
			return output.concat(left);
		}
		if(left[0] < right[0]){
			output.push(left.shift());
		} else {
			output.push(right.shift());
		}
	}
}

var result = mergeSort([9,8,7,6,5,4,3,2,1]);
console.log(result);
