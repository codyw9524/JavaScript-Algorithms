function rSquares(num, subOdd, subEven){
	subOdd = subOdd || '';
	subEven = subEven || '';
	if(num < 1){
		return subOdd + subEven;
	}
	if(num % 2 == 0){
		subEven += num * num;
		if(num != 2){
			subEven += ', ';
		}
	} else {
		subOdd = num * num + ', ' + subOdd;
	}
	return rSquares(num - 1, subOdd, subEven);
}

console.log(rSquares(5));
