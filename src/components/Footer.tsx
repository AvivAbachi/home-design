import React, {useContext} from 'react';
import style from './Footer.module.scss';
import SearchBar from './SearchBar';
import {StoreContext, display} from '../services/StoreContext';
import LinkShop from './LinkShop';
import Logo from './Logo';
import {IoLogoFacebook, IoMdCall, IoLogoYoutube, IoLogoWhatsapp, IoMdMail} from 'react-icons/io';

function Footer() {
   const store: {display: display; updateDisplay: Function} | any = useContext(StoreContext);
   return (
      <footer>
         <div className={style.footerMain + ' ' + style.row}>
            <div className={style.col}>
               <Logo className={style.footerLogo} />
               <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
               <div className={style.icons}>
                  <IoMdCall className={'svgLink'} />
                  <IoMdMail className={'svgLink'} />
                  <IoLogoYoutube className={'svgLink'} />
                  <IoLogoWhatsapp className={'svgLink'} />
                  <IoLogoFacebook className={'svgLink'} />
               </div>
            </div>
            <div className={style.col}>
               <h4>Shopping online</h4>
               <LinkShop>Order Status</LinkShop>
               <LinkShop>Shipping and Delivery</LinkShop>
               <LinkShop>Returns</LinkShop>
               <LinkShop>Payment Options</LinkShop>
               <LinkShop>Contact US</LinkShop>
            </div>
            <div className={style.col}>
               <h4>Information</h4>
               <LinkShop>Find a Store</LinkShop>
               <LinkShop>Newsletter</LinkShop>
               <LinkShop>Become a Member</LinkShop>
               <LinkShop>Site Feedback</LinkShop>
            </div>
            {store.display !== ('mobile' as display) && (
               <div className={style.col}>
                  <h4>Contact</h4>
                  <LinkShop>Email: Email@Gmail.com</LinkShop>
                  <LinkShop>Phone: 123-456-789</LinkShop>
               </div>
            )}
            {store.display !== ('desktop' as display) && <SearchBar display={store.display} />}
         </div>
         <div className={style.credit}>Design by AvivAbachi@Gmail.com</div>
      </footer>
   );
}
export default React.memo(Footer);
