//Given a positive integer, calculate the sum of the digits, do this until the sum is one digit in size.



function sumToOne(int){
	var sum = 0;
 	var str = int.toString();
 	for(var i = 0; i < str.length; i++){
 		var x = parseInt(str[i]);
 		// this if statement will keep the sum from exceeding 'one digit' as it seems like the directions are asking.  if its supposd to reduce the passed integer to one digit then the if statement can simply be removed.  the directions are confusing.
 		if(sum + (sum + x) > 10){
 			break;
 		}
 		sum += x;
 	}
 	return sum;
}

var result = sumToOne(1239);
console.log(result);