from django.http import JsonResponse
from django.views.decorators.http import require_GET

from .models import Category, Product


def serialize_category(category: Category) -> dict:
    return {
        'id': category.id,
        'name': category.name,
    }


def serialize_product(product: Product) -> dict:
    return {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'count': product.count,
        'is_active': product.is_active,
        'category': serialize_category(product.category),
    }


def json_error(message: str, status: int) -> JsonResponse:
    return JsonResponse(
        {'error': message},
        status=status,
        json_dumps_params={'ensure_ascii': False},
    )


@require_GET
def products_list(request):
    products = Product.objects.select_related('category').order_by('id')
    payload = [serialize_product(product) for product in products]
    return JsonResponse(
        payload,
        safe=False,
        json_dumps_params={'ensure_ascii': False},
    )


@require_GET
def product_detail(request, id: int):
    try:
        product = Product.objects.select_related('category').get(pk=id)
    except Product.DoesNotExist:
        return json_error('Product not found', status=404)

    return JsonResponse(
        serialize_product(product),
        json_dumps_params={'ensure_ascii': False},
    )


@require_GET
def categories_list(request):
    categories = Category.objects.order_by('id')
    payload = [serialize_category(category) for category in categories]
    return JsonResponse(
        payload,
        safe=False,
        json_dumps_params={'ensure_ascii': False},
    )


@require_GET
def category_detail(request, id: int):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return json_error('Category not found', status=404)

    return JsonResponse(
        serialize_category(category),
        json_dumps_params={'ensure_ascii': False},
    )


@require_GET
def category_products(request, id: int):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        return json_error('Category not found', status=404)

    products = category.products.select_related('category').order_by('id')
    payload = [serialize_product(product) for product in products]
    return JsonResponse(
        payload,
        safe=False,
        json_dumps_params={'ensure_ascii': False},
    )
