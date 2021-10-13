/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_WIDGET_PATH } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryWidgetsPaginas
// ====================================================

export interface QueryWidgetsPaginas_widgets_posts {
  __typename: "Post";
  title: string;
  slug: string;
}

export interface QueryWidgetsPaginas_widgets {
  __typename: "Widget";
  title: string;
  path: ENUM_WIDGET_PATH | null;
  posts: QueryWidgetsPaginas_widgets_posts[];
}

export interface QueryWidgetsPaginas {
  widgets: QueryWidgetsPaginas_widgets[];
}
