class Humans:
    def __init__(self, name, id, b_year, phone_num, year):
        self.name = name
        self.id = id
        self.b_year = b_year
        self.phone_num = phone_num
        self.year = year
    def get_info(self):
        info_human = f"Name {self.name}, your ID number is {self.id}, birth {self.b_year} year , Phone number: {self.phone_num}"
        return info_human
    def get_age(self, tim):
        return tim == ((self.year) - (self.b_year))
    def get_number(self):
        return self.phone_num
human1 = Humans("Roy","AD0000","2000","+998990000000",2024)
# print(human1)

print(human1.get_info())

# print(human1.get_age(2024))

class Student(Humans):
    def __init__(self, name, id, b_year, phone_num, year):
        super(Student, self).__init__(name,id,b_year,phone_num,year)
        self.b_year = b_year
        self.year = 2024
stydent1 = Student("Abdulla","AD002",2003,123456789,2024)
print(stydent1.get_info())


    


