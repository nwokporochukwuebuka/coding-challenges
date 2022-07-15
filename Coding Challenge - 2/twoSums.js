function TwoSum(arr){
    // code goes here

    var sums = [];
    var beforeSum = "";

    for (var i = 1; i < arr.length; i++) {
        
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == arr[0]){
                sums.push([arr[i], arr[j]]);
            }
        }
    }

    return sums.join(' ');
}