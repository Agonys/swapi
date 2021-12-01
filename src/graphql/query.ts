import { gql } from "@apollo/client";

export const GET_ALL_PLANETS = gql`
  query {
    allPlanets {
      totalCount
      planets {
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
