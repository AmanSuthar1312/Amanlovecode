import random

def spin_rows():
    symbols = ["🎉" ,"🔔","🍒" ,"🍋" ,"🍉"]

    return[random.choice(symbols) for _ in range(3)]

def print_row(row):
    print(" ".join(row))


def get_payout(row,bet):
    if row[0] == row[1] ==row[2]:
        if row[0] == "🍒":
            return bet *3
        elif row[0] == "🍋":
            return bet*4
        elif row[0] == "🍉":
            return bet*10
        elif row[0]== "🎉":
            return bet*20

    else:
        return 0     

def main():
    balance = 100

    print("----------------------------------")
    print("Welcome to python slot")
    print("🎉 🔔 🍒 🍋 🍉")
    print("----------------------------------")


    while balance >0:
        print(f"Current Balance {balance}Rs")

        bet = input("Enter you bet amount: ")

        if not bet.isdigit():
            print("Please enter a valid number!")
            continue

        bet = int(bet)

        if bet >balance:
            print("Insufficent balance")
            continue
        if bet <=0:
            print("Enter a number greater than 0")
            continue


        balance -= bet 

        row = spin_rows()
        print("Spinning.....\n")
        print_row(row)

        payout = get_payout(row,bet)

        if payout >0:
            print(f"you won ${payout}")
        else:
            print("Sorry you won nothing")
        
        balance += payout

        play_again = input("Do you want to play again(y/n): ").lower()

        if play_again != "y":
            break


        

if __name__ == "__main__":
    main()