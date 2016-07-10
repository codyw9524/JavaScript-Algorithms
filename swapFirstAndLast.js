//Write a program that takes an array of numbers and returns 
//an array where the first and last numbers in the array have 
//been switched.For example say x = [2, 3, 5, 7, 6]. By the 
//end of the program x, should be [6, 3, 5, 7, 2]. Do this 
//without creating an empty array.

function swap(arr){
	var temp;
	var length = arr.length;
	temp = arr[0];
	arr[0] = arr[length - 1];
	arr[length - 1] = temp;
	return arr;
}

var result = swap([1,2,3,4,5])
console.log(result);