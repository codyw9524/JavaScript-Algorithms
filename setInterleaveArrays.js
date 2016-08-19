// Given 2 unsorted arrays, create a new array containing the elements of both, resulting in an unsorted merge of all values

function interleaveArrays(arr1, arr2){
	var output = [];
	var length = arr1.length;
	if(length < arr2.length){
		length = arr2.length;
	}
	for(var i = 0; i < length; i++){
		if(arr1[i]){
			output.push(arr1[i]);
		}
		if(arr2[i]){
			output.push(arr2[i]);
		}
	}
	return output;
}

console.log(interleaveArrays([1,3,5], [2,4,6,7,8,9]));

// Efficiently merge two already-sorted arrays into a new array containing the multiset of all values.

function mergeSortedArrays(arr1, arr2){
	var output = [];
	var element;
	if(arr1[arr1.length - 1] > arr2[0]){
		for(var i = arr2.length - 1; i > -1; i--){
			element = arr1[arr1.length - 1];
			for(var j = arr1.length - 1; j > -1 && arr2[i] < arr1[j]; j--){
				arr1[j] = arr1[j-1];
			}
			if(j != arr1.length - 1){
				arr1[j + 1] = arr2[i];
				arr2[i] = element;
			}
		}
	}
	return arr1.concat(arr2);
	// return [...arr1, ...arr2];
}

console.log(mergeSortedArrays([1,2,2,2,7], [2,2,6,6,7]));
console.log(mergeSortedArrays([1,2,3,4,5], [6,7,8,9,10]));

// Given three separately-sorted arrays, determine the value from each array that creates the smallest range, and return the min and max of that range.  All three of the arrays must have a value within the range.

function minimalThreeArrayRange(arr1, arr2, arr3){

}