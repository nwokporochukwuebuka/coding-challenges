function simpleArraySum(arr){
    let sumOfArray = 0;

    for(let i = 0; i < arr.length; i++){
        sumOfArray += arr[i];
    }

    return sumOfArray;
}

console.log(simpleArraySum([5, 766, 82, 4]));