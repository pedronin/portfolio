import React from 'react';

export const SliderContext = React.createContext<ISliderContext>({});

interface ISliderProvider {
  children: React.ReactNode;
}

interface ISliderContext {
  nextSlide?: (navWidth: any, nav: any, items: any, navItemWidth: any, stage: any, navCurrent: any) => void;
  prevSlide?: (navWidth: any, nav: any, items: any, navItemWidth: any, stage: any, navCurrent: any) => void;
}

// interface IArrowSlide {
//   navWidth: any,
//   nav: any,
//   items: any,
//   navItemWidth: any,
//   stage: any,
//   navCurrent: any
// }





export const SliderProvider: React.FC<ISliderProvider> = ({ children }) => {
    const [offsetStage, setOffsetStage] = React.useState(0);
    const [offsetBorder, setOffsetBorder] = React.useState(0);
    const [offsetNav, setOffsetNav] = React.useState(0);
    
    function nextSlide(navWidth: any, nav: any, items: any, navItemWidth: any, stage: any, navCurrent: any) {
      // offsetStage -= navWidth;

      setOffsetStage(prev => prev - navWidth)
      if (offsetStage < -navWidth * (items.length - 1)) {
        // offsetStage = 0;
        setOffsetStage(0)
      }
      stage.style.transform = `translateX(${offsetStage}px)`;
    
      if (
        offsetBorder >= 3 * navItemWidth &&
        items.length * navItemWidth > navWidth &&
        items.length * navItemWidth + offsetNav > navWidth
      ) {
        // offsetNav -= navItemWidth;
        setOffsetNav(prev => prev - navItemWidth)
        nav.style.transform = `translateX(${offsetNav}px)`;
      } else {
        // offsetBorder += navItemWidth;
        setOffsetBorder(prev => prev - navItemWidth)
      }
    
      if (items.length * navItemWidth + offsetNav - navWidth === navItemWidth / 2) {
        // offsetNav -= navItemWidth / 2;
        // offsetBorder -= navItemWidth / 2;
        setOffsetNav(prev => prev - navItemWidth / 2)
        setOffsetBorder(prev => prev - navItemWidth / 2)
        nav.style.transform = `translateX(${offsetNav}px)`;
      }
    
      if (offsetStage === 0) {
        // offsetNav = 0;
        // offsetBorder = 0;
        setOffsetNav(0)
        setOffsetBorder(0)
        nav.style.transform = `translateX(${offsetNav}px)`;
      }
      navCurrent.style.left = `${offsetBorder}px`;
    }
    
    function prevSlide(navWidth: any, nav: any, items: any, navItemWidth: any, stage: any, navCurrent: any) {
      // offsetStage += navWidth;
      setOffsetNav(prev => prev + navWidth)
      if (offsetStage > 0) {
        // offsetStage = -navWidth * (items.length - 1);
        setOffsetStage(-navWidth * (items.length - 1))
      }
      stage.style.transform = `translateX(${offsetStage}px)`;
    
      // сдвиг nav в зависимости от положения border
      // и сдвиг самого бордера
      if (
        offsetBorder <= 3.5 * navItemWidth &&
        items.length * navItemWidth > navWidth &&
        offsetNav != 0 &&
        items.length * navItemWidth - offsetNav + navItemWidth / 2 !== items.length * navItemWidth
      ) {
        // offsetNav += navItemWidth;
        setOffsetNav(prev => prev + navItemWidth)
        nav.style.transform = `translateX(${offsetNav}px)`;
      } else {
        // offsetBorder -= navItemWidth;
        setOffsetBorder(prev => prev - navItemWidth)
      }
    
      if (offsetNav === navItemWidth / 2) {
        // offsetNav -= navItemWidth / 2;
        // offsetBorder -= navItemWidth / 2;
        setOffsetNav(prev => prev - navItemWidth / 2)
        setOffsetBorder(prev => prev - navItemWidth / 2)
        nav.style.transform = `translateX(${offsetNav}px)`;
      }
    
      if (offsetStage === -navWidth * (items.length - 1)) {
        // offsetBorder = navWidth - navItemWidth;
        // offsetNav = navWidth - items.length * navItemWidth;
        setOffsetBorder(navWidth - navItemWidth)
        setOffsetNav(navWidth - items.length * navItemWidth)
        nav.style.transform = `translateX(${offsetNav}px)`;
      }
      navCurrent.style.left = `${offsetBorder}px`;
    }
    
  return (
    <SliderContext.Provider
      value={{
        nextSlide,
        prevSlide,
      }}>
      {children}
    </SliderContext.Provider>
  );
};
