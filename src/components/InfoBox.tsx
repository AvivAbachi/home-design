import React, {useState, useEffect, useCallback, useContext, ReactNode, ReactFragment} from 'react';
import style from './InfoBox.module.scss';
import Bar from './Bar';
import {Scrollbars} from 'react-custom-scrollbars';
import GlobalData from '../services/GlobalData';
import Comment, {comment} from './Comment';
import LinkShop from './LinkShop';
import {motion, AnimatePresence} from 'framer-motion';
import {motionHover, motionFade} from '../services/Motions';
import {StoreContext, display} from '../services/StoreContext';
import {AiFillStar} from 'react-icons/ai';
import {FiCheckCircle, FiChevronDown, FiChevronUp} from 'react-icons/fi';

type infoType = 'Reviews' | 'Product Delivery' | 'Warranty & Returns' | 'Assembly & documents';
type timeType = 'Overall' | '4 Week' | '6 Months';

const rate = [840, 341, 124, 49, 84];
const rateTotal = rate.reduce((a, b) => a + b, 0);
const rateAvg = ((rate[0] * 5 + rate[1] * 4 + rate[2] * 3 + rate[3] * 2 + rate[4]) / rateTotal).toFixed(1);
const rateHeight = rate.reduce(function (a, b) {
   return Math.max(a, b);
});
const rateing = {rate, rateTotal, rateAvg, rateHeight};

// interface props {
//    mobile: boolean;
// }

function InfoBox() {
   const store: {display: display} | any = useContext(StoreContext);

   const [infoTab, setInfoTab] = useState<infoType>('Reviews');
   const [isDropDown, SetDropDown] = useState(false);
   const [isVerified, setVerified] = useState(false);
   const [timeFilter, setTimeFilter] = useState<timeType>('Overall');
   const [comments, setComments] = useState<comment[]>([] as comment[]);
   const [filterComment, setFilterComment] = useState<comment[]>([] as comment[]);

   const setTab = (tab: infoType) => {
      setInfoTab(tab);
      SetDropDown(false);
      setVerified(false);
      setTimeFilter('Overall');
   };

   const filterComments = useCallback(() => {
      let _filterComments = comments;
      let dayFilter: number;
      let today = new Date();
      today.setFullYear(2020);
      switch (timeFilter) {
         case 'Overall':
            dayFilter = 0;
            break;
         case '4 Week':
            dayFilter = today.getTime() - 2592000000;
            break;
         case '6 Months':
            dayFilter = today.getTime() - 15552000000;
            break;
      }
      _filterComments = _filterComments?.filter((comment: comment) => comment.date.getTime() > dayFilter);
      if (isVerified) _filterComments = _filterComments?.filter((comment: comment) => comment.verified === true);
      setFilterComment(_filterComments);
   }, [comments, isVerified, timeFilter]);

   const fetchComment = useCallback(() => {
      fetch(`https://randomuser.me/api/?results=10&inc=name,picture&nat=us`)
         .then((res) => res.json())
         .then((result) =>
            result.results.map((comment: comment, index: number) => {
               let newDate = new Date();
               newDate.setFullYear(2020);
               newDate.setMonth(Math.round(Math.random() * newDate.getMonth() + 1));
               newDate.setDate(Math.round(Math.random() * (30 - 1) + 1));
               comment.key = index;
               comment.rate = Math.round(Math.random() * (5 - 3) + 3);
               comment.date = newDate;
               comment.verified = Math.random() > 0.4;
               comment.commentText = GlobalData.randomComment[Math.round(Math.random() * 3)];
               return comment;
            })
         )
         .then((result: comment[]) => setComments(result));
   }, []);

   useEffect(() => fetchComment(), [fetchComment]);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   useEffect(() => filterComments(), [comments, isVerified, timeFilter]);

   useEffect(() => {
      if (store.display !== ('desktop' as display)) {
         setVerified(false);
         setTimeFilter('Overall');
      }
   }, [store.display]);

   return (
      <div className={style.info}>
         {store.display !== ('mobile' as display) ? (
            <InfoTabSelector infoTab={infoTab} setTab={setTab} />
         ) : (
            <DropDown isDropDown={isDropDown} infoTab={infoTab} SetDropDown={SetDropDown} setTab={setTab} />
         )}
         <AnimatePresence exitBeforeEnter>
            {infoTab === 'Reviews' && <ReviewTab tab={{rateing, timeFilter, isVerified, filterComment, setTimeFilter, setVerified}} display={store.display} />}
            {infoTab === 'Warranty & Returns' && <Warranty />}
            {infoTab === 'Product Delivery' && <Delivery />}
            {infoTab === 'Assembly & documents' && <Assembly />}
         </AnimatePresence>
      </div>
   );
}

function DropDown(props: {isDropDown: boolean; infoTab: infoType; SetDropDown: Function; setTab: Function}) {
   return (
      <div className={style.dropDown}>
         <motion.div variants={motionHover} initial={'initial'} whileHover={'hover'} whileTap={'tap'} className={style.buttonDropDown} onClick={() => props.SetDropDown(!props.isDropDown)}>
            {props.infoTab} {props.isDropDown ? <FiChevronUp /> : <FiChevronDown />}
         </motion.div>
         <AnimatePresence exitBeforeEnter>
            {props.isDropDown && (
               <motion.div variants={motionFade} initial={'initial'} animate={'animate'} exit={'exit'} className={style.innerDropDown} onMouseLeave={() => props.SetDropDown(!props.isDropDown)}>
                  <div>
                     <button onClick={() => props.setTab('Reviews')}>Reviews</button>
                     <button onClick={() => props.setTab('Product Delivery')}>Product Delivery</button>
                     <button onClick={() => props.setTab('Warranty & Returns')}>Warranty & Returns</button>
                     <button onClick={() => props.setTab('Assembly & documents')}>Assembly & documents</button>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}
interface Selector {
   name?: string;
   defaultChecked?: boolean;
   currentTab: infoType | timeType;
   onClick: HTMLLabelElement | MouseEvent | any;
   tab: infoType | timeType;
   id?: string;
}
const Selector = React.memo((props: Selector) => {
   return (
      <label id={props.id} onClick={() => props.onClick()} className={props.currentTab === props.tab ? style.active : ''}>
         <input type='radio' name={props.name} value={props.tab} /> {props.tab}
      </label>
   );
});
const Indcaitor = (props: {id: string}) => {
   const [widthSelect, setWidthSelect] = useState(document.querySelector('#' + props.id)?.clientWidth);
   const [leftSelect, setLeftSelect] = useState(document.querySelector('#' + props.id)?.getBoundingClientRect().x);
   const [Resize, setResize] = useState(false);
   const update = (id: string) => {
      setLeftSelect(document.querySelector('#' + id)?.getBoundingClientRect().x);
      setWidthSelect(document.querySelector('#' + id)?.clientWidth);
   };
   useEffect(() => {
      update(props.id);
      window.addEventListener('resize', () => update(props.id));
      window.removeEventListener('resize', () => update(props.id));
   });
   useEffect(() => setResize(false), [props.id]);
   return (
      <motion.div onAnimationComplete={() => setResize(true)} animate={{left: leftSelect, width: widthSelect}} transition={Resize ? {type: 'tween', duration: 0} : {}} className={style.indcaitor} />
   );
};

const InfoTabSelector = React.memo((props: {infoTab: infoType; setTab: Function}) => {
   const [id, setID] = useState('IDRev');
   const handelClick = (tab: string, id: string) => {
      props.setTab(tab);
      setID(id);
   };
   return (
      <>
         <div className={style.tabSelector}>
            <Selector id={'IDRev'} name={'info'} tab={'Reviews'} currentTab={props.infoTab} onClick={() => handelClick('Reviews', 'IDRev')} />
            <Selector id={'IDPro'} name={'info'} tab={'Product Delivery'} currentTab={props.infoTab} onClick={() => handelClick('Product Delivery', 'IDPro')} />
            <Selector id={'IDWarr'} name={'info'} tab={'Warranty & Returns'} currentTab={props.infoTab} onClick={() => handelClick('Warranty & Returns', 'IDWarr')} />
            <Selector id={'IDAss'} name={'info'} tab={'Assembly & documents'} currentTab={props.infoTab} onClick={() => handelClick('Assembly & documents', 'IDAss')} />
         </div>
         <Indcaitor id={id} />
      </>
   );
});

const TimeSelector = React.memo((props: {timeFilter: timeType; setTimeFilter: Function}) => {
   const [id, setID] = useState('IDAll');
   const handelClick = (tab: string, id: string) => {
      props.setTimeFilter(tab);
      setID(id);
   };
   return (
      <>
         <div className={style.tabSelector}>
            <Selector id={'IDAll'} name={'info'} defaultChecked tab={'Overall'} currentTab={props.timeFilter} onClick={() => handelClick('Overall', 'IDAll')} />
            <Selector id={'ID4W'} name={'info'} tab={'4 Week'} currentTab={props.timeFilter} onClick={() => handelClick('4 Week', 'ID4W')} />
            <Selector id={'ID6M'} name={'info'} tab={'6 Months'} currentTab={props.timeFilter} onClick={() => handelClick('6 Months', 'ID6M')} />
         </div>
         <Indcaitor id={id} />
      </>
   );
});
const TextBox = React.memo((props: {title?: string; children?: ReactNode | ReactFragment}) => {
   const store: {display: display} | any = useContext(StoreContext);
   return (
      <motion.div variants={motionFade} initial={'initial'} animate={'animate'} exit={'exit'} className={style.TextBox}>
         {store.display === 'desktop' && <h3>{props.title}</h3>}
         {props.children}
      </motion.div>
   );
});

const Delivery = () => {
   return (
      <TextBox title={'Product Delivery'}>
         Not happy with a purchase? No problem. We've made returning values as easy as possible. And, most purchases can be returned for free. Learn more about our{' '}
         <LinkShop blue>Returns Policy.</LinkShop>
      </TextBox>
   );
};
const Assembly = () => {
   return (
      <TextBox title={'Assembly & documents'}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque explicabo voluptatibus fugiat. Mollitia magnam iusto illum alias necessitatibus provident ullam sunt velit, accusantium quis
         beatae ad reprehenderit laudantium dolor itaque aliquid doloremque fugit, adipisci, inventore quasi in? Delectus velit earum expedita commodi quaerat? Quo molestias earum quibusdam dolorum
         culpa, sed, autem harum iusto nostrum accusamus dolores blanditiis modi facere vero dicta? Velit eligendi aut tempore maiores ipsam in quaerat quasi reprehenderit sit vel iste accusantium qui
         maxime molestiae soluta, minima explicabo tempora eos nesciunt vero officia cupiditate earum? Vero nihil aspernatur vel ea nostrum dolor quidem molestias dignissimos ex perspiciatis!
      </TextBox>
   );
};
const Warranty = () => {
   return (
      <TextBox title={'Warranty & Support'}>
         Most values come with a limited manufacturer’s warranty. The addition of a Walmart Protection Plan adds extra protection from the date of purchase. Walmart Protection Plans cover the
         rateTotal cost of repair, or replacement, for products, as well as covering delivery charges for the exchange. Walmart Protection Plan options and pricing can be found on the product page, as
         well as in your cart. Go to <LinkShop blue>Warranty & Support Services</LinkShop> to see all the coverage offered for each product. You can view your Walmart Protection Plan after your
         purchase in the Walmart Protection Plan Hub.
      </TextBox>
   );
};

interface ReviewTab {
   rateing: {rate: number[]; rateTotal: number; rateAvg: string; rateHeight: number};
   timeFilter: timeType;
   isVerified: boolean;
   filterComment: comment[];
   setTimeFilter: Function;
   setVerified: Function;
}

const ReviewTab = React.memo((props: {tab: ReviewTab; display: display}) => {
   return (
      <motion.div variants={motionFade} initial={'initial'} animate={'animate'} exit={'exit'} className={style.reviewTab}>
         <div className={style.rateBox}>
            <div className={style.rateTitle}>
               <span>
                  {props.tab.rateing.rateAvg} <AiFillStar className={'star'} />
               </span>
               <p>{props.tab.rateing.rateTotal} Reviews</p>
            </div>
            {props.display !== 'mobile' && props.tab.rateing.rate.map((rate: number, index: number) => <Bar rate={5 - index} rateTotal={rate} total={props.tab.rateing.rateHeight} key={5 - index} />)}
            {props.display === 'desktop' && (
               <>
                  <TimeSelector timeFilter={props.tab.timeFilter} setTimeFilter={props.tab.setTimeFilter} />
                  <span onClick={() => props.tab.setVerified(!props.tab.isVerified)} className={props.tab.isVerified ? style.active + ' ' + style.var : style.var}>
                     Verified Owners
                     <FiCheckCircle />
                  </span>
               </>
            )}
         </div>
         {props.display === 'desktop' && <div className={style.spacer} />}
         <Scrollbars className={'scrollBars'} autoHeightMin={400} autoHide autoHeight universal>
            {props.tab.filterComment?.map((comment: comment, index) => (
               <Comment comment={comment} key={index} />
            ))}
         </Scrollbars>
      </motion.div>
   );
});

export default React.memo(InfoBox);
