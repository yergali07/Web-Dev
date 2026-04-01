import json

from django.test import TestCase
from django.urls import reverse

from .models import Category, Product


class ApiEndpointTests(TestCase):
    def test_products_list_returns_seeded_products(self):
        response = self.client.get(reverse('product-list'))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response['Content-Type'], 'application/json')

        payload = response.json()
        self.assertEqual(len(payload), 20)
        self.assertEqual(payload[0]['name'], 'Apple iPhone 17 Pro 256GB (Orange)')
        self.assertEqual(payload[0]['category']['name'], 'Smartphones')

    def test_product_detail_returns_requested_product(self):
        response = self.client.get(reverse('product-detail', kwargs={'pk': 8}))

        self.assertEqual(response.status_code, 200)
        payload = response.json()
        self.assertEqual(payload['id'], 8)
        self.assertEqual(payload['name'], 'Apple MacBook Pro 16 (2021) 32GB/512GB')
        self.assertEqual(payload['category']['id'], 2)

    def test_categories_list_returns_all_categories(self):
        response = self.client.get(reverse('category-list'))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), [
            {'id': 1, 'name': 'Smartphones'},
            {'id': 2, 'name': 'Laptops'},
            {'id': 3, 'name': 'Keyboards'},
            {'id': 4, 'name': 'Mouses'},
        ])

    def test_category_detail_returns_requested_category(self):
        response = self.client.get(reverse('category-detail', kwargs={'pk': 3}))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {'id': 3, 'name': 'Keyboards'})

    def test_category_products_filters_by_category(self):
        response = self.client.get(reverse('category-products', kwargs={'pk': 4}))

        self.assertEqual(response.status_code, 200)
        payload = response.json()
        self.assertEqual(len(payload), 5)
        self.assertTrue(all(product['category']['id'] == 4 for product in payload))

    def test_create_category_accepts_post(self):
        response = self.client.post(
            reverse('category-list'),
            data=json.dumps({'name': 'Monitors'}),
            content_type='application/json',
        )

        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json()['name'], 'Monitors')
        self.assertTrue(Category.objects.filter(name='Monitors').exists())

    def test_create_product_accepts_post(self):
        category = Category.objects.get(pk=2)
        response = self.client.post(
            reverse('product-list'),
            data=json.dumps({
                'name': 'Dell XPS 13',
                'price': 650000,
                'description': 'Compact ultrabook for work and study.',
                'count': 3,
                'is_active': True,
                'category_id': category.id,
            }),
            content_type='application/json',
        )

        self.assertEqual(response.status_code, 201)
        payload = response.json()
        self.assertEqual(payload['name'], 'Dell XPS 13')
        self.assertEqual(payload['category']['id'], category.id)
        self.assertTrue(Product.objects.filter(name='Dell XPS 13').exists())

    def test_product_detail_returns_404_for_missing_product(self):
        response = self.client.get(reverse('product-detail', kwargs={'pk': 999}))

        self.assertEqual(response.status_code, 404)
        self.assertIn('detail', response.json())

    def test_category_products_returns_404_for_missing_category(self):
        response = self.client.get(reverse('category-products', kwargs={'pk': 999}))

        self.assertEqual(response.status_code, 404)
        self.assertIn('detail', response.json())
