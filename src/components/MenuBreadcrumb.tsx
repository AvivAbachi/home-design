import React from 'react';
import style from './MenuBreadcrumb.module.scss';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {motionSlideDown} from '../services/Motions';
interface props {
   Path?: string;
}

export default function MenuBreadcrumb(props: props) {
   const path = props.Path ? props.Path : '/Category/Sub-Category/Product Name';
   return (
      <motion.div variants={motionSlideDown} transition={{type: 'tween'}} initial={'initial'} animate={'animate'} exit={'exit'} className={style.breadcrumb}>
         {path.split('/').map((item: string, index: number) => {
            switch (index) {
               case 0:
                  let a = {title: 'Home', key: 'BreadcrumbItem' + index, link: '/'};
                  return BreadcrumbItem(a);
               default:
                  let b = {title: item, key: 'BreadcrumbItem' + index};
                  return BreadcrumbItem(b);
               case path.split('/').length - 1:
                  let c = {title: item, key: 'BreadcrumbItem' + index, last: true};
                  return BreadcrumbItem(c);
            }
         })}
      </motion.div>
   );
}
interface BreadcrumbItem {
   title: string;
   key?: string;
   last?: boolean;
   link?: string;
}
function BreadcrumbItem(props: BreadcrumbItem) {
   return (
      <div className={props.last ? style.item + ' ' + style.last : style.item} key={props.key}>
         {props.last ? props.title : props.link ? <Link to={props.link}>{props.title}</Link> : <span>{props.title}</span>}
      </div>
   );
}
