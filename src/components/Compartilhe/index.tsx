import IconsWrapper from 'components/IconsWrapper'
import * as S from './styles'

const Compartilhe = () => (
  <S.Wrapper>
    <S.Title>Compartilhe com os amigos</S.Title>

    <S.ListIconsWrapper>
      <S.IconWrapper>
        <IconsWrapper icon="Linkedin" />
      </S.IconWrapper>

      <S.IconWrapper>
        <IconsWrapper icon="Facebook" />
      </S.IconWrapper>

      <S.IconWrapper>
        <IconsWrapper icon="Telegram" />
      </S.IconWrapper>

      <S.IconWrapper>
        <IconsWrapper icon="Whatsapp" />
      </S.IconWrapper>
    </S.ListIconsWrapper>
  </S.Wrapper>
)

export default Compartilhe
