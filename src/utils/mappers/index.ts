import { QueryBannersHome_home_bannerHome } from 'graphql/generated/QueryBannersHome'
import { QueryMenu_menus } from 'graphql/generated/QueryMenu'
import {
  queryMenuAside_menuAsideMaisVistos,
  queryMenuAside_menuAsideTags
} from 'graphql/generated/queryMenuAside'
import { queryPostsBySlug_posts } from 'graphql/generated/queryPostsBySlug'
import {
  QueryWidgets_widgetsCategorias,
  QueryWidgets_widgetsPaginas,
  QueryWidgets_widgetsPostsRecentes
} from 'graphql/generated/QueryWidgets'

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

export const widgetCategoriasMapper = (
  widgetCategorias: QueryWidgets_widgetsCategorias[]
) => {
  return widgetCategorias
    ? widgetCategorias.map((item) => ({
        title: item.title,
        path: item.path,
        items: item.categorias.map((item) => ({
          title: item.title,
          slug: item.slug
        }))
      }))
    : []
}

export const widgetPaginasMapper = (
  widgetCategorias: QueryWidgets_widgetsPaginas[]
) => {
  return widgetCategorias
    ? widgetCategorias.map((item) => ({
        title: item.title,
        path: item.path,
        items: item.posts.map((item) => ({
          title: item.title,
          slug: item.slug
        }))
      }))
    : []
}

export const widgetPostsRecentesMapper = (
  widgetPostsRecentes: QueryWidgets_widgetsPostsRecentes[]
) => {
  return widgetPostsRecentes
    ? [
        {
          moreWeight: true,
          title: 'Posts recentes',
          path: 'posts_recentes',
          items: widgetPostsRecentes.map((item) => ({
            title: item.title,
            slug: item.slug
          }))
        }
      ]
    : []
}

export const bannerSliderMapper = (
  bannerSlider: QueryBannersHome_home_bannerHome[]
) => {
  return bannerSlider
    ? bannerSlider?.map((item) => ({
        title: item?.title,
        subtitle: item?.subtitle,
        textDirection: item?.textDirection,
        titleWithColor: item?.titleWithColor,
        img: item?.img?.url,
        titleImage: item?.img?.alternativeText,
        buttonLabel: item?.buttonLabel,
        buttonLink: item?.buttonLink
      }))
    : []
}

export const tagsMapper = (tag: queryMenuAside_menuAsideTags[]) => {
  return tag
    ? tag.map((item) => ({
        title: item.title,
        slug: item.slug,
        posts: item.posts.map((item) => ({ id: item.id }))
      }))
    : []
}

export const maisVistosMapper = (
  maisVistos: queryMenuAside_menuAsideMaisVistos[]
) => {
  return maisVistos
    ? maisVistos.map((item) => ({
        title: item.post?.title,
        slug: item.post?.slug
      }))
    : []
}

export const bannerPageMapper = (bannerPage: queryPostsBySlug_posts) => {
  return bannerPage
    ? {
        backgroundImage: bannerPage.capa?.url || '',
        altImage: bannerPage.capa?.alternativeText || '',
        data: bannerPage.created_at,
        slug: bannerPage.slug
      }
    : {}
}
