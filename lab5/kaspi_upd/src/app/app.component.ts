import { Component } from '@angular/core';
import { categories } from './category';
import { products } from './products';
import { ProductListComponent } from "./product-list/product-list.component";
import { TopBarComponent } from "./top-bar/top-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ProductListComponent, TopBarComponent]
})
export class AppComponent { 
  title = 'kaspi.kz';
  categories;
  show = false;
  categoryName = "";
  products = products;
  isCategoryContainerVisible = true;
  constructor() {
    this.categories = categories;
  }
  categoryClick(name:string){
    if(this.categoryName == name){
      this.show = false;
      this.categoryName = "";
    }
    else{
      this.show = true;
      this.categoryName = name;
    }
  }
}