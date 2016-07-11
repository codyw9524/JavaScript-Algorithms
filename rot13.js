function rot13(str) {
  var output = '';
  for(var i = 0; i < str.length; i++){
    if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90){
      output += str[i];
    } else {
    	var char = str.charCodeAt(i) + 13;
    	if(char > 90){
    		char = 64 + (char - 90);
    	}
    	output += String.fromCharCode(char);
    }
  }
  return output;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
