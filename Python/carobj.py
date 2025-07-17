class Car:
    def __init__(self,model,year,color,for_sale):
        self.model = model
        self.year = year
        self.for_sale  = for_sale
        self.color = color

    def rev(self):
        print(f"Vrrrrrrrrruuuuuuu {self.model}")


    def stop(self):
        print(f"Stopped  {self.model}")

class student:
    
    num_student = 0
    
    def __init__(self,name,age,grade):
        self.name = name
        self.age = age
        self.grade = grade
        student.num_student += 1