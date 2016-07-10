function arrayMax(arr){
	var length = arr.length;
	var max = arr[0];
	for(var i = 1; i < length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}

var array = [1,2,3,4,5];
var two = [-5,-6,-7,-8,-9]
var result = arrayMax(array);
console.log(result);
console.log(arrayMax(two));