import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductGalleryComponent } from '../product-gallery/product-gallery.component';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, ProductGalleryComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  readonly starSlots = [1, 2, 3, 4, 5];
  showShareOptions = false;

  get roundedRating(): number {
    return Math.round(this.product.rating);
  }

  toggleShareOptions(): void {
    this.showShareOptions = !this.showShareOptions;
  }

  shareToWhatsApp(): void {
    const message = `Check out this product: ${this.product.link}`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
    this.showShareOptions = false;
  }

  shareToTelegram(): void {
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
    this.showShareOptions = false;
  }

  formatPrice(value: number): string {
    return new Intl.NumberFormat('kk-KZ').format(value);
  }
}
