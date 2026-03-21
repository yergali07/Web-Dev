# Lab 8 — Django Backend for Online Shop

This project implements the Lab 8 backend for the Lab 5 Angular online store.

## Structure

```text
lab8/
├── .gitignore
├── Lab 8.pdf
├── shop-back/
│   ├── api/
│   ├── manage.py
│   ├── requirements.txt
│   ├── README.md
│   ├── shop_back/
│   └── venv/        # local virtual environment, ignored by git
```

## Setup

```bash
cd lab8/shop-back
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## API Endpoints

- `GET /api/products/`
- `GET /api/products/<id>/`
- `GET /api/categories/`
- `GET /api/categories/<id>/`
- `GET /api/categories/<id>/products/`

The database is seeded with the Lab 5 categories and products during migration.
