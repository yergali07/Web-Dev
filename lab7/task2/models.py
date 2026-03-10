class Animal:
    def __init__(self, name: str, age: int, species: str):
        self.name = name
        self.age = age
        self.species = species

    def speak(self) -> str:
        return f"{self.name} makes a sound"

    def info(self) -> str:
        return f"{self.name} is a {self.age}-year-old {self.species}"

    def is_adult(self) -> bool:
        return self.age >= 3

    def __str__(self) -> str:
        return f"Animal(name={self.name}, age={self.age}, species={self.species})"


class Dog(Animal):
    def __init__(self, name: str, age: int, breed: str):
        super().__init__(name, age, species="Dog")
        self.breed = breed
        self.tricks: list[str] = []

    def speak(self) -> str:
        return f"{self.name} says: Woof! Woof!"

    def learn_trick(self, trick: str) -> None:
        self.tricks.append(trick)

    def show_tricks(self) -> str:
        if not self.tricks:
            return f"{self.name} doesn't know any tricks yet"
        return f"{self.name} can: {', '.join(self.tricks)}"

    def __str__(self) -> str:
        return f"Dog(name={self.name}, age={self.age}, breed={self.breed})"


class Cat(Animal):
    def __init__(self, name: str, age: int, color: str, indoor: bool = True):
        super().__init__(name, age, species="Cat")
        self.color = color
        self.indoor = indoor

    def speak(self) -> str:
        return f"{self.name} says: Meow!"

    def habitat(self) -> str:
        status = "indoor" if self.indoor else "outdoor"
        return f"{self.name} is an {status} cat"

    def __str__(self) -> str:
        return f"Cat(name={self.name}, age={self.age}, color={self.color})"
