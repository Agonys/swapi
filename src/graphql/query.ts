import { gql } from "@apollo/client";
//
// export const GET_ALL_PLANETS = gql`
//   query {
//     allPlanets {
//       totalCount
//       planets {
//         name
//         diameter
//         rotationPeriod
//         orbitalPeriod
//         gravity
//         population
//         climates
//         terrains
//         surfaceWater
//         id
//       }
//     }
//   }
// `;

export const GET_ALL_PLANETS = gql`
  query {
    allPlanets {
      planets {
        name
        id
      }
    }
  }
`;

export const GET_PLANET_DATA = gql`
  query GetPlanet($planetID: ID) {
    planet(planetID: $planetID) {
      name
      diameter
      rotationPeriod
      orbitalPeriod
      gravity
      population
      climates
      terrains
      surfaceWater
      id
    }
  }
`;

export const GET_ALL_PEOPLE = gql`
  query {
    allPeople {
      totalCount
      people {
        name
        height
        mass
        hairColor
        skinColor
        eyeColor
        birthYear
        gender
        id
        homeworld {
          name
          id
        }
        filmConnection {
          films {
            title
          }
        }
      }
    }
  }
`;

export const GET_ALL_FILMS = gql`
  query {
    allFilms {
      totalCount
      films {
        title
        releaseDate
        id
      }
    }
  }
`;
