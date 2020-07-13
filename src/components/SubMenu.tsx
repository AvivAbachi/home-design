import React from 'react';
import {motion} from 'framer-motion';
import {motionSlideDown} from '../services/Motions';
import {AiFillStar} from 'react-icons/ai';
import style from './SubMenu.module.scss';
function SubHeader() {
   return (
      <motion.div variants={motionSlideDown} transition={{delay: 0.2, type: 'tween'}} initial={'initial'} animate={'animate'} exit={'exit'} className={style.subHeader}>
         <h2>
            Mainstays
            <div>
               4<AiFillStar className={'star'} />
            </div>
         </h2>
         <h3>
            Basic Student Desk
            <div className={'productID'}>53-703-79</div>
         </h3>
      </motion.div>
   );
}
export default SubHeader;
