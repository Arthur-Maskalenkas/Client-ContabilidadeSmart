import NavigationAside from 'components/NavigationAside'

import MaisVistos, { MaisVistosProps } from 'components/MaisVistos'
import Tags, { TagsProps } from 'components/Tags'
import { MenuProps } from 'components/Menu'

import * as S from './styles'

import Compartilhe from 'components/Compartilhe'
import Logo from 'components/Logo'
import MediaWatch from 'components/MediaWatch'

export type MenuAsideProps = {
  menuData: MenuProps
  tagsData: TagsProps
  maisVistosData: MaisVistosProps
}

const MenuAside = ({ menuData, tagsData, maisVistosData }: MenuAsideProps) => (
  <S.Wrapper>
    <MediaWatch greaterThan="large">
      <S.MenuContainer>
        <Logo size="small" />
      </S.MenuContainer>
      {console.log(menuData)}

      <S.MenuContainer>
        <S.TitleWrapper>
          <S.Title>Menu</S.Title>
        </S.TitleWrapper>
        <S.ContentWrapper>
          <NavigationAside {...menuData} />
        </S.ContentWrapper>
      </S.MenuContainer>
    </MediaWatch>
    <S.MenuContainer>
      <S.TitleWrapper>
        <S.Title>Tags</S.Title>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <Tags {...tagsData} />
      </S.ContentWrapper>
    </S.MenuContainer>

    <S.MenuContainer>
      <S.TitleWrapper>
        <S.Title>Mais vistos na semana</S.Title>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <MaisVistos {...maisVistosData} />
      </S.ContentWrapper>
    </S.MenuContainer>

    <Compartilhe />
  </S.Wrapper>
)

export default MenuAside
