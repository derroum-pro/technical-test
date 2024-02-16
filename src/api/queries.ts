import { gql } from "@apollo/client";

export const GET_PLAYERS_QUERIE = gql`
  query getPlayers {
    players {
      id
      firstname
      lastname
      shortname
      picture {
        url
      }
      country {
        picture {
          url
        }
        code
      }
      stats {
        age
        weight
        height
        rank
        points
      }
    }
  }
`;

export const GET_MATCHES_QUERY = gql`
  query getMatches {
    matches {
      id
      startTime
      players {
        id
        firstname
        lastname
      }
      endTime
      startTime
      winner {
        id
      }
    }
  }
`;
