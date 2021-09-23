import * as S from './styles'
import { IconsDefault } from './icons'

export type IconTypes = 'Whatsapp' | 'Instagram' | 'Facebook'

type colorTypes = 'secondary' | 'white'

export type sizeTypes = 'small' | 'medium' | 'xlarge' | 'xxlarge' | 'xxxlarge' | 'large'

export type IconsProps = {
  icon: IconTypes
  size?: string | sizeTypes
  sizeMedia?: string | sizeTypes
  color?: colorTypes
  hoverColor?: colorTypes
  isScale?: boolean
  relativeY?: string
}

const IconsWrapper = ({
  icon,
  size,
  sizeMedia,
  color,
  hoverColor,
  isScale,
  relativeY
}: IconsProps) => (
  <S.Wrapper
    size={size}
    sizeMedia={sizeMedia}
    color={color}
    hoverColor={hoverColor}
    isScale={isScale}
    relativeY={relativeY}
  >
    {IconsDefault[icon]}
  </S.Wrapper>
)

export default IconsWrapper
