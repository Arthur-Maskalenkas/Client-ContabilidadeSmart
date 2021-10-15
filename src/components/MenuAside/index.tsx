import NavigationAside from 'components/NavigationAside'

import MaisVistos, { MaisVistoProps } from 'components/MaisVistos'
import Tags, { TagProps } from 'components/Tags'
import { MenuUnitaryProps } from 'components/Menu'

import * as S from './styles'

import Compartilhe from 'components/Compartilhe'
import Logo from 'components/Logo'
import MediaWatch from 'components/MediaWatch'

export type MenuAsideProps = {
  menuData: MenuUnitaryProps[]
  tagsData: TagProps[]
  maisVistosData: MaisVistoProps[]
}

const MenuAside = ({ menuData, tagsData, maisVistosData }: MenuAsideProps) => (
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
          <NavigationAside items={menuData} />
        </S.ContentWrapper>
      </S.MenuContainer>
    </MediaWatch>
    <S.MenuContainer>
      <S.TitleWrapper>
        <S.Title>Tags</S.Title>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <Tags items={tagsData} />
      </S.ContentWrapper>
    </S.MenuContainer>

    <S.MenuContainer>
      <S.TitleWrapper>
        <S.Title>Mais vistos na semana</S.Title>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <MaisVistos items={maisVistosData} />
      </S.ContentWrapper>
    </S.MenuContainer>

    <Compartilhe />
  </S.Wrapper>
)

export default MenuAside
