import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnChanges {
  @Input() products: Product[] = [];
  @Input() categoryName = 'Selected category';
  @Output() productDeleted = new EventEmitter<number>();

  displayedProducts: Product[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products']) {
      this.displayedProducts = [...this.products];
    }
  }

  onDeleteProduct(productId: number): void {
    this.displayedProducts = this.displayedProducts.filter((product) => product.id !== productId);
    this.productDeleted.emit(productId);
  }

  trackByProductId(_index: number, product: Product): number {
    return product.id;
  }
}
