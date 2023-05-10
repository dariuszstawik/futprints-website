import HeaderTitle from '@/components/atoms/header-title';
import SectionTitle from '@/components/atoms/section-title';
import SupportButton from '@/components/atoms/support-button';
import React from 'react'

const SupportSection = () => {
  return (

    <div className="support-wrapper w-full bg-gray-100 flex">
      <div className="support__image relative w-[600px] h-[400px]">
       <img src="pomaganie4.jpg"/>
      </div>
      <div className="support__content pl-8 pb-12 grid grid-cols-2 gap-x-6 gap-y-2 grid-flow-row">
      <div className="min-w-96 col-start-1 col-end-3 row-start-1 row-end-2 mx-auto mt-4 flex flex-col items-center">
        <SectionTitle>Jak możesz pomóc</SectionTitle>
      <div className="w-24 h-1 bg-green-800 mb-4"/>
      </div>
    <a href="#"
            className="w-[400px] mt-4 mx-auto inline-block col-start-1 col-end-2 row-start-2 row-end-3 grow-0 rounded border border-green-800 bg-green-800 px-12 py-3 flex items-center text-xl font-medium text-white hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring active:text-green-600"> <img src="support-donate.svg" className="w-16 inline-block mr-4"/>
            wpłać darowiznę
          </a>
          <a href="#"
            className="w-[400px] mt-4 mx-auto inline-block col-start-2 col-end-3 row-start-2 row-end-3 rounded border border-green-800 bg-green-800 px-12 py-3 flex items-center text-xl font-medium text-white hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring active:text-green-600"> <img src="support-volunteer.svg" className="w-16 inline-block mr-4"/>
            zostań wolontariuszem/ką
          </a>

          <a href="#"
            className="w-[400px] mt-4 mx-auto inline-block col-start-1 col-end-2 row-start-3 row-end-4 rounded border border-green-800 bg-green-800 px-12 py-3 flex items-center text-xl font-medium text-white hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring active:text-green-600"> <img src="support-clothes.svg" className="w-16 inline-block mr-4"/>
            podaruj ubrania lub środki czystości
          </a>

          <a href="#"
            className="w-[400px] mt-4 mx-auto inline-block col-start-2 col-end-3 row-start-3 row-end-4 rounded border border-green-800 bg-green-800 px-12 py-3 flex items-center text-xl font-medium text-white hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring active:text-green-600"> <img src="support-volunteer.svg" className="w-16 inline-block mr-4"/>
            zorganizuj zbiórkę
          </a>

      </div>
</div>

  )
}

export default SupportSection;