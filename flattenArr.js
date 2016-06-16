function flatten(arr, newArr){
	if(newArr === undefined){
		newArr = [];
	}
	for(var i = 0; i < arr.length; i++){
		if(Array.isArray(arr[i])){
			flatten(arr[i], newArr);
		}
		else{
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

var result = flatten([1,2,[3,4],[],[5,[6]],7]);
console.log(result);