import gql from "graphql-tag";

export const MissionListQuery = gql`
  query MissionList {
    launches {
      id
      mission_id
      mission_name
      launch_date_utc
      launch_success
      launch_year
      details
    }
  }
`;
