import React from 'react'

const SupportButton = ({children}) => {
  return (
    <button className="w-1/2 text-xl text-green-800 font-semibold rounded-full py-2 px-4 m-4 border-solid border-2 border-green-800">{children}</button>
)
}

export default SupportButton
