# Generated manually for Lab 8 initial store data.

from django.db import migrations


CATEGORIES = [
    {'id': 1, 'name': 'Smartphones'},
    {'id': 2, 'name': 'Laptops'},
    {'id': 3, 'name': 'Keyboards'},
    {'id': 4, 'name': 'Mouses'},
]

PRODUCTS = [
    {
        'id': 1,
        'name': 'Apple iPhone 17 Pro 256GB (Orange)',
        'price': 816301.0,
        'description': 'Kaspi Магазин - Смартфон Apple iPhone 17 Pro 256Gb NanoSIM+eSIM оранжевый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 7,
        'is_active': True,
        'category_id': 1,
    },
    {
        'id': 2,
        'name': 'Apple iPhone 13 128GB (Black)',
        'price': 353430.0,
        'description': 'Kaspi Магазин - Смартфон Apple iPhone 13 128Gb NanoSIM+eSIM черный в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 12,
        'is_active': True,
        'category_id': 1,
    },
    {
        'id': 3,
        'name': 'Samsung Galaxy A07 6GB/128GB (Black)',
        'price': 74880.0,
        'description': 'Kaspi Магазин - Смартфон Samsung Galaxy A07 6 ГБ/128 ГБ черный в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 19,
        'is_active': True,
        'category_id': 1,
    },
    {
        'id': 4,
        'name': 'Apple iPhone 16 128GB (Black)',
        'price': 492900.0,
        'description': 'Kaspi Магазин - Смартфон Apple iPhone 16 128Gb NanoSIM+eSIM черный в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 9,
        'is_active': True,
        'category_id': 1,
    },
    {
        'id': 5,
        'name': 'Redmi A3X 3GB/64GB (Black)',
        'price': 39990.0,
        'description': 'Kaspi Магазин - Смартфон Redmi A3x 3 ГБ/64 ГБ черный в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 24,
        'is_active': True,
        'category_id': 1,
    },
    {
        'id': 6,
        'name': 'Apple MacBook Air 13 (2020) 8GB/256GB',
        'price': 439699.0,
        'description': 'Kaspi Магазин - Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 6,
        'is_active': True,
        'category_id': 2,
    },
    {
        'id': 7,
        'name': 'Thunderobot 911S Core D 15.6 16GB/512GB',
        'price': 496983.0,
        'description': 'Kaspi Магазин - Ноутбук ThundeRobot 911S Core D 15.6" / 16 Гб / SSD 512 Гб / Без ОС / JT009K00F в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 4,
        'is_active': True,
        'category_id': 2,
    },
    {
        'id': 8,
        'name': 'Apple MacBook Pro 16 (2021) 32GB/512GB',
        'price': 699990.0,
        'description': 'Kaspi Магазин - Ноутбук Apple MacBook Pro 16 2021 16.2" / 32 Гб / SSD 512 Гб / macOS / Z14V0008D в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 0,
        'is_active': False,
        'category_id': 2,
    },
    {
        'id': 9,
        'name': 'PWR FU51 15.6 16GB/1TB Win 11 Pro',
        'price': 280799.0,
        'description': 'Kaspi Магазин - Ноутбук PWR FU51 15.6" / 16 Гб / SSD 1024 Гб / Win 11 Pro / FU51-N95-16/1TB-GTX1060 в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 8,
        'is_active': True,
        'category_id': 2,
    },
    {
        'id': 10,
        'name': 'Lenovo IdeaPad 1 15IJL7 8GB/512GB',
        'price': 194803.0,
        'description': 'Kaspi Магазин - Ноутбук Lenovo IdeaPad 1 15IJL7 15.6" / 8 Гб / SSD 512 Гб / Без ОС / 82LX00G9RK в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 11,
        'is_active': True,
        'category_id': 2,
    },
    {
        'id': 11,
        'name': 'AJAZZ AK820 (Gray)',
        'price': 15999.0,
        'description': 'Kaspi Магазин - Клавиатура Ajazz AK820 серый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 15,
        'is_active': True,
        'category_id': 3,
    },
    {
        'id': 12,
        'name': 'Epomaker x Aula F75 (White)',
        'price': 20363.0,
        'description': 'Kaspi Магазин - Клавиатура EPOMAKER x AULA F75 белый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 10,
        'is_active': True,
        'category_id': 3,
    },
    {
        'id': 13,
        'name': 'Aula F75 Side Printed (Black)',
        'price': 21997.0,
        'description': 'Kaspi Магазин - Клавиатура AULA F75 Side-Printed черный в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 0,
        'is_active': False,
        'category_id': 3,
    },
    {
        'id': 14,
        'name': 'Aula Hero 84 HE (White)',
        'price': 40899.0,
        'description': 'Kaspi Магазин - Клавиатура AULA HERO 84 HE белый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 6,
        'is_active': True,
        'category_id': 3,
    },
    {
        'id': 15,
        'name': 'Epomaker x Aula F99 (Gray)',
        'price': 30997.0,
        'description': 'Kaspi Магазин - Клавиатура EPOMAKER X AULA F99 серый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 7,
        'is_active': True,
        'category_id': 3,
    },
    {
        'id': 16,
        'name': 'AJAZZ AJ159P MC (White)',
        'price': 11300.0,
        'description': 'Kaspi Магазин - Мышь Ajazz AJ159P MC белый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 18,
        'is_active': True,
        'category_id': 4,
    },
    {
        'id': 17,
        'name': 'VXE R1 SE (White)',
        'price': 9406.0,
        'description': 'Kaspi Магазин - Мышь VXE R1 SE+ белый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 0,
        'is_active': False,
        'category_id': 4,
    },
    {
        'id': 18,
        'name': 'ATK Dragonfly A9 SE (White)',
        'price': 12279.0,
        'description': 'Kaspi Магазин - Мышь ATK Dragonfly A9 SE белый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 14,
        'is_active': True,
        'category_id': 4,
    },
    {
        'id': 19,
        'name': 'AJAZZ AJ159 NL (White)',
        'price': 12988.0,
        'description': 'Kaspi Магазин - Мышь Ajazz AJ159 NL белый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 9,
        'is_active': True,
        'category_id': 4,
    },
    {
        'id': 20,
        'name': 'VXE R1 Pro Max (White)',
        'price': 22005.0,
        'description': 'Kaspi Магазин - Мышь VXE R1 PRO MAX белый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
        'count': 5,
        'is_active': True,
        'category_id': 4,
    },
]


def seed_store_data(apps, schema_editor):
    Category = apps.get_model('api', 'Category')
    Product = apps.get_model('api', 'Product')

    for category in CATEGORIES:
        Category.objects.update_or_create(
            id=category['id'],
            defaults={'name': category['name']},
        )

    for product in PRODUCTS:
        Product.objects.update_or_create(
            id=product['id'],
            defaults={
                'name': product['name'],
                'price': product['price'],
                'description': product['description'],
                'count': product['count'],
                'is_active': product['is_active'],
                'category_id': product['category_id'],
            },
        )


def remove_store_data(apps, schema_editor):
    Category = apps.get_model('api', 'Category')
    Product = apps.get_model('api', 'Product')

    Product.objects.filter(id__in=[product['id'] for product in PRODUCTS]).delete()
    Category.objects.filter(id__in=[category['id'] for category in CATEGORIES]).delete()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(seed_store_data, remove_store_data),
    ]
