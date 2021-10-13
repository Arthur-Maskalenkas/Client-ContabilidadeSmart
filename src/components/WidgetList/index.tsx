import Logo from 'components/Logo'
import Widget, { WidgetProps } from 'components/Widget'
import * as S from './styles'

export type WidgetListProps = {
  items: WidgetProps[]
}

// No template eu preciso passar uma LISTA do tipo WIDGETPROPS e não WIDGETLISTPROPS

const WidgetList = ({ items }: WidgetListProps) => (
  <S.Wrapper>
    {items.map((item, index) => (
      <Widget key={index} {...item} />
    ))}
    <Logo size="medium" />
  </S.Wrapper>
)

export default WidgetList
