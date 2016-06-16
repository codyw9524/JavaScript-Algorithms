function rStrSub(str, sub, arr){
	if(sub === undefined){
		sub = "";
	}
	if(arr === undefined){
		arr = [];
	}
	if(str.length == 0){
		arr.push(sub);
	}
	else{
		rStrSub(str.slice(1, str.length), sub, arr);
		sub += str[0];
		rStrSub(str.slice(1, str.length), sub, arr);
	}
	 return arr;
}

var result = rStrSub('abc');
console.log(result);