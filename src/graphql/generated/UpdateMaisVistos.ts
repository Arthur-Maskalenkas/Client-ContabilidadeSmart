/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateMaisVistos
// ====================================================

export interface UpdateMaisVistos_updatePostsMaisVisto_postsMaisVisto_post {
  __typename: "Post";
  title: string;
}

export interface UpdateMaisVistos_updatePostsMaisVisto_postsMaisVisto {
  __typename: "PostsMaisVistos";
  visitas: number | null;
  post: UpdateMaisVistos_updatePostsMaisVisto_postsMaisVisto_post | null;
}

export interface UpdateMaisVistos_updatePostsMaisVisto {
  __typename: "updatePostsMaisVistoPayload";
  postsMaisVisto: UpdateMaisVistos_updatePostsMaisVisto_postsMaisVisto | null;
}

export interface UpdateMaisVistos {
  updatePostsMaisVisto: UpdateMaisVistos_updatePostsMaisVisto | null;
}

export interface UpdateMaisVistosVariables {
  postId: string;
  visitas: number;
}
