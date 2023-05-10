import React from 'react'

const Button = ({children}) => {
  return (
   
    <a class="inline-block mb-6 mr-6 px-12 py-3 text-xl font-medium text-white bg-green-800 border border-green-800 rounded active:text-green-800 hover:bg-transparent hover:text-green-800 focus:outline-none focus:ring" href="/">
    {children}
  </a>
    
  )
}

export default Button;