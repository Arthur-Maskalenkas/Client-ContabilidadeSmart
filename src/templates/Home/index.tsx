import Base from 'templates/Base'

import * as S from './styles'

import Heading from 'components/Heading'
import { Container } from 'components/Container'

import BannerSlider from 'components/BannerSlider'
import ServicesCardsList from 'components/ServicesCardsList'
import SocialBannerSlides from 'components/SocialBannerSlides'
import RecursosCardsList from 'components/RecursosCardsList'

import mockServicesCards from 'components/ServicesCardsList/mock'
import mockRecursosCards from 'components/RecursosCardsList/mock'

import { BannerProps } from 'components/Banner'

import WidgetList from 'components/WidgetList'
import { MenuUnitaryProps } from 'components/Menu'
import { WidgetProps } from 'components/Widget'

import { paginaAtual } from 'store/features/pagina/paginaSlice'
import { useAppDispatch } from 'hooks/Store'
import { useEffect } from 'react'

export type HomeTemplateProps = {
  bannerSliderData: BannerProps[]
  widgets: WidgetProps[]
  menuData: MenuUnitaryProps[]
}

const Home = ({ bannerSliderData, widgets, menuData }: HomeTemplateProps) => {
  const dispatch = useAppDispatch()

  const callEveryRender = () => 'a'

  callEveryRender()

  useEffect(() => {
    dispatch(paginaAtual('home'))
  }, [callEveryRender])

  return (
    <S.Wrapper>
      <Base menuData={menuData}>
        {/* Banner no topo */}
        <BannerSlider items={bannerSliderData} />

        <S.ServicesSection>
          <Heading color="black" lineRight>
            Nossos serviços
          </Heading>

          <S.Description>
            Estes são os serviços que prestamos, que nos diferenciam
          </S.Description>

          <ServicesCardsList items={mockServicesCards.items} />
        </S.ServicesSection>

        <S.RecursosSection>
          <Container>
            <Heading color="black" lineRight>
              Nossos Recursos
            </Heading>

            <S.Description>
              Trabalhamos para atingir os objetivos de nossos clientes e ir além
              de suas expectativas.
            </S.Description>

            <RecursosCardsList items={mockRecursosCards.items} />
          </Container>
        </S.RecursosSection>

        <S.SocialBannerSection>
          <Container>
            <Heading>Torne-se parte da comunidade!</Heading>
            <S.Description>
              Entre em contato conosco FAÇA PARTE DA NOSSA LISTA VIP e receba
              informações que vai ajudar no desenvolvimento da sua empresa.
            </S.Description>

            <SocialBannerSlides />
          </Container>
        </S.SocialBannerSection>

        <S.WidgetSection>
          <WidgetList items={widgets} />
        </S.WidgetSection>
      </Base>
    </S.Wrapper>
  )
}

export default Home
