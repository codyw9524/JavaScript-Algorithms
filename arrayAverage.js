function arrayAverage(arr){
	var length = arr.length;
	var sum = 0;
	for(var i = 0; i < length; i++){
		sum += arr[i];
	}
	return sum / length;
}

var array = [10,20,30,40,50]
var result = arrayAverage(array);
console.log(result);