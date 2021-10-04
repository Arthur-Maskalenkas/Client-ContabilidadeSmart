import NavigationAside from 'components/NavigationAside'
import Tags from 'components/Tags'

import { ContainerAside } from 'components/AsideStyles'

import * as S from './styles'

import mockNavigationAside from 'components/NavigationAside/mock'
import mockTags from 'components/Tags/mock'
import mockMaisVistos from 'components/MaisVistos/mock'
import MaisVistos from 'components/MaisVistos'
import Compartilhe from 'components/Compartilhe'
import Logo from 'components/Logo'

const MenuAside = () => (
  <S.Wrapper>
    <S.MenuContainer>
      <ContainerAside>
        <Logo size="small" />
      </ContainerAside>
    </S.MenuContainer>

    <S.MenuContainer>
      <S.TitleWrapper>
        <S.Title>Menu</S.Title>
      </S.TitleWrapper>
      <ContainerAside>
        <NavigationAside item={mockNavigationAside.item} />
      </ContainerAside>
    </S.MenuContainer>

    <S.MenuContainer>
      <S.TitleWrapper>
        <S.Title>Tags</S.Title>
      </S.TitleWrapper>
      <ContainerAside>
        <Tags items={mockTags.items} />
      </ContainerAside>
    </S.MenuContainer>

    <S.MenuContainer>
      <S.TitleWrapper>
        <S.Title>Mais vistos na semana</S.Title>
      </S.TitleWrapper>
      <ContainerAside>
        <MaisVistos items={mockMaisVistos.items} />
      </ContainerAside>
    </S.MenuContainer>

    <Compartilhe />
  </S.Wrapper>
)

export default MenuAside
