function rSquares(num, subOdd='', subEven='', arr=[]){
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

console.log(rSquares(8));


//With arrays

function rSquaresArray(num, odds=[], evens=[]){
	if(num < 1){
		return odds.concat(evens).join(', ');
	}
	if(num % 2 == 0){
		evens.push(num * num);
	} else {
		odds.unshift(num * num);
	}
	return rSquaresArray(num - 1, odds, evens);
}

console.log(rSquaresArray(8));