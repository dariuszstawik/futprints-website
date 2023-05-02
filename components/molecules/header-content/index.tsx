import Button from '@/components/atoms/button';
import HeaderParagraph from '@/components/atoms/header-paragraph';
import HeaderTitle from '@/components/atoms/header-title';
import React from 'react'

const HeaderContent = () => {
  return (
    <div className="col-start-1 col-end-2 my-8">
        <HeaderParagraph>Fundacja Futprints</HeaderParagraph>
<HeaderTitle>Wspieramy osoby w kryzysie</HeaderTitle>
<HeaderParagraph>Pomagamy osobom ubogim i w kryzysie bezdomności. Prowadzimy działania integracyjne dla cudzoziemców. Działamy w Katowicach.</HeaderParagraph>
<Button>Poznaj nas</Button>
    </div>
  )
}

export default HeaderContent;