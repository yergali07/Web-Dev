from django.urls import path

from . import views

# Detect whether FBV or CBV/Mixin/Generic views are active
_is_fbv = hasattr(views, 'products_list')

if _is_fbv:
    urlpatterns = [
        path('products/', views.products_list, name='product-list'),
        path('products/<int:product_id>/', views.product_detail, name='product-detail'),
    ]
else:
    urlpatterns = [
        path('products/', views.ProductListAPIView.as_view(), name='product-list'),
        path('products/<int:product_id>/', views.ProductDetailAPIView.as_view(), name='product-detail'),
    ]

# Category endpoints are only available in generics (Level 5)
if hasattr(views, 'CategoryListAPIView'):
    urlpatterns += [
        path('categories/', views.CategoryListAPIView.as_view(), name='category-list'),
        path('categories/<int:category_id>/', views.CategoryDetailAPIView.as_view(), name='category-detail'),
        path('categories/<int:category_id>/products/', views.CategoryProductsAPIView.as_view(), name='category-products'),
    ]
