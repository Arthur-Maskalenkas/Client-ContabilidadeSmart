import SocialBanner from 'components/SocialBanner'

import Slider, { SliderSettings } from 'components/Slider'

import * as S from './styles'

import items from './mock'

const SocialBannerSlides = () => {
  const settings: SliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {items.map((item, index) => (
          <SocialBanner
            SocialLink={item.SocialLink}
            key={index}
            img={item.img}
            altImg={item.altImg}
          />
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default SocialBannerSlides
