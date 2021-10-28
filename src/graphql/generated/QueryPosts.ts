/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryPosts
// ====================================================

export interface QueryPosts_posts_capa {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryPosts_posts {
  __typename: "Post";
  id: string;
  title: string;
  subtitulo: string;
  created_at: any;
  slug: string;
  text: string;
  capa: QueryPosts_posts_capa | null;
}

export interface QueryPosts_postsConnection_values {
  __typename: "Post";
  id: string;
}

export interface QueryPosts_postsConnection {
  __typename: "PostConnection";
  values: (QueryPosts_postsConnection_values | null)[] | null;
}

export interface QueryPosts {
  posts: QueryPosts_posts[];
  postsConnection: QueryPosts_postsConnection | null;
}

export interface QueryPostsVariables {
  limit?: number | null;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
