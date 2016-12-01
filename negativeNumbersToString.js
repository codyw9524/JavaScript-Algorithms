//Write a program that takes an array of numbers and replaces 
//any number that's negative to a string called 'Dojo'. For 
//example if array = [-1, -3, 2] after your program is done 
//array should be ['Dojo', 'Dojo', 2].


function negative(array){
	var length = array.length;
	for(var i = 0; i < length; i++){
		if(array[i] < 0){
			array[i] = 'Dojo';
		}
	}
	return array;
}

var result = negative([-1,0,-1,0,-1])
console.log(result);