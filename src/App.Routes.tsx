import React, {lazy, Suspense} from 'react';
import {Redirect, Route, Switch, useLocation} from 'react-router-dom';
import homePage from './pages/home-page/HomePage';
import N404Page from './pages/n404-page/N404Page';
import {AnimatePresence} from 'framer-motion';

function AppRoute() {
   const location = useLocation();
   const productPage = lazy(() => import('./pages/product-page/ProductPage'));
   return (
      <Suspense fallback={<div>Loading...</div>}>
         <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
               <Route exact path='/404' component={N404Page} />
               <Route exact path='/Product' component={productPage} />
               <Route exact path='/' component={homePage} />
               <Route component={() => <Redirect to='/404' />} />
            </Switch>
         </AnimatePresence>
      </Suspense>
   );
}
export default React.memo(AppRoute);
