// Write a function rFactorial that behaves like the following:

// rFactorial(1) = 1                  => 1
// rFactorial(2) = 2 * 1              => 2
// rFactorial(3) = 3 * 2 * 1          => 6
// rFactorial(4) = 4 * 3 * 2 * 1      => 24
// rFactorial(5) = 5 * 4 * 3 * 2 * 1  => 120
// Make sure your solution is recursive.

function rFactorial(num){
	if(num === 1 || num === 0){
		return 1;
	} else {
		return rFactorial(num - 1) * num;
	}
}

// var result = rFactorial(5);
// console.log(result);


function rSigma(n){
	if(n === 1){
		return 1;
	}
	return rSigma(n-1) + n;
}

console.log(rSigma(5))
console.log(5+4+3+2+1)