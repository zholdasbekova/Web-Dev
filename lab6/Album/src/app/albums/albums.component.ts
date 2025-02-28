import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Album} from "../models";
import {CommonModule} from "@angular/common";
import {AlbumService} from "../album.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{
  albums!: Album[];
  loaded: boolean = false;
  newAlbum: Album;
  id: number = 101;
  inputText: string = '';
  constructor(private albumService: AlbumService) {
    this.newAlbum = new Album();
  }
  ngOnInit() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  getAlbums() :void{
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }
  addAlbum(){
   this.albumService.addAlbum(this.newAlbum).subscribe(
      (album) => {
        this.albums.unshift(album);
        this.id++;
        this.newAlbum = new Album();
        alert('Album created');
      }
    );
  }

  deleteAlbum(albumId: number): void {
    const deletedAlbumIndex = this.albums.findIndex(album => album.id === albumId);
    if (deletedAlbumIndex !== -1) {
      this.albumService.deleteAlbum(albumId).subscribe(() => {
        this.albums.splice(deletedAlbumIndex, 1);
      });
    }
  }

}