//assume input array is sorted
//remove any duplicate values from input array
//return input array

function removeDupes(arr){
    var unique = arr[0];
    var count = 0;
    for(var i = 1; i < arr.length; i++){
        if(arr[i] == unique){
            count++;
        } else {
            unique = arr[i];
            arr[i - count] = arr[i];
        }
    }
    arr.length -= count;
    return arr;
}

console.log(removeDupes([1,2,2,2,3,3,3,4,4,4,5,5,5]))