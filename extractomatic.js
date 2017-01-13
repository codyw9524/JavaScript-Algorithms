function extract(x,y){
	return parseInt((x = x.toString())[x.length - 1 - y])
}

console.log(extract(1824,0))