function minimalRange(...arr) {
  var [i,j,k] = [0,0,0];
  var [a,b,c] = arr.sort((x,y) => x.length > y.length);
  var bounds = (x,y,z) => {
    var m = Math.min(a[x],b[y],c[z]);
    var M = Math.max(a[x],b[y],c[z]);
    return {min: m, max: M, range: M-m};
  };
  var minRange = bounds(0,0,0); 

  while (i < a.length) {
    if (a[i] > b[j] && a[i] >= b[j+1]) { j++; continue; }
    if (a[i] > c[k] && a[i] >= c[k+1]) { k++; continue; } 

    if (bounds(i, j, k).range < minRange.range) minRange = bounds(i,j, k);
    if (bounds(i, j, k + 1).range < minRange.range) minRange = bounds(i, j, k + 1);
    if (bounds(i, j + 1, k).range < minRange.range) minRange = bounds(i, j + 1, k);
    if (bounds(i, j + 1, k + 1).range < minRange.range) minRange = bounds(i, j + 1, k + 1);
    i++;
  }
  return minRange;
}

console.log(minimalRange([1,2,4,15], [3,10,12], [5,10,13,17,23]));