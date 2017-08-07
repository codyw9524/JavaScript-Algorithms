function rBinaryStringExpansion(str, arr=[], i=0){
	if(!str.includes("?")){
		arr.push(str);
	}
	// if(i == str.length){
	// 	arr.push(str);
	// }
	for(i; i < str.length; i++){
		let char = str[i];
		if(char == "?"){
			rBinaryStringExpansion(str.slice(0, i) + "1" + str.slice(i + 1), arr, i);
			rBinaryStringExpansion(str.slice(0, i) + "0" + str.slice(i + 1), arr, i);
		}
	}
	// arr.push(str)
	return arr;
}

console.log(rBinaryStringExpansion("1?0?"));