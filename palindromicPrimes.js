// Print the first 'n' prime palindromes

function palPrime(n){
	var output = [];
	var outputStr = "";
	var i = 2;
	while(n){
		if(isPalindrome(i) && isPrime(i)){
			output.push(i);
			n--;
		}
		i++;
	}
	return output;
}

function isPalindrome(str){
	str = str.toString();
	var halfLength = str.length / 2;
	if(str.length > 1){
		for(let i = 0; i < halfLength; i++){
			if(str[i] != str[str.length - i -1]){
				return false;
			}
		}
	}
	return true;
}

function isPrime(n){
	for(let i = 2; i * i <= n; i++){
		if(n % i == 0){
			return false;
		}
	}
	return n > 1;
}

console.log(isPrime(6700417));