import { QueryMenu_menus } from 'graphql/generated/QueryMenu'
import {
  queryMenuAside_menuAsideDestaques,
  queryMenuAside_menuAsideMaisVistos,
  queryMenuAside_menuAsideTags
} from 'graphql/generated/queryMenuAside'

import {
  destaquesMapper,
  maisVistosMapper,
  menuMapper,
  tagsMapper
} from 'utils/mappers'

type menuASideItemsPropsConstructorProps = {
  menuAsideMenu: QueryMenu_menus[]
  menuAsideMaisVistos: queryMenuAside_menuAsideMaisVistos[]
  menuAsideTags: queryMenuAside_menuAsideTags[]
  menuAsideDestaques: queryMenuAside_menuAsideDestaques[]
}

export const menuAsideItemsPropsConstructor = ({
  menuAsideMenu,
  menuAsideMaisVistos,
  menuAsideTags,
  menuAsideDestaques
}: menuASideItemsPropsConstructorProps) => {
  return {
    menuData: menuMapper(menuAsideMenu),
    maisVistosData: maisVistosMapper(menuAsideMaisVistos),
    destaquesData: destaquesMapper(menuAsideDestaques),
    tagsData: tagsMapper(menuAsideTags)
  }
}
