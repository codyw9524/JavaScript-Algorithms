function biExpand(str, arr){
	if(!arr){
		arr = [];
	}

	var first = str.split("?", 1)[0];
	var second = str.slice(first.length + 1);
	console.log(first, second)

	if(first.length == str.length){
		arr.push(first);
	} else {
		biExpand(first + "0" + second, arr);
		biExpand(first + "1" + second, arr);
	}
	return arr;
}

var result = biExpand('1?0?111?0?');
console.log(result);