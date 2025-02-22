import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products'

@Component({
  selector: 'app-product-items',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemsComponent {
  @Input()
  product!: Product;
  @Input () a: any;
  @Output () remove = new EventEmitter();
  isLike = false;

  share(link:string) {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegramUrl, '_blank');
  }

  deleteProduct(){
    this.remove.emit(this.product?.id);
  }
  like(){
    this.isLike = !this.isLike;
    if(this.isLike && this.product){
      this.product.likes++;
    }
    else if(this.product){
      this.product.likes--;
    }
  }
}