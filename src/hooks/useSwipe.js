import { useState, useRef } from 'react';

const useSwipe = () => {
  const [isSwiping, setIsSwiping] = useState(false);
  const touchStartXRef = useRef(null);

  const handleSwipe = (e) => {
    const delta = e.deltaX;
    if (delta < -100) {
      () => handleResponsiveMenuToggle();
    }
  };

  const handleTouchStart = e => {
    setIsSwiping(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = e => {
    if (!isSwiping) return;
    handleSwipe(e.touches[0]);
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  return [handleTouchStart, handleTouchMove, handleTouchEnd, handleSwipe];
};

export default useSwipe;
