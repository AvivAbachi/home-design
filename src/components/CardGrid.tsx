import React, {useState, useEffect, useCallback} from 'react';
import style from './CardGrid.module.scss';
import Card, {cardType} from './Card';
import {motion} from 'framer-motion';
import {motionGrid} from '../services/Motions';

interface props {
   arrayCard: cardType[];
   product?: boolean;
   link?: string;
   name: string | number;
   scrollTo: number;
}

function CardGrid(props: props) {
   const [see, setSee] = useState(false);
   const eventScroll = useCallback(() => {
      if (window.scrollY >= props.scrollTo) {
         setSee(true);
         window.removeEventListener('scroll', () => eventScroll());
      }
   }, [props.scrollTo]);
   useEffect(() => {
      setTimeout(() => {
         window.addEventListener('scroll', () => eventScroll());
         eventScroll();
      }, 750);
      return () => window.removeEventListener('scroll', () => eventScroll());
   }, [eventScroll]);
   return (
      <motion.div variants={motionGrid} animate={see ? 'animate' : 'initial'} className={style.grid}>
         {props.arrayCard.map((card: cardType, index) => (
            <Card key={(props.name as string) + index} alt={card.alt} product={props?.product} price={card.price} link={props.link ?? card.link} rate={card.rate} img={card.img} name={card.name} />
         ))}
      </motion.div>
   );
}
export default React.memo(CardGrid);
