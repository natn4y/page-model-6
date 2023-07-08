'use client'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { navItems } from '@/components/MenuList'
import { BsCheck } from 'react-icons/bs'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

// Texto a ser atribuído a variáveis
const shippingText = 'WE PAY SHIPPING ON ORDERS OVER $99!'
const cleanSkinText = 'Get Clean Skin From Within With Nourishing Recipes'
const freeDownloadText = 'FREE DOWNLOAD'
const skinCareRecipesText = '9 DIY skin care recipes'
const superfoodRecipesText = '19 superfood recipes'
const smoothieRecipesText = '5 skin perfecting smoothie recipes'
const bonusRecipesText =
  'Enjoy Dr. Cates’ Bonus Recipes for Radiant, Naturally Beautiful Skin'
const emailPlaceholder = 'Enter your email'
const bonusRecipesButton = 'GET MY BONUS RECIPES NOW!'
const spaProductsText = 'Try The Spa Dr. Products for 30 Days'
const refundText =
  'If you’re not 100% thrilled, simply return the products for a refund.'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex items-center justify-center fixed bg-[#83C6BD] text-[15px] h-[43px] w-full z-10">
        <a
          href="#"
          className="text-white underline tracking-[0.5px]"
        >
          {shippingText}
        </a>
      </div>
      <div className="mt-[43px] w-full">
        <Navbar />
        <div className="flex justify-center items-center my-8 md:mt-24 flex-wrap md:flex-nowrap">
          <div className="flex justify-center items-center w-[500px]">
            <img
              className="w-[250px] md:w-[350px]"
              src="/img/book.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center max-w-[509px]">
            <h1 className="p-2 text-[#8BBD46] text-[2rem] leading-none break-words text-center">
              {cleanSkinText}
            </h1>
            <p className="my-4 text-[12px] text-[#615731] font-bold tracking-[2px]">
              {freeDownloadText}
            </p>
            <div className="flex flex-col gap-1 items-center">
              <p className="text-[21px] flex items-center">
                <BsCheck size={27} />{skinCareRecipesText}
              </p>
              <p className="text-[21px] flex items-center">
                <BsCheck size={27} />{superfoodRecipesText}
              </p>
              <p className="text-[21px] flex items-center">
                <BsCheck size={27} />{smoothieRecipesText}
              </p>
            </div>
            <b className="my-2 text-[18px] text-center leading-7 text-[#555555]">
              {bonusRecipesText}
            </b>
            <div className="px-4 mb-4 w-full flex flex-col justify-center">
              <input
                required
                type="email"
                placeholder={emailPlaceholder}
                className="fixed md:relative bottom-0 left-0 right-0 bg-white h-12 break-words pl-4 w-[95%] mx-auto md:mx-0 md:w-[30.93rem] border border-black border-solid rounded mb-[60px] md:mb-0"
              ></input>
              <button className="outline-none mx-auto md:mx-0 mt-5 items-center justify-center bg-amber-300 text-yellow-900 cursor-pointer text-lg font-bold h-12 break-all px-3 text-center w-[95%] md:w-[300px] rounded fixed md:relative left-0 right-0 bottom-[8px] md:bottom-0">
                {bonusRecipesButton}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 bg-[#FAFAFA] w-full h-[184px] flex items-center justify-center">
        <div className="p-2 flex items-center gap-4">
          <img
            className="w-[100px] xl:w-[140px]"
            src="/img/guaranteed.svg"
            alt=""
          />
          <div>
            <h3 className="text-neutral-600 text-xl xl:text-[1.75rem] break-words">
              {spaProductsText}
            </h3>
            <p className="text-neutral-600 ">
              {refundText}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}