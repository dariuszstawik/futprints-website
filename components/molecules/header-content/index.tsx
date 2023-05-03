import Button from '@/components/atoms/button';
import HeaderParagraph from '@/components/atoms/header-paragraph';
import HeaderTitle from '@/components/atoms/header-title';
import React from 'react'

const HeaderContent = () => {
  return (
    <div className="col-start-1 col-end-2 my-2">
        <HeaderParagraph>Fundacja Futprints</HeaderParagraph>
<HeaderTitle>Wspieramy osoby w kryzysie</HeaderTitle>
{/* <div className="w-14 h-1 bg-green-800"/> */}
<HeaderParagraph>Pomagamy osobom ubogim i w kryzysie bezdomności. Prowadzimy działania integracyjne dla cudzoziemców. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptatem praesentium ipsum explicabo. Działamy w Katowicach.</HeaderParagraph>
<Button>Poznaj nas</Button>
    </div>
  )
}

export default HeaderContent;