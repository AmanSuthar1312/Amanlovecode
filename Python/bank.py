def show_balance():
    print(f"Your Balance is {balance}Rs")

def deposit():
    
    while True:
        amount = float(input("Enter Your deposit amount: "))

        if amount < 0:
            print("Enter a valid amount")
        else:
           return amount

def withdrawl():
    amount = float(input("Enter Your withdrawl amount: "))

    if amount > balance:
        print("insfufficent balance")
        return 0
    elif amount < 0:
        print("Amount miust be graster than zero:")
    else:
        return amount

balance = 0

is_runing = True

while is_runing:
    print("Banking Program")
    print("1.Show balance")
    print("2.Deposit")
    print("3.withdrawl")
    print("4.Exit(q)")
    choice = input("Enter you choice (1-4): ")

    if choice == "1":
        show_balance()
    elif choice == "2":
        balance+=deposit()

    elif choice == "3":
        balance -= withdrawl()
    elif choice == "4":
        is_runing = False

    else:
        print("Not a valid choice;")

print("Thanks for banking with us!")