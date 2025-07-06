import random

low =1
high = 20
is_playing = True 
guesses = 0
number = random.randint(low,high)

while is_playing:
    
    guess = input("Enter an Number (1-20): ")
    if guess.isdigit():
        guess = int(guess)
        guesses +=1
        if low < guess > high:
            print(f"{guess} is not in range.")
        elif guess < number:
            print("Too low!⏬")
        elif guess > number:
            print("too high!⏫")
        else:
            print(f"🎊You Won the number was {number} It took you {guesses} guesses.🎊")
            is_playing = False
    else:
        print("Invalid guess!❌")
        print("Guess a number bw 1-20.")

