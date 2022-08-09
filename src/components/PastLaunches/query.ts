import { gql } from '@apollo/client';

export const QUERY_LAUNCHES_PAST = gql`
  query QUERY_LAUNCHES_PAST($offset: Int) {
    launchesPast(limit: 10, offset: $offset) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        article_link
        video_link
      }
      rocket {
        rocket_name
        rocket_type
      }
      launch_success
      details
    }
  }
`;
