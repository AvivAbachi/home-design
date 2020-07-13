import React, {useState} from 'react';
import style from './SliderProduct.module.scss';
import Slider from 'react-slick';
import SliderProductBox from './SliderProductBox';
import {display} from '../services/StoreContext';
import {motion} from 'framer-motion';
import {motionHover} from '../services/Motions';

import DeskIMG1 from '../image/product-page/desk/12795411.webp';
import DeskIMG2 from '../image/product-page/desk/23547755.webp';
import DeskIMG3 from '../image/product-page/desk/88895746.webp';
import DeskIMG4 from '../image/product-page/desk/64820336.webp';
import DeskIMG5 from '../image/product-page/desk/10349766.webp';
import DeskIMG6 from '../image/product-page/desk/77174273.webp';

function ProductSlider(props: {display: display}) {
   const productIMGS = [DeskIMG1, DeskIMG2, DeskIMG3, DeskIMG4, DeskIMG5, DeskIMG6];
   const [nav1, setNav1]: [any, Function] = useState();
   const [nav2, setNav2]: [any, Function] = useState();
   let settingsCarousel = {
      slidesToShow: 1,
      arrows: true,
      infinite: true,
      speed: 500,
      draggable: true,
      swipe: true,
      fade: true,
      touchMove: true,
      asNavFor: nav2,
      dots: false,
   };
   let settingsGallery = {
      arrows: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 500,
      centerMode: true,
      swipe: true,
      vertical: props.display !== 'mobile',
      verticalSwiping: props.display !== 'mobile',
      asNavFor: nav1,
      focusOnSelect: true,
   };
   return (
      <>
         <Slider className={style.carousel} ref={(carousel) => setNav1(carousel)} {...settingsCarousel}>
            {productIMGS.map((carouselItem, index) => (
               <img src={carouselItem} alt={''} className={style.carouselItem} key={'carousel-item-' + index} />
            ))}
         </Slider>
         <Slider className={props.display === 'mobile' ? style.galleryMobile : style.gallery} ref={(gallery) => setNav2(gallery)} {...settingsGallery}>
            {productIMGS.map((galleryItem, index) => (
               <motion.img variants={motionHover} initial={'initial'} whileHover={'hover'} whileTap={'tap'} className={style.galleryItem} src={galleryItem} alt={''} key={'gallery-item-' + index} />
            ))}
         </Slider>
         {props.display === 'desktop' && <SliderProductBox />}
      </>
   );
}
export default React.memo(ProductSlider);
