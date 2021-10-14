/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_WIDGET_PATH } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryWidgets
// ====================================================

export interface QueryWidgets_widgetsCategorias_categorias {
  __typename: "Categoria";
  title: string;
  slug: string;
}

export interface QueryWidgets_widgetsCategorias {
  __typename: "Widget";
  title: string;
  path: ENUM_WIDGET_PATH | null;
  categorias: QueryWidgets_widgetsCategorias_categorias[];
}

export interface QueryWidgets_widgetsPaginas_posts {
  __typename: "Post";
  title: string;
  slug: string;
}

export interface QueryWidgets_widgetsPaginas {
  __typename: "Widget";
  title: string;
  path: ENUM_WIDGET_PATH | null;
  posts: QueryWidgets_widgetsPaginas_posts[];
}

export interface QueryWidgets_widgetsPostsRecentes {
  __typename: "Post";
  title: string;
  slug: string;
}

export interface QueryWidgets {
  widgetsCategorias: QueryWidgets_widgetsCategorias[];
  widgetsPaginas: QueryWidgets_widgetsPaginas[];
  widgetsPostsRecentes: QueryWidgets_widgetsPostsRecentes[];
}
