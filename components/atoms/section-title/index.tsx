import React from 'react'

interface HeaderTitleProps {
  children: React.ReactNode
}

// katalog: types / plik z interface do importu albo zostawić w tym samym pliku

const SectionTitle = ({children}: HeaderTitleProps) => {
  return (
    <h2 className="text-4xl font-bold my-6">{children}</h2>
  )
}

export default SectionTitle;