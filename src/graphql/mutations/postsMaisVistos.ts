import { gql } from '@apollo/client'

export const MUTATION_CREATE_POSTS_MAIS_VISTO = gql`
  mutation CreatePostsMaisVistos($slug: String!, $postId: ID!) {
    createPostsMaisVisto(
      input: { data: { visitas: 1, slug: $slug, post: $postId } }
    ) {
      postsMaisVisto {
        slug
      }
    }
  }
`

export const MUTATION_UPDATE_POSTS_MAIS_VISTO = gql`
  mutation UpdateMaisVistos($postId: ID!, $visitas: Int!) {
    updatePostsMaisVisto(
      input: { where: { id: $postId }, data: { visitas: $visitas } }
    ) {
      postsMaisVisto {
        visitas
        post {
          title
        }
      }
    }
  }
`
