import React from 'react';
import {ReactComponent as LogoSVG} from '../assets/Logo.svg';
import style from './Logo.module.scss';
import {motion} from 'framer-motion';
import {motionHover} from '../services/Motions';
import {Link} from 'react-router-dom';
function Logo(props: {className?: string}) {
   return (
      <Link to={'/'}>
         <motion.span variants={motionHover} initial={'initial'} whileHover={'hover'} whileTap={'tap'} className={style.logo + ' ' + props.className}>
            <LogoSVG />
            <h2>Home Design</h2>
         </motion.span>
      </Link>
   );
}
export default React.memo(Logo);
