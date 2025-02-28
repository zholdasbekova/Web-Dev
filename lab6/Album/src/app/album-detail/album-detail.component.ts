import { Component, OnInit } from '@angular/core';
import { Album } from '../models';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { AlbumService } from '../album.service';
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  standalone: true,
  imports: [
    NgIf, RouterLink, FormsModule
  ],
  styleUrls: ['./album-detail.component.css']
})export class AlbumDetailComponent implements OnInit {

  album!: Album;
  loaded: boolean = false;
  inputValue: string = '';
  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const albumIdFromRoute = Number(routeParams.get('id'));
    this.albumService.getAlbum(albumIdFromRoute).subscribe((album) => {
      this.album = album;
      this.loaded = true;
    });
  }
  changeAlbumTitle(): void {
    this.albumService.updateAlbum(this.album.id, this.inputValue).subscribe((album) => {
      this.album.title = album.title;
    });
  }

}