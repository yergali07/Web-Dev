import { Product } from '../models/product.model';

interface ProductSeed {
  name: string;
  link: string;
  description: string;
  images: string[];
  price: number;
  rating: number;
  categoryId: number;
}

const productSeeds: ProductSeed[] = [
  {
    name: 'Apple iPhone 17 Pro 256GB (Orange)',
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000',
    description: 'Kaspi Магазин - Смартфон Apple iPhone 17 Pro 256Gb NanoSIM+eSIM оранжевый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pdf/p95/64168415.png?format=gallery-large',
    ],
    price: 816_301,
    rating: 4.9,
    categoryId: 1
  },
  {
    name: 'Apple iPhone 13 128GB (Black)',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-nanosim-esim-chernyi-102298404/?c=750000000',
    description: 'Kaspi Магазин - Смартфон Apple iPhone 13 128Gb NanoSIM+eSIM черный в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h3f/64208879517726.jpg?format=gallery-large',
    ],
    price: 353_430,
    rating: 4.8,
    categoryId: 1
  },
  {
    name: 'Samsung Galaxy A07 6GB/128GB (Black)',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000',
    description: 'Kaspi Магазин - Смартфон Samsung Galaxy A07 6 ГБ/128 ГБ черный в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p0c/pd7/61291243.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p61/pd7/61291246.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p44/pd7/61291245.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p28/pd7/61291244.jpg?format=gallery-large',
    ],
    price: 74_880,
    rating: 4.6,
    categoryId: 1
  },
  {
    name: 'Apple iPhone 16 128GB (Black)',
    link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-nanosim-esim-chernyi-123713453/?c=750000000',
    description: 'Kaspi Магазин - Смартфон Apple iPhone 16 128Gb NanoSIM+eSIM черный в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/he0/ha4/87295470764062.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h12/hfe/87295470796830.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hff/h15/87295470829598.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-large',
    ],
    price: 492_900,
    rating: 4.9,
    categoryId: 1
  },
  {
    name: 'Redmi A3X 3GB/64GB (Black)',
    link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000',
    description: 'Kaspi Магазин - Смартфон Redmi A3x 3 ГБ/64 ГБ черный в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h83/h08/86585118720030.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h9a/h1b/86584697651230.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hac/h2e/86584697683998.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h46/h73/86584697716766.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h8d/h97/86584697749534.jpg?format=gallery-large',
    ],
    price: 39_990,
    rating: 4.5,
    categoryId: 1
  },
  {
    name: 'Apple MacBook Air 13 (2020) 8GB/256GB',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
    description: 'Kaspi Магазин - Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-large',
    ],
    price: 439_699,
    rating: 4.9,
    categoryId: 2
  },
  {
    name: 'Thunderobot 911S Core D 15.6 16GB/512GB',
    link: 'https://kaspi.kz/shop/p/thunderobot-911s-core-d-15-6-16-gb-ssd-512-gb-bez-os-jt009k00f-117046774/?c=750000000',
    description: 'Kaspi Магазин - Ноутбук ThundeRobot 911S Core D 15.6" / 16 Гб / SSD 512 Гб / Без ОС / JT009K00F в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h76/h6c/85301691547678.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/ha4/hf8/85301691613214.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h91/h27/85301691678750.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h98/hae/85301691744286.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h7d/hf3/85301691809822.jpg?format=gallery-large',
    ],
    price: 496_983,
    rating: 4.7,
    categoryId: 2
  },
  {
    name: 'Apple MacBook Pro 16 (2021) 32GB/512GB',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-32-gb-ssd-512-gb-macos-z14v0008d-138158355/?c=750000000',
    description: 'Kaspi Магазин - Ноутбук Apple MacBook Pro 16 2021 16.2" / 32 Гб / SSD 512 Гб / macOS / Z14V0008D в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pdd/p7c/36863342.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pf9/p7c/36863343.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p31/p7d/36863345.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h05/he7/79996736962590.jpg?format=gallery-large',
    ],
    price: 699_990,
    rating: 4.9,
    categoryId: 2
  },
  {
    name: 'PWR FU51 15.6 16GB/1TB Win 11 Pro',
    link: 'https://kaspi.kz/shop/p/pwr-fu51-15-6-16-gb-ssd-1024-gb-win-11-pro-fu51-n95-16-1tb-gtx1060-146279369/?c=750000000',
    description: 'Kaspi Магазин - Ноутбук PWR FU51 15.6" / 16 Гб / SSD 1024 Гб / Win 11 Pro / FU51-N95-16/1TB-GTX1060 в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p6c/p90/75027294.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pa4/p90/75027296.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pdd/p90/75027298.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p10/pdb/75027300.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p65/pdb/75027303.jpg?format=gallery-large',
    ],
    price: 280_799,
    rating: 4.6,
    categoryId: 2
  },
  {
    name: 'Lenovo IdeaPad 1 15IJL7 8GB/512GB',
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-1-15ijl7-15-6-8-gb-ssd-512-gb-bez-os-82lx00g9rk-144403511/?c=750000000',
    description: 'Kaspi Магазин - Ноутбук Lenovo IdeaPad 1 15IJL7 15.6" / 8 Гб / SSD 512 Гб / Без ОС / 82LX00G9RK в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p3d/p07/59736581.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p75/p07/59736583.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p91/p07/59736584.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pae/p07/59736585.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pca/p07/59736586.png?format=gallery-large',
    ],
    price: 194_803,
    rating: 4.6,
    categoryId: 2
  },
  {
    name: 'AJAZZ AK820 (Gray)',
    link: 'https://kaspi.kz/shop/p/ajazz-ak820-seryi-114228960/?c=750000000',
    description: 'Kaspi Магазин - Клавиатура Ajazz AK820 серый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pcf/p3b/24830377.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p3a/p93/21403995.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p56/p93/21403996.jpg?format=gallery-large',
    ],
    price: 15_999,
    rating: 4.8,
    categoryId: 3
  },
  {
    name: 'Epomaker x Aula F75 (White)',
    link: 'https://kaspi.kz/shop/p/epomaker-x-aula-f75-belyi-118709353/?c=750000000',
    description: 'Kaspi Магазин - Клавиатура EPOMAKER x AULA F75 белый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p2d/p28/24857744.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h6b/h01/85829328797726.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h44/hd5/85829328863262.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p06/p48/67619158.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p22/p48/67619159.jpg?format=gallery-large',
    ],
    price: 20_363,
    rating: 4.8,
    categoryId: 3
  },
  {
    name: 'Aula F75 Side Printed (Black)',
    link: 'https://kaspi.kz/shop/p/aula-f75-side-printed-chernyi-120134580/?c=750000000',
    description: 'Kaspi Магазин - Клавиатура AULA F75 Side-Printed черный в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p7e/pd2/111262185.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p5b/pd5/111262190.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p04/pd6/111262196.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p1e/pdf/111262204.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pad/pde/111262208.jpg?format=gallery-large',
    ],
    price: 21_997,
    rating: 4.7,
    categoryId: 3
  },
  {
    name: 'Aula Hero 84 HE (White)',
    link: 'https://kaspi.kz/shop/p/aula-hero-84-he-belyi-144514130/?c=750000000',
    description: 'Kaspi Магазин - Клавиатура AULA HERO 84 HE белый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p28/pc7/92686860.bin?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p0c/pc7/92686861.bin?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p21/p17/60121382.jpeg?format=gallery-large',
    ],
    price: 40_899,
    rating: 4.7,
    categoryId: 3
  },
  {
    name: 'Epomaker x Aula F99 (Gray)',
    link: 'https://kaspi.kz/shop/p/epomaker-x-aula-f99-seryi-119709618/?c=750000000',
    description: 'Kaspi Магазин - Клавиатура EPOMAKER X AULA F99 серый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p56/pbf/24861505.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h0d/h0c/86088047919134.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h34/h37/86088047984670.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/h3d/h43/86088048050206.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/hcd/hcf/86088048115742.jpg?format=gallery-large',
    ],
    price: 30_997,
    rating: 4.8,
    categoryId: 3
  },
  {
    name: 'AJAZZ AJ159P MC (White)',
    link: 'https://kaspi.kz/shop/p/ajazz-aj159p-mc-belyi-141562072/?c=750000000',
    description: 'Kaspi Магазин - Мышь Ajazz AJ159P MC белый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pff/pdf/49619366.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p95/pdc/49619367.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p2b/pd9/49619368.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pc2/pd5/49619369.jpeg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pac/p8a/49619370.jpeg?format=gallery-large',
    ],
    price: 11_300,
    rating: 4.7,
    categoryId: 4
  },
  {
    name: 'VXE R1 SE (White)',
    link: 'https://kaspi.kz/shop/p/vxe-r1-se-belyi-116672218/?c=750000000',
    description: 'Kaspi Магазин - Мышь VXE R1 SE+ белый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p11/pfd/65686999.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p11/p0b/65687000.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pf4/p0a/65687001.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p50/p2c/45796063.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p6c/p2c/45796064.png?format=gallery-large',
    ],
    price: 9_406,
    rating: 4.6,
    categoryId: 4
  },
  {
    name: 'ATK Dragonfly A9 SE (White)',
    link: 'https://kaspi.kz/shop/p/atk-dragonfly-a9-se-belyi-143238693/?c=750000000',
    description: 'Kaspi Магазин - Мышь ATK Dragonfly A9 SE белый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pc6/p8c/55597879.jpg?format=gallery-large',
    ],
    price: 12_279,
    rating: 4.7,
    categoryId: 4
  },
  {
    name: 'AJAZZ AJ159 NL (White)',
    link: 'https://kaspi.kz/shop/p/ajazz-aj159-nl-belyi-135324500/?c=750000000',
    description: 'Kaspi Магазин - Мышь Ajazz AJ159 NL белый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p85/p8f/26937472.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pa1/p8f/26937473.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pd9/p8f/26937475.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pf5/p8f/26937476.jpg?format=gallery-large',
    ],
    price: 12_988,
    rating: 4.7,
    categoryId: 4
  },
  {
    name: 'VXE R1 Pro Max (White)',
    link: 'https://kaspi.kz/shop/p/vxe-r1-pro-max-belyi-116672160/?c=750000000',
    description: 'Kaspi Магазин - Мышь VXE R1 PRO MAX белый в рассрочку, кредит, с Kaspi Red или Kaspi Gold. Цены, характеристики, отзывы, доставка по Алматы.',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p6b/pa0/45796334.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p4e/pa0/45796335.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p32/pa0/45796336.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/p16/pa0/45796337.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pfa/p9f/45796338.jpg?format=gallery-large',
    ],
    price: 22_005,
    rating: 4.8,
    categoryId: 4
  }
];

export const PRODUCTS: Product[] = productSeeds.map((seed, index) => ({
  id: index + 1,
  name: seed.name,
  description: seed.description,
  price: seed.price,
  rating: seed.rating,
  image: seed.images[0] ?? "",
  images: [...seed.images],
  link: seed.link,
  likes: 0,
  categoryId: seed.categoryId
}));
