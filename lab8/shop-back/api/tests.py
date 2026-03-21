from django.test import TestCase
from django.urls import reverse


class ApiEndpointTests(TestCase):
    def test_products_list_returns_seeded_products(self):
        response = self.client.get(reverse('products-list'))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response['Content-Type'], 'application/json')

        payload = response.json()
        self.assertEqual(len(payload), 20)
        self.assertEqual(payload[0]['name'], 'Apple iPhone 17 Pro 256GB (Orange)')
        self.assertEqual(payload[0]['category']['name'], 'Smartphones')

    def test_product_detail_returns_requested_product(self):
        response = self.client.get(reverse('product-detail', kwargs={'id': 8}))

        self.assertEqual(response.status_code, 200)
        payload = response.json()
        self.assertEqual(payload['id'], 8)
        self.assertEqual(payload['name'], 'Apple MacBook Pro 16 (2021) 32GB/512GB')
        self.assertEqual(payload['category']['id'], 2)

    def test_categories_list_returns_all_categories(self):
        response = self.client.get(reverse('categories-list'))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), [
            {'id': 1, 'name': 'Smartphones'},
            {'id': 2, 'name': 'Laptops'},
            {'id': 3, 'name': 'Keyboards'},
            {'id': 4, 'name': 'Mouses'},
        ])

    def test_category_detail_returns_requested_category(self):
        response = self.client.get(reverse('category-detail', kwargs={'id': 3}))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {'id': 3, 'name': 'Keyboards'})

    def test_category_products_filters_by_category(self):
        response = self.client.get(reverse('category-products', kwargs={'id': 4}))

        self.assertEqual(response.status_code, 200)
        payload = response.json()
        self.assertEqual(len(payload), 5)
        self.assertTrue(all(product['category']['id'] == 4 for product in payload))

    def test_product_detail_returns_json_404(self):
        response = self.client.get(reverse('product-detail', kwargs={'id': 999}))

        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.json(), {'error': 'Product not found'})

    def test_category_products_returns_json_404(self):
        response = self.client.get(reverse('category-products', kwargs={'id': 999}))

        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.json(), {'error': 'Category not found'})
