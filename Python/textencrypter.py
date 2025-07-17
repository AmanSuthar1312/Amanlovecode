import random
import string

chars =  " " + string.punctuation + string.digits + string.ascii_letters

chars = list(chars)

key = chars.copy()

random.shuffle(key)

# print(f"chars: {chars}")
# print(f"key: {key}")

plain_text = input("Enter a message to encript: ")
chipher_text = ""

for letter in plain_text:
    index = chars.index(letter)
    chipher_text += key[index]


print(f"oringinal message: {plain_text}")
print(f"encrypeted text:  {chipher_text}")




chipher_text = input("Enter a message to dicript: ")
plain_text = ""

for letter in chipher_text:
    index = key.index(letter)
    plain_text += chars[index]


print(f"oringinal message: {chipher_text}")
print(f"encrypeted text:  {plain_text}")
