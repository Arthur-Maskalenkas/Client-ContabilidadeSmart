import { ENUM_WIDGET_PATH } from 'graphql/generated/globalTypes'
import {
  QueryWidgets_widgetsCategorias,
  QueryWidgets_widgetsPaginas,
  QueryWidgets_widgetsPostsRecentes
} from 'graphql/generated/QueryWidgets'
import { widgetItemsPropsConstructor } from '.'

describe('widgetItemsPropsConstructor', () => {
  it('vai retornar os widget de posts recentes, paginas e categorias', () => {
    // Dados que vão chegar da API
    const widgetsCategorias: QueryWidgets_widgetsCategorias[] = [
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
    const widgetsPaginas: QueryWidgets_widgetsPaginas[] = [
      {
        __typename: 'Widget',
        path: ENUM_WIDGET_PATH.paginas,
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
    const widgetsPostsRecentes: QueryWidgets_widgetsPostsRecentes[] = [
      {
        __typename: 'Post',
        title: 'um titulo de um post recente',
        slug: 'posts_recentes'
      }
    ]

    const dataApi = {
      widgetsPostsRecentes,
      widgetsPaginas,
      widgetsCategorias
    }

    const expectValue = widgetItemsPropsConstructor(dataApi)

    expect(expectValue).toStrictEqual({
      widgetListCategoriasData: [
        {
          title: 'Veja uma noticia',
          path: 'categorias',
          items: [{ title: 'uma noticia', slug: 'slug de uma noticia' }]
        }
      ],
      widgetListPaginasData: [
        {
          title: 'Veja um post',
          path: 'paginas',
          items: [{ title: 'um post', slug: 'slug de um post' }]
        }
      ],
      widgetPostsRecentes: [
        {
          moreWeight: true,
          title: 'Posts recentes',
          path: 'posts_recentes',
          items: [
            {
              title: 'um titulo de um post recente',
              path: 'posts_recentes'
            }
          ]
        }
      ]
    })
  })
})
