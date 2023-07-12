import React, { useRef, useState, useEffect } from 'react';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { AiFillCloseSquare } from 'react-icons/ai';

import useHover from '@/hooks/useHover';
import useSwipe from '@/hooks/useSwipe';
import useResponsiveMenu from '@/hooks/useResponsiveMenu';

import { useSpring, animated } from 'react-spring';

import { navItems } from '../MenuList';

export function Navbar() {

  //-----> HOOK's <-----

  const [ handleTouchStart, handleTouchMove, handleTouchEnd, handleSwipe ] = useSwipe();

  const {
    isResponsiveMenuOpen,
    activeSubMenuIndex,
    activeMobileMenuIndex,
    handleResponsiveMenuToggle,
    handleMobileMenuToggle,
    handleMobileMenuBack,
    closeMenu,
    setActiveMobileMenuIndex,
  } = useResponsiveMenu();

  const { isHovered, handleMouseEnter, handleMouseLeave, hoveredIndex } = useHover();

  //-----> REF's <-----

  const timeoutRef = useRef(null);
  const menuRef = useRef(null);
  const touchStartXRef = useRef(null);

  //-----> OTHER's <-----
  const menuAnimation = useSpring({
    transform: isResponsiveMenuOpen ? 'translateX(0%)' : 'translateX(-100%)',
  });

  const overlayAnimation = useSpring({
    opacity: isResponsiveMenuOpen ? 1 : 0,
    pointerEvents: isResponsiveMenuOpen ? 'auto' : 'none',
  });

  const handleTouchEndOutsideMenu = (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const touchDifference = touchStartXRef.current - touchEndX;
    if (touchDifference > 50) {
      () => handleResponsiveMenuToggle();
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
      typeof window !== 'undefined' ? window.location.pathname : '/';
    const activeIndex = navItems.findIndex((item) => item.href === currentPath);
    setActiveMobileMenuIndex(activeIndex);
  }, []);


  return (
    <nav className="px-5 md:px-80 h-[102px] w-full shadow-xl bg-white">
      <div className="flex justify-between items-center h-full">
        <div className="flex items-center">
          <img
            className="w-[140px] h-[62px] !max-w-fit"
            src="/img/logo.png"
            alt=""
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={handleResponsiveMenuToggle}
            className="text-3xl text-gray-600 focus:outline-none"
          >
            {isResponsiveMenuOpen ? (
              <IoIosArrowBack />
            ) : (
              <span>&#9776;</span>
            )}
          </button>
        </div>
        <ul
          className={`hidden md:flex gap-7 justify-center items-center ${
            isResponsiveMenuOpen ? 'hidden' : 'block'
          }`}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`relative ${isHovered === item.href ? 'active' : ''}`}

              style={{
                transition: 'opacity 0.3s, left 0.3s',
              }}
            >
              <a
                href={item.href}
                className={`flex items-center text-stone-600 hover:text-[#BCB279] uppercase ${
                  item.submenu ? 'pl-2' : ''
                }`}
                onClick={(e) => {
                  if (item.submenu) {
                    e.preventDefault();
                  }
                }}
              >
                {item.title}
                {item.submenu && (
                  <MdKeyboardArrowRight className="ml-1 transition-transform duration-300" />
                )}
              </a>
              {item.submenu && hoveredIndex === index && (
                <ul
                  className="submenu w-[200px] absolute left-0 mt-2 bg-white text-stone-600 py-2 rounded shadow opacity-100 transition-opacity duration-300"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {item?.submenu?.map((subitem, subindex) => (
                    <li
                      key={subindex}
                      className={`transition-opacity duration-300 delay-${
                        subindex + 1
                      }00`}
                    >
                      <a
                        href={subitem.href}
                        className="block py-2 px-4 hover:bg-[#83C6BD] hover:text-white transition-all"
                      >
                        {subitem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <animated.div
        style={overlayAnimation}
        className="fixed inset-0 bg-[#00000057] opacity-50 z-40 curp"
        onClick={closeMenu}
      />
      <animated.div
        ref={menuRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={menuAnimation}
        className="fixed top-0 left-0 h-full w-[275px] bg-white text-stone-600 p-4 z-50"
      >
        <div className="flex mt-8 ml-4">
          <button
            onClick={handleResponsiveMenuToggle}
            className="absolute top-4 right-4 text-3xl text-red-600 focus:outline-none"
          >
            <AiFillCloseSquare />
          </button>
          <img src="/img/logo.png" className="w-[150px]" alt="" />
        </div>
        <ul className="mt-8 mx-2">
          {activeMobileMenuIndex === null ? (
            navItems.map((item, index) => (
              <li key={index}>
                <a
                  className={`flex items-center w-full py-2 px-4 hover:bg-[#83C6BD] hover:text-white transition-all ${
                    item.href ===
                    (typeof window !== 'undefined' ? window.location.pathname : '')
                      ? 'bg-[#83C6BD] text-white'
                      : ''
                  }`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileMenuToggle(index);
                    setTimeout(() => {
                      window.location.href = item.href;

                    }, 200)
                  }}
                >
                  {item.title}
                  {item.submenu && (
                    <MdKeyboardArrowRight
                      size={20}
                      className="ml-1 relative top-[-1px] transition-transform duration-300"
                    />
                  )}
                </a>
              </li>
            ))
          ) : (
            <>
              <li>
                <div
                  onClick={handleMobileMenuBack}
                  className="flex w-full py-2 px-4 hover:bg-[#83C6BD] hover:text-white transition-all"
                >
                  <IoIosArrowBack />
                </div>
              </li>
              {activeMobileMenuIndex !== null && (
                <>
                  {navItems[
                    activeMobileMenuIndex
                  ]?.submenu?.map((subitem, index) => (
                    <li key={index}>
                      <a
                        className="flex items-center w-full py-2 px-4 hover:bg-[#83C6BD] hover:text-white transition-all"
                        href={subitem.href}
                      >
                        {subitem.title}
                      </a>
                    </li>
                  ))}
                </>
              )}
            </>
          )}
        </ul>
      </animated.div>
    </nav>
  )
}

export default Navbar
