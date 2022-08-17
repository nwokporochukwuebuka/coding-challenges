def minimumAbsoluteDifference(arr):
    # write your code here 
    diffs = []
    
    for i in range(len(arr) - 1):
        diffs.append(abs(arr[i] - arr[i+1]))

    return min(diffs)