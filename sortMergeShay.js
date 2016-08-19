function mergeSort(arr){
  if (arr.length === 1) return arr;   // break case
  var f = mergeSort(arr.splice(0, Math.floor(arr.length/2)));
  var b = mergeSort(arr);
  var i=0, j=0, result=[];
  while ( i<f.length && j<b.length ) {
    result.push( (f[i] < b[j]) ? f[i++] : b[j++] )
  }
  return result.concat((f.length == i) ? b.splice(j) : f.splice(i));
}

console.log(mergeSort([2,4,6,9,7,5,3,8,1]))