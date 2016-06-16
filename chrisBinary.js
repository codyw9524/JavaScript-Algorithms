function bs(arr,num,min,max){
    if(!min){
        var min = 0;
        var max = arr.length-1;
    }
    if(max-min <= 1){
        if(arr[min]==num){
            return true;
        }
        else if(arr[max]==num){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        var mid = Math.floor((min+max)/2);
        if(arr[mid] == num){
            return true;
        }
        else if(arr[mid]>num){
            max = mid;
            return bs(arr,num,min,max);
        }
        else{
            min = mid;
            return bs(arr,num,min,max);
        }
    }
}
var hrstart = process.hrtime();
var result = bs([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30], 20);
var hrend = process.hrtime(hrstart);
console.log("Execution time (hr): ", hrend[0],"s", hrend[1]/1000000,"ms");
console.log(result);