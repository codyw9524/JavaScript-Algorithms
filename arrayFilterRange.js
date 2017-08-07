function filterRange(arr, min, max){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= min && arr[i] <= max){
            arr[i - count] = arr[i];
        } else {
            count++;
        }
    }
    arr.length -= count;
    return arr;
}

console.log(filterRange([1,2,3,4,5], 2, 4));
