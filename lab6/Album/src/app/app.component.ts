import { Component } from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AlbumsComponent} from "./albums/albums.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Album';
}