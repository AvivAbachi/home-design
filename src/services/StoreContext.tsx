import React, {createContext, useState, ReactNode, ReactFragment} from 'react';

export type colorButton = {id: number; color: string; price: number};
export type display = 'desktop' | 'tablte' | 'mobile';

export const StoreContext = createContext(undefined);

function StoreProvider(props: {children?: ReactNode | ReactFragment}) {
   const [display, setDisplay] = useState((window.innerWidth <= 768 ? 'mobile' : window.innerWidth <= 1080 ? 'tablte' : 'desktop') as display);
   const [assembly, setAssembly] = useState(true);
   const [quantity, setQuantity] = useState(1);
   const [selectColor, setSelectColor] = useState(undefined as colorButton | undefined);
   const colorList = [
      {id: 0, color: 'rgb(223,223,203)', price: 40},
      {id: 1, color: 'rgb(127,171,146)', price: 41},
      {id: 2, color: 'rgb(171,168,168)', price: 43},
      {id: 3, color: 'rgb(35,47,91)', price: 39},
      {id: 4, color: 'rgb(86,62,52)', price: 42},
      {id: 5, color: 'rgb(44,44,44)', price: 44},
   ] as colorButton[];

   const updateDisplay = () => setDisplay((window.innerWidth <= 768 ? 'mobile' : window.innerWidth <= 1080 ? 'tablte' : 'desktop') as display);
   const handelQuantity = (action: 'INC' | 'DEC' | 'RESET') => {
      action === 'INC' && setQuantity(quantity < 9 ? quantity + 1 : 9);
      action === 'DEC' && setQuantity(quantity > 1 ? quantity - 1 : 1);
      action === 'RESET' && setQuantity(1);
   };
   const handelSelectColor = async (id: number) => (selectColor !== undefined ? setSelectColor(undefined) : setSelectColor(colorList[id]));
   return <StoreContext.Provider value={{display, updateDisplay, assembly, setAssembly, quantity, handelQuantity, colorList, selectColor, handelSelectColor} as any}>{props.children}</StoreContext.Provider>;
}
//     const store: {display:display ,updateDisplay: Function} | any = useContext(StoreContext);
export default React.memo(StoreProvider);
