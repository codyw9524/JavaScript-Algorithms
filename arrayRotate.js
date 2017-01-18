function arrayRotate(arr, n){
	var temp;
	if (!arr.length || !n) { return; }
  n += Math.ceil(Math.abs(n) / arr.length) * arr.length;
  console.log('N: ', n)
  while(n--){
  	temp = arr[arr.length - 1];
  	for(var i = arr.length - 2;i > -1; i--){
      arr[i + 1] = arr[i];
    }
    arr[0] = temp;
  }
  return arr;
}

console.log(arrayRotate([1,2,3,4,5], -9))
