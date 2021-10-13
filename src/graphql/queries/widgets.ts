import { gql } from "@apollo/client";

export const QUERY_WIDGETS = gql`
query QueryWidgets {
  widgets {
   title
   path
    posts {
      title
      slug
    }
    categorias {
      title
      slug
    }
  }
}
`
export const QUERY_WIDGETS_POSTS_RECENTES= gql`
query QueryWidgetsPostsRecentes {
 	posts(limit: 5, sort: "created_at:desc") {
    title
    slug
   }
}
}`
