/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryMenuAside
// ====================================================

export interface queryMenuAside_menuAsideTags_posts {
  __typename: "Post";
  id: string;
}

export interface queryMenuAside_menuAsideTags {
  __typename: "Tag";
  title: string;
  slug: string;
  posts: queryMenuAside_menuAsideTags_posts[];
}

export interface queryMenuAside_menuAsideDestaques_post {
  __typename: "Post";
  title: string;
  slug: string;
}

export interface queryMenuAside_menuAsideDestaques {
  __typename: "Destaques";
  post: queryMenuAside_menuAsideDestaques_post | null;
}

export interface queryMenuAside_menuAsideMenu_menu_options_post {
  __typename: "Post";
  slug: string;
}

export interface queryMenuAside_menuAsideMenu_menu_options {
  __typename: "MenuOption";
  title: string;
  post: queryMenuAside_menuAsideMenu_menu_options_post | null;
}

export interface queryMenuAside_menuAsideMenu {
  __typename: "Menu";
  title: string;
  slug: string;
  menu_options: queryMenuAside_menuAsideMenu_menu_options[];
}

export interface queryMenuAside {
  menuAsideTags: queryMenuAside_menuAsideTags[];
  menuAsideDestaques: queryMenuAside_menuAsideDestaques[];
  menuAsideMenu: queryMenuAside_menuAsideMenu[];
}
