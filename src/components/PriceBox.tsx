import React from 'react';
import style from './PriceBox.module.scss';
interface props {
   className?: string;
   price: number;
   sPrice: number;
   link?: string;
}

function PriceBox(props: props) {
   return (
      <div className={`${style.priceBox} ${props.className}`}>
         <del>{props.price - 0.01 + '$'}</del>
         <span>{props.sPrice - 0.01 + '$'}</span>
         <svg>
            <circle cx="50%" cy="50%" r="49%" />
         </svg>
      </div>
   );
}
export default React.memo(PriceBox);
