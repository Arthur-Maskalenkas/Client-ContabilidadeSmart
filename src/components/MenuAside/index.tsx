import NavigationAside from 'components/NavigationAside'

import Tags, { TagProps } from 'components/Tags'
import { MenuUnitaryProps } from 'components/Menu'

import * as S from './styles'

import Compartilhe from 'components/Compartilhe'
import Logo from 'components/Logo'
import MediaWatch from 'components/MediaWatch'
import Destaques, { DestaqueProps } from 'components/Destaques'

export type MenuAsideProps = {
  menuData: MenuUnitaryProps[]
  tagsData: TagProps[]
  destaquesData: DestaqueProps[]
}

const MenuAside = ({ menuData, tagsData, destaquesData }: MenuAsideProps) => (
  <S.Wrapper>
    <MediaWatch greaterThan="large">
      <Logo size="small" />

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
        <S.Title>Destaques</S.Title>
      </S.TitleWrapper>
      <S.ContentWrapper>
        <Destaques items={destaquesData} />
      </S.ContentWrapper>
    </S.MenuContainer>

    <Compartilhe />
  </S.Wrapper>
)

export default MenuAside
