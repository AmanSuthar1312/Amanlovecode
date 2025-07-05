import time 

mytime = int(input("Enter The Starting time: "))

for x in range(mytime,0,-1):
    second = x % 60
    minutes = int(x/60) %60
    hrs = int(x/3600)
    print(f"{hrs:02}:{minutes:02}:{second:02}")
    time.sleep(1)
print("Times UP!")



