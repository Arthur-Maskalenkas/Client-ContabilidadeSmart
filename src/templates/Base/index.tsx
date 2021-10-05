import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import MenuContact from 'components/MenuContact'

import mockMenu from 'components/Menu/mock'

import * as S from './styles'
import MediaWatch from 'components/MediaWatch'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
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
          <Menu menuSelects={mockMenu.menuSelects} />
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
