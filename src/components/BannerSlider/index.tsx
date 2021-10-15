import Banner, { BannerProps } from 'components/Banner'
import Slider, { SliderSettings } from 'components/Slider'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import * as S from './styles'
import { useState } from 'react'

export type BannerSliderProps = {
  items: BannerProps[]
}

const BannerSlider = ({ items }: BannerSliderProps) => {
  // Pegando o slide atual
  const [activeState, setActiveState] = useState<string>(items[0].title)

  function afterChangeHandler(currentSlider: number) {
    setActiveState(items[currentSlider].title)
  }

  const settings: SliderSettings = {
    arrows: true,
    infinite: true,
    afterChange: (current) => afterChangeHandler(current),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false
        }
      }
    ],

    nextArrow: <ArrowRight aria-label="next" />,
    prevArrow: <ArrowLeft aria-label="previous" />
  }

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item) => (
          <Banner
            key={item.title}
            {...item}
            isOpen={item.title == activeState}
          />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default BannerSlider
