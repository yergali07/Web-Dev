# Lab 9 — Django REST Framework Online Shop API

This project upgrades the Lab 8 Django backend to Django REST Framework with `ModelSerializer`, `ModelViewSet`, and `DefaultRouter`.

## Structure

```text
lab9/
├── .gitignore
├── Lab 9.pdf
├── OnlineShopAPI.postman_collection.json
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
cd lab9/shop-back
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Seeded data and admin

- 4 categories and 20 products are inserted during migration.
- A default superuser is created during migration:
  - username: `admin`
  - password: `admin12345`

## API Endpoints

- `GET|POST /api/categories/`
- `GET|PUT|PATCH|DELETE /api/categories/<id>/`
- `GET /api/categories/<id>/products/`
- `GET|POST /api/products/`
- `GET|PUT|PATCH|DELETE /api/products/<id>/`

## Request bodies

Category create/update:

```json
{
  "name": "Tablets"
}
```

Product create/update:

```json
{
  "name": "Samsung Galaxy Book 4",
  "price": 499990,
  "description": "15.6-inch laptop with 16 GB RAM and 512 GB SSD.",
  "count": 6,
  "is_active": true,
  "category_id": 2
}
```

## Postman collection

Import `lab9/OnlineShopAPI.postman_collection.json` into Postman. The collection already includes all 11 required requests for categories and products.

## Tests

```bash
python manage.py test
```
