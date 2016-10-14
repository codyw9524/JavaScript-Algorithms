function bookIndex(arr){
	var start = null;
	var end = null;
	var output = '';
	for(let i = 0; i < arr.length; i++){
		if(arr[i + 1] == arr[i] + 1){
			if(start == null){
				start = arr[i];
			}
			end = arr[i + 1];
			//continue since we are not adding to the output string
			//so that we don't concat a comma and a space to output
			continue;
		}
		else if(start == null){
			output += arr[i];
		} else {
			if(end - start == 1){
				output += start + ', ' + end;
			} else {
				output += start + " - " + end;
			}
			start = null;
			end = null;
		}
		//add a comma and a space after each change to output
		//except the last change
		if(i != arr.length - 1){
			output += ', ';
		}
	}
	return output;
}
console.log(bookIndex([1,3,4,5,7,8,9,10]));