import { ControlsStateInterface } from "@/definitions/store/controls.definitions";
import {
  SET_SEARCH_BY,
  SET_SORT_BY,
  UPDATE_SEARCH_STRING,
} from "@/definitions/store/mutationTypes";

const mutations = {
  [SET_SORT_BY](state: ControlsStateInterface, sortByValue: string) {
    state.sortBy = sortByValue;
  },
  [SET_SEARCH_BY](state: ControlsStateInterface, searchByValue: string) {
    state.searchBy = searchByValue;
  },
  [UPDATE_SEARCH_STRING](state: ControlsStateInterface, searchValue: string) {
    state.searchString = searchValue;
  },
};

export default mutations;
