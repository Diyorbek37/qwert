my = ['ona', 'ota', [15, 56, 'matn', [25, 'opa', 'uka'], ['aka']], 2, 5, 8, 'akam']

def get_element(lst):
    for i in lst:  
        if type(i) == str:
            print(i.upper(),end=" ") 
        elif type(i) == int or type(i) == float:
            print(i, end=" ")
        elif isinstance(i, list):
            get_element(i)
get_element(my)


# ___________________________________________________________________________________________________________________________________________________

