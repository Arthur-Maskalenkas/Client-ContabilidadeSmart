import { gql } from "@apollo/client"

export const QUERY_HOME_BANNERS = gql`

query QueryBannersHome {
  home {
    bannerHome {
      title
      img {
        url
        alternativeText
      }
      titleWithColor
      subtitle
      buttonLabel
    	buttonLink
      textDirection
    }
  }
}
`
