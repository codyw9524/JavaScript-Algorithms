//Remove num elements from the front of an array


function slasher(arr, num){
	while(num--){
		arr.shift();
	}
	return arr;
}