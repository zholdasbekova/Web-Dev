import {Component, OnInit} from '@angular/core';
import {Photo} from "../models";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AlbumService} from "../album.service";
import {NgForOf} from "@angular/common";
import {Album} from "../models";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos: Photo[];
  album!: Album;
  loaded: boolean = false;
https: any;
jungkook: any;
  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.photos = [];
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));

    this.albumService.getAlbumPhotos(albumIdFromRoute).subscribe((photos) =>{
      this.photos = photos;
      this.loaded = true;
    });
  }
}