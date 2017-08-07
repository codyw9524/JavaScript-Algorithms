function rStrSub(str, sub='', arr=[]){
	if(str.length === 0){
		arr.push(sub);
	} else {
		rStrSub(str.slice(1), sub, arr);
		sub += str[0];
		rStrSub(str.slice(1), sub, arr);
	}
	return arr;
}

var result = rStrSub('abc');
console.log(result);

function useStringSub(arr){
	arr = arr.join('');
	arr = rStrSub(arr);
	for(i in arr){
		arr[i] = arr[i].split('');
	}
	return arr;
}

// console.log(useStringSub([1,2,3]));

function rArrSub(arr, sub, output){
	output = output || [];
	sub = sub || [];
	sub2 = sub || [];
	if(arr.length === 0){
		output.push(sub.slice(0));
	} else {
		newArr = arr.slice(1)
		newArr2 = arr.slice(1)
		rArrSub(newArr, sub.slice(0), output);
		sub2.push(arr[0]);
		rArrSub(newArr2, sub2.slice(0), output);
	}
	return output;
}
// var arr = [1,7,2,4];
// result3 = hackerRank(arr, 3);
// console.log(result3);

function hackerRank(arr, x){
	arr = rArrSub(arr);
	console.log('arr: ', arr);
	var length = 0;
	for(let i = 0; i < arr.length; i++){
		check = true;
		for(let j = 0; j < arr[i].length; j++){
			for(let k = j + 1; k < arr[i].length; k++){
				console.log('sum: ', arr[i][j] + arr[i][k])
				if((arr[i][j] + arr[i][k]) % x == 0){
					check = false;
				}
				console.log('check: ', check);
			}
		}
		console.log('-- next array -- ')
		if(check){
			if(arr[i].length > length){
				length = arr[i].length;
			}
		}
	}
	return length;
}