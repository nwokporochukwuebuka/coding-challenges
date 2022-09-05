function missingQueue(arr){
    let start = arr[0];
    let end = arr[arr.length-1];
    let commonDifference = (end - start)/arr.length;


    // fiirst find the common difference between the scores 
    for(let i = 0; i < arr.length; i++){
            if ((arr[i+1] - arr[i]) !== commonDifference){
                return console.log(`The missing number is ${arr[i] + commonDifference} found at position ${i+1}`);
                break;
            } 
    }
}

missingQueue([45,50,55,65,70,75,80,85,90,95])