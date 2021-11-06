import { QueryMenu_menus } from 'graphql/generated/QueryMenu'
import {
  queryMenuAside_menuAsideDestaques,
  queryMenuAside_menuAsideTags
} from 'graphql/generated/queryMenuAside'

import { destaquesMapper, menuMapper, tagsMapper } from 'utils/mappers'

type menuASideItemsPropsConstructorProps = {
  menuAsideMenu: QueryMenu_menus[]
  menuAsideTags: queryMenuAside_menuAsideTags[]
  menuAsideDestaques: queryMenuAside_menuAsideDestaques[]
}

export const menuAsideItemsPropsConstructor = ({
  menuAsideMenu,
  menuAsideTags,
  menuAsideDestaques
}: menuASideItemsPropsConstructorProps) => {
  return {
    menuData: menuMapper(menuAsideMenu),
    destaquesData: destaquesMapper(menuAsideDestaques),
    tagsData: tagsMapper(menuAsideTags)
  }
}
