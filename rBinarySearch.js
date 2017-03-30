function biSearch(arr, num, min=0, max=arr.length - 1){
	var i = Math.floor((max + min)/2);
	if(arr[i] == num){
		return true;
	}
	if(max - min == 1){
		return false;
	}
	if(arr[i] < num){
		min = i;
	}
	else{
		max = i;
	}
	return biSearch(arr, num, min, max);
}

var result = biSearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 20);
console.log(result);
 // var str = '0?1?'
 // console.log(str.split('?'));