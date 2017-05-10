function medianSorted(){
	let arr = arguments[0];
	for(let i = 1; i < arguments.length; i++){
		let arg = arguments[i];
		arr = arr.concat(arg);
	}
	arr.sort();
	return(arr[Math.floor(arr.length/2)]);
}

var result = medianSorted([1,2],[1,5,6,7], [4,8,9])
console.log(result);