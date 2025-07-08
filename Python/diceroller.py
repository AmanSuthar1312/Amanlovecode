import random

dice_art = {
    1: """
        ┌───────┐
        │       │
        │   ●   │
        │       │
        └───────┘
        """,
    2: """
        ┌───────┐
        │ ●     │
        │       │
        │     ● │
        └───────┘
        """,
    3: """
        ┌───────┐
        │ ●     │
        │   ●   │
        │     ● │
        └───────┘
        """,
    4: """
        ┌───────┐
        │ ●   ● │
        │       │
        │ ●   ● │
        └───────┘
        """,
    5: """
        ┌───────┐
        │ ●   ● │
        │   ●   │
        │ ●   ● │
        └───────┘
        """,
    6: """
        ┌───────┐
        │ ●   ● │
        │ ●   ● │
        │ ●   ● │
        └───────┘
        """
        }

dice = []
total = 0

# Get the number of dice from the user
num_of_dice = int(input("How many dice? "))

# Roll the dice and store the results
for _ in range(num_of_dice): 
    dice.append(random.randint(1, 6))

# Display the ASCII art for each die
for die_result in dice:
    print(dice_art.get(die_result))


total = sum(dice) 

print(f"Total: {total}")