import React, {useContext} from 'react';
import style from './SliderProductBox.module.scss';
import Button from './Button';
import ButtonColor from './ButtonColor';
import {FiCircle, FiCheckCircle} from 'react-icons/fi';
import {AiFillStar} from 'react-icons/ai';
import {IoMdCart} from 'react-icons/io';
import {StoreContext, display, colorButton} from '../services/StoreContext';

function ProductBox() {
   const store:
      | {
           display: display;
           assembly: boolean;
           setAssembly: Function;
           quantity: number;
           handelQuantity: Function;
           colorList: colorButton[];
           selectColor: colorButton | undefined;
           handelSelectColor: Function;
        }
      | any = useContext(StoreContext);
   // const [extend, setExtend] = useState(false);
   const assemblyPrice = 25;
   const discount = 10;
   let min = Math.min.apply(
      Math,
      store.colorList.map(function (colorButton: colorButton) {
         return colorButton.price;
      })
   );
   let max = Math.max.apply(
      Math,
      store.colorList.map(function (colorButton: colorButton) {
         return colorButton.price;
      })
   );
   const handelPrice = (price: number, discount: number = 0) => {
      return ((price - 0.01) * (1 - discount / 100) * store.quantity + (store.assembly ? assemblyPrice : 0)).toFixed(2);
   };
   let selectPrice = (discount: number = 0) => {
      return store.selectColor !== undefined ? handelPrice(store.selectColor.price, discount) + '$' : handelPrice(min, discount) + '$-' + handelPrice(max, discount) + '$';
   };
   return (
      <div className={style.productBox}>
         {store.display === ('desktop' as display) && (
            <>
               <div className={style.productHeadline + ' ' + style.row}>
                  <h2>Mainstays</h2>
                  <div>
                     4.3 <AiFillStar className={'star'} />
                  </div>
               </div>
               <div className={style.productSubHeadline + ' ' + style.row}>
                  <h3>Basic Student Desk</h3>
                  <div className={'productID'}>53-703-79</div>
               </div>
            </>
         )}
         <ul className={style.details}>
            <li>Design a functional work environment for your student with the Mainstays Basic Student Desk</li>
            <li>Large work surface accommodates your laptop and important papers</li>
            <li>Use the side bookshelf to keep your books, binders and paperwork within an easy reach</li>
            <li>Center shelf is removable to house your CPU, if needed</li>
            <li>Sturdy metal frame accented by shelving</li>
            <li>Laminated particleboard and metal</li>
            <li>Assembly required</li>
            <li>2 people are required for proper assembly</li>
         </ul>
         {/* {!extend && !props.mobile && (
            <LinkShop blue onClick={() => setExtend(true)}>
               Read More...
            </LinkShop> style={{height: extend || props.mobile ? 'auto' : ''}}
         )} */}
         <div className={style.dimensions}>
            <span> Dimensions:</span>91.40cm x 50.80cm x 76.20cm.
         </div>
         <div className={style.material}>
            <span> Material:</span>Metal, Paper, Powder Coating, PB.
         </div>
         <div className={style.row + ' ' + style.color}>
            <span>{'Color:'}</span>
            {store.colorList.map((colorButton: colorButton, index: number) => (
               <ButtonColor key={'ButtonColor' + index} onClick={() => store.handelSelectColor(colorButton.id)} active={store.selectColor?.id === colorButton.id} color={colorButton.color} />
            ))}
         </div>
         <div className={style.row + ' ' + style.assembly}>
            <span>
               Assembly:
               <span onClick={() => store.setAssembly(!store.assembly)}>
                  {assemblyPrice + '$'}
                  {store.assembly ? <FiCheckCircle /> : <FiCircle />}
               </span>
            </span>
            {store.display !== 'tablte' && (
               <h3>
                  <del>{selectPrice()}</del>
               </h3>
            )}
         </div>
         <div className={style.row + ' ' + style.quantity}>
            <div className={style.row}>
               <span>Quantity</span>
               <div className={style.quantityBtn}>
                  <button disabled={store.quantity <= 1} onClick={() => store.handelQuantity('DEC')}>
                     -
                  </button>
                  {store.quantity}
                  <button disabled={store.quantity >= 9} onClick={() => store.handelQuantity('INC')}>
                     +
                  </button>
               </div>
            </div>
            <div>
               {store.display === ('tablte' as display) && (
                  <h3>
                     <del>{selectPrice()}</del>
                  </h3>
               )}
               <h2>{selectPrice(discount)}</h2>
            </div>
         </div>
         <div className={style.row + ' ' + style.btnList}>
            <Button border>Add to Cart{<IoMdCart />}</Button>
            <Button>Buy Now</Button>
         </div>
      </div>
   );
} // <input type='text' maxLength={1} value={quantity} onInput={(e) => handelQuantity(e)} pattern='[0-9]*' />
export default React.memo(ProductBox);
