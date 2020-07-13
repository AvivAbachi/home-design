import React, {useEffect, useContext} from 'react';

import Menu from './components/Menu';
import Footer from './components/Footer';
import {StoreContext} from './services/StoreContext';
import AppRoute from './App.Routes';

function App() {
   const store: {updateDisplay: Function} | any = useContext(StoreContext);

   useEffect(() => {
      window.addEventListener('resize', () => store.updateDisplay());
      return () => window.removeEventListener('resize', () => store.updateDisplay());
   });

   return (
      <>
         <Menu />
         <AppRoute />
         <Footer />
      </>
   );
}
export default React.memo(App);
