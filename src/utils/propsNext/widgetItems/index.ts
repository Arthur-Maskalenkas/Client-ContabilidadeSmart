import {
  QueryWidgets_widgetsCategorias,
  QueryWidgets_widgetsPaginas,
  QueryWidgets_widgetsPostsRecentes
} from 'graphql/generated/QueryWidgets'

import {
  widgetCategoriasMapper,
  widgetPaginasMapper,
  widgetPostsRecentesMapper
} from 'utils/mappers'

type widgetItemsPropsConstructorProps = {
  widgetsCategorias: QueryWidgets_widgetsCategorias[]
  widgetsPaginas: QueryWidgets_widgetsPaginas[]
  widgetsPostsRecentes: QueryWidgets_widgetsPostsRecentes[]
}

export const widgetItemsPropsConstructor = ({
  widgetsCategorias,
  widgetsPaginas,
  widgetsPostsRecentes
}: widgetItemsPropsConstructorProps) => {
  const objs = {
    widgetListCategoriasData: widgetCategoriasMapper(widgetsCategorias),
    widgetListPaginasData: widgetPaginasMapper(widgetsPaginas),
    widgetPostsRecentes: widgetPostsRecentesMapper(widgetsPostsRecentes)
  }

  const listaObjs = [
    ...objs.widgetListCategoriasData,
    ...objs.widgetListPaginasData,
    ...objs.widgetPostsRecentes
  ]

  return listaObjs
}
