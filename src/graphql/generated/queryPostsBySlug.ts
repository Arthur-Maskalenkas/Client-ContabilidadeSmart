/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryPostsBySlug
// ====================================================

export interface queryPostsBySlug_posts_capa {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface queryPostsBySlug_posts {
  __typename: "Post";
  id: string;
  title: string;
  slug: string;
  subtitulo: string;
  created_at: any;
  text: string;
  capa: queryPostsBySlug_posts_capa | null;
}

export interface queryPostsBySlug {
  posts: queryPostsBySlug_posts[];
}

export interface queryPostsBySlugVariables {
  slug: string;
}
