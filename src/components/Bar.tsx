import React from 'react';
import style from './Bar.module.scss';
import {AiFillStar} from 'react-icons/ai';

interface bar {
   rate: number;
   rateTotal: number;
   total: number;
}

function Bar(props: bar) {
   const width = ((props.rateTotal as number) / (props.total as number)) * 100;
   return (
      <div className={style.barBox}>
         <p>
            {props.rate} <AiFillStar className={'star'} />
         </p>
         <div className={style.bar}>
            <div className={style.barInner} style={{width: width + '%'}} />
         </div>
         <p>{props.rateTotal}</p>
      </div>
   );
}
export default React.memo(Bar);
