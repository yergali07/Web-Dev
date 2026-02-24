import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnChanges {
  @Input({ required: true }) product!: Product;
  @Output() delete = new EventEmitter<number>();

  showShareOptions = false;
  selectedImageIndex = 0;

  readonly starSlots = [1, 2, 3, 4, 5];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      this.selectedImageIndex = 0;
    }
  }

  get galleryImages(): string[] {
    return this.product.images?.length ? this.product.images : [this.product.image];
  }

  get selectedImage(): string {
    return this.galleryImages[this.selectedImageIndex] ?? this.galleryImages[0] ?? '';
  }

  get roundedRating(): number {
    return Math.round(this.product.rating);
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  previousImage(): void {
    if (!this.galleryImages.length) {
      return;
    }

    this.selectedImageIndex =
      (this.selectedImageIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
  }

  nextImage(): void {
    if (!this.galleryImages.length) {
      return;
    }

    this.selectedImageIndex = (this.selectedImageIndex + 1) % this.galleryImages.length;
  }

  likeProduct(): void {
    this.product.likes += 1;
  }

  deleteProduct(): void {
    const confirmed = window.confirm(`Are you sure you want to delete "${this.product.name}"?`);

    if (!confirmed) {
      return;
    }

    this.delete.emit(this.product.id);
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
    const shareUrl =
      `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}` +
      `&text=${encodeURIComponent(this.product.name)}`;

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
    this.showShareOptions = false;
  }

  formatPrice(value: number): string {
    return new Intl.NumberFormat('kk-KZ').format(value);
  }
}
