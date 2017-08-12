function splitIntoThree(arr){
    let output = [];
    arr.sort(function(a, b){ return a - b });
    let x = Math.floor(arr.length / 3);
    let z = arr.length % 3;
    let y = 3
    while(y--){
        output.push(arr.splice(0, x + Math.ceil(z-- / 2)));
    }
    for(let inner of output){
        console.log(inner.length);
    }
    return output;
}

function randint(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [];
for(let i = 0; i < randint(50000, 100000); i++){
    arr.push(randint(1, 1000));
}

console.time('split')
splitIntoThree(arr);
console.timeEnd('split')
