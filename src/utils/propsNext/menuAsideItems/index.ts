import { QueryMenu_menus } from 'graphql/generated/QueryMenu'
import {
  queryMenuAside_menuAsideMaisVistos,
  queryMenuAside_menuAsideTags
} from 'graphql/generated/queryMenuAside'

import { maisVistosMapper, menuMapper, tagsMapper } from 'utils/mappers'

type menuASideItemsPropsConstructorProps = {
  menuAsideMenu: QueryMenu_menus[]
  menuAsideMaisVistos: queryMenuAside_menuAsideMaisVistos[]
  menuAsideTags: queryMenuAside_menuAsideTags[]
}

export const menuAsideItemsPropsConstructor = ({
  menuAsideMenu,
  menuAsideMaisVistos,
  menuAsideTags
}: menuASideItemsPropsConstructorProps) => {
  return {
    menuData: menuMapper(menuAsideMenu),
    maisVistosData: maisVistosMapper(menuAsideMaisVistos),
    tagsData: tagsMapper(menuAsideTags)
  }
}
