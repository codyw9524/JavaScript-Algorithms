//Create a function called split2 that does exactly what the split function does in Javascript. Do this without using the split function but only using if/else, for loops, basic array manipulation with pop, push, length/count

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

var result = split2('how are you doing today?', ' ');
console.log(result);