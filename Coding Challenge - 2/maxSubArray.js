function MaxSubArray(arr) {
    let maxSum = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++){
        currentSum = Math.max(arr[i], currentSum + arr[i]);

        maxSum =  Math.max(currentSum, maxSum);
    }

    return maxSum;
}