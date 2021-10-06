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
      <Logo size="small" />
    </S.MenuContainer>

    <S.MenuContainer>
      <S.TitleWrapper>
        <S.Title>Menu</S.Title>
      </S.TitleWrapper>
      <NavigationAside item={mockNavigationAside.item} />
    </S.MenuContainer>

    <S.MenuContainer>
      <S.TitleWrapper>
        <S.Title>Tags</S.Title>
      </S.TitleWrapper>
      <Tags items={mockTags.items} />
    </S.MenuContainer>

    <S.MenuContainer>
      <S.TitleWrapper>
        <S.Title>Mais vistos na semana</S.Title>
      </S.TitleWrapper>
      <MaisVistos items={mockMaisVistos.items} />
    </S.MenuContainer>

    <S.MenuContainer>
      <Compartilhe />
    </S.MenuContainer>
  </S.Wrapper>
)

export default MenuAside
