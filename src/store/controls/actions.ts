import {
  SET_SEARCH_BY,
  SET_SORT_BY,
  UPDATE_SEARCH_STRING,
} from "@/definitions/store/mutationTypes";

const actions = {
  setSortBy({ commit }: any, sortByValue: string) {
    commit(SET_SORT_BY, sortByValue);
  },
  setSearchBy({ commit }: any, searchByValue: string) {
    commit(SET_SEARCH_BY, searchByValue);
  },
  updateSearchValue({ commit }: any, searchValue: string) {
    commit(UPDATE_SEARCH_STRING, searchValue);
  },
};

export default actions;
