// Write a function iFibonacci that behaves like the following:

// iFibonacci(0) = 0           => 0
// iFibonacci(1) = 1           => 1
// iFibonacci(2) = 1           => 1
// iFibonacci(3) = 1 + 1       => 2
// iFibonacci(4) = 1 + 2       => 3
// iFibonacci(5) = 2 + 3       => 5
// iFibonacci(6) = 3 + 5       => 8

// Make sure your solution is iterative.

function iFibonacci(num){
	if(num == 0){
		return 0;
	}
	else if(num < 3){
		return 1;
	}
	else {
		var first = 1;
		var second = 1;
		var temp;
		for(var i = 3; i < num + 1; i++){
			temp = first;
			first = second;
			second = second + temp;
		}
		return second;
	}
}

console.log(iFibonacci(6));