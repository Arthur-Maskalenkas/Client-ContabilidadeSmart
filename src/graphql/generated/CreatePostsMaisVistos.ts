/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreatePostsMaisVistos
// ====================================================

export interface CreatePostsMaisVistos_createPostsMaisVisto_postsMaisVisto {
  __typename: "PostsMaisVistos";
  slug: string;
}

export interface CreatePostsMaisVistos_createPostsMaisVisto {
  __typename: "createPostsMaisVistoPayload";
  postsMaisVisto: CreatePostsMaisVistos_createPostsMaisVisto_postsMaisVisto | null;
}

export interface CreatePostsMaisVistos {
  createPostsMaisVisto: CreatePostsMaisVistos_createPostsMaisVisto | null;
}

export interface CreatePostsMaisVistosVariables {
  slug: string;
  postId: string;
}
