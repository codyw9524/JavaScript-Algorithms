//Given an array x (e.g. [1,5, 10, -2]), create an algorithm 
//that prints the maximum number in the array, minimum value 
//in the array as well as the average values in the array.

function maxMinAvg(arr){
	var length = arr.length;
	var sum = 0;
	var max = arr[0];
	var min = arr[0];
	for(var i = 0; i < length; i++){
		sum += arr[i];
		if(arr[i] > max){
			max = arr[i];
		}
		if(arr[i] < min){
			min = arr[i];
		}
	}
	console.log('max: ', max)
	console.log('min: ', min)
	console.log('avg: ', sum / length);
}


maxMinAvg([1,2,3,4,5])
