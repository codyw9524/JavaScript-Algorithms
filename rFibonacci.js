function rFibonacci(num){
	if(num === 0){
		return 0;
	}
	else if(num === 1){
		return 1;
	}
	else{
		return rFibonacci(num - 2) + rFibonacci(num - 1);
	}
}

var result = rFibonacci(6);
console.log(result);