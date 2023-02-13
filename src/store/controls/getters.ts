import { ControlsStateInterface } from "@/definitions/store/controls.definitions";

const getters = {
  sortBy: (state: ControlsStateInterface) => state.sortBy,
  searchBy: (state: ControlsStateInterface) => state.searchBy,
};

export default getters;
