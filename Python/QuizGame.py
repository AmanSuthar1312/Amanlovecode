Questions = ("How many panets are in solar system?:",
            "What is the molecular formula of water?:",
            "What is the the name of our moon?:")

options = (("A. 6","B. 7","C. 8"),
            ("A. H3O","B. H2SO4","C.H2O"),
            ("A. MOON","B. KEPLAR-273","C. KAISILEAS"))

answers = ("B","C","A")

gesses = []

score = 0

question_no  = 0

for question in Questions:
    print("--------------------------------")
    print(question)
    for option in options[question_no]:
        print(option)

    guess = input("Enter (A,B,C): ").upper()
    gesses.append(guess)
    if guess == answers[question_no]:
        score += 1
        print("Correct Answers!🎊")
    else:
        print("Incorrect!❌")
        print(f"{answers[question_no]} is the correct answer.")
    question_no +=1

print("--------------------------------------")
print("              RESULTS                 ")
print("--------------------------------------")
print()
for answer in answers:
    print(answer ,end=" ")
print()

for guess in gesses:
    print(guess, end=" ")
print()

print(f"Your Final Score is {score}🟢")
