function extract(x,y){
	x = x.toString();
	return parseInt(x[x.length - 1 - y])
}

// console.log(extract(1824,0))