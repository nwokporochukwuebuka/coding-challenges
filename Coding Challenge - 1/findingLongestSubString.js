var lengthofLongestSubstring = function (s) {
    let max = 0;
    let begin = 0;
    let set = new Set()

    for(let i = 0; i < s.length; i++){
        while(set.has(s[i])){
            set.delete(s[begin]);
            begin = begin + 1;
        }

        set.add(s[i])
        max = Math.max(max, i - begin +1)
    }

    return max;
}

console.log(lengthofLongestSubstring('gdfgdghsjnjksn'));