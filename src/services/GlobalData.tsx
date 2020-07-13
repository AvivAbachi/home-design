import {cardType} from '../components/Card';

import SliderIMG1 from '../image/home-page/slide1.webp';

import specialPriceImg1 from '../image/home-page/specialPrice1.webp';
import specialPriceImg2 from '../image/home-page/specialPrice2.webp';
import specialPriceImg3 from '../image/home-page/specialPrice3.webp';
import specialPriceImg4 from '../image/home-page/specialPrice4.webp';

import CategoryIMG1 from '../image/home-page/category/Armoires & Wardrobes.webp';
import CategoryIMG2 from '../image/home-page/category/Beds.webp';
import CategoryIMG3 from '../image/home-page/category/Bookcases.webp';
import CategoryIMG4 from '../image/home-page/category/Chairs.webp';
import CategoryIMG5 from '../image/home-page/category/Coffee Tables.webp';
import CategoryIMG6 from '../image/home-page/category/Dining Room Sets.webp';
import CategoryIMG7 from '../image/home-page/category/Dressers.webp';
import CategoryIMG8 from '../image/home-page/category/Kitchen & Appliances.webp';
import CategoryIMG9 from '../image/home-page/category/Sofas & Couches.webp';
import CategoryIMG10 from '../image/home-page/category/TV Stands.webp';

import productIMG1 from '../image/product-page/34679add-f337-4ef7-aacc-7d22b582e6a1.webp';
import productIMG2 from '../image/product-page/0f7e7aad-e1dd-4ca5-b86a-7d75ac28831f.webp';
import productIMG3 from '../image/product-page/30e47c06-7f57-41da-ae80-42d0b6c67f34.webp';
import productIMG4 from '../image/product-page/47abb7e8-7ca2-4634-8b1f-e42525a2182e.webp';
import productIMG5 from '../image/product-page/566ee31c-f92a-4c15-9d0f-b806191506a4.webp';
import productIMG6 from '../image/product-page/749ced26-ccf0-47f8-b24f-ba6332156f22.webp';
import productIMG7 from '../image/product-page/22871a48-5aa6-4f83-8e98-dd2efb6823c6.webp';
import productIMG8 from '../image/product-page/dd59306c-f961-4578-8746-75d18dc985ac.webp';
import productIMG9 from '../image/product-page/0afcaf58-2c3f-4fb7-aee8-06ac4486fe52.webp';
import productIMG10 from '../image/product-page/9391ffa3-2cb4-4a66-b4eb-eb2f3284dfa6.webp';

const categories: string[] = [
   'Armoires & Wardrobes',
   'Baby Furniture',
   'Bar Tables & Chairs',
   'Bathroom',
   'Beds & Mattresses',
   'Bookcases & Shelving Units',
   'Café Furniture',
   'Chairs',
   'Cookware & Tableware',
   'Display & Storage Cabinets',
   'Dressers & Storage Drawers',
   'Home Décor',
   'Home Textiles',
   'Kids Furniture',
   'Kitchen & Appliances',
   'Outdoor Furniture',
   'Room Dividers',
   'Rugs',
   'Sideboards, Buffets & Sofa Tables',
   'Smart Home',
   'Sofas & Armchairs',
   'Storage & Organization',
   'Tables & Desks',
   'TV & Media Furniture',
];
const slider: any[] = [
   {
      id: 1,
      src: SliderIMG1,
      alt: 'Sofa',
      header: 'KARLSTAD',
      subHeader: 'Sofa, Knisa',
      caption:
         'light gray Seat cushions filled with high resilience foam and polyester fiber wadding provides great seating comfort. The cover is easy to keep clean as it is removable and can be machine washed.',
      price: 350,
      sPrice: 300,
   },
   {
      id: 2,
      src: specialPriceImg2,
      alt: 'Table',
      header: 'Fynfield Farmhouse',
      subHeader: 'Cocktail Table w/ Shelf',
      caption:
         'Black metal frames wrap around a spacious shelf, creating a floating look in a mixed-material silhouette. Place rustic décor on the glass tabletop, while magazines and board games slide underneath for the two-tier storage solution your farmhouse design needs.',
      price: 300,
      sPrice: 255,
   },
   {
      id: 3,
      src: specialPriceImg3,
      alt: 'Bookcase',
      header: 'Oslo Bookcase',
      subHeader: '2 Drawers 1 Door in White and Oak',
      caption: 'Alluding a retro modern charm, our popular Oslo collection has real Scandinavian appeal and style.',
      price: 200,
      sPrice: 150,
   },
];
const specialPrice: any[] = [
   {id: 1, img: specialPriceImg1, alt: 'Armchair', color: 'rgb(252,252,102)', price: 250, sPrice: 200, offsetX: -10 + 'px', offsetY: 20 + 'px'},
   {id: 2, img: specialPriceImg2, alt: 'Cocktail Table', color: 'rgb(127,185,245)', price: 200, sPrice: 165},
   {id: 3, img: specialPriceImg3, alt: 'Bookcase', color: 'rgb(252,127,113)', price: 215, sPrice: 175, offsetY: '-15%'},
   {id: 4, img: specialPriceImg4, alt: 'Outside Table whit 2 Chear', color: 'rgb(135,203,133)', price: 100, sPrice: 75, offsetY: '-15%'},
];
const categoriesHome: cardType[] = [
   {id: 1, name: 'Armoires & Wardrobes', img: CategoryIMG1, alt: 'Armoires & Wardrobes'},
   {id: 2, name: 'Beds', img: CategoryIMG2, alt: 'Beds'},
   {id: 3, name: 'Bookcases', img: CategoryIMG3, alt: 'Bookcases'},
   {id: 4, name: 'Chairs', img: CategoryIMG4, alt: 'Chairs'},
   {id: 5, name: 'Coffee Tables', img: CategoryIMG5, alt: 'Coffee Tables'},
   {id: 6, name: 'Dining Room Sets', img: CategoryIMG6, alt: 'Dining Room Sets'},
   {id: 7, name: 'Dressers', img: CategoryIMG7, alt: 'Dressers'},
   {id: 8, name: 'Kitchen & Appliances', img: CategoryIMG8, alt: 'Kitchen & Appliances'},
   {id: 9, name: 'Sofas & Couches', img: CategoryIMG9, alt: 'Sofas & Couches'},
   {id: 10, name: 'TV Stands', img: CategoryIMG10, alt: 'TV Stands'},
];
const products: cardType[] = [
   {id: 1, name: 'Student Desk', img: productIMG1, price: 85, rate: 4.6, alt: 'Desk'},
   {id: 2, name: 'Costway L-Shaped', img: productIMG2, price: 160, rate: 3.9, alt: 'Desk'},
   {id: 3, name: 'Perkins Desk', img: productIMG3, price: 80, rate: 3.1, alt: 'Desk'},
   {id: 4, name: 'Sumpter Park Cube', img: productIMG4, price: 40, rate: 4.2, alt: 'Desk'},
   {id: 5, name: 'Rustic Country Desk', img: productIMG5, price: 160, rate: 4.5, alt: 'Desk'},
   {id: 6, name: 'Espresso L Shaped', img: productIMG6, price: 100, rate: 3.3, alt: 'Desk'},
   {id: 7, name: '6 Cube Storage', img: productIMG7, price: 60, rate: 4.1, alt: 'Desk'},
   {id: 8, name: 'Modular L-Shape', img: productIMG8, price: 125, rate: 4.2, alt: 'Desk'},
   {id: 9, name: 'Athena Desk', img: productIMG9, price: 130, rate: 4.8, alt: 'Desk'},
   {id: 10, name: 'Smart Basics Desk', img: productIMG10, price: 105, rate: 4.1, alt: 'Desk'},
];
const randomComment: string[] = [
   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugit ratione quia facere repellat iste natus ipsa, placeat nihil maxime ad autem vitae molestiae, ea itaque explicabo magni neque animi!',
   'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum et tempore aliquid modi iusto nesciunt fuga natus? Fuga, quidem praesentium! Eaque iure laudantium ducimus sunt non, eos ratione atque hic dolorem aut possimus est saepe, autem rerum? Porro ut facere iusto eveniet ipsam! Eligendi incidunt unde pariatur illum sequi veniam.',
   'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptatibus omnis amet eos ipsam animi iste tempore dicta voluptates sequi, vitae qui nihil officia, possimus ea pariatur corporis illo odit blanditiis beatae voluptate quae incidunt unde! Debitis praesentium magni rerum? Autem, at optio! Error quo magni atque repellendus fuga exercitationem molestiae incidunt praesentium eaque dignissimos? Mollitia sed deleniti repudiandae voluptatem ea molestiae blanditiis accusantium eos veritatis voluptatum, consectetur tempore dolorem repellendus labore quia, sint similique!',
   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima praesentium doloremque nemo, error animi nostrum consequuntur, alias tempora non neque illum maxime eaque est fugiat a enim cumque eum architecto repellat. Aperiam fuga voluptas saepe reiciendis assumenda modi. Modi eligendi laboriosam repellendus laudantium nesciunt nulla quisquam! Inventore optio ex blanditiis nobis possimus libero adipisci! Quos temporibus illum praesentium ut magni maxime architecto veritatis? Officia et ex necessitatibus nesciunt cupiditate natus vero omnis a commodi explicabo? Voluptas qui natus expedita quaerat vitae ducimus id soluta, sapiente provident recusandae, neque corrupti iure pariatur. Odit, eos? Accusamus tempora ea veniam quod enim.',
];

const GlobalData = {categories, slider, specialPrice, categoriesHome, products, randomComment};
export default GlobalData;
