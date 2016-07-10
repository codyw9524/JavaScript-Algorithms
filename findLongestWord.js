function longestWord(str){
	var arr = str.split(' ');
	str = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i].length < str.length){
			str = arr[i];
		}
	}
	return str.length;
}

console.log(longestWord('The quick brown fox jumped over the lazy dog'));