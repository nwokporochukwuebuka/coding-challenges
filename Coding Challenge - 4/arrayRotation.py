def ArrayRotation(array):
    r = array[0]

    return "".join([str(a) for a in array[r:len(array)]] + [str(a) for a in array[:r]])