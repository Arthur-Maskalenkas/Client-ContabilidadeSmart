import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'

import mockMenu from 'components/Menu/mock'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <S.Wrapper>
    <S.MenuContainer>
      <Container>
        <Menu menuSelects={mockMenu.menuSelects} />
      </Container>
    </S.MenuContainer>

    <S.Content>{children}</S.Content>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
)

export default Base
