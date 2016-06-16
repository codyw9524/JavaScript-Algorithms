function createFib(max){
	var arr = [0,1];
	var i = 0;
	while(true){
		var fib = arr[i] + arr[i + 1];
		if(fib > max){
			break;
		}
		else{
			arr.push(fib);
		}
		i++;
	}
	return arr;
}

function sumEven(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] % 2 == 0){
			sum += arr[i];
		}
	}
	return sum;
}

var fib_sequence = createFib(4000000);
var result = sumEven(fib_sequence);
console.log(result);