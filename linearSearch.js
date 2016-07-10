function linearSearch(value, arr){
	var length = arr.length;
	for(var i = 0; i < length; i++){
		if(arr[i] == value){
			return i;
		}
	}
	return -1;
}

var inArray = linearSearch(3, [1,2,3,4,5]);
var notInArray = linearSearch(10, [1,2,3,4,5]);
console.log(inArray);
console.log(notInArray);