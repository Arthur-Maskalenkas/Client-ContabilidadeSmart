import Widget, { WidgetProps } from 'components/Widget'
import * as S from './styles'

export type WidgetListProps = {
  items: WidgetProps[]
}

const WidgetList = ({ items }: WidgetListProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <Widget key={index} {...item} />
    ))}
  </S.Wrapper>
)

export default WidgetList
