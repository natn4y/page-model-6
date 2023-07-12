import { useState, useRef, useEffect } from 'react';
import { navItems } from '../components/MenuList';
import useSwipe from './useSwipe';

const useResponsiveMenu = () => {
  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);
  const [activeMobileMenuIndex, setActiveMobileMenuIndex] = useState(null);
  const touchStartXRef = useRef(null);
  const hideSubMenuTimeoutRef = useRef(null);
  const [handleTouchStart, handleTouchMove, handleTouchEnd] = useSwipe();

  const handleResponsiveMenuToggle = () => {
    setIsResponsiveMenuOpen(!isResponsiveMenuOpen);
    setActiveMobileMenuIndex(null);
    setActiveSubMenuIndex(null);
    if (!isResponsiveMenuOpen) {
      setActiveSubMenuIndex(null);
    }
  };

  const handleMobileMenuToggle = (index) => {
    if (!isResponsiveMenuOpen && navItems[index].submenu) {
      setActiveSubMenuIndex(index);
    } else if (navItems[index].submenu) {
      setActiveMobileMenuIndex(index);
      setIsResponsiveMenuOpen(true);
    } else {
      setActiveMobileMenuIndex(null);
      setIsResponsiveMenuOpen(false);
      setActiveSubMenuIndex(null);
    }
  };

  const handleMobileMenuBack = () => {
    setActiveMobileMenuIndex(null);
    setActiveSubMenuIndex(null);
  };

  const closeMenu = () => {
    clearTimeout(hideSubMenuTimeoutRef.current);
    setIsResponsiveMenuOpen(false);
    setActiveSubMenuIndex(null);
  };

  const handleTouchEndOutsideMenu = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDifference = touchStartXRef.current - touchEndX;
    if (touchDifference > 50) {
      setIsResponsiveMenuOpen(false);
      setActiveSubMenuIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('touchend', handleTouchEndOutsideMenu);

    return () => {
      document.removeEventListener('touchend', handleTouchEndOutsideMenu);
    };
  }, []);

  useEffect(() => {
    if (isResponsiveMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isResponsiveMenuOpen]);

  useEffect(() => {
    const currentPath =
      typeof window !== 'undefined' ? window.location.pathname : '';
    const activeIndex = navItems.findIndex((item) => item.href === currentPath);
    setActiveMobileMenuIndex(activeIndex);
  }, []); // Remova a vírgula extra aqui

  return {
    isResponsiveMenuOpen,
    activeSubMenuIndex,
    activeMobileMenuIndex,
    setActiveMobileMenuIndex,
    handleResponsiveMenuToggle,
    handleMobileMenuToggle,
    handleMobileMenuBack,
    closeMenu,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    setActiveSubMenuIndex,
  };
};

export default useResponsiveMenu;
