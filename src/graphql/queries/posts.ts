import { gql } from '@apollo/client'

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
  }
`

export const QUERY_POSTS_BY_SLUG = gql`
  query queryPostsBySlug($slug: String!) {
    posts(where: { slug: $slug }) {
      id
      title
      slug
      created_at
      text
      capa {
        url
        alternativeText
      }
    }
  }
`
