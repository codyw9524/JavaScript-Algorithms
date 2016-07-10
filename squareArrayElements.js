function square(arr){
	var length = arr.length;
	for(var i = 0; i < length; i++){
		arr[i] *= arr[i];
	}
	return arr;
}

console.log(square([1,2,3,4,5]));