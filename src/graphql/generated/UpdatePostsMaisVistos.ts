/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdatePostsMaisVistos
// ====================================================

export interface UpdatePostsMaisVistos_updatePostsMaisVisto_postsMaisVisto_post {
  __typename: "Post";
  title: string;
}

export interface UpdatePostsMaisVistos_updatePostsMaisVisto_postsMaisVisto {
  __typename: "PostsMaisVistos";
  visitas: number | null;
  post: UpdatePostsMaisVistos_updatePostsMaisVisto_postsMaisVisto_post | null;
}

export interface UpdatePostsMaisVistos_updatePostsMaisVisto {
  __typename: "updatePostsMaisVistoPayload";
  postsMaisVisto: UpdatePostsMaisVistos_updatePostsMaisVisto_postsMaisVisto | null;
}

export interface UpdatePostsMaisVistos {
  updatePostsMaisVisto: UpdatePostsMaisVistos_updatePostsMaisVisto | null;
}

export interface UpdatePostsMaisVistosVariables {
  postId: string;
  visitas: number;
}
