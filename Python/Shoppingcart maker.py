foods = []
prices = []
total = 0

while True:
    food = input("Enter a food to buy (q to quit): ")
    if food.lower() == "q":
        break
    else:
        price = float(input(f"Enter the price of {food}: "))
        foods.append(food)
        prices.append(prices)
        total = total + price


print("(-------Your Cart-------")
for food in foods:
    print(food, end=" ")
    print()
print("------------------------------------")
print(f"Your total is {total}Rs")