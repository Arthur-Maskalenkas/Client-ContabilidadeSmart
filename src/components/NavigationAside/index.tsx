import LinkLi from 'components/LinkLi'
import Link from 'next/link'

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

export type NavigationAsideProps = {
  item: ItemTypes[]
}

const NavigationAside = ({ item }: NavigationAsideProps) => (
  <S.Wrapper>
    {item?.map((item, index) =>
      item.dropdownOptions?.length ? (
        <S.MenuTitleWrapperLi key={index}>
          <S.MenuTitle>{item.title}</S.MenuTitle>
          <S.MenuDropdownWrapper aria-label={`opções do menu ${item.title}`}>
            {item.dropdownOptions.map((item, index) => (
              <LinkLi key={index} title={item.titleOption} path={`artigo/${item.slug}`} />
            ))}
          </S.MenuDropdownWrapper>
        </S.MenuTitleWrapperLi>
      ) : (
        <LinkLi key={index} title={item.title} path={`artigo/${item.slug}`} />
      )
    )}
  </S.Wrapper>
)

export default NavigationAside
