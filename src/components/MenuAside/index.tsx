import NavigationAside from 'components/NavigationAside'
import Tags from 'components/Tags'

import * as S from './styles'

import mockNavigationAside from 'components/NavigationAside/mock'
import mockTags from 'components/Tags/mock'
import mockMaisVistos from 'components/MaisVistos/mock'
import MaisVistos from 'components/MaisVistos'
import Compartilhe from 'components/Compartilhe'
import Logo from 'components/Logo'
import MediaWatch from 'components/MediaWatch'

const MenuAside = () => (
  <S.Wrapper>
    <MediaWatch greaterThan="large">
      <S.MenuContainer>
        <Logo size="small" />
      </S.MenuContainer>

      <S.MenuContainer>
        <S.TitleWrapper>
          <S.Title>Menu</S.Title>
        </S.TitleWrapper>
        <S.ContentWrapper>
          <NavigationAside item={mockNavigationAside.item} />
        </S.ContentWrapper>
      </S.MenuContainer>
    </MediaWatch>
    <S.MenuContainer>
      <S.TitleWrapper>
        <S.Title>Tags</S.Title>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <Tags items={mockTags.items} />
      </S.ContentWrapper>
    </S.MenuContainer>

    <S.MenuContainer>
      <S.TitleWrapper>
        <S.Title>Mais vistos na semana</S.Title>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <MaisVistos items={mockMaisVistos.items} />
      </S.ContentWrapper>
    </S.MenuContainer>

    <Compartilhe />
  </S.Wrapper>
)

export default MenuAside
