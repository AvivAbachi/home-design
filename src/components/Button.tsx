import React, {memo} from 'react';
import style from './Button.module.scss';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {motionHover} from '../services/Motions';

interface props extends React.HTMLAttributes<HTMLElement> {
   link?: string;
   align?: 'left' | 'right' | 'center';
   clean?: boolean;
   border?: boolean;
}

function Button(props: props) {
   const setMargin = () => {
      switch (props.align) {
         case 'right':
            return '0 0 0 auto';
         case 'left':
            return '0 auto 0 0';
         case 'center':
            return '0 auto';
         default:
            return '';
      }
   };
   return (
      <motion.div variants={motionHover} whileHover={'hover'} initial={'initial'} whileTap={'tap'} style={{margin: setMargin()}}>
         {props.link ? (
            <Link className={`${style.button} ${props.clean && style.clean} ${props.border && style.border}`} to={props.link}>
               {props.children}
            </Link>
         ) : (
            <span className={`${style.button} ${props.clean && style.clean} ${props.border && style.border}`}>{props.children}</span>
         )}
      </motion.div>
   );
}
export default memo(Button);
