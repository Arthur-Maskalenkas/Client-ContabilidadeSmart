import { QueryMenu_menus } from 'graphql/generated/QueryMenu'

export const menuMapper = (menu: QueryMenu_menus[]) => {
  return menu
    ? menu.map((item) => ({
        title: item.title,
        slug: item.slug,
        dropdownOptions: item.menu_options.map((item) => ({
          titleOption: item.title,
          slug: item?.post?.slug
        }))
      }))
    : []
}
