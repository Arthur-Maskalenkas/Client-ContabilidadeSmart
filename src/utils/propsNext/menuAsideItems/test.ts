import { QueryMenu_menus } from 'graphql/generated/QueryMenu'
import {
  queryMenuAside_menuAsideMaisVistos,
  queryMenuAside_menuAsideTags
} from 'graphql/generated/queryMenuAside'

import { menuAsideItemsPropsConstructor } from '.'

describe('menuAsideItemsProps()', () => {
  it('vai retornar menuData,maisVistosData e tagsData', () => {
    // Dados que vãp chegar da API
    const menuAsideMenu: QueryMenu_menus[] = [
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
    const menuAsideMaisVistos: queryMenuAside_menuAsideMaisVistos[] = [
      {
        __typename: 'PostsMaisVistos',
        post: {
          __typename: 'Post',
          title: 'o slug de uma sessão de mais visto',
          slug: 'o slug de uma sessão de mais visto'
        }
      }
    ]

    const menuAsideTags: queryMenuAside_menuAsideTags[] = [
      {
        __typename: 'Tag',
        Title: 'o titulo de uma tag',
        slug: 'o slug de uma tag'
      }
    ]

    // Vai chegar tudo misturado
    const dataApi = { menuAsideMenu, menuAsideMaisVistos, menuAsideTags }

    const expectValue = menuAsideItemsPropsConstructor(dataApi)

    expect(expectValue).toStrictEqual({
      menuData: [
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
      ],
      maisVistosData: [
        {
          title: 'o slug de uma sessão de mais visto',
          slug: 'o slug de uma sessão de mais visto'
        }
      ],
      tagsData: [
        {
          title: 'o titulo de uma tag',
          slug: 'o slug de uma tag'
        }
      ]
    })
  })
})
