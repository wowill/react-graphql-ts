import { gql } from '@apollo/client';

export const QUERY_LAUNCHES_NEXT = gql`
  query QUERY_LAUNCHES_NEXT {
    launchNext {
      launch_date_local
      id
      launch_site {
        site_name_long
      }
      launch_success
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      details
      mission_name
    }
  }
`;
