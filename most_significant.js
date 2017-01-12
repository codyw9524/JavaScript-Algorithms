function significant(n){
	//fast fail if n is not a number
	if(typeof n != 'number'){ return null; }
	//convert n to the absolute value of itself
	n = Math.abs(n);
	//the while loop for whole numbers
	while (n > 10){
		n = n / 10;
	}
	//the while loop for floats(decimal numbers)
	while(n < 1){
		n = n * 10;
	}
	//floor the number we want and return it
	return Math.floor(n);
}

console.log(significant(1824))
console.log(significant(-1824))
console.log(significant(0.00097))