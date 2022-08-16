/*
Question: Largest Four

Have the function LargestFour(arr) take the array of integers stored in arr, 
and find the four largest elements and return their sum. For example: if arr is [4, 5, -2, 3, 1, 2, 6]
then the four largest elements in the array are 6, 6, 4 and 5 and the total sum of numbers 21, so your program should
return 21. If there are less than four numbers in the array your program should return the sum of all the numbers in
the array
*/

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