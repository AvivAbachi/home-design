import React, {useState} from 'react';
import style from './SliderShop.module.scss';
import Button from './Button';
import PriceBox from './PriceBox';
import GlobalData from '../services/GlobalData';
import Slider from 'react-slick';
import {motion} from 'framer-motion';
import {motionHover} from '../services/Motions';
import {Redirect} from 'react-router-dom';
function ShopSlider(props: {mobile: boolean}) {
   let settings = {arrows: false, dots: true, infinite: true, speed: 1000, slidesToShow: 1, slidesToScroll: 1, draggable: true, swipe: true, touchMove: true};
   return (
      <Slider {...settings} className={style.shopCarousel}>
         {GlobalData.slider.map((slider: slider, index) => (
            <Slide slider={slider} key={index} mobile={props.mobile} />
         ))}
      </Slider>
   );
}
type slider = {
   src: string;
   alt: string;
   price: number;
   sPrice: number;
   header: string;
   subHeader: string;
   caption: string;
};
interface slide {
   slider: slider;
   mobile: boolean;
}
const Slide = React.memo((props: slide) => {
   const [click, setClick] = useState(false);
   return (
      <div className={style.carouselItem}>
         {click && <Redirect to={'/Product'} />}
         <motion.div variants={motionHover} initial={'initial'} whileHover={'hover'} whileTap={'tap'} onTap={() => setClick(true)} className={style.sliderIMG}>
            <img src={props.slider.src} alt={props.slider.alt} />
            <PriceBox price={props.slider.price} sPrice={props.slider.sPrice} />
         </motion.div>
         <div className={style.sliderINFO}>
            <h2>{props.slider.header}</h2>
            <h3>{props.slider.subHeader}</h3>
            <p>{props.slider.caption}</p>
            <Button align={props.mobile ? 'center' : 'right'} link={'/Product'}>
               See More Info
            </Button>
         </div>
      </div>
   );
});
export default React.memo(ShopSlider);
