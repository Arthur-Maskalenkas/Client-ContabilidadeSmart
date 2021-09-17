import Dropdown from 'components/Dropdown'
import * as S from './styles'

type dropDownTypes = {
  title: string
  link: string
}

export type DropDownDesktopProps = {
  dropdownOptions: dropDownTypes[]
  children?: React.ReactNode
}

const DropdownDesktop = ({ dropdownOptions, children }: DropDownDesktopProps) => (
  <S.Wrapper>
    <Dropdown title={<S.Title>{children}</S.Title>}>
      {dropdownOptions.map((item, index) => (
        <S.DropdownWrapperList key={index}>
          <S.DropdownTitle>{item.title}</S.DropdownTitle>
        </S.DropdownWrapperList>
      ))}
    </Dropdown>
  </S.Wrapper>
)

export default DropdownDesktop
