//Given a string find the longest word in the string.  For example, if the string is "Coding Dojo rocks" then it should print "the longest word is Coding".

function longestWord(str){
	var word = "";
	str = str.split(' ');
	for(var i = 0; i < str.length; i++){
		if(str[i].length > word.length){
			word = str[i];
		}
	}
	var newStr = "The longest word is " + word;
	return newStr;
}

var result = longestWord('Which base to use for representing a numeric value. Must be an integer between 2 and 36');
console.log(result);