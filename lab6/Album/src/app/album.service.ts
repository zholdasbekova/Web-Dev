import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album, Photo} from "./models";
import {Observable} from "rxjs";
import {AlbumsComponent} from "./albums/albums.component";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  getAlbumById(albumId: string) {
    throw new Error('Method not implemented.');
  }
  BASE_URL = 'https://jsonplaceholder.typicode.com'
  constructor(private client: HttpClient) { }
  getAlbums() {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }
  getAlbum(id: number) {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }
  addAlbum(album: Album) {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }

  deleteAlbum(id: number) {
    return this.client.delete<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  updateAlbum(albumId: number, newTitle: string) {
    const body = { title: newTitle };
    console.log(newTitle);
    return this.client.put<Album>(`${this.BASE_URL}/albums/${albumId}`, body);
  }
  getAlbumPhotos(id: number) {
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }

}