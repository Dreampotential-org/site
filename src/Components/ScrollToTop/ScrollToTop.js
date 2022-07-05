import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './ScrollToTop.css';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 600){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 600){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div>
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{height: 50, display: showScroll ? 'flex' : 'none'}}/>
    </div>
  );
}

export default ScrollArrow;