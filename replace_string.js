function replace_string(old, replacer, str){
	var arr = split2(str, ' ');
	var newStr = "";
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == old){
			arr[i] = replacer;
		}
		newStr += arr[i] + ' ';
	}
	return newStr;
}

function split2(str, delim){
	var arr = [];
	var count = 0;
	for(var i = 0; i < str.length; i++){
		if(str[i] != delim){
			if(arr[count] == undefined){
				arr[count] = str[i];
			}
			else{
				arr[count] += str[i];
			}
		}
		else{
			count++;
			continue;
		}
	}
	return arr;
}

var result = replace_string("Microsoft", "CodingDojo", "Visit Microsoft");
console.log(result);