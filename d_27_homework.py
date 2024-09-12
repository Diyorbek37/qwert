# class Auto:
#     """
#     Auto salon
#     """
#     def __init__(self, brend, model, year, color, price):
#         self.brend = brend
#         self.model = model
#         self.year = year
#         self.color = color
#         self.price = price
#         self.lst = []
#         self.no = 1
#     def info(self):
#         return f"Brend: {self.brend}, Model: {self.model}, Yil: {self.year}, Rang: {self.color}, Narxi: ${self.price}, Sotildi {self.no}"

#     def update_auto(self, car):
#         self.no += 1
#         self.lst.append(car)
#     # def update_no(self):
# car1 = Auto('BMW', 'X5', 2022, "black", 70000)
# car2 = Auto('Mercedes', 'S-Class', 2021, "hamilyon", 1200)
# # car1.update_no()
# print(car1.info())
# sum_kassa = (car1.price * car1.no) + (car2.price * car2.no)
# print(car2.info())
# print(f"Kassada: ${sum_kassa} bor")
# ___________________________________________________________________________________________________________________________________________________

class Auto_salon:
    def __init__(self, name, year, color, engaine, price):
        self.name = name
        self.year = year
        self.color = color
        self.engaine = engaine
        self.price = price
        self.lst = []
        self.no = 1
    def info(self):
        return f"{self.no}: {self.name}, Year: {self.year}, Color: {self.color}, Egine: {self.engaine}, Price: ${self.price}"
    def append_car_lst(self, lst):
        self.lst.append(car)
        self.no += 1
        """car = Auto_salon(input("typing: "))"""
        return lst
    def total_price(self):
        total_p = sum(car.price for car in self.lst)
        return total_p

car_salon = Auto_salon("", 0, "", "", 0)
while True:
    name = input("\"avtomabil nomini\" kiriting (yoki'exit' tugmasini bosib tugating: )")
    if name.lower() == "exit":
        break 
    year = int(input("Year: "))
    color = input("Color: ")
    engaine = input("Engine: ")
    price = int(input("Price: "))
    car = Auto_salon(name, year, color, engaine, price)
    car_salon.append_car_lst(car)
for car in car_salon.lst:
  print(car.info())
print(f"Kassada: ${car.total_price()} bor")





