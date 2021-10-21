/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTBANNERBANNER_TEXTDIRECTION } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryBannersHome
// ====================================================

export interface QueryBannersHome_home_bannerHome_img {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryBannersHome_home_bannerHome {
  __typename: "ComponentBannerBanner";
  title: string;
  img: QueryBannersHome_home_bannerHome_img | null;
  titleWithColor: string | null;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  textDirection: ENUM_COMPONENTBANNERBANNER_TEXTDIRECTION | null;
}

export interface QueryBannersHome_home {
  __typename: "Home";
  bannerHome: QueryBannersHome_home_bannerHome[] | null;
}

export interface QueryBannersHome {
  home: QueryBannersHome_home | null;
}
