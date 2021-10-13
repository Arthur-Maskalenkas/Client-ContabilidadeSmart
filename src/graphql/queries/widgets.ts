import { gql } from "@apollo/client";

export const QUERY_WIDGETS_CATEGORIAS = gql`
query QueryWidgetsCategorias {
  widgetCategorias:widgets(where: {path: "categorias"}) {
   title
   path
    categorias {
      title
      slug
    }
  }
}
`

export const QUERY_WIDGETS_PAGINAS = gql`
query QueryWidgetsPaginas {
  widgetpaginas:widgets(where: {path: "paginas"}) {
    title
    path
    posts {
      title
      slug
    }
  }
}`


export const QUERY_WIDGETS_POSTS_RECENTES= gql`
query QueryWidgetsPostsRecentes {
 	postsRecentes:posts(limit: 5, sort: "created_at:desc") {
    title
    slug
   }
}
`
