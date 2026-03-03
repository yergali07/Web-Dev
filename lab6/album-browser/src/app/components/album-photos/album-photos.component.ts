import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EMPTY, map, switchMap } from 'rxjs';
import { Photo } from '../../models/photo.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-photos',
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly albumService = inject(AlbumService);
  private readonly cdr = inject(ChangeDetectorRef);

  albumId: number | null = null;
  photos: Photo[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((params) => Number(params.get('id'))),
        switchMap((id) => {
          if (!Number.isInteger(id) || id <= 0) {
            this.errorMessage = 'Invalid album id.';
            this.isLoading = false;
            this.albumId = null;
            this.cdr.markForCheck();
            return EMPTY;
          }

          this.albumId = id;
          this.isLoading = true;
          this.errorMessage = '';
          this.cdr.markForCheck();
          return this.albumService.getAlbumPhotos(id);
        })
      )
      .subscribe({
        next: (photos) => {
          this.photos = photos;
          this.isLoading = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.errorMessage = 'Unable to load photos for this album.';
          this.isLoading = false;
          this.cdr.markForCheck();
        }
      });
  }

  trackByPhotoId(_: number, photo: Photo): number {
    return photo.id;
  }
}
