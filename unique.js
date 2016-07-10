//Given a string, return a string with only the 
//unique characters. (Ex: "Mississippi" to "Misp")

function unique(str){
	var newStr = str[0];
	var smallStr = str.toLowerCase();
	for(var i = 1; i < str.length; i++){
		if(findChar(newStr.toLowerCase(), smallStr[i]) != false){
			newStr += str[i];
		}
	}
	return newStr;
}

function findChar(str, char){
	for(var i = 0; i < str.length; i++){
		if(str[i] == char){
			return false;
		}
	}
	return char;
}

var result = unique("Williams");
console.log(result);