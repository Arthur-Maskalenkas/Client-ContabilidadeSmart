import * as S from './styles'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import Slider, { SliderSettings } from 'components/Slider'

const settings: SliderSettings = {
  // eslint-disable-next-line react/display-name
  customPaging: function (i: number) {
    return <img width="50px" src={`/img/Carro/ferrari${i + 1}.jpg`} />
  },
  dots: true,
  dotsClass: 'slick-dots slick-thumb',
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 770,
      settings: {
        dots: false,
        arrows: false,
        slidesToShow: 1.1
      }
    }
  ]
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
          />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default Gallery
