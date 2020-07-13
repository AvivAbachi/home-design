import React, {useState, useContext} from 'react';
import style from './Menu.module.scss';
import Logo from './Logo';
import SearchBar from './SearchBar';
import {StoreContext, display} from '../services/StoreContext';
import {motion, AnimatePresence} from 'framer-motion';
import LinkShop from './LinkShop';
import {motionHamburger, motionFade} from '../services/Motions';
import {AiOutlineUser, AiOutlineShoppingCart, AiOutlineShopping, AiOutlineUnorderedList} from 'react-icons/ai';

function Menu() {
   const [mobileMenu, setmobileMenu] = useState(false);
   const store: {display: display; updateDisplay: Function} | any = useContext(StoreContext);
   return (
      <header>
         <nav>
            <Logo />
            {store.display === ('desktop' as display) && <SearchBar display={store.display as display} />}
            {store.display !== ('mobile' as display) && <Desktop />}

            {store.display === ('mobile' as display) && (
               <>
                  <MobileButton setmobileMenu={setmobileMenu} mobileMenu={mobileMenu} />
                  <AnimatePresence exitBeforeEnter>{mobileMenu && <Mobile setmobileMenu={setmobileMenu} />}</AnimatePresence>
               </>
            )}
         </nav>
      </header>
   );
}
export default React.memo(Menu);
const MobileButton = (props: {setmobileMenu: Function; mobileMenu: boolean}) => {
   return (
      <motion.div
         variants={motionHamburger.hamburger}
         whileHover={'hover'}
         whileTap={'tap'}
         initial={!props.mobileMenu ? 'open' : 'close'}
         animate={props.mobileMenu ? 'open' : 'close'}
         className={style.hamburgerMenu}
         onClick={() => props.setmobileMenu(!props.mobileMenu)}>
         <motion.i variants={motionHamburger.top} />
         <i />
         <motion.i variants={motionHamburger.bottom} />
      </motion.div>
   );
};

const Desktop = () => {
   return (
      <div className={style.menuDesktop}>
         <AiOutlineUser className={'svgLink'} />
         <AiOutlineShoppingCart className={'svgLink'} />
         <AiOutlineShopping className={'svgLink'} />
         <AiOutlineUnorderedList className={'svgLink'} />
      </div>
   );
};
const Mobile = (props: {setmobileMenu: Function}) => {
   return (
      <motion.div variants={motionFade} exit={'exit'} initial={'initial'} animate={'animate'} className={style.menuMobile} onClick={() => props.setmobileMenu(false)}>
         <LinkShop onClick={() => props.setmobileMenu(false)}>
            <AiOutlineUser />
            User
         </LinkShop>
         <LinkShop onClick={() => props.setmobileMenu(false)}>
            <AiOutlineShoppingCart />
            Shopping Cart
         </LinkShop>
         <LinkShop onClick={() => props.setmobileMenu(false)}>
            <AiOutlineShopping />
            Order
         </LinkShop>
         <LinkShop onClick={() => props.setmobileMenu(false)}>
            <AiOutlineUnorderedList />
            Categories
         </LinkShop>
      </motion.div>
   );
};
