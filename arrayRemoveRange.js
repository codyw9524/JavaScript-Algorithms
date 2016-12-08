function arrayRemoveRange(arr, start, end=undefined){
	if(typeof(start) != 'number'){throw new Error("Input Type Error")}
	if(end === undefined) { end = arr.length - 1; }
	if(typeof(end) != 'number'){throw new Error("Input Type Error")}
	if(start > end || end > arr.length - 1) {throw new Error("Range out of bounds.")}
	if(start % 1 != 0 || end % 1 != 0) {throw new Error("Input Type Error")}

	for(var i = end + 1; i < arr.length; i++){
		arr[start] = arr[i];
		start++;
	}

	arr.length = start;
	return arr;
}

var result = arrayRemoveRange([0,1,2,3,4,5,6,7,8,9],3);
console.log(result);
