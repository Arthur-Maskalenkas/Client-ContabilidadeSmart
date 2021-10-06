import Compartilhe from 'components/Compartilhe'
import Heading from 'components/Heading'
import * as S from './styles'

export type TextContentProps = {
  title: string
  content: string
}

const TextContent = ({ title, content }: TextContentProps) => (
  <S.Wrapper>
    <Heading lineLeft size="xlarge">
      {title}
    </Heading>
    <Compartilhe />

    {/* Fazendo receber HTML */}
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)

export default TextContent
