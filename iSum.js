//Go ahead and implement a function iSum that behaves 
//just like rSum but instead of using recursion to 
//implement the solution it uses iteration.

function iSum(num){
	var sum = 0;
	for(var i = 1; i < num + 1; i++){
		sum += i;
	}
	return sum;
}

var result = iSum(5);
console.log(result);