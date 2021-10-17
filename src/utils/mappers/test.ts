import {
  bannerSliderMapper,
  menuMapper,
  widgetCategoriasMapper,
  widgetPaginasMapper,
  widgetPostsRecentesMapper
} from '.'

import { QueryMenu_menus } from 'graphql/generated/QueryMenu'

import {
  QueryWidgets_widgetsCategorias,
  QueryWidgets_widgetsPaginas,
  QueryWidgets_widgetsPostsRecentes
} from 'graphql/generated/QueryWidgets'

import {
  ENUM_WIDGET_PATH,
  ENUM_COMPONENTBANNERBANNER_TEXTDIRECTION
} from 'graphql/generated/globalTypes'

import { WidgetProps } from 'components/Widget'
import { MenuUnitaryProps } from 'components/Menu'
import { QueryBannersHome_home_bannerHome } from 'graphql/generated/QueryBannersHome'
import { BannerProps } from 'components/Banner'

describe('menuMapper()', () => {
  it('retorna o valor certo completamente mapeado de um menu', () => {
    const valueApi: QueryMenu_menus[] = [
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

    const expectValue: MenuUnitaryProps = {
      title: 'um titulo do menu',
      slug: 'um slug do menu',
      dropdownOptions: [
        {
          titleOption: 'um titulo do dropdown',
          slug: 'um slug do post do dropdown'
        }
      ]
    }

    expect(menuMapper(valueApi)).toStrictEqual([expectValue])
  })
})

describe('widgetsCategoriasMapper()', () => {
  it('retorna o valor certo completamente mapeado de um widget de categorias', () => {
    const valueApi: QueryWidgets_widgetsCategorias[] = [
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

    const expectValue: WidgetProps = {
      title: 'Veja uma noticia',
      path: 'categorias',
      items: [{ title: 'uma noticia', slug: 'slug de uma noticia' }]
    }

    expect(widgetCategoriasMapper(valueApi)).toStrictEqual([expectValue])
  })
})

describe('widgetsPaginasMapper()', () => {
  it('retorna o valor certo completamente mapeado de um widget de Paginas', () => {
    const valueApi: QueryWidgets_widgetsPaginas[] = [
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

    const expectValue: WidgetProps = {
      title: 'Veja um post',
      path: 'paginas',
      items: [{ title: 'um post', slug: 'slug de um post' }]
    }

    expect(widgetPaginasMapper(valueApi)).toStrictEqual([expectValue])
  })
})

// Esse vai retornar o map apenas de post, ja que o pai vai ser alterado pelo codigo
describe('widgetsPostsRecentesMapper()', () => {
  it('retorna o valor certo completamente mapeado de um widget de posts recentes', () => {
    const valueApi: QueryWidgets_widgetsPostsRecentes[] = [
      {
        __typename: 'Post',
        title: 'um titulo de um post recente',
        slug: 'posts_recentes'
      }
    ]

    const expectValue = {
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

    expect(widgetPostsRecentesMapper(valueApi)).toStrictEqual([expectValue])
  })
})

describe('bannerSliderMapper()', () => {
  it('retorna o valor completamente mapeado de um bannerSlider', () => {
    const valueApi: QueryBannersHome_home_bannerHome[] = [
      {
        __typename: 'ComponentBannerBanner',
        title: 'titulo de um banner',
        subtitle: 'subtitulo de um banner',
        titleWithColor: 'texto com cor de um banner',
        textDirection: ENUM_COMPONENTBANNERBANNER_TEXTDIRECTION.right,
        buttonLabel: 'o label de um botao',
        buttonLink: 'www.google.com.br',
        img: {
          __typename: 'UploadFile',
          url: 'uma url',
          alternativeText: 'um alt'
        }
      }
    ]

    const expectValue: BannerProps = {
      title: 'titulo de um banner',
      subtitle: 'subtitulo de um banner',
      titleWithColor: 'texto com cor de um banner',
      textDirection: 'right',
      buttonLabel: 'o label de um botao',
      buttonLink: 'www.google.com.br',
      titleImage: 'um alt',
      img: 'uma url'
    }

    expect(bannerSliderMapper(valueApi)).toStrictEqual([expectValue])
  })
})
