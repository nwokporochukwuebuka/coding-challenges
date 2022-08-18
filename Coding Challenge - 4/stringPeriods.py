def StringPeriods(strParam):
    if len(strParam) == 1:
        r = len(strParam) // 2
        return strParam[:r]

    choice = []

    for i in range(1, len(strParam) - 1):
        if strParam[0] == strParam[i]:
            l = strParam[:i]
            x = int((len(strParam)) / (i))
            n = l * x

            if n == strParam:
                choice.append(l)

    if len(choice) == 0:
        return "-1"

    subst = ""

    for k in range(len(choice)):
        if len(choice[k] > len(subst)):
            subst = choice[k]

    return subst


print(StringPeriods("abcdababcdababcab"))