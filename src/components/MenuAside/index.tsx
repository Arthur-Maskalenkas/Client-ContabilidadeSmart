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
  <>
    {item?.map((item, index) => (
      <div key={index}>
        <LinkLi
          title={item.title}
          {...(item.dropdownOptions ? {} : { slug: item.slug })}
        />

        {!!item.dropdownOptions &&
          item.dropdownOptions?.map((item, index) => (
            <S.DropdownOptionWrapper key={index}>
              <LinkLi title={item.titleOption} slug={item.slug} />
            </S.DropdownOptionWrapper>
          ))}
      </div>
    ))}
  </>
)

export default MenuAside
