export interface Product{
    id: number;
    name: string;
    description: string;
    rating: number;
    price: string;
    image: string;
    kaspiLink: string;
    category: string;
    likes: number;
  }
  
  export const products: Product[]   = [
    {
      id: 1,
      name: 'iPhone 13',
      description: '128Gb Midnight черный',
      rating: 4.5,
      price: '289 716 ₸',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA8sauBhB3EiwAruTRJtM1u-30KJH6PiKQx5tLnyUAkczJRQmD4z92UgN1FoC6fp0dG2BizRoCGAEQAvD_BwE',
      category: "Phone",
      likes: 0 
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      description: '256GB Phantom Gray',
      rating: 4.7,
      price: '349 999 ₸',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/h6b/63967892439070.jpg?format=gallery-large',
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-s21-8-gb-128-gb-seryi-100936560/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_kaspi_brand_desktop&gclid=CjwKCAiA8sauBhB3EiwAruTRJtM1u-30KJH6PiKQx5tLnyUAkczJRQmD4z92UgN1FoC6fp0dG2BizRoCGAEQAvD_BwE',
      category: "Phone",
      likes: 0 
    },
    {
      id: 3,
      name: 'Google Pixel 6',
      description: '128GB Stormy Black',
      rating: 4.3,
      price: '259 999 ₸',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8f/h77/64323163488286.jpg?format=gallery-medium',
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-6-8-128gb-zelenyi-102811172/',
      category: "Phone",
      likes: 0 
    },
    {
      id: 4,
      name: 'Xiaomi Redmi Note 10 Pro',
      description: '128GB Onyx Gray',
      rating: 4.0,
      price: '159 999 ₸',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hed/hde/64482874654750.jpg?format=gallery-medium',
      kaspiLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-sinii-107220924/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_xiaomi_desktop&gclid=CjwKCAiA8sauBhB3EiwAruTRJtKjVFRw8PJwqh7OlMPwqY9uqaEyy4SPcif7Ii4qMdYrNfRtdnBBNBoCyYUQAvD_BwE',
      category: "Phone",
      likes: 0 
    },
    {
      id: 5,
      name: 'OnePlus 9',
      description: '256GB Arctic Sky',
      rating: 3.9,
      price: '359 999 ₸',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h0d/64108113100830.jpg?format=gallery-medium',
      kaspiLink: 'https://kaspi.kz/shop/p/oneplus-9-12-gb-256-gb-chernyi-101457999/?c=433220100',
      category: "Phone",
      likes: 0 
    },
    {
      id: 6,
      name: 'Apple Watch Series 7',
      description: '45mm Blue Aluminum Case',
      rating: 4.7,
      price: '369 999 ₸',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha9/h32/63902846746654.jpg?format=gallery-medium',
      kaspiLink: 'https://kaspi.kz/shop/p/apple-watch-series-7-45-mm-chernyi-102582811/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_gadgets_smart_watches_apple_desktop&gclid=CjwKCAiA8sauBhB3EiwAruTRJiFQNlamxPqRcPrMDhOXqpjqBJZ7JNmsHq7bwlasslXMQPnW3mfC1RoCwZwQAvD_BwE',
      category: "Phone",
      likes: 0 
    },
    {
      id: 7,
      name: 'Sony PlayStation 5',
      description: 'PS5 Console',
      rating: 5.0,
      price: '699 999 ₸',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h59/63948652249118.jpg?format=gallery-medium',
      kaspiLink: 'https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/',
      category: "Gaming consoles",
      likes: 0
    },
    {
      id: 8,
      name: 'Samsung QLED Q80A',
      description: '65" 4K UHD Smart TV',
      rating: 4.2,
      price: '649 999 ₸',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he3/h4d/63992141119518.jpg?format=gallery-medium',
      kaspiLink: 'https://kaspi.kz/shop/p/samsung-qe55q80aauxce-140-sm-serebristyi-101831155/',
      category: "Others",
      likes: 0
    },
    {
      id: 9,
      name: 'Bose QuietComfort 45',
      description: 'Wireless Noise Cancelling Headphones',
      rating: 4.8,
      price: '129 999 ₸',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hae/h01/64317739466782.jpg?format=gallery-medium',
      kaspiLink: 'https://kaspi.kz/shop/p/bose-quietcomfort-45-belyi-103563221/',
      category: "Others",
      likes: 0
    },
    {
      id: 10,
      name: 'DJI Mini 2',
      description: 'Fly More Combo',
      rating: 4.3,
      price: '359 999 ₸',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbe/ha8/63949232439326.jpg?format=gallery-medium',
      kaspiLink: 'https://kaspi.kz/shop/p/dji-dji-mini-2-seryi-100789415/',
      category: "Others",
      likes: 0
    },
    {
      id: 11,
      name: "Garmin Forerunner 945",
      description: "GPS Running Smartwatch with Music and Advanced Training Features",
      rating: 4.8,
      price: "499 999 ₸",
      image: "https://resources.cdn-kaspi.kz/img/m/p/hd4/h5a/63824514580510.jpg?format=gallery-medium",
      kaspiLink: "https://kaspi.kz/shop/p/garmin-forerunner-945-chernyi-chernyi-5100776/",
      category: "Smart Watches",
      likes: 0
    },
    {
      id: 12,
      name: "Fitbit Versa 3",
      description: "Health & Fitness Smartwatch with GPS, Heart Rate, Voice Assistant & Music\n",
      rating: 4.6,
      price: "259 999 ₸",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h16/h08/63772983361566.jpg?format=gallery-medium",
      kaspiLink: "https://kaspi.kz/shop/p/fitbit-versa-chernyi-5100596/",
      category: "Smart Watches",
      likes: 0
    },
    {
      id: 13,
      name: "Huawei Watch GT 3",
      description: "Stylish Smartwatch with 14-Day Battery Life, Fitness & Health Tracking",
      rating: 4.5,
      price: "349 999 ₸",
      image: "https://resources.cdn-kaspi.kz/img/m/p/hf7/h73/64366700724254.jpg?format=gallery-medium",
      kaspiLink: "https://kaspi.kz/shop/p/huawei-watch-gt-3-mil-b19-chernyi-103284272/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_huawei_desktop&gclid=CjwKCAiArfauBhApEiwAeoB7qA5E57ueUHPGRgo3B4pEAItSSnkjONBMPQc87lvyIjT_j8FE5-UpKxoCW88QAvD_BwE",
      category: "Smart Watches",
      likes: 0
    },
    {
      id: 14,
      name: "Xbox Series X",
      description: "Powerful gaming console with fast load times, 4K gaming, and backward compatibility",
      rating: 4.8,
      price: "749 999 ₸",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h26/ha1/63982141407262.jpg?format=gallery-medium",
      kaspiLink: "https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_huawei_desktop&gclid=CjwKCAiArfauBhApEiwAeoB7qA5E57ueUHPGRgo3B4pEAItSSnkjONBMPQc87lvyIjT_j8FE5-UpKxoCW88QAvD_BwE",
      category: "Gaming consoles",
      likes: 0
    },
    {
      id: 15,
      name: "Nintendo Switch OLED Model",
      description: "Handheld and home gaming system with vibrant OLED screen and versatile gameplay options",
      rating: 4.7,
      price: "749 999 ₸",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h21/h49/64374883188766.jpg?format=gallery-medium",
      kaspiLink: "https://kaspi.kz/shop/p/nintendo-switch-oled-belyi-102927428/?utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_huawei_desktop&gclid=CjwKCAiArfauBhApEiwAeoB7qA5E57ueUHPGRgo3B4pEAItSSnkjONBMPQc87lvyIjT_j8FE5-UpKxoCW88QAvD_BwE",
      category: "Gaming consoles",
      likes: 0
    },
    {
      id: 15,
      name: "Xbox Series S",
      description: "Next-generation gaming console with high performance in a sleek, compact design",
      rating: 4.6,
      price: "549 999 ₸",
      image: "https://resources.cdn-kaspi.kz/img/m/p/h8b/hf5/63937788182558.jpg?format=gallery-medium",
      kaspiLink: "https://kaspi.kz/shop/p/xbox-series-s-belyi-100793537/",
      category: "Gaming consoles",
      likes: 0
    },
  
  
  
  ]
  