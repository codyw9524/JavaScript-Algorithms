function isSquare(n){
    return n > 0 && Math.sqrt(n) % 1 === 0;
}

function rGetSquares(n, arr=[]){
    if(isSquare(n)){
        arr.push(n);
    }
    if(n == 1){
        return arr;
    }
    return rGetSquares(n - 1, arr);
}

function permuteArr(arr, n, sub=[], permArr=[]){
    var length = arr.length;
    if(sub.length > 0 && sub.reduce((a, b) => a + b) == n){
        var safePush = true;
        for(var k = 0; k < permArr.length; k++){
            var check1 = permArr[k].slice(0);
            var check2 = sub.slice(0);
            if(check1.sort().join(',') === check2.sort().join(',')){
                safePush = false;
            }
        }
        if(safePush === true){
            permArr.push(sub);
        }
    }
    for(var i = 0; i < length; i++){
        sub2 = sub.slice(0);
        sub2.push(arr[i]);
        var newArr = arr.slice(0);
        var first = arr.slice(0, i);
        newArr = first.concat(newArr.splice(i + 1));
        permuteArr(newArr, n, sub2, permArr);
    }
    return permArr;
}

function rSumOfSquares(n){
    return permuteArr(rGetSquares(n), n);
}

console.time('codys');
console.log(rSumOfSquares(70));
console.timeEnd('codys');
