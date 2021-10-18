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
  return {
    widgetListCategoriasData: widgetCategoriasMapper(widgetsCategorias),
    widgetListPaginasData: widgetPaginasMapper(widgetsPaginas),
    widgetPostsRecentes: widgetPostsRecentesMapper(widgetsPostsRecentes)
  }
}
