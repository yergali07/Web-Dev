import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  private readonly albumService = inject(AlbumService);
  private readonly cdr = inject(ChangeDetectorRef);

  albums: Album[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.cdr.markForCheck();

    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.isLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.errorMessage = 'Unable to load albums. Please try again.';
        this.isLoading = false;
        this.cdr.markForCheck();
      }
    });
  }

  deleteAlbum(id: number, event: Event): void {
    event.preventDefault();

    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter((album) => album.id !== id);
        this.cdr.markForCheck();
      },
      error: () => {
        this.errorMessage = 'Failed to delete album. Please try again.';
        this.cdr.markForCheck();
      }
    });
  }

  trackByAlbumId(_: number, album: Album): number {
    return album.id;
  }
}
