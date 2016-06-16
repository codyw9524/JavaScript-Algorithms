function slice2(str, start, end){
	var newStr = "";
	for(var i = start; i < end; i++){
		if(newStr.length == 0){
			newStr = str[i];
		}
		else {
			newStr += str[i];
		}
	}
	console.log(newStr);
}

slice2('Hello World', 1, 5);