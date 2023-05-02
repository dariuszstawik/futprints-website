import Image from 'next/image';
import React from 'react'

const Logo = () => {
  return (
    <img className="w-40" src="../../../assets/img/logo.png" alt="logo"/>
    // <img className="w-40" src="logo.png" alt="logo"/>
    // <Image src="http://localhost:3000/" alt="logo" layout="fill"/>
  )
}

export default Logo;