/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryMenuAside
// ====================================================

export interface queryMenuAside_menuAsideTags {
  __typename: "Tag";
  Title: string;
  slug: string;
}

export interface queryMenuAside_menuAsideMaisVistos_post {
  __typename: "Post";
  title: string;
  slug: string;
}

export interface queryMenuAside_menuAsideMaisVistos {
  __typename: "PostsMaisVistos";
  visitas: number | null;
  post: queryMenuAside_menuAsideMaisVistos_post | null;
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
  menuAsideMaisVistos: queryMenuAside_menuAsideMaisVistos[];
  menuAsideMenu: queryMenuAside_menuAsideMenu[];
}
