import { IPeople } from "../types/graphql";
import { CHARACTER_LIST_PAGE_LIMIT } from "../config/constants";

interface IPropsFunction {
  slicedArray: IPeople[];
  nextPage: number;
  previousPage: number;
}

const useSliceArrayWithRange = (pageID: number, arr: IPeople[]): IPropsFunction => {
  const maxPageNumber = Math.ceil(arr.length / CHARACTER_LIST_PAGE_LIMIT);
  let slicedArray: IPeople[] = [];

  if (pageID >= 1 && pageID <= maxPageNumber) {
    slicedArray = arr.slice(
      (pageID - 1) * CHARACTER_LIST_PAGE_LIMIT,
      pageID * CHARACTER_LIST_PAGE_LIMIT,
    );
  } else slicedArray.length = 0;

  return {
    nextPage: pageID < maxPageNumber ? (pageID >= 1 ? pageID + 1 : 1) : 1,
    previousPage: pageID <= maxPageNumber ? (pageID > 1 ? pageID - 1 : maxPageNumber) : 1,
    slicedArray,
  };
};

export default useSliceArrayWithRange;
