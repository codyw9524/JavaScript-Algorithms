// Add all the values between 100 and 4000000 inclusively that are divisible by 3 or 5 but not both 3 and 5.

function threeOrFive(start, end){
	var sum = 0;
	for(var i = start; i < end + 1; i++){
		if(i % 3 == 0 && i % 5 != 0){
			sum += i;
		}
		else if(i % 5 == 0 && i % 3 != 0){
			sum += i;
		}
	}
	return sum;
}

var result = threeOrFive(100, 4000000);
console.log(result);