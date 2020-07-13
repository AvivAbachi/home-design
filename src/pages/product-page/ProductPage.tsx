import React, {useContext, lazy, Suspense} from 'react';
import SliderProductBox from '../../components/SliderProductBox';
import CardGrid from '../../components/CardGrid';
import InfoBox from '../../components/InfoBox';
import {Helmet} from 'react-helmet';
import style from './ProductPage.module.scss';
import GlobalData from '../../services/GlobalData';
import {StoreContext, display} from '../../services/StoreContext';
import {motion, AnimatePresence} from 'framer-motion';
import {motionFadePage} from '../../services/Motions';
import MenuBreadcrumb from '../../components/MenuBreadcrumb';
import SubHeader from '../../components/SubMenu';

function ProductPage() {
   const store: {display: display} | any = useContext(StoreContext);
   const SliderShop = lazy(() => import('../../components/SliderProduct'));

   return (
      <motion.div variants={motionFadePage} initial={'initial'} animate={'animate'} exit={'exit'} className={'page'} onLoad={() => window.scrollTo(0, 0)}>
         <Helmet>
            <title>{'Home Design - Product Page'}</title>
         </Helmet>
         <AnimatePresence exitBeforeEnter>{store.display !== ('desktop' as display) && <SubHeader />}</AnimatePresence>
         <MenuBreadcrumb />
         <div className={style.product}>
            <div>
               <Suspense fallback={<div>Loading...</div>}>
                  <SliderShop display={store.display} />
               </Suspense>
            </div>
         </div>
         <div className={style.heroGradient} />
         {store.display !== ('desktop' as display) && <SliderProductBox />}
         <InfoBox />
         <div>
            <h2 className={'headline'}>Recommend Product</h2>
            <CardGrid scrollTo={400} product arrayCard={GlobalData.products} link={'/'} name={'products '} />
         </div>
      </motion.div>
   );
}

export default React.memo(ProductPage);
