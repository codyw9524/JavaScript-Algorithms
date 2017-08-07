//Create a function that takes two parameters. The first a word to censor and the second a string of text that may contain the word to be censored. Return the string with the censored word replaced with the correct length of *'s.

//Hard mode: have it replaced with random symbols instead of just *'s.

function censor(word, string){
	var res = string.split(' ');
	var i = res.indexOf('test');
	if(i === -1){
		return string;
	}
	var word = res[i];
	var newString = "";
	for(var j = 0; j < word.length; j++){
		newString += randomString();
	}
	res[i] = newString;
	var censored_string = res.join(' ');
	return censor(word, censored_string);
}

function randomString(){
	var string = "!@#$%&*";
	var i = Math.floor(Math.random() * string.length);
	return string[i];
}

var result = censor('test', 'this is a test test test test');
console.log(result);