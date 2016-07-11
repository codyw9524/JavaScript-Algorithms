//Remove all falsy values from an array.

function truthy(input){
	if(input){
		return input;
	}
}
function removeFalsy(arr){
	arr = arr.filter(truthy);
	return arr;
}

var result = removeFalsy([7, "ate", "", false, 9]);
console.log(result);