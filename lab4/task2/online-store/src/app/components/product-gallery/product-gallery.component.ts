import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  imports: [CommonModule],
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.css'
})
export class ProductGalleryComponent implements OnChanges {
  @Input({ required: true }) images: string[] = [];
  @Input({ required: true }) productName = '';

  selectedIndex = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['images']) {
      this.selectedIndex = 0;
    }
  }

  get selectedImage(): string {
    return this.images[this.selectedIndex] ?? this.images[0] ?? '';
  }

  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  previousImage(): void {
    if (!this.images.length) {
      return;
    }

    this.selectedIndex = (this.selectedIndex - 1 + this.images.length) % this.images.length;
  }

  nextImage(): void {
    if (!this.images.length) {
      return;
    }

    this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
  }
}
