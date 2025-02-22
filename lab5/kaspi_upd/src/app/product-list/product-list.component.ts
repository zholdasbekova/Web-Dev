import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemsComponent } from '../product-item/product-item.component';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemsComponent], 
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];
  @Input () categoryName: string | undefined;

  remove(id: number){
    this.products = this.products.filter((x) => x.id !== id);
  }
}