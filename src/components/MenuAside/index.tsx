import LinkLi from 'components/LinkLi'
import * as S from './styles'

type LinkMenuDesktopTypes = {
  titleOption: string
  slug: string
}
type ItemTypes = {
  title: string
  slug?: string
  dropdownOptions?: LinkMenuDesktopTypes[]
}

export type MenuAsideProps = {
  item: ItemTypes[]
}

const MenuAside = ({ item }: MenuAsideProps) => (
  <S.Wrapper>
    {item?.map((item, index) =>
      item.dropdownOptions?.length ? (
        <S.MenuTitleWrapperLi key={index}>
          <S.MenuTitle>{item.title}</S.MenuTitle>
          <S.MenuDropdownWrapper aria-label={`opções do menu ${item.title}`}>
            {item.dropdownOptions.map((item, index) => (
              <S.MenuDropdownContent
                key={index}
                role="listitem"
                aria-label={`opção ${item.titleOption}`}
              >
                <S.MenuTitleLink role="link">{item.titleOption}</S.MenuTitleLink>
              </S.MenuDropdownContent>
            ))}
          </S.MenuDropdownWrapper>
        </S.MenuTitleWrapperLi>
      ) : (
        <S.MenuTitleWrapperLi
          key={index}
          role="listitem"
          aria-label={`opção ${item.title}`}
        >
          <S.MenuTitle as="a" role="link">
            {item.title}
          </S.MenuTitle>
        </S.MenuTitleWrapperLi>
      )
    )}
  </S.Wrapper>
)

export default MenuAside
