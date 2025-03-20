my_list = []
n = int(input())

for _ in range(n):
    command = input().split()  
    action = command[0]  

    if action == "insert":
        my_list.insert(int(command[1]), int(command[2]))
    elif action == "print":
        print(my_list)
    elif action == "remove":
        my_list.remove(int(command[1]))
    elif action == "append":
        my_list.append(int(command[1]))
    elif action == "sort":
        my_list.sort()
    elif action == "pop":
        my_list.pop()
    elif action == "reverse":
        my_list.reverse()
