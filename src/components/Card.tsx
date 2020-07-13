import React, {useState} from 'react';
import style from './Card.module.scss';
import {motion} from 'framer-motion';
import {Redirect} from 'react-router-dom';
import {motionCard} from '../services/Motions';
import {AiFillStar} from 'react-icons/ai';

export type cardType = {id?: number; name: string; img: string; price?: number; rate?: number; link?: string; product?: boolean; alt?: string};

function Card(props: cardType) {
   const [Click, setClick] = useState(false);
   return (
      <motion.div variants={motionCard} initial={'initial'} whileHover={'hover'} whileTap={'tap'} onTap={() => setClick(true)} className={style.card + ' ' + (props.product ? style.cardProduct : '')}>
         <div className={style.cardIMG}>
            {props.rate && props.product && (
               <p>
                  {props.rate} <AiFillStar className={'star'} />
               </p>
            )}
            <img src={props.img} alt={props.alt} />
         </div>
         <div className={style.cardTitle}>
            <h3>{props.name}</h3> {props.product && props.price && <h4>{props.price - 0.01 + '$'}</h4>}
         </div>
         {props.link && Click && <Redirect to={props.link} />}
      </motion.div>
   );
}
export default React.memo(Card);
