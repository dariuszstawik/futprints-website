import React from 'react'

const HeaderParagraph = ({children, isCentered}) => {
  return (
    <p className = {isCentered ? "text-xl my-8 text-center" : "text-xl my-8"}>{children}</p>
  )
}

export default HeaderParagraph;