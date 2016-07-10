function oddArrayTo(num){
	var output = [];
	for(var i = 1; i < num + 1; i += 2){
		output.push(i);
	}
	return output;
}

console.log(oddArrayTo(255));