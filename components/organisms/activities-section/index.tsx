import HeaderParagraph from '@/components/atoms/header-paragraph'
import HeaderTitle from '@/components/atoms/header-title'
import ActivitiesCard from '@/components/molecules/activities-card'
import React from 'react'
import { Slide, Zoom } from 'react-awesome-reveal'


const ActivitiesSection = () => {
  return (
    <div className="my-10">
    <div className="min-w-96 max-w-[800px] mx-auto flex flex-col items-center">
        <HeaderTitle>Nasze działania</HeaderTitle>
        <div className="w-24 h-1 bg-green-800"/>
        {/* <HeaderParagraph isCentered>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor a ipsam similique eveniet. Quos, ut enim! Ipsum, amet distinctio! Porro possimus veniam quas iure consequatur libero nostrum perspiciatis illo magni.</HeaderParagraph> */}
        </div>
    <div className="px- py-1 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-0 lg:py-10">
    <div className="grid gap-6 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-4">
    <Zoom><ActivitiesCard/>
    <ActivitiesCard/>
    <ActivitiesCard/>
    <ActivitiesCard/>
    </Zoom>
    </div>
    </div>
    </div>
  )
}

export default ActivitiesSection