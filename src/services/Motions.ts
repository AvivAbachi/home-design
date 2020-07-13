export const motionFade = {
   initial: {opacity: 0},
   animate: {opacity: 1, transition: {type: 'tween', duration: 0.25}},
   exit: {opacity: 0},
};
export const motionFadePage = {
   initial: {opacity: 0},
   animate: {opacity: 1, transition: {type: 'tween', duration: 0.75}},
   exit: {opacity: 0},
};
export const motionHover = {
   initial: {scale: 1},
   hover: {scale: 1.025, transition: {type: 'spring', stiffness: 200, velocity: 1}},
   tap: {scale: 0.975},
};
export const motionHamburger = {
   hamburger: {
      open: {rotateZ: 225},
      close: {rotateZ: 0},
      tap: {scale: 0.8},
   },
   top: {
      open: {y: 0},
      close: {y: -9},
   },
   bottom: {
      open: {y: 0, rotateZ: 90},
      close: {y: 9, rotateZ: 0},
   },
};
export const motionGrid = {
   animate: {transition: {staggerChildren: 0.075}},
};
export const motionCard = {
   initial: {opacity: 0},
   animate: {opacity: 1, transition: {type: 'tween', duration: 0.25, ease: 'easeInOut'}},
   hover: {scale: 0.95, transition: {type: 'spring', damping: 6, stiffness: 200, velocity: 4, mass: 0.5}},
   tap: {scale: 1.05},
};
export const motionSlideDown = {
   initial: {opacity: 0, y: -200},
   animate: {opacity: 1, y: 0},
   exit: {opacity: 0, y: -200},
};
