function missingValue(arr){
	var sum1 = 0;
	for(let i = 1; i < arr.length + 1; i++){
		sum1 += i;
	}
	var sum2 = 0;
	for(let i = 0; i < arr.length; i++){
		sum2 += arr[i];
	}
	return sum1 - sum2;
}

console.log(missingValue2([0,1,3]));

var arr = [1,1,1]


function missingValue2(arr){
	var min = arr[0];
	var max = arr[0];
	var arraySum = arr[0];
	var rangeSum = 0;
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < min){
			min == arr[i];
		}
		else if(arr[i] > max){
			max = arr[i];
		}
		arraySum += arr[i];
	}
	for(let i = min; i <= max; i++){
		rangeSum += i;
	}
	return rangeSum - arraySum;
}