import SocialBanner, { SocialBannerProps } from 'components/SocialBanner'

import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

export type SocialBannerSlidesProps = {
  items: SocialBannerProps[]
}

const SocialBannerSlides = ({ items }: SocialBannerSlidesProps) => {
  const settings: SliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 2
  }

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <SocialBanner key={index} img={item.img} altImg={item.altImg} />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default SocialBannerSlides
