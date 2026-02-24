import { Injectable } from '@angular/core';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = PRODUCTS.map((product) => ({
    ...product,
    images: [...product.images]
  }));

  getCategories(): Category[] {
    return [...CATEGORIES];
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products
      .filter((product) => product.categoryId === categoryId)
      .map((product) => ({
        ...product,
        images: [...product.images]
      }));
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter((product) => product.id !== productId);
  }
}
