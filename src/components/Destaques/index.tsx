import LinkLi from 'components/LinkLi'
import { resolveUrl } from 'utils/resolveUrl'
import * as S from './styles'

export type DestaqueProps = {
  title: string
  slug: string
}

export type DestaquesProps = {
  items: DestaqueProps[]
}

const Destaques = ({ items }: DestaquesProps) => (
  <S.Wrapper>
    {items?.map((item, index) => (
      <LinkLi
        key={index}
        moreWeight
        title={item.title}
        path={resolveUrl('artigos', item.slug)}
      />
    ))}
  </S.Wrapper>
)

export default Destaques
