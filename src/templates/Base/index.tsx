import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu, { MenuProps } from 'components/Menu'
import MenuContact from 'components/MenuContact'

import * as S from './styles'
import MediaWatch from 'components/MediaWatch'

export type BaseTemplateProps = {
  children: React.ReactNode
  menuData: MenuProps
}

const Base = ({ children, menuData }: BaseTemplateProps) => (
  <S.Wrapper>
    <S.MenusContainer>
      <MediaWatch greaterThan="large">
        <S.MenuContactWrapper>
          <Container>
            <MenuContact />
          </Container>
        </S.MenuContactWrapper>
      </MediaWatch>
      <S.MenuContainer>
        <Container>
          <Menu items={menuData.items} />
        </Container>
      </S.MenuContainer>
    </S.MenusContainer>

    <S.Content>{children}</S.Content>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
)

export default Base
