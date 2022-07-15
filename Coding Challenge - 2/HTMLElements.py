def HTMLElements(strParam):
    # code goes here 
    import re 
    
    open_tags = ['<b>', '<i>', '<em>', '<div>', '<p>']
    close_tags = ['</b>', '</i>', '</em>', '</div>', '</p>']
    
    stack = []
    
    tags = re.split('(<[^>]*>)', strParam)
    for tag in tags:
        if tag in open_tags:
            stack.append(tag)
        elif tag in close_tags:
            check = close_tags.index(tag)
            
            if (len(stack) > 0) and (open_tags[check] == stack[len(stack) - 1]):
                stack.pop()
                
    if stack:
        return stack[-1].replace('<', '').replace('>', '')
    
    return True




