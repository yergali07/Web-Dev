from models import Animal, Dog, Cat


def main():
    buddy = Dog(name="Buddy", age=5, breed="Golden Retriever")
    rex = Dog(name="Rex", age=2, breed="German Shepherd")
    whiskers = Cat(name="Whiskers", age=4, color="orange")
    luna = Cat(name="Luna", age=1, color="black", indoor=False)
    generic = Animal(name="Parrot", age=10, species="Bird")

    buddy.learn_trick("sit")
    buddy.learn_trick("shake")
    rex.learn_trick("fetch")

    animals = [buddy, rex, whiskers, luna, generic]

    print("=" * 50)
    print("All Animals")
    print("=" * 50)
    for animal in animals:
        print(animal)
    print()

    print("=" * 50)
    print("Polymorphism — speak()")
    print("=" * 50)
    for animal in animals:
        print(animal.speak())
    print()

    print("=" * 50)
    print("Animal Info")
    print("=" * 50)
    for animal in animals:
        print(animal.info())
        print(f"  Adult: {animal.is_adult()}")
    print()

    print("=" * 50)
    print("Dog-specific: Tricks")
    print("=" * 50)
    for animal in animals:
        if isinstance(animal, Dog):
            print(animal.show_tricks())
    print()

    print("=" * 50)
    print("Cat-specific: Habitat")
    print("=" * 50)
    for animal in animals:
        if isinstance(animal, Cat):
            print(animal.habitat())


if __name__ == "__main__":
    main()
