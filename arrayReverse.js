//Given an array X of multiple values (e.g. [-3,5,1,3,2,10]), 
//write a program that reverses the values in the array.  
//Once your program is done X should be in the reserved order.  
//Do this without creating a temporary array.  Also, do NOT 
//use the reverse method but find a way to reverse the values in the array

function reverseArray(arr){
	var length = arr.length;
	for(var i = 0; i < length / 2; i++){
		temp = arr[i];
		arr[i] = arr[length - 1 - i];
		arr[length - 1- i] = temp;
	}
	return arr;
}

var odd = reverseArray([1,2,3,4,5]);
var even = reverseArray([1,2,3,4,5,6]);
console.log(odd);
console.log(even);