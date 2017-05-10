function isAlpha(str){
	str = str.toLowerCase();
	for(let i = 1; i < str.length; i++){
		if(str.charCodeAt(i - 1) > str.charCodeAt(i)){
			return false;
		}
		return true;
	}
}

console.log(isAlpha('baca'));
