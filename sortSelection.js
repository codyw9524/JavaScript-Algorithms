function selectionSort(arr){
	let length = arr.length;
	let min;
	let temp;
	for(let i = 0; i < length; i++){
		min = i;
		for(let j = i; j < length; j++){
			if(arr[j] < arr[min]){
				min = j;
			}
		}
		if(min != i){
			temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
	}
	return arr;
}

console.log(selectionSort([5,4,3,2,1]));
console.log(selectionSort([1,2,3,4,5]));
console.log(selectionSort([30,50,21,7,33,90,43,1,15]));