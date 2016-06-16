//Create a function that takes two parameters. The first a word to censor and the second a string of text that may contain the word to be censored. Return the string with the censored word replaced with the correct length of *'s.

//Hard mode: have it replaced with random symbols instead of just *'s.

function censor(word, string){
	var res = string.split(' ');
	var i = res.indexOf('test');
	var word = res[i];
	var newString = "";
	for(var i = 0; i < word.length; i++){
		newString += randomString();
	}
	res[i] = newString;
	var censored_string = res.join(' ');
	return censored_string;
}

function randomString(){
	var string = "!@#$%&*";
	var i = Math.floor(Math.random() * string.length);
	return string[i];
}

var result = censor('test', 'this is a test');
console.log(result);