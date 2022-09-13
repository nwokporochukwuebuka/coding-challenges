function StringPeriods(str){
    len = str.length;

    a = "";
    ans = "";
    for(let i = 0; i < len - 1; i++){
        a += str[i];
        b = Math.floor(len / a.length);

        if (a.repeat(b) === str){
            if (a.length >= ans.length){
                ans = a;
            }
        }
    }

    if (ans.length < 2){
        return -1;
    }

    return ans;
}