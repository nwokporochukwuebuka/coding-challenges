function LargestFour(arr){
    let maxNumbers = [];

    if (arr.length >= 4){
        for(let i = 0; i <=3; i++){
            // first: sort and pop out the largest number
            let sortedArray = arr.sort();
            maxNumbers.push(sortedArray.pop());
        }

        let sum = o;
        for(let j = 0; j < maxNumbers.length; j++){
            sum += maxNumbers[j];
        }

        return sum;
    } else {
        // add up all the number in the array
        let sum = 0;
        for(let p = 0; p < arr.length; p++){
            sum += arr[p]
        }

        return sum;
    }
}