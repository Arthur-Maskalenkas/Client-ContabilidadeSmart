import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { QueryPosts, QueryPostsVariables } from 'graphql/generated/QueryPosts'

// postsConnection tem a função de contar o total de posts logo no inicio da query. Se o where apresentar 50 posts, vão ter 50 ids.

export const QUERY_POSTS = gql`
  query QueryPosts($limit: Int, $start: Int, $where: JSON, $sort: String) {
    posts(limit: $limit, start: $start, where: $where, sort: $sort) {
      id
      title
      subtitulo
      created_at
      slug
      text
      capa {
        url
        alternativeText
      }
    }

    postsConnection(where: $where) {
      values {
        id
      }
    }
  }
`

export const QUERY_POSTS_BY_SLUG = gql`
  query queryPostsBySlug($slug: String!) {
    posts(where: { slug: $slug }) {
      id
      title
      slug
      subtitulo
      created_at
      text
      capa {
        url
        alternativeText
      }
    }
  }
`

export function useQueryPosts(
  options?: QueryHookOptions<QueryPosts, QueryPostsVariables>
) {
  return useQuery<QueryPosts, QueryPostsVariables>(QUERY_POSTS, options)
}
