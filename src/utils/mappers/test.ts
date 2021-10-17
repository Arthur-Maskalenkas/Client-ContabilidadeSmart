import { menuMapper } from '.'

import { QueryMenu_menus } from 'graphql/generated/QueryMenu'
import {
  QueryWidgets_widgetsCategorias,
  QueryWidgets_widgetsPaginas,
  QueryWidgets_widgetsPostsRecentes
} from 'graphql/generated/QueryWidgets'
import { ENUM_WIDGET_PATH } from 'graphql/generated/globalTypes'

describe('menuMapper()', () => {
  it('retorna o valor certo completamente mapeado', () => {
    const menu: QueryMenu_menus[] = [
      {
        __typename: 'Menu',
        title: 'um titulo do menu',
        slug: 'um slug do menu',
        menu_options: [
          {
            __typename: 'MenuOption',
            title: 'um titulo do dropdown',
            post: { slug: 'um slug do post do dropdown', __typename: 'Post' }
          }
        ]
      }
    ]

    expect(menuMapper(menu)).toStrictEqual([
      {
        title: 'um titulo do menu',
        slug: 'um slug do menu',
        dropdownOptions: [
          {
            titleOption: 'um titulo do dropdown',
            slug: 'um slug do post do dropdown'
          }
        ]
      }
    ])
  })
})

describe('widgetsMapperCategoria()', () => {
  it('retorna o valor certo completamente mapeado', () => {
    const menu: QueryWidgets_widgetsCategorias[] = [
      {
        __typename: 'Widget',
        path: ENUM_WIDGET_PATH.categorias,
        title: 'Veja uma noticia',
        categorias: [
          {
            __typename: 'Categoria',
            title: 'uma noticia',
            slug: 'slug de uma noticia'
          }
        ]
      }
    ]
  })
})

describe('widgetsMapperCategoria()', () => {
  it('retorna o valor certo completamente mapeado', () => {
    const menu: QueryWidgets_widgetsPaginas[] = [
      {
        __typename: 'Widget',
        path: ENUM_WIDGET_PATH.categorias,
        title: 'Veja um post',
        posts: [
          {
            __typename: 'Post',
            title: 'um post',
            slug: 'slug de um post'
          }
        ]
      }
    ]
  })
})

// fix
describe('widgetsMapperPaginas()', () => {
  it('retorna o valor certo completamente mapeado', () => {
    const menu: QueryWidgets_widgetsPostsRecentes[] = [
      {
        __typename: 'Post',
            title: 'um post',
            slug: 'slug de um post'
          }
        ]
      }
    ]
  })
})
