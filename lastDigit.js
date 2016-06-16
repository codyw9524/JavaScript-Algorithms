function lastDigit(str){
	str = str.split(' ');
	var num1 = parseInt(str[0]);
	var num2 = parseInt(str[1]);
	var power =Math.pow(num1, num2);
	var newStr = power.toString();
	return newStr[newStr.length - 1];
}

var result = lastDigit('10 2');
console.log(result);