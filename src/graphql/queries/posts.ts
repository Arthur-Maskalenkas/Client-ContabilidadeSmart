import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query QueryPosts($limit: Int, $start: Int, $where: JSON, $sort: String) {
    posts(limit: $limit, start: $start, where: $where, sort: $sort) {
      id
      title
      slug
      text
      capa {
        url
        alternativeText
      }
    }
  }
`
