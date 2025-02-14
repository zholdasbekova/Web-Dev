import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  name: string;
  description: string;
  rating: number;
  link: string;
  gallery: string[];
  currentIndex: number;
}

@Component({
  selector: 'app-products',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule],
  template: `
    <div class="products-container">
      <div *ngFor="let product of products" class="product-card">
        <h2><a [href]="product.link" target="_blank">{{ product.name }}</a></h2>
        <p>{{ product.description }}</p>
        <p class="rating">{{ getStarRating(product.rating) }}</p>
        <div class="carousel">
          <button (click)="prevImage(product)" class="carousel-btn">&lt;</button>
          <img [src]="product.gallery[product.currentIndex]" class="carousel-image" />
          <button (click)="nextImage(product)" class="carousel-btn">&gt;</button>
        </div>
        <button (click)="shareProduct(product.link, 'whatsapp')">Share on WhatsApp</button>
        <button (click)="shareProduct(product.link, 'telegram')">Share on Telegram</button>
      </div>
    </div>
  `
})

export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Apple iPhone 12 Pro Max',
      description: 'The iPhone 12 ProMax smartphone has a huge 6.7-inch Super Retina SDR display with a resolution of 2778=1284 pixels. On it, any content looks vivid and truly exciting. The front panel is reliably protected by a heavy-duty Ceramic Shield coating created by high-temperature crystallization, which minimizes the risk of damage to the device when falling.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-12-pro-max-256gb-seryi-100658022/?c=750000000&sr=1&qid=421bb71f02e6045b671797b633868764&ref=shared_link',
      gallery: ['https://a.allegroimg.com/original/116a76/b41616a242198cf6c35e6875d128/Smartfon-Apple-iPhone-12-Pro-Max-WYBOR-KOLOROW', 'https://avatars.mds.yandex.net/i?id=be1124743ea7df66d033f2216edc0aa4631adfd5679bf5f1-2368479-images-thumbs&n=13'],
      currentIndex: 0
    },

    {
      name: 'Fender FA-135CE Concert V2 Black',
      description: 'Fender FA-135CE Concert V2 Black electric and acoustic guitar, color black',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/navarrez-nv122-special-dark-moon-3-4-chernyi-107581712/?c=750000000&m=MusicAvenue&sr=1&qid=2f753171ab9db87dba3f9b12a7af1db7&isPromoted=true&ref=shared_link',
      gallery: ['https://avatars.mds.yandex.net/get-mpic/4977172/2a0000018fca3605ffb6642e6e7c23697ea0/orig'],
      currentIndex: 0
    },

    {
      name: 'Samsung WF60F1R1N2W Washing Machine',
      description: 'A simple and useful solution for the most convenient use of the washing machine is the internal illumination of the drum, which facilitates its loading and unloading. No more forgotten clothes after washing — everything is in the palm of your hand.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/samsung-ww70agas22aeld-belyi-118474536/?c=750000000&m=133445566&sr=1&qid=4969ea8d5d1a63f7272ab9633d4f6769&isPromoted=true&ref=shared_link',
      gallery: ['https://vsestiralnie.com/upload/iblock/f7a/ru_washer_wf60f1r1f2wdlp_wf60f1r1f2wdlp_001_front_PD_GALLERY_L_JPG_.png','https://cdn.vsestiralnie.com/upload/iblock/49d/ru_washer_wf60f1r1f2wdlp_wf60f1r1f2wdlp_002_r_perspective_PD_GALLERY_L_JPG_.png'],
      currentIndex: 0
    },

    {
      name: 'Sofa OMR COMPANY',
      description: 'Simple and concise shapes allow the Riviera sofa to look good in any interior.The sofa is absolutely comfortable for daily sleep due to the polyurethane foam filler, and is also reliable in use due to the Eurocook layout mechanism.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/omr-company-divan-prjamoi-0001-obivka-veljur-90h210h75-sm-bezhevyi-103587099/?c=750000000&m=7303005&sr=2&qid=561c553253122931b25c517f24f823e6&isPromoted=true&ref=shared_link',
      gallery: ['https://temryuk.stolplit.ru/upload/resize_cache/iblock/9a2/brch19d41xp1yc20law8l47h0plpnwys/875_700_0/pryamoy_divan_rivera_ekokoga_belaya_1.jpg','https://temryuk.stolplit.ru/upload/resize_cache/iblock/7ea/1ccvxy4pfyskzeq4s7j6yrtfux7yi1da/1750_1400_0/r0000298701-detail.webp',
        'https://temryuk.stolplit.ru/upload/resize_cache/iblock/ac7/az0june977zvzdf502p2ecznid4p9a8i/1750_1400_0/pryamoy_divan_rivera_ekokoga_belaya_4.webp',
        'https://temryuk.stolplit.ru/upload/resize_cache/iblock/c1d/q21jnh3oz9p8tntkjk4mfsimm9f83gmc/1750_1400_0/pryamoy_divan_rivera_ekokoga_belaya_3.webp'],
      currentIndex: 0
    },

    {
      name: 'Mirror',
      description: 'Caplet Oval stainless steel brass frame, mirror with Semicircular Shelf, wall mirror for dressing Table',
      rating: 3,
      link: 'https://kaspi.kz/shop/p/umnoe-zerkalo-773154-60x160-sm-nastennoe-112235731/?c=750000000&sr=1&qid=375cb2f87ed14a723e59b0d85227ae80&ref=shared_link',
      gallery: ['https://s.alicdn.com/@sc04/kf/HTB1NO_XDv5TBuNjSspcq6znGFXae.jpg_720x720q50.jpg','https://s.alicdn.com/@sc04/kf/HTB1NUyWkHsrBKNjSZFpq6AXhFXat.jpg_720x720q50.jpg', 'https://s.alicdn.com/@sc04/kf/HTB14Ue3DAKWBuNjy1zjq6AOypXaL.jpg_720x720q50.jpg'],
      currentIndex: 0
    },

    {
      name: 'Two-wheeled teenage scooter trike SR 2-015-3-B, black',
      description: 'Scooter SR 2-015-3-B adult, aluminum, wheels 2 pcs PU 200mm, light, adjustable.steering wheel 95/105 cm, disc.The brake is black. The material is aluminum + PU, the packaging type is a box.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/aovo-m365-pro-chernyi-100997046/?c=750000000&m=12401034&sr=2&qid=bb8bea53682dfbce3ac6de3b757a291f&isPromoted=true&ref=shared_link',
      gallery: ['https://avatars.mds.yandex.net/i?id=8e0bd815d92b2ede98a0bffbadf68734db387058e12a9ec9-10196407-images-thumbs&n=13','https://igrushki7km.com.ua/image/cache/catalog/sportivnyye-tovary/skeyty/samokat_dlya_vzroslyh_itrike_sr_2_015_3_b_chernyy_144-300x300.jpg',
        'https://igrushki7km.com.ua/image/cache/catalog/sportivnyye-tovary/skeyty/samokat_dlya_vzroslyh_itrike_sr_2_015_3_b_chernyy_155-300x300.jpg',
        'https://igrushki7km.com.ua/image/cache/catalog/sportivnyye-tovary/skeyty/samokat_dlya_vzroslyh_itrike_sr_2_015_3_b_chernyy_376-300x300.jpg'],
      currentIndex: 0
    },

    {
      name: 'Philips Steam Iron 5000 Series, 2600W, SteamGlide Plus Soleplate, Black',
      description: 'Maximum power 3100 watts. Ceramic coating of the sole, providing easy sliding on the fabric',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/zp-532-chernyi-132851348/?c=750000000&m=16424341&sr=2&qid=246430c8b5f30e8986c80ebe7238fdac&isPromoted=true&ref=shared_link',
      gallery: ['https://media.extra.com/s/aurora/100305216_800/Philips-Steam-Iron-5000-Series%2C-2600W%2C-SteamGlide-Plus-Soleplate%2C-Black?locale=en-GB,en-*,*','https://media.extra.com/i/aurora/100305216_100_02?fmt=auto&w=850', 'https://media.extra.com/i/aurora/100305216_100_05?fmt=auto&w=850'],
      currentIndex: 0
    },

    {
      name: 'Micromed 100-900x microscope, in a case',
      description: 'The Micromed 100–900x microscope is a godsend for a young and inquisitive mind. This simple and reliable microscope will help a little scientist immerse himself in the mysterious microcosm and see familiar things from an unusual side. The kit includes a large set for conducting experiments, including micro-preparations, tools for working with samples and an incubator for breeding artemia.',
      rating: 3,
      link: 'https://kaspi.kz/shop/p/levenhuk-rainbow-2l-plus-belyi-100126497/?c=750000000&m=4glaza&sr=1&qid=8c79f7f14176026b52dc24ba70d7ed3e&isPromoted=true&ref=shared_link',
      gallery: ['https://ir-3.ozone.ru/s3/multimedia-p/wc1000/6013533109.jpg','https://ir-3.ozone.ru/s3/multimedia-r/wc1000/6013533111.jpg', 'https://ir-3.ozone.ru/s3/multimedia-m/wc1000/6013533106.jpg'],
      currentIndex: 0
    },

    {
      name: 'Stroller 2 in 1 Adamex Reggio Special Edition Y85',
      description: 'REGGIO SPECIAL EDITION is an exclusive version of the Reggio stroller. The Special edition features an elegant combination of polished frames and delicate fabrics. The frame can be folded to obtain compact dimensions. Thanks to the strollers lining, functionality and simplicity combine in an elegant way. There is an adjustable ventilation hole in the cradle body at the bottom.',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/koljaska-progulochnaja-ining-baby-k313-2pro-chernyi-117807303/?c=750000000&sr=5&qid=1b6a8fb9e45c26c136c4f36e92f8b63a&ref=shared_link',
      gallery: ['https://kinderwood.kz/images/shop/product/p_454_kolyaska-2-v-1-adamex-reggio-special-edition-y85_50815.jpg',],
      currentIndex: 0
    },

    {
      name: 'Larsen Newtone E1510M Treadmill',
      description: 'Larsen Newtone E1510M Treadmill. Type : Electric. Maximum user weight (kg) : 110',
      rating: 2,
      link: 'https://kaspi.kz/shop/p/genau-x30-elektricheskaja-26800031/?c=750000000&m=Fitmaster&sr=1&qid=47a9cccd627ae49a4d4dc0c40b8c1c8e&isPromoted=true&ref=shared_link',
      gallery: ['https://runeco.ru/wa-data/public/shop/products/32/59/85932/images/153691/153691.440@2x.jpeg','https://runeco.ru/wa-data/public/shop/products/32/59/85932/images/153692/153692.440@2x.jpeg', 'https://runeco.ru/wa-data/public/shop/products/32/59/85932/images/153693/153693.440@2x.jpeg'],
      currentIndex: 0
    }
  ];

  shareProduct(link: string, platform: 'whatsapp' | 'telegram'): void {
    const message = encodeURIComponent(`Check out this product: ${link}`);
    const url = platform === 'whatsapp' 
      ? `https://api.whatsapp.com/send?text=${message}`
      : `https://t.me/share/url?url=${link}&text=${message}`;
    window.open(url, '_blank');
  }

  getStarRating(rating: number): string {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  }

  prevImage(product: Product): void {
    product.currentIndex = (product.currentIndex - 1 + product.gallery.length) % product.gallery.length;
  }

  nextImage(product: Product): void {
    product.currentIndex = (product.currentIndex + 1) % product.gallery.length;
  }
}
