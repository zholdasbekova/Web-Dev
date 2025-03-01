import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Album, Photo } from "./models";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private client: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/albums/${id}`);
  }

  addAlbum(album: Album): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}/albums`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.client.delete<void>(`${this.BASE_URL}/albums/${id}`);
  }

  updateAlbum(albumId: number, newTitle: string): Observable<Album> {
    const body = { title: newTitle };
    return this.client.put<Album>(`${this.BASE_URL}/albums/${albumId}`, body);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`${this.BASE_URL}/albums/${id}/photos`);
  }
}