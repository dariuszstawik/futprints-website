import HeaderSlider from '@/components/atoms/header-slider';
import HeaderContent from '@/components/molecules/header-content';
import React from 'react'

const Header = () => {
  return (
    <div className = "w-full px-16 py-8 grid grid-cols-2 gap-8">
<HeaderContent/>
<HeaderSlider/>
    </div>
  )
}

export default Header;