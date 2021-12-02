import { filterType } from "types/redux";

interface IFilterItem {
  name: string;
}

export interface IPropsScrollableList {
  header: string;
  filtersList: IFilterItem[];
  filterType: filterType;
  filtersActive: string[];
}
