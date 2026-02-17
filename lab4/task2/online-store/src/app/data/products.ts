import { Product } from '../models/product.model';

const iphone16ProMaxSilverImages = [
  'https://resources.cdn-kaspi.kz/img/m/p/h74/ha7/87295492882462.png?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/h98/hb6/87295492915230.png?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/haa/hc9/87295492947998.png?format=gallery-large'
];

const airpodsPro2Images = [
  'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-large'
];

const newYearMugImages = [
  'https://resources.cdn-kaspi.kz/img/m/p/pf5/pdb/11825251.png?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/pd9/pdb/11825252.png?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/pf5/pdb/11825251.png?format=gallery-medium'
];

const baasSneakersImages = [
  'https://resources.cdn-kaspi.kz/img/m/p/p3b/p81/6743695.jpg?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/p57/p81/6743696.jpg?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/p73/p81/6743697.jpg?format=gallery-large'
];

const wideHouseMattressImages = [
  'https://resources.cdn-kaspi.kz/img/m/p/hc2/h55/64599406313502.jpg?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/hc2/h55/64599406313502.jpg?format=gallery-medium',
  'https://resources.cdn-kaspi.kz/img/m/p/hc2/h55/64599406313502.jpg?format=gallery-small'
];

const galaxyA55Images = [
  'https://resources.cdn-kaspi.kz/img/m/p/h14/h12/85428764606494.png?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/h7c/hf1/85428764672030.png?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/ha3/h7f/85428764737566.png?format=gallery-large'
];

const casualSuitImages = [
  'https://resources.cdn-kaspi.kz/img/m/p/h43/h8b/86842796277790.jpg?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/h3e/he6/86842796343326.jpg?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/hae/h59/86842796408862.jpg?format=gallery-large'
];

const dinastiaRingImages = [
  'https://resources.cdn-kaspi.kz/img/m/p/hdb/h71/85605047631902.jpg?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/hdb/h71/85605047631902.jpg?format=gallery-medium',
  'https://resources.cdn-kaspi.kz/img/m/p/hdb/h71/85605047631902.jpg?format=gallery-small'
];

const froschMudFlapsImages = [
  'https://resources.cdn-kaspi.kz/img/m/p/p83/pab/20311550.jpg?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/p83/pab/20311550.jpg?format=gallery-medium',
  'https://resources.cdn-kaspi.kz/img/m/p/p83/pab/20311550.jpg?format=gallery-small'
];

const jblCharge5Images = [
  'https://resources.cdn-kaspi.kz/img/m/p/hd5/h9c/64513785331742.jpg?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/h10/h8d/64513788084254.jpg?format=gallery-large',
  'https://resources.cdn-kaspi.kz/img/m/p/h54/hf5/64513790738462.jpg?format=gallery-large'
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Apple iPhone 16 Pro Max 256GB (Silver)',
    description:
      'Premium iPhone with a large display, high-end camera block, and flagship performance. It is designed for demanding everyday use, content creation, and smooth multitasking. The model is suited for users who want top Apple hardware.',
    price: 749_990,
    rating: 4.9,
    image: iphone16ProMaxSilverImages[0],
    images: iphone16ProMaxSilverImages,
    link: 'https://kaspi.kz/shop/p/smartfon-apple-iphone-16-pro-max-256gb-zolotistyj-123890752/'
  },
  {
    id: 2,
    name: 'Apple AirPods Pro 2 (Wireless MagSafe Case)',
    description:
      'Popular Apple earbuds with active noise cancellation and a compact charging case. They provide stable wireless connection and comfortable daily listening. This model is a practical choice for calls, music, and mobile usage.',
    price: 129_990,
    rating: 4.8,
    image: airpodsPro2Images[0],
    images: airpodsPro2Images,
    link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/'
  },
  {
    id: 3,
    name: 'New Year Mug 300 ml (Glass-Ceramic)',
    description:
      'Decorative holiday mug with festive print and 300 ml volume. It is suitable for tea, coffee, and seasonal gifting. The product can be used as a practical cup or as a themed gift item.',
    price: 2_990,
    rating: 4.6,
    image: newYearMugImages[0],
    images: newYearMugImages,
    link: 'https://kaspi.kz/shop/p/smartfon-samsung-galaxy-a16-8-gb-256-gb-seryi-131031915/'
  },
  {
    id: 4,
    name: 'BAAS PLOA React X Sneakers (White/Green)',
    description:
      'Casual sneakers with sporty design for everyday wear. They provide a lightweight profile and a modern street-style look. The model fits users who want comfortable shoes for city walking and daily outfits.',
    price: 54_990,
    rating: 4.6,
    image: baasSneakersImages[0],
    images: baasSneakersImages,
    link: 'https://kaspi.kz/shop/p/planetarnyi-mikser-centek-ct-1145-belyi-122120096/'
  },
  {
    id: 5,
    name: 'WIDE HOUSE ORRO-O Mattress 195x220x19 cm',
    description:
      'Large mattress designed for home comfort and daily sleeping support. It has a layered internal structure and a viscose cover. The size is suitable for spacious bedrooms and full-size beds.',
    price: 329_990,
    rating: 4.8,
    image: wideHouseMattressImages[0],
    images: wideHouseMattressImages,
    link: 'https://kaspi.kz/shop/p/smartfon-apple-iphone-13-128gb-midnight-104410253/'
  },
  {
    id: 6,
    name: 'Samsung Galaxy A55 5G 8GB/256GB (Lilac)',
    description:
      'Modern Samsung smartphone with a vivid display and balanced performance for daily apps. It offers enough memory for multitasking and media use. The model is a practical choice for users who need a reliable mid-range device.',
    price: 199_990,
    rating: 4.7,
    image: galaxyA55Images[0],
    images: galaxyA55Images,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-sirenevyi-117420262/'
  },
  {
    id: 7,
    name: 'Casual Suit (Gray)',
    description:
      'Two-piece casual outfit in gray color for everyday wear. The style is suitable for relaxed city looks, content shooting, and daily comfort. The product focuses on practical fit and a simple modern silhouette.',
    price: 24_990,
    rating: 4.4,
    image: casualSuitImages[0],
    images: casualSuitImages,
    link: 'https://kaspi.kz/shop/p/besprovodnoi-mikrofon-remax-k9-seryi-122537655/'
  },
  {
    id: 8,
    name: 'DINASTIA Ring 025841-1102 (Gold, Zirconia)',
    description:
      'Gold-tone ring decorated with zirconia stones and a slim elegant profile. It is suitable as an everyday accessory or gift. The model is designed to complement both classic and casual outfits.',
    price: 8_990,
    rating: 4.3,
    image: dinastiaRingImages[0],
    images: dinastiaRingImages,
    link: 'https://kaspi.kz/shop/p/elektricheskii-chainik-arg-q-2202-belyi-117983916/'
  },
  {
    id: 9,
    name: 'Frosch Rear Mud Flaps for BAIC BJ40 (2023)',
    description:
      'Automotive accessory set designed to protect the rear body area from dirt and water spray. It helps keep the vehicle cleaner during wet and dusty driving conditions. The item is intended for BAIC BJ40 model compatibility.',
    price: 389_990,
    rating: 4.7,
    image: froschMudFlapsImages[0],
    images: froschMudFlapsImages,
    link: 'https://kaspi.kz/shop/p/smartfon-apple-iphone-16e-128gb-belyi-133486955/'
  },
  {
    id: 10,
    name: 'JBL Charge 5 Portable Speaker (Green-Brown)',
    description:
      'Portable Bluetooth speaker with strong battery life and powerful sound output. It is suitable for home listening and outdoor use. The rugged body makes it practical for travel and everyday audio playback.',
    price: 84_990,
    rating: 4.8,
    image: jblCharge5Images[0],
    images: jblCharge5Images,
    link: 'https://kaspi.kz/shop/p/jbl-jbl-charge-5-zeleno-korichnevyi-105663665/'
  }
];
