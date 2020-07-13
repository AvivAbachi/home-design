import React, {ReactNode, ReactFragment, MouseEventHandler} from 'react';
import {Link} from 'react-router-dom';

interface props {
   link?: string;
   className?: string;
   iconClass?: string;
   onClick?: MouseEventHandler;
   blue?: boolean;
   children?: ReactNode | ReactFragment;
}
const LinkShop = (props: props) => {
   return props.link ? (
      <Link onClick={props.onClick} className={props.className ?? props.blue ? 'link linkBlue' : 'link'} to={props.link}>
         {props.iconClass && <i className={props.iconClass} />}
         {props.children}
      </Link>
   ) : (
      <span onClick={props.onClick} className={props.className ?? props.blue ? 'link linkBlue' : 'link'}>
         {props.iconClass && <i className={props.iconClass} />}
         {props.children}
      </span>
   );
};
export default LinkShop;
