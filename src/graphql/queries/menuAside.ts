import { gql } from '@apollo/client'

export const QUERY_MENUASIDE = gql`
  query QueryTags {
    tags {
      Title
      slug
    }
  }
`
