import { gql } from '@apollo/client'

export const QUERY_WIDGETS = gql`
  query QueryWidgets {
    widgetsCategorias: widgets(where: { path: "categorias" }) {
      title
      path
      categorias {
        title
        slug
      }
    }

    widgetsPaginas: widgets(where: { path: "paginas" }) {
      title
      path
      posts {
        title
        slug
      }
    }

    widgetsPostsRecentes: posts(sort: "created_at:asc", limit: 5) {
      title
      slug
    }
  }
`
