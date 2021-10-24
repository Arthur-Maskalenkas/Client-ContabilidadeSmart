/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryMaisVistos
// ====================================================

export interface QueryMaisVistos_postsMaisVistos {
  __typename: "PostsMaisVistos";
  slug: string;
  id: string;
  visitas: number | null;
}

export interface QueryMaisVistos {
  postsMaisVistos: QueryMaisVistos_postsMaisVistos[];
}

export interface QueryMaisVistosVariables {
  slug?: string | null;
}
