function commonSuffix(arr){
	var first;
	var second;
	var pending;
	var suffix;
	for(var j = 1; j < arr.length; j++){
		pending = '';
		for(var i = 1; i < arr[j].length + 1; i++){
			first = arr[0][arr[0].length - i];
			second = arr[j][arr[j].length - i];
			if(first == second){
				pending += first;
			} else {
				break;
			}
		}
		if(!suffix || pending.length < suffix.length){
			suffix = pending;
		}
	}
	return reverse(suffix);
}

function reverse(str){
	if(str === undefined){
		return '';
	}
	var length = str.length;
	var new_str = '';
	for(var i = length - 1; i > -1; i--){
		new_str += str[i];
	}
	return new_str;
}

var result = commonSuffix(["carnation", "persuasion", "satisfaction", "megaton"]);
console.log(result);
var result2 = commonSuffix(["basketball", "potato", "glasses"]);
console.log(result2);
var result3 = commonSuffix([]);
console.log(result3);
var result4 = commonSuffix(["same", "same"]);
console.log(result4);
var result5 = commonSuffix(["cody"]);
console.log(result5)