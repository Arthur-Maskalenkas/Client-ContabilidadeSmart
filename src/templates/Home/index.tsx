import Base from 'templates/Base'

import * as S from './styles'

import BannerSlider from 'components/BannerSlider'
import Heading from 'components/Heading'
import bannerSliderMock from 'components/BannerSlider/mock'
import ServicesCardsList from 'components/ServicesCardsList'

import mockServicesCards from 'components/ServicesCardsList/mock'
import { Container } from 'components/Container'

const Home = () => (
  <S.Wrapper>
    <Base>
      {/* Banner no topo */}
      <BannerSlider items={bannerSliderMock} />

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
            Trabalhamos para atingir os objetivos de nossos clientes e ir além de suas
            expectativas.
          </S.Description>
        </Container>
      </S.RecursosSection>
    </Base>
  </S.Wrapper>
)

export default Home
