import random

options = ("rock","paper","scissor")

runing = True


while runing:

    player = None
    computer = random.choice(options)

    while player not in options:
        player = input("Enter you choice (rock,paper,scissor): ")


    print(f"player: {player}")
    print(f"computer: {computer}")


    if player == computer:
        print("Its a tie!")
    elif player == "rock" and computer == "paper" or player == "paper" and computer == "scissor" or player == "scissor" and computer == "rock":
        print("💀You lose!💀")
    else:
        print("🎊You Won!🎊")
    
    
    
    if not input("Play Again (Y/N): ").lower() == "y":
        runing  = False

print("thanks For Playing!")

