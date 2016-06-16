function permStr(str, sub, arr){
	var length = str.length
	if(!arr){
		arr = [];
	}
	if(!sub){
		sub = "";
	}
	if(length == 0){
		arr.push(sub);
	}
	for(var i = 0; i < length; i++){
		sub2 = sub + str[i];
		newStr = str.slice(0, i) + str.slice(i + 1);
		permStr(newStr, sub2, arr);
	}
	return arr;
}

var result = permStr('have');
console.log(result);