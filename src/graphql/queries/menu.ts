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

export const QUERY_MENUASIDE = gql`
  query queryMenuAside {
    menuAsideTags: tags {
      Title
      slug
    }

    menuAsideMaisVistos: postsMaisVistos(limit: 5, sort: "visitas:desc") {
      visitas
      post {
        title
        slug
      }
    }

    menuAsideMenu: menus {
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
