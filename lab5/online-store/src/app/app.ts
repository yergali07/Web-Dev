import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  readonly categories: Category[];

  selectedCategoryId: number | null = null;
  selectedCategoryName = '';
  selectedProducts: Product[] = [];

  constructor(private readonly productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category): void {
    this.selectedCategoryId = category.id;
    this.selectedCategoryName = category.name;
    this.selectedProducts = this.productService.getProductsByCategory(category.id);
  }

  onProductDeleted(productId: number): void {
    this.productService.deleteProduct(productId);

    if (this.selectedCategoryId !== null) {
      this.selectedProducts = this.productService.getProductsByCategory(this.selectedCategoryId);
    }
  }
}
