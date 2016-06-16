function biSearch(arr, num, min, max){
	if(!max && !min){
		max = arr.length - 1;
		min = 0;
	}
	i = Math.floor((max + min)/2);
	if(arr[i] == num){
		return true;
	}
	if(max - min == 1){
		return false;
	}
	if(arr[i] < num){
		min = i
	}
	else{
		max = i;
	}
	return biSearch(arr, num, min,max);
}
var hrstart = process.hrtime();
var result = biSearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 20);
var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): ", hrend[0],"s", hrend[1]/1000000,"ms");

console.log(result);
