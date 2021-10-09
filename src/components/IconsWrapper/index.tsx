import * as S from './styles'
import { IconsDefault } from './icons'

export type IconTypes =
  | 'Whatsapp'
  | 'Instagram'
  | 'Facebook'
  | 'Telegram'
  | 'Linkedin'
  | 'Cubes'
  | 'Cog'
  | 'AmericanSignLanguageInterpreting'
  | 'ChartArea'
  | 'Coffee'
  | 'Child'
  | 'Youtube'
  | 'Laptop'
type colorTypes = 'secondary' | 'white'

export type sizeTypes = 'small' | 'medium' | 'xlarge' | 'xxlarge' | 'xxxlarge' | 'large'

export type IconsProps = {
  icon: IconTypes
  color?: colorTypes
  size?: string | sizeTypes
}

const IconsWrapper = ({ icon, size, color = 'white' }: IconsProps) => (
  <S.Wrapper size={size} color={color}>
    {IconsDefault[icon]}
  </S.Wrapper>
)

export default IconsWrapper
