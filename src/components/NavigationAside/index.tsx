import LinkLi from 'components/LinkLi'
import { MenuProps } from 'components/Menu'
import { resolveUrl } from 'utils/resolveUrl'

import * as S from './styles'

const NavigationAside = ({ items }: MenuProps) => (
  <S.Wrapper>
    {items?.map((item, index) =>
      item.dropdownOptions?.length ? (
        <S.MenuTitleWrapperLi key={index}>
          <S.MenuTitle>{item.title}</S.MenuTitle>
          <S.MenuDropdownWrapper aria-label={`opções do menu ${item.title}`}>
            {item.dropdownOptions.map((item, index) => (
              <LinkLi
                key={index}
                title={item.titleOption}
                path={resolveUrl('artigos', item.slug)}
              />
            ))}
          </S.MenuDropdownWrapper>
        </S.MenuTitleWrapperLi>
      ) : (
        <LinkLi
          key={index}
          title={item.title}
          path={resolveUrl('artigos', item.slug)}
        />
      )
    )}
  </S.Wrapper>
)

export default NavigationAside
