'use client'
import { useState } from 'react';
import { BsCheck } from 'react-icons/bs'
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import useHover from '@/hooks/useHover';
import useSwipe from '@/hooks/useSwipe';
import useResponsiveMenu from '@/hooks/useResponsiveMenu';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex items-center justify-center fixed bg-[#83C6BD] text-[15px] h-[52px] w-full z-10">
        <a href="#" className="text-white underline tracking-[0.5px] text-center">
          NÓS PAGAMOS O FRETE EM PEDIDOS ACIMA DE R$ 99,00!
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
            <h1 className="p-2 text-[#8BBD46] text-[1.7rem] leading-none break-words text-center">
              Crie uma rotina de cuidados com a pele a partir de receitas nutritivas.
            </h1>
            <p className="my-4 text-[12px] text-[#615731] font-bold tracking-[2px]">
              DOWNLOAD GRÁTIS
            </p>
            <div className="flex flex-col gap-1 items-center mx-4">
              <p className="w-full text-[17px] flex items-center">
                <BsCheck size={40} />
                9 receitas caseiras de cuidados com a pele
              </p>
              <p className="w-full text-[17px] flex items-center">
                <BsCheck size={40} />
                19 receitas de superalimentos
              </p>
              <p className="w-full text-[17px] flex items-center">
                <BsCheck size={40} />
                5 receitas para aperfeiçoar a pele
              </p>
            </div>
            <b className="mx-8 mt-8 my-2 text-[18px] text-center leading-7">
            Aproveite as Receitas Bônus da Dra. Cates para uma pele radiante e naturalmente bonita
            </b>
            <div className="px-4 mb-4 w-full flex flex-col justify-center">
              <input
                required
                type="email"
                placeholder='Seu email'
                className="fixed md:relative bottom-0 left-0 right-0 bg-white h-12 break-words pl-4 w-[95%] mx-auto md:mx-0 md:w-[30.93rem] border border-black border-solid rounded mb-[60px] md:mb-0"
              ></input>
              <button className="outline-none mx-auto md:mx-0 mt-5 items-center justify-center bg-amber-300 text-yellow-900 cursor-pointer text-lg font-bold h-12 break-all px-3 text-center w-[95%] md:w-[300px] rounded fixed md:relative left-0 right-0 bottom-[8px] md:bottom-0">
              OBTENHA AS RECEITAS AGORA!
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
            Experimente os produtos do Spa Dr. por 30 dias.
            </h3>
            <p className="text-neutral-600 ">Se você não estiver completamente satisfeito, basta devolver os produtos para obter um reembolso.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
