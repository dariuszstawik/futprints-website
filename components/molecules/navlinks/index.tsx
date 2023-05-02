import Navlink from '@/components/atoms/navlink';
import React from 'react'

const Navlinks = () => {
  return (
    <ul className="flex flex-col justify-start align-center gap-14 lg:flex-row">
    <li><Navlink>aktualności</Navlink></li>
    <li><Navlink>o nas</Navlink></li>
    <li><Navlink>quiz</Navlink></li>
    <li><Navlink>kontakt</Navlink></li>
    </ul>
  )
}

export default Navlinks;