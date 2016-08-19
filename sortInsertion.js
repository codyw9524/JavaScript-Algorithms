function insertionSort(arr) {
  var length = arr.length;
  var element;
  var index;
  for (var i = 1; i < length; i++) {
    element = arr[i];
    index = i;
    for (var j = i - 1; j > -1 && element < arr[j]; j--) {
      arr[j + 1] = arr[j];
      index = j;
    }
    arr[index] = element;
  }
  return arr;
}

console.log(insertionSort([79, 74, 25, 14, 85, 35, 81, 69, 7, 83, 2]));
console.log(insertionSort([1,2,3,4,5,6,7,8,9]));
console.log(insertionSort([9,8,7,6,5,4,3,2,1]));