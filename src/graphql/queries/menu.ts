import { gql } from '@apollo/client'

export const QUERY_MENU = gql`
  query QueryMenu {
  menus {
    title
    slug
    menu_options {
      title
    	post {
        slug
      }
    }
  }
}
`
