//Given a string find the largest palindrome in the string.

function largestPalindrome(string){
	var check;
	var arr = string.split(' ');
	var palindrome = "";
	for(var i = 0; i < arr.length; i++){
		check = checkPalindrome(arr[i]);
		if(check !== false){
			if(check > palindrome.length){
				palindrome = arr[i];
			}
		}
	}
	if(palindrome.length == 0){
		return 'No palindromes found.';
	}
	return palindrome;
}

function checkPalindrome(str){
	str = str.toLowerCase();
	if(str.length > 2){
		for(var i = 0; i < str.length / 2; i++){
			if(str[i] != str[str.length - (i + 1)]){
				return false;
			}
		}
		return str.length;
	}
	else{
		return false;
	}
}
var result = largestPalindrome('As evacuees from the Fort McMurray wildfire arrive at shelters, hotels and homes of friends here, many say they now have a taste of what a wave of refugees experienced in Syria before they made it to Canada a few months ago 1221 racecar');
console.log(result);