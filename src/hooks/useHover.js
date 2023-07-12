import { useState, useEffect } from 'react';

const useHover = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [submenuHovered, setSubmenuHovered] = useState(false);
  const [submenuCloseTimeout, setSubmenuCloseTimeout] = useState(null);

  const handleMouseEnter = (index) => {
    clearTimeout(submenuCloseTimeout);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setHoveredIndex(null);
    }, 300);
    setSubmenuCloseTimeout(timeoutId);
  };

  const handleSubmenuMouseEnter = () => {
    clearTimeout(submenuCloseTimeout);
    setSubmenuHovered(true);
  };

  const handleSubmenuMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setSubmenuHovered(false);
      setHoveredIndex(null);
    }, 300);
    setSubmenuCloseTimeout(timeoutId);
  };

  return {
    hoveredIndex,
    handleMouseEnter,
    handleMouseLeave,
    handleSubmenuMouseEnter,
    handleSubmenuMouseLeave,
  };
};

export default useHover;
