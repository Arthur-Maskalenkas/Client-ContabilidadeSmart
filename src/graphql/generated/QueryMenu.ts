/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryMenu
// ====================================================

export interface QueryMenu_menus_menu_options_post {
  __typename: "Post";
  slug: string;
}

export interface QueryMenu_menus_menu_options {
  __typename: "MenuOption";
  title: string;
  post: QueryMenu_menus_menu_options_post | null;
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
