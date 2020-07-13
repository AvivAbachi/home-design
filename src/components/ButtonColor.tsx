import React, {MouseEventHandler} from 'react';
import style from './ButtonColor.module.scss';
import {motion} from 'framer-motion';
import {motionHover} from '../services/Motions';

interface props {
   onClick?: MouseEventHandler<any>;
   color?: string;
   active?: boolean;
}

function ButtonColor(props: props) {
   return (
      <motion.svg
         variants={motionHover}
         initial={'initial'}
         whileHover={!props.active ? 'hover' : ''}
         whileTap={'tap'}
         onClick={props.onClick}
         className={style.buttonColor}
         style={{opacity: props.active ? 0.25 : ''}}>
         <circle cx='50%' cy='50%' r='40%' style={{stroke: props.color}} />
         <circle cx='50%' cy='50%' r='30%' style={{fill: props.color}} />
      </motion.svg>
   );
}
export default React.memo(ButtonColor);
