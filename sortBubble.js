function bubbleSort(arr){
	var temp;
	var sorted = true;
	for(var i = 1; i < arr.length; i++){
		for(var j = 0; j < arr.length - i; j++){
			if(arr[j] > arr[j+1]){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
				sorted = false;
			}
		}
		if(sorted){
			break;
		} else {
			sorted = true;
		}
	}
	return arr;
}

var result = bubbleSort([1,2,3,4,5]);
var result2 = bubbleSort([5,4,3,2,1]);
var result3 = bubbleSort([21,67,3,9,81,45,11,70]);
console.log(result);
console.log(result2);
console.log(result3);