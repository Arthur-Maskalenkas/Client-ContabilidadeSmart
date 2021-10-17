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

    widgetsPostsRecentes: posts(limit: 5, sort: "created_at:desc") {
      title
      slug
    }
  }
`
