import React, {useState} from 'react';
import PriceBox from './PriceBox';
import style from './CircleItem.module.scss';
import {motion} from 'framer-motion';
import {motionHover} from '../services/Motions';
import {Redirect} from 'react-router-dom';

interface props {
   img?: string;
   alt?: string;
   link: string;
   color?: string;
   price: number;
   sPrice: number;
   width?: number;
   offsetX?: number;
   offsetY?: number;
}

function CircleItem(props: props) {
   const [click, setClick] = useState(false);
   return (
      <motion.div variants={motionHover} initial={'initial'} whileHover={'hover'} whileTap={'tap'} onTap={() => setClick(true)} className={style.circle}>
         <div className={style.circleInner} style={{background: props.color}}>
            {click && <Redirect to={props.link} />}
            <img src={props.img} alt={props.alt} style={{marginTop: props.offsetY, marginLeft: props.offsetX}} />
            <PriceBox price={props.price} sPrice={props.sPrice} className={style.priceBoxFix} />
         </div>
      </motion.div>
   );
}
export default React.memo(CircleItem);
