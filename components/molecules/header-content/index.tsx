import Button from '@/components/atoms/button';
import HeaderParagraph from '@/components/atoms/header-paragraph';
import HeaderTitle from '@/components/atoms/header-title';
import React from 'react'

const HeaderContent = () => {
  return (
    <div className="col-start-1 col-end-2">
        <HeaderParagraph>Fundacja Futprints</HeaderParagraph>
<HeaderTitle><span className="block">Wspieramy osoby</span> <span className="leading-relaxed">w kryzysie</span></HeaderTitle>
<div className="w-24 h-1 bg-green-800"/>
{/* <div className="w-14 h-1 bg-green-800"/> */}
<HeaderParagraph>Pomagamy osobom ubogim i w kryzysie bezdomności. Prowadzimy działania integracyjne dla cudzoziemców. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptatem praesentium ipsum explicabo. Działamy w Katowicach.</HeaderParagraph>
<Button>Poznaj nas</Button> 
<Button>Informacje dla osób bezdomych</Button>
<div>
{/* <div className="w-24 h-1 bg-green-800 mb-6"/> */}
{/* <HeaderParagraph>Szukasz pomocy? Chcesz zrobić coś dobrego? Kliknij i dowiedz się więdej.</HeaderParagraph> */}
{/* <Button>Szukam pomocy dla osoby bezdomnej</Button> */}
{/* <Button>Chcę pomóc</Button> */}
</div>
    </div>
  )
}

export default HeaderContent;