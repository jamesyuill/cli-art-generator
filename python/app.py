import random
characters = input("give me four random characters? eg: '9/~e': ")
num = 0
while num < 20:
    line = []
    for i in range(40):
        random_index = random.randint(0,3)
        match random_index:
            case 0:
                line.extend(['\x1b[33m', '\x1b[47m', characters[0]])   
            case 1:
                line.extend(['\x1b[34m', '\x1b[47m', characters[1]])   
            case 2:
                line.extend(['\x1b[36m', '\x1b[47m', characters[2]])   
            case 3:
                line.extend(['\x1b[31m', '\x1b[47m', characters[3]])            
    print(''.join(line),'\x1b[0m')
    num += 1
