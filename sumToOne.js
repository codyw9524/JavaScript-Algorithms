//Given a positive integer, calculate the sum of the digits, do this until the sum is one digit in size.



function sumToOne(int){
	var x;
	var sum = 0;
 	var str = int.toString();
 	for(var i = 0; i < str.length; i++){
 		x = parseInt(str[i]);
 		if(sum + (sum + x) > 10){
 			break;
 		}
 		sum += x;
 	}
 	return sum;
}

var result = sumToOne(1239);
console.log(result);