import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {Redirect} from 'react-router-dom';
import style from './N404Page.module.scss';
import {motion} from 'framer-motion';
import {motionFadePage} from '../../services/Motions';

export default function N404Page() {
   const [height, setHeight] = useState(0);
   const [marginTop, setMargin] = useState(96);
   const [redirect, setRedirect] = useState(false);

   useEffect(() => {
      handelHigh();
      timeOut();
      window.addEventListener('resize', handelHigh);
      return () => window.removeEventListener('resize', handelHigh);
   }, []);

   const timeOut = () => setTimeout(() => setRedirect(true), 5000);

   const handelHigh = () => {
      let xHeight = document.querySelector('header')?.clientHeight as number;
      let yHeight = document.querySelector('Footer')?.clientHeight as number;
      setHeight(window.innerHeight - (xHeight + yHeight));
      setMargin(xHeight);
   };

   return (
      <motion.div variants={motionFadePage} initial={'initial'} animate={'animate'} exit={'exit'} className={style.N404Page} style={{height, marginTop}}>
         <Helmet>
            <title>Home Design - Page No Found (Error404)</title>
         </Helmet>
         <h1>We couldn't find that page.</h1>
         <h2>Error 404</h2>
         {redirect && <Redirect to={'/'} />}
      </motion.div>
   );
}
