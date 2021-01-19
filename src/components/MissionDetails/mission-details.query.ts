import gql from "graphql-tag";

export const MissionDetailsQuery = gql`
  query MissionDetails($id: ID!) {
    launch(id: $id) {
      mission_id
      mission_name
      launch_date_local
      launch_year
      launch_success
      launch_site {
        site_id
        site_name
        site_name_long
      }
      links {
        article_link
        flickr_images
        mission_patch
        video_link
        wikipedia
      }
      rocket {
        rocket_name
        rocket_type
      }
      ships {
        active
        attempted_landings
        model
        name
        roles
        status
        missions {
          flight
          name
        }
        image
      }
    }
  }
`;
