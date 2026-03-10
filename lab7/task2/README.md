# Task 2 — Object-Oriented Programming in Python

## Overview

This project demonstrates core OOP concepts using an **Animal** class hierarchy.

## Class Hierarchy

```
Animal (base class)
├── Dog (child class)
└── Cat (child class)
```

### Animal (Base Class)
- **Attributes**: `name`, `age`, `species`
- **Methods**: `speak()`, `info()`, `is_adult()`, `__str__()`

### Dog (Child Class)
- **Extra attributes**: `breed`, `tricks`
- **Extra methods**: `learn_trick()`, `show_tricks()`
- **Overrides**: `speak()` → returns `"Woof! Woof!"`

### Cat (Child Class)
- **Extra attributes**: `color`, `indoor`
- **Extra method**: `habitat()`
- **Overrides**: `speak()` → returns `"Meow!"`

## OOP Concepts Demonstrated

| Concept | Where |
|---|---|
| Encapsulation | Attributes in `__init__`, methods operating on them |
| Inheritance | `Dog` and `Cat` extend `Animal` via `super().__init__()` |
| Polymorphism | `speak()` returns different output per class |
| Method Overriding | `speak()` and `__str__()` overridden in child classes |

## How to Run

```bash
python main.py
```

## File Structure

```
task2/
├── models.py   # Animal, Dog, Cat classes
├── main.py     # Demo script
└── README.md   # This file
```
