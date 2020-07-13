import React, {useState, useRef} from 'react';
import style from './SearchBar.module.scss';
import GlobalData from '../services/GlobalData';
import {Scrollbars} from 'react-custom-scrollbars';
import {motion, AnimatePresence} from 'framer-motion';
import {FiChevronUp, FiChevronDown, FiX} from 'react-icons/fi';
import {AiOutlineSearch} from 'react-icons/ai';
import {motionFade} from '../services/Motions';
import {display} from '../services/StoreContext';

function SearchBar(props: {display: display}) {
   const [open, setOpen] = useState(false);
   const [active, setActive] = useState(false);
   const [selectedCategory, setCategory] = useState('All Categories');
   const [searchText, setSearchText] = useState('');
   const searchRef = useRef<any>(null);

   const handleSelect = (category: string) => {
      searchRef.current.blur();
      setCategory(category);
      setOpen(false);
   };

   const handelClickDropDown = () => {
      setActive(false);
      props.display === 'desktop' && setOpen(!open);
   };

   return (
      <div className={style.searchBar + ' ' + (active && style.searchBarActive)}>
         <label>
            Search
            <input
               ref={searchRef}
               name={'Search'}
               type='text'
               value={searchText}
               onKeyPressCapture={(e) => (e.key === 'Enter' ? setSearchText('') : null)}
               onChange={(e) => setSearchText(e.target.value)}
               placeholder='Search...'
               className={style.text}
               onFocus={() => setActive(true)}
               onBlur={() => setActive(false)}
            />
         </label>
         {!open && searchText !== '' && <CleanButton setSearchText={setSearchText} />}
         <div className={style.dropDown} onMouseLeave={() => setOpen(false)}>
            <div className={style.dropDownButton} onClick={() => handelClickDropDown()}>
               {props.display === 'desktop' && selectedCategory}

               {props.display !== 'desktop' ? <AiOutlineSearch /> : open ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            {props.display === 'desktop' && <AnimatePresence exitBeforeEnter>{open && <DropDownList handleSelect={handleSelect} />}</AnimatePresence>}
         </div>
      </div>
   );
}
const CleanButton = (props: {setSearchText: Function}) => {
   return (
      <span className={style.cleanButton} onClick={() => props.setSearchText('')}>
         <FiX />
      </span>
   );
};
const DropDownList = React.memo((props: {handleSelect: Function}) => {
   return (
      <motion.div variants={motionFade} initial={'initial'} animate={'animate'} exit={'exit'} transition={{duration: 0.2}} className={style.dropList}>
         <Scrollbars autoHeightMin={500} autoHeight className={'scrollBars'}>
            {['All Categories', ...GlobalData.categories].map((category: string, index) => {
               return <DropDownButton key={index} category={category} handleSelect={props.handleSelect} />;
            })}
         </Scrollbars>
      </motion.div>
   );
});
const DropDownButton = React.memo((props: {handleSelect: Function; category: string}) => {
   return <button onClick={() => props.handleSelect(props.category)}>{props.category}</button>;
});
export default React.memo(SearchBar);
