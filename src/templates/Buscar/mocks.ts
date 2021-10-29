import { QUERY_POSTS } from 'graphql/queries/posts'
import { POSTS_PER_PAGE } from '.'

export const postMock = {
  request: {
    query: QUERY_POSTS,
    limit: POSTS_PER_PAGE,
    variables: { limit: POSTS_PER_PAGE, where: {} }
  },
  result: {
    data: {
      posts: [
        {
          capa: null,
          created_at: '2021-10-13T06:08:43.782Z',
          id: '7',
          slug: 'contabil',
          subtitulo: 'Um subtitulo do post contabill',
          text: 'Um texto do post contabil',
          title: 'Contábil',
          __typename: 'Post'
        }
      ],
      postsConnection: {
        values: [
          {
            id: '4',
            __typename: 'Post'
          }
        ],
        __typename: 'PostConnection'
      }
    }
  }
}
