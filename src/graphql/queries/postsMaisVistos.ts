import { gql } from '@apollo/client'

export const QUERY_POSTS_MAIS_VISTO_BY_SLUG = gql`
  query QueryMaisVistos($slug: String) {
    postsMaisVistos(where: { slug_contains: $slug }) {
      slug
      id
      visitas
    }
  }
`
