# area_calculator.py
def area_of_circle(radius):
    return 3.14 * radius * radius

def area_of_rectangle(length, width):
    return length * width

def area_of_square(side):
    return side * side

def area_of_triangle(base,height):
    return 1/2*base*height
while True:
    print("Menu:")
    print("1. Area of Circle")
    print("2. Area of Rectangle")
    print("3. Area of Square")
    print("4. Area of triangle")
    print("5. Exit")
    
    choice = int(input("Enter your choice: "))
    
    if choice == 1:
        radius = float(input("Enter the radius: "))
        print(f"Area of Circle: {area_of_circle(radius)}")
    elif choice == 2:
        length = float(input("Enter the length: "))
        width = float(input("Enter the width: "))
        print(f"Area of Rectangle: {area_of_rectangle(length, width)}")
    elif choice == 3:
        side = float(input("Enter the side length: "))
        print(f"Area of Square: {area_of_square(side)}")
    elif choice == 4:
        base = int(input("enter the base: "))
        height = int(input("enter the height: "))  
        print(f"The area of triangle is {area_of_triangle(base,height)} ")
    elif choice == 5:
        print("Exiting...")
        break
    else:
        print("Invalid choice. Please try again.")