function rGCF(a, b){
	if(a == b){
		return a;
	}
	if(a > b){
		return rGCF(a - b, b);
	}
	return rGCF(a, b - a);
}

console.log(rGCF(8, 12))
