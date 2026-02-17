import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  readonly products: Product[] = PRODUCTS;

  trackByProductId(_index: number, product: Product): number {
    return product.id;
  }
}
