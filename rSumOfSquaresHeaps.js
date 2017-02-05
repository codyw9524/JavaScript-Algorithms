function isSquare(n){
    return n > 0 && Math.sqrt(n) % 1 === 0;
}

function swap(array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
};

function rGetSquares(n, arr=[]){
    if(isSquare(n)){
        arr.push(n);
    }
    if(n == 1){
        return arr;
    }
    return rGetSquares(n - 1, arr);
}

function heapsPermute(array, x, permArr=[], n) {
    n = n || array.length;
    if (n === 1) {
        arr = array.slice(0);
        var sum = 0;
        for(var k = 0; k < arr.length; k ++){
            sum += arr[k];
            if(sum === x){
                var safePush = true;
                var squareSum = arr.slice(0, k + 1);
                for(var l = 0; l < permArr.length; l++){
                    var check1 = permArr[l].slice(0);
                    var check2 = squareSum.slice(0);
                    if(check1.sort().join(',') === check2.sort().join(',')){
                        safePush = false;
                    }
                }
                if(safePush === true){
                    permArr.push(squareSum);
                }
            }
        }
    } else {
        for (var i = 1; i <= n; i += 1) {
            heapsPermute(array, x, permArr, n - 1);
            if (n % 2) {
                var j = 1;
            } else {
                var j = i;
            }
            swap(array, j - 1, n - 1);
        }
        return permArr;
    }
};

function rSumOfSquaresHeaps(n){
    return heapsPermute(rGetSquares(n), n);
}


console.time('heaps');
console.log(rSumOfSquaresHeaps(70));
console.timeEnd('heaps');
