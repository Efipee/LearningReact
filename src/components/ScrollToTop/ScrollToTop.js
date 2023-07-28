import React, { useEffect, useState } from 'react';
import './ScrollToTop.css'; // Import your CSS here

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 0){
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset === 0){
        setShowScroll(false)
      }
    };

    // Run the check immediately
    checkScrollTop();

    // And on scroll events
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    // Immediately hide the button when the button is clicked
    setShowScroll(false);
  };

  return (
    <div className="scroll-to-top-button" style={{display: showScroll ? 'flex' : 'none'}} onClick={scrollToTop}>
      <span className="arrow-up">↑</span>
    </div>
  );
}

export default ScrollToTop;
