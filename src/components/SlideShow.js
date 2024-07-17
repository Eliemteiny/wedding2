import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';

import './SlideShow.css';

const SlideShow = () => {
  const [current, setCurrent] = useState(0);
  const [bgImage, setBgImage] = useState('');

  const pages = [<Page1 />, <Page2 />, <Page3 />, <Page4 />, <Page5 />, <Page6 />, <Page7 />];
  const bgImages = [
    'images/image12.jpg',
    'images/image122.jpg',
    'images/image13.jpg',
    'images/image15.jpg',
    'images/image155.jpg',
    'images/image17.jpg'
    // Add more image paths as needed
  ];

  const nextSlide = () => {
    setCurrent(current === pages.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? pages.length - 1 : current - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage(bgImages[Math.floor(Math.random() * bgImages.length)]);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [bgImages]);

  return (
    <div className="slide-container" {...handlers} style={{ backgroundImage: `url(${bgImage})` }}>
      {pages[current]}
    </div>
  );
};

export default SlideShow;
