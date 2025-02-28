import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'


interface Product {
  name: string;
  description: string;
  rating: number;
  link: string;
  gallery: string[];
  currentIndex: number;
  likes: number;
  category: string;
}

@Component({
  selector: 'app-products',
  styleUrls: ['./products.component.css'],
  imports:[CommonModule, FormsModule],
  template: `
    <div class="search-bar">
      <label for="categorySelect">Select Category:</label>
      <select id="categorySelect" [(ngModel)]="selectedCategory">
        <option value="">All Categories</option>
        <option *ngFor="let category of categories" [value]="category.name">{{ category.name }}</option>
      </select>
    </div>

    <div class="products-container">
      <div *ngFor="let product of filteredProducts()" class="product-card">
        <h3><a [href]="product.link" target="_blank">{{ product.name }}</a></h3>
        <p>{{ product.description }}</p>
        <p class="rating">{{ getStarRating(product.rating) }}</p>
        <div class="carousel">
          <button (click)="prevImage(product)" class="carousel-btn">&lt;</button>
          <img [src]="product.gallery[product.currentIndex]" class="carousel-image" />
          <button (click)="nextImage(product)" class="carousel-btn">&gt;</button>
        </div>
        <button (click)="shareProduct(product.link, 'whatsapp')">Share on WhatsApp</button>
        <button (click)="shareProduct(product.link, 'telegram')">Share on Telegram</button>
        <p>Likes: {{ product.likes }}</p>
        <button (click)="likeProduct(product)" class="like-button" style="color: red; border: none; background: none; font-size: 1.5em;">❤</button>
      </div>
    </div>
  `
})


export class ProductsComponent {
  selectedCategory: string = '';
  categories = [
    { name: 'Electronics', products: [
      { name: 'Apple iPhone 12 Pro Max', description: 'The iPhone 12 ProMax smartphone has a huge 6.7-inch Super Retina SDR display with a resolution of 2778=1284 pixels. On it, any content looks vivid and truly exciting. The front panel is reliably protected by a heavy-duty Ceramic Shield coating created by high-temperature crystallization, which minimizes the risk of damage to the device when falling.',
        rating: 5, link: 'https://kaspi.kz/shop/p/apple-iphone-12-pro-max-256gb-seryi-100658022/?c=750000000&sr=1&qid=421bb71f02e6045b671797b633868764&ref=shared_link',
        gallery: ['https://a.allegroimg.com/original/116a76/b41616a242198cf6c35e6875d128/Smartfon-Apple-iPhone-12-Pro-Max-WYBOR-KOLOROW', 'https://avatars.mds.yandex.net/i?id=be1124743ea7df66d033f2216edc0aa4631adfd5679bf5f1-2368479-images-thumbs&n=13'],
        currentIndex: 0, likes: 0, category: 'Electronics' },
      { name: 'Laptop', description: 'Lenovo V330-14ARR Ryzen 5 2500U/4Gb/SSD128Gb/AMD Radeon Vega 8/14&quot;/TN/FHD', rating: 4, link: 'https://kaspi.kz/shop/p/hp-laptop-15-fc0072ci-15-6-8-gb-ssd-512-gb-bez-os-a19wcea-131090992/?c=750000000&sr=1&qid=24689f302fb54961de5e272ee455c3d3&ref=shared_link', gallery: ['https://img.tehnomaks.ru/img/prod/full/1569814291_3.jpg', 'https://img.tehnomaks.ru/img/prod/full/b6ba48031e9f6c8c68f00f129e2391c379777b92.jpg'], currentIndex: 0, likes: 0, category: 'Electronics' },
      { name: 'Headphones', description: 'Reloop RHP-20 is a premium professional headphone for DJs and studios. Modern aesthetics and design are combined with high-end sound, acoustically balanced for professional use.', rating: 5, link: 'https://kaspi.kz/shop/p/bose-quietcomfort-sc-headphones-chernyi-135303194/?c=750000000&m=3229001&sr=5&qid=d808c8aee0a0bd889eb70b64516b89cb&isPromoted=true&ref=shared_link', gallery: ['https://avatars.mds.yandex.net/i?id=181db5fec370a33ccc6cb23fbe1fe65b55614a9284d4a1e2-12652472-images-thumbs&n=13', 'https://impult.ru/preview/r/456x456/upload/iblock/26d/26d07e45e26f859e89bebb3b54010ade.jpg'], currentIndex: 0, likes: 0, category: 'Electronics' },
      { name: 'Smartwatch', description: 'This watch has a large 1.4-inch square display, 30 days of battery life, 12 sports modes, Bluetooth 5.0 and other functions.', rating: 4, link: 'https://kaspi.kz/shop/p/smart-watch-q12-chernyi-chernyi-116326225/?c=750000000&sr=1&qid=964b6b2ff7b9fd93edb067bb50de2377&ref=shared_link', gallery: ['https://s4-goods.ozstatic.by/480/416/32/101/101032416_0_Umnie_chasi_Haylou_Smart_Watch_LS02.jpg'], currentIndex: 0, likes: 0, category: 'Electronics' },
      { name: 'Tablet', description: 'High-performance tablet Ipad new version only for Ipadkidz', rating: 3, link: 'https://kaspi.kz/shop/p/apple-ipad-air-2024-wi-fi-11-11-djuim-8-gb-128-gb-seryi-119778165/?c=750000000&sr=4&qid=baaca1a67ec9ef6d1bff6fd7d0b7a55e&ref=shared_link', gallery: ['https://cdn.multitronic.fi/images/prod/D/9/xTHZ64603GL-9.jpg.pagespeed.ic.8y1APbN74b.webp', 'https://cdn.multitronic.fi/images/prod/D/9/xTHZ64603GL-8.jpg.pagespeed.ic.kqK9cUsVG6.webp'], currentIndex: 0, likes: 0, category: 'Electronics' }
    ]},
    { name: 'Furniture', products: [
      { name: 'Mirror', description: 'Caplet Oval stainless steel brass frame, mirror with Semicircular Shelf, wall mirror for dressing Table', rating: 5, link: 'https://kaspi.kz/shop/p/umnoe-zerkalo-773154-60x160-sm-nastennoe-112235731/?c=750000000&sr=1&qid=375cb2f87ed14a723e59b0d85227ae80&ref=shared_link', gallery: ['https://s.alicdn.com/@sc04/kf/HTB1NO_XDv5TBuNjSspcq6znGFXae.jpg_720x720q50.jpg', 'https://s.alicdn.com/@sc04/kf/HTB1NUyWkHsrBKNjSZFpq6AXhFXat.jpg_720x720q50.jpg', 'https://s.alicdn.com/@sc04/kf/HTB14Ue3DAKWBuNjy1zjq6AOypXaL.jpg_720x720q50.jpg'], currentIndex: 0, likes: 0, category: 'Furniture' },
      { name: 'Sofa OMR COMPANY', description: 'Simple and concise shapes allow the Riviera sofa to look good in any interior.The sofa is absolutely comfortable for daily sleep due to the polyurethane foam filler, and is also reliable in use due to the Eurocook layout mechanism.', rating: 5, link: 'https://kaspi.kz/shop/p/omr-company-divan-prjamoi-0001-obivka-veljur-90h210h75-sm-bezhevyi-103587099/?c=750000000&m=7303005&sr=2&qid=561c553253122931b25c517f24f823e6&isPromoted=true&ref=shared_link',
        gallery: ['https://temryuk.stolplit.ru/upload/resize_cache/iblock/9a2/brch19d41xp1yc20law8l47h0plpnwys/875_700_0/pryamoy_divan_rivera_ekokoga_belaya_1.jpg', 'https://temryuk.stolplit.ru/upload/resize_cache/iblock/7ea/1ccvxy4pfyskzeq4s7j6yrtfux7yi1da/1750_1400_0/r0000298701-detail.webp',
          'https://temryuk.stolplit.ru/upload/resize_cache/iblock/ac7/az0june977zvzdf502p2ecznid4p9a8i/1750_1400_0/pryamoy_divan_rivera_ekokoga_belaya_4.webp',
          'https://temryuk.stolplit.ru/upload/resize_cache/iblock/c1d/q21jnh3oz9p8tntkjk4mfsimm9f83gmc/1750_1400_0/pryamoy_divan_rivera_ekokoga_belaya_3.webp'],
        currentIndex: 0, likes: 0, category: 'Furniture' },
      { name: 'Chest', description: 'Equipment White chest of drawers - 1 piece Accessories - 1 set Roller guides - 1 set Drawer divider - 3 pcs Assembly instructions', rating: 4, link: 'https://kaspi.kz/shop/p/komod-mebels-kz-7-138-4x40x77-sm-belyi-117335566/?c=750000000&sr=1&qid=533bab7ee06b3ced2bcf7714a950e855&ref=shared_link', gallery: ['https://ir-3.ozone.ru/s3/multimedia-a/wc1000/6759704026.jpg', 'https://ir-3.ozone.ru/s3/multimedia-1-d/wc1000/7153131757.jpg', 'https://ir-3.ozone.ru/s3/multimedia-1-y/wc1000/7152911566.jpg'], currentIndex: 0, likes: 0, category: 'Furniture' },
      { name: 'Bag chair', description: 'A bag chair is cool and modern furniture for any apartment. You will enjoy the comfort every evening in front of the TV or on the balcony, and your friends will appreciate the convenience when they come to visit you to play on the console.', rating: 4, link: 'https://kaspi.kz/shop/p/oblako-puf-kz-grusha-m-chehol-oksford-krasnyi-100733466/?c=750000000&m=Oblakopuf&sr=2&qid=95301c0f3cbc75c88e756ca87768c1b7&isPromoted=true&ref=shared_link', gallery: ['https://avatars.mds.yandex.net/i?id=d58c2fb094e95d52072c2fee58331320193f56de-12722919-images-thumbs&n=13'], currentIndex: 0, likes: 0, category: 'Furniture' },
      { name: 'Gaming Chair', description: 'The Drifting series chairs look great not only at esports tournaments, but are also perfect for home and work. As proof, let mention the radio station "Mayak" and "Vesti FM".', rating: 3, link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-atlanta-mebel-gc-1050-chernyi-krasnyi-110203637/?c=750000000&sr=1&qid=7c8d5b939269cb98c9661f2dd3256fc0&ref=shared_link', gallery: ['https://dxracer-chair.ru/upload/iblock/54c/54c5bd5584c8015ebd55585b11dbe3d7.jpg', 'https://dxracer-chair.ru/upload/iblock/4c8/4c89063f4313ef3e847ecf556463a2c1.jpg'], currentIndex: 0, likes: 0, category: 'Furniture' }
    ]},
    { name: 'Home Appliances', products: [
      { name: 'Vacuum Cleaner', description: 'A stylish vacuum cleaner with a cyclone filter for collecting dirt allows cleaning without bags — and, accordingly, their periodic replacement. Effective dust insulation inside the appliance, a reliable HEPA filter that blocks allergens and microorganisms, is an excellent choice for people with allergies.', rating: 5, link: 'https://kaspi.kz/shop/p/thomas-drybox-aquabox-cat-dog-oranzhevyi-chernyi-belyi-3701254/?c=750000000&sr=3&qid=837294cace1400b8250d75ea92fb7b24&ref=shared_link', gallery: ['https://spb.hausdorf.ru/upload/thumb/catdm/iblock/db0/foto_pylesos_vc2101scy_1.jpg', 'https://spb.hausdorf.ru/upload/thumb/catdm/iblock/f83/foto_pylesos_vc2101scy_2.jpg', 'https://spb.hausdorf.ru/upload/thumb/catdm/iblock/661/foto_pylesos_vc2101scy_3.jpg'], currentIndex: 0, likes: 0, category: 'Home Appliances' },
      { name: 'Iron', description: 'Maximum power 3100 watts. Ceramic coating of the sole, providing easy sliding on the fabric', rating: 4, link: 'https://kaspi.kz/shop/p/zp-532-chernyi-132851348/?c=750000000&m=16424341&sr=2&qid=246430c8b5f30e8986c80ebe7238fdac&isPromoted=true&ref=shared_link', gallery: ['https://media.extra.com/s/aurora/100305216_800/Philips-Steam-Iron-5000-Series%2C-2600W%2C-SteamGlide-Plus-Soleplate%2C-Black?locale=en-GB,en-*,*', 'https://media.extra.com/i/aurora/100305216_100_02?fmt=auto&w=850', 'https://media.extra.com/i/aurora/100305216_100_05?fmt=auto&w=850'], currentIndex: 0, likes: 0, category: 'Home Appliances' },
      { name: 'Microwave', description: 'Main Features Type: Microwaves (Solo), Grill, Convection Microwave oven capacity: 28 liters Inner wall coating: Bioceramic Plate diameter: 320mm', rating: 4, link: 'https://kaspi.kz/shop/p/samsung-ms23f302tas-serebristyi-chernyi-2900022/?c=750000000&m=133445566&sr=4&qid=139dd62ff2d3950a5e43e9e6102d6351&isPromoted=true&ref=shared_link', gallery: ['https://avatars.mds.yandex.net/i?id=e12f88e6c88d30f803a63b66e7a14ee047527eaeb1895b10-12631411-images-thumbs&n=13', 'https://img.5element.by/import/images/ut/goods/good_71e3d41e-8a2a-11e6-80df-005056842056/good_img_75bf2458-7760-11e7-80eb-005056842056_600.jpg'], currentIndex: 0, likes: 0, category: 'Home Appliances' },
      { name: 'Treadmill', description: 'Larsen Newtone E1510M Treadmill. Type : Electric. Maximum user weight (kg) : 110', rating: 2, link: 'https://kaspi.kz/shop/p/genau-x30-elektricheskaja-26800031/?c=750000000&m=Fitmaster&sr=1&qid=47a9cccd627ae49a4d4dc0c40b8c1c8e&isPromoted=true&ref=shared_link', gallery: ['https://runeco.ru/wa-data/public/shop/products/32/59/85932/images/153691/153691.440@2x.jpeg', 'https://runeco.ru/wa-data/public/shop/products/32/59/85932/images/153692/153692.440@2x.jpeg', 'https://runeco.ru/wa-data/public/shop/products/32/59/85932/images/153693/153693.440@2x.jpeg'], currentIndex: 0, likes: 0, category: 'Home Appliances' },
      { name: 'Washing Machine', description: 'A simple and useful solution for the most convenient use of the washing machine is the internal illumination of the drum, which facilitates its loading and unloading. No more forgotten clothes after washing — everything is in the palm of your hand.', rating: 4, link: 'https://kaspi.kz/shop/p/samsung-ww70agas22aeld-belyi-118474536/?c=750000000&m=133445566&sr=1&qid=4969ea8d5d1a63f7272ab9633d4f6769&isPromoted=true&ref=shared_link', gallery: ['https://vsestiralnie.com/upload/iblock/f7a/ru_washer_wf60f1r1f2wdlp_wf60f1r1f2wdlp_001_front_PD_GALLERY_L_JPG_.png', 'https://cdn.vsestiralnie.com/upload/iblock/49d/ru_washer_wf60f1r1f2wdlp_wf60f1r1f2wdlp_002_r_perspective_PD_GALLERY_L_JPG_.png'], currentIndex: 0, likes: 0, category: 'Home Appliances' }
    ]},
    { name: 'Leisure', products: [
      { name: 'Book "The Little Prince"', description: 'Antoine de Saint-Exupery is a pilot, journalist and soldier, philosopher and inventor, but above all, one of the most popular writers in the world. His books, written with boundless love for life, are published everywhere, and the philosophical fairy tale "The Little Prince" has been translated into all major languages of the planet.', rating: 5, link: 'https://kaspi.kz/shop/p/sent-ekzjuperi-a-de-k-shkentai-shahzada-100687429/?c=750000000&sr=17&qid=4fe59e77282886851a102a57d911d7b6&ref=shared_link', gallery: ['https://main-cdn.sbermegamarket.ru/big2/hlr-system/1688681/100023062771b1.jpg'], currentIndex: 0, likes: 0, category: 'Leisure' },
      { name: 'Guitar', description: 'Fender FA-135CE Concert V2 Black electric and acoustic guitar, color black', rating: 5, link: 'https://kaspi.kz/shop/p/navarrez-nv122-special-dark-moon-3-4-chernyi-107581712/?c=750000000&m=MusicAvenue&sr=1&qid=2f753171ab9db87dba3f9b12a7af1db7&isPromoted=true&ref=shared_link', gallery: ['https://avatars.mds.yandex.net/get-mpic/4977172/2a0000018fca3605ffb6642e6e7c23697ea0/orig'], currentIndex: 0, likes: 0, category: 'Leisure' },
      { name: 'Scooter', description: 'Scooter SR 2-015-3-B adult, aluminum, wheels 2 pcs PU 200mm, light, adjustable.steering wheel 95/105 cm, disc.The brake is black. The material is aluminum + PU, the packaging type is a box.', rating: 4,link: 'https://kaspi.kz/shop/p/aovo-m365-pro-chernyi-100997046/?c=750000000&m=12401034&sr=2&qid=bb8bea53682dfbce3ac6de3b757a291f&isPromoted=true&ref=shared_link',
        gallery: ['https://avatars.mds.yandex.net/i?id=8e0bd815d92b2ede98a0bffbadf68734db387058e12a9ec9-10196407-images-thumbs&n=13', 'https://igrushki7km.com.ua/image/cache/catalog/sportivnyye-tovary/skeyty/samokat_dlya_vzroslyh_itrike_sr_2_015_3_b_chernyy_144-300x300.jpg',
          'https://igrushki7km.com.ua/image/cache/catalog/sportivnyye-tovary/skeyty/samokat_dlya_vzroslyh_itrike_sr_2_015_3_b_chernyy_155-300x300.jpg',
          'https://igrushki7km.com.ua/image/cache/catalog/sportivnyye-tovary/skeyty/samokat_dlya_vzroslyh_itrike_sr_2_015_3_b_chernyy_376-300x300.jpg'],
        currentIndex: 0, likes: 0, category: 'Leisure' },
      { name: 'Stroller', description: 'REGGIO SPECIAL EDITION is an exclusive version of the Reggio stroller. There is an adjustable ventilation hole in the cradle body at the bottom.', rating: 3, link: 'https://kaspi.kz/shop/p/koljaska-progulochnaja-ining-baby-k313-2pro-chernyi-117807303/?c=750000000&sr=5&qid=1b6a8fb9e45c26c136c4f36e92f8b63a&ref=shared_link', gallery: ['https://kinderwood.kz/images/shop/product/p_454_kolyaska-2-v-1-adamex-reggio-special-edition-y85_50815.jpg',], currentIndex: 0, likes: 0, category: 'Leisure' }
    ]}
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

  likeProduct(product: Product): void {
    product.likes++;
  }

  filteredProducts() {
    let products = this.categories.flatMap(category => category.products);
    
    if (this.selectedCategory) {
      products = products.filter(product => product.category === this.selectedCategory);
    }

    return products.sort((a, b) => a.name.localeCompare(b.name));
  }
}