/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_WIDGET_PATH } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryWidgetsCategorias
// ====================================================

export interface QueryWidgetsCategorias_widgetCategorias_categorias {
  __typename: "Categoria";
  title: string;
  slug: string;
}

export interface QueryWidgetsCategorias_widgetCategorias {
  __typename: "Widget";
  title: string;
  path: ENUM_WIDGET_PATH | null;
  categorias: QueryWidgetsCategorias_widgetCategorias_categorias[];
}

export interface QueryWidgetsCategorias {
  widgetCategorias: QueryWidgetsCategorias_widgetCategorias[];
}
