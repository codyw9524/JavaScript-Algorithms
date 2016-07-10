function reverse(str){
	var temp;
	var arr = str.split('');
	var length = arr.length;
	for(var i = 0; i < length / 2; i++){
		temp = arr[i];
		arr[i] = arr[length - 1 - i];
		arr[length - 1 - i] = temp;
	}
	str = arr.join('')
	return str;
}

var result = reverse('hello')
// console.log(result)

var test = 'hello'
if(test[0] != test[test.length - 1]){
	console.log('found')
}