/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryMenu
// ====================================================

export interface QueryMenu_menus_menu_options {
  __typename: "MenuOption";
  title: string;
  slug: string | null;
}

export interface QueryMenu_menus {
  __typename: "Menu";
  title: string;
  slug: string;
  menu_options: QueryMenu_menus_menu_options[];
}

export interface QueryMenu {
  menus: QueryMenu_menus[];
}
