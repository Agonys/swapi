import styled from "styled-components";
import { IPropsFilters } from "./Filters.types";

export const FiltersWrapper = styled.div`
  width: 100%;
  font-size: 1.4rem;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.backgrounds.dark};
`;

export const FilterLabel = styled.div<IPropsFilters>`
  display: flex;
  padding: 12px 15px;
  justify-content: space-between;
  user-select: none;
  cursor: pointer;

  div {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const FiltersOuterContainer = styled.div<IPropsFilters>`
  height: 0;
  max-height: 350px;
  overflow: hidden;

  transition: height ${({ theme }) => theme.transitions.easeInOut};
  box-shadow: ${({ theme }) => theme.elevation.D1};

  ${({ areFiltersOpen }) => areFiltersOpen && "height: 350px"};
`;

export const FiltersInnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 30px 5px 50px;

  gap: 50px;

  background-color: ${({ theme }) => theme.colors.backgrounds.normal};

  @media (min-width: 600px) {
    padding: 30px 50px 50px;
  }
`;
