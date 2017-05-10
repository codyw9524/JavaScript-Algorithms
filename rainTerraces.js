function rainTerraces(arr){
    let matrix = [];
    //find the highest terrace
    //this will equal the number of rows in our matrix
    let first = Math.max(...arr)
    //create the matrix rows
    while(first--){
        matrix.push([]);
    }
    //fill matrix with 1's and 0's
    for(let i = 0; i < arr.length; i++){
        let count = arr[i];
        for(let j = matrix.length - 1; j > -1; j--){
            if(count - 1 > -1){
                matrix[j].push(1);
            } else {
                matrix[j].push(0);
            }
            count--;
        }
    }
    //display matrix
    for(let i = 0; i < matrix.length; i++){
        console.log(matrix[i]);
    }
    //count the zeros
    let water_collected = 0;
    for(let i = 0; i < matrix.length; i++){
        let count = 0;
        for(let j = 0; j < matrix[i].length; j++){
            let unit = matrix[i][j];
            if(unit === 0){
                count++;
            }
            else if(unit === 1){
                water_collected += count;
                count = 0;
            }
        }
    }
    return water_collected;
}

function rand(min, max){
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let arr = [];
for(let i = 0; i < rand(5,30); i++){
    arr.push(rand(0,20));
}

console.log(rainTerraces(arr))
