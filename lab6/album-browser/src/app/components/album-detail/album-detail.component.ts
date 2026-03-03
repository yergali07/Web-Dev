import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EMPTY, map, switchMap } from 'rxjs';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly albumService = inject(AlbumService);
  private readonly cdr = inject(ChangeDetectorRef);

  album: Album | null = null;
  editedTitle = '';
  isLoading = true;
  isSaving = false;
  errorMessage = '';
  saveMessage = '';

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map((params) => Number(params.get('id'))),
        switchMap((id) => {
          if (!Number.isInteger(id) || id <= 0) {
            this.errorMessage = 'Invalid album id.';
            this.isLoading = false;
            this.cdr.markForCheck();
            return EMPTY;
          }

          this.isLoading = true;
          this.errorMessage = '';
          this.saveMessage = '';
          this.cdr.markForCheck();
          return this.albumService.getAlbum(id);
        })
      )
      .subscribe({
        next: (album) => {
          this.album = album;
          this.editedTitle = album.title;
          this.isLoading = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.errorMessage = 'Album not found.';
          this.isLoading = false;
          this.cdr.markForCheck();
        }
      });
  }

  saveAlbum(): void {
    if (!this.album || this.isSaving) {
      return;
    }

    const nextTitle = this.editedTitle.trim();
    if (!nextTitle) {
      this.errorMessage = 'Title is required.';
      this.saveMessage = '';
      this.cdr.markForCheck();
      return;
    }

    this.isSaving = true;
    this.errorMessage = '';
    this.saveMessage = '';
    this.cdr.markForCheck();

    const updatedAlbum: Album = {
      ...this.album,
      title: nextTitle
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (album) => {
        this.album = album;
        this.editedTitle = album.title;
        this.isSaving = false;
        this.saveMessage = 'Album title updated successfully.';
        this.cdr.markForCheck();
      },
      error: () => {
        this.isSaving = false;
        this.errorMessage = 'Could not update album.';
        this.cdr.markForCheck();
      }
    });
  }

  backToAlbums(): void {
    this.router.navigate(['/albums']);
  }
}
