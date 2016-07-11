function group(arr, num){
	var output = [];
	for(var i = 0; i < arr.length; i += num){
		output.push(arr.slice(i, i + num));
	}
	return output;
}

var result = group(['a','b','c','d'], 2);
console.log(result);
