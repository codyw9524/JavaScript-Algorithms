//write a function to see if matrix1 contains matrix2

function matrixSearch(matrix1, matrix2){
    //display matrix 1
    console.log('--- Matrix 1 --- ')
    for(let row of matrix1){
        console.log(row);
    }
    //display matrix 2
    console.log('--- Matrix 2 ---')
    for(let row of matrix2){
        console.log(row);
    }
    //parse matrix1 looking for the first element in matrix 2
    for(let i = 0; i < matrix1.length; i++){
        let row = matrix1[i];
        for(let j = 0; j < row.length; j++){
            let cell = row[j];
            if(cell == matrix2[0][0]){
                //once the first value of matrix 2 is found invoke check
                let state = check(j, i, matrix1, matrix2)
                //if check returns false, continue searching through matrix1
                if(!state){
                    console.log('state was false.  checking the rest of Matrix 1...')
                    continue;
                //if check returns true, immediately return true
                } else {
                    return state;
                }
            }
        }
    }
    //if the for loop ends then we can assume the matrix was not found
    return false;
}

function check(column,row, arr1, arr2){
    //the outer loop tells us how many rows to search through
    for(let i = 0; i < arr2.length; i++){
        //if the value of row is greater than the matrix1's length
        //then we can assume matrix2 is not to be found
        if(row > arr1.length - 1){
            return false;
        }
        //cell represents the index of the value we're checking in matrix2
        let cell = 0;
        for(let j = column; j < column + arr2[i].length; j++){
            console.log('comparing ' + arr1[row][j] + ' & ' + arr2[i][cell]);
            //if the value of arr1 matches arr2 iterate cell
            //and let the for loop iterate j
            if(arr1[row][j] == arr2[i][cell]){
                cell++;
            //if they don't match then immediately return false
            } else {
                return false;
            }
        }
        //after we've checked an entire row of both matrixes then we need to iterate row
        row++;
    }
    return true;
}
console.time('cody')
console.log(
    matrixSearch(
        [
            [0,0,0,0,0],
            [0,0,1,1,1],
            [0,0,2,1,1]
        ], 
        [
            [1,1],
            [1,1]
        ]
    )
);
console.timeEnd('cody')