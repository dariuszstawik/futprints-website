import React from 'react'

interface HeaderTitleProps {
  children: React.ReactNode
}

// katalog: types / plik z interface do importu albo zostawić w tym samym pliku

const HeaderTitle = ({children}: HeaderTitleProps) => {
  return (
    <h1 className="text-5xl font-bold my-6">{children}</h1>
  )
}

export default HeaderTitle;