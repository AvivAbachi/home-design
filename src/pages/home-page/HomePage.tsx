import React, {useContext, lazy, Suspense} from 'react';
import {Helmet} from 'react-helmet';
import styles from './HomePage.module.scss';
import CircleItem from '../../components/CircleItem';
import GlobalData from '../../services/GlobalData';
import {StoreContext, display} from '../../services/StoreContext';
import CardGrid from '../../components/CardGrid';
import {motion} from 'framer-motion';
import {motionFadePage} from '../../services/Motions';
function HomePage() {
   const store: {display: display} | any = useContext(StoreContext);
   const SliderShop = lazy(() => import('../../components/SliderShop'));

   return (
      <motion.div variants={motionFadePage} initial={'initial'} animate={'animate'} exit={'exit'} className={'page'} onLoad={() => window.scrollTo(0, 0)}>
         <Helmet>
            <title>{'Home Design - Home Page'}</title>
         </Helmet>
         <div className={styles.hero}>
            <Suspense fallback={<div>Loading...</div>}>
               <SliderShop mobile={store.display === ('mobile' as display)} />
            </Suspense>
         </div>
         <div className={styles.heroGradient} />
         <div>
            <h2 className={'headline'}>Special price</h2>
            <div className={styles.specialPrice}>
               {GlobalData.specialPrice.map((product, index) => {
                  switch (index) {
                     case store.display === ('mobile' as display) ? 4 : 3:
                        return null;
                     default:
                        return (
                           <CircleItem
                              key={'Circle ' + product.id}
                              alt={product.alt}
                              price={product.price}
                              sPrice={product.sPrice}
                              color={product.color}
                              width={product.width}
                              img={product.img}
                              offsetX={product.offsetX}
                              offsetY={product.offsetY}
                              link={'/Product'}
                           />
                        );
                  }
               })}
            </div>
         </div>
         <div>
            <h2 className={'headline'}>Categories</h2>
            <CardGrid scrollTo={store.display === ('mobile' as display) ? 0 : 900} name={'categories'} arrayCard={GlobalData.categoriesHome} link={'/Product'} />
         </div>
      </motion.div>
   );
}
export default React.memo(HomePage);
