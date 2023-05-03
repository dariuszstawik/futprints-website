import HeaderSlider from '@/components/atoms/header-slider';
import HeaderContent from '@/components/molecules/header-content';
import React from 'react'

const Header = () => {
  return (
    <div className = "w-full px-16 py-8 flex flex-col lg:grid lg:grid-cols-2 lg:gap-8">
<HeaderContent/>
<HeaderSlider/>
    </div>
  )
}

export default Header;