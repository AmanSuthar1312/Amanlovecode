pAmount = 0
Irate = 0
Time = 0

while True:
    pAmount = float(input("Enter Principle Amount: "))
    if pAmount <0:
        print("⛔Principle Cant be less that or equal to zero!")
    else:
        break

while True:
    Irate = float(input("Enter Intrest rate: "))
    if Irate < 0:
        print("⛔intrest rate Cant be less than zero!")
    else:
        break

while True:
    Time = int(input("Enter Time: "))
    if Time < 0:
        print("⛔Time Cant be less that or equal to zero!")
    else:
        break

total = (pAmount * pow(1+(Irate/100),Time))
print(f"Balance after {Time} year/s {total:.2f}rs ")