import LinkLi, { LinkLiProps } from 'components/LinkLi'
import * as S from './styles'

export type WidgetProps = {
  title: string
  moreWeight?: boolean
  items: LinkLiProps[]
}

const Widget = ({ title, items, moreWeight }: WidgetProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    {items.map((item, index) => (
      <S.LinkLiWrapper key={index}>
        <LinkLi
          title={item.title}
          slug={item.slug}
          {...(moreWeight ? { moreWeight } : {})}
        />
      </S.LinkLiWrapper>
    ))}
  </S.Wrapper>
)

export default Widget
