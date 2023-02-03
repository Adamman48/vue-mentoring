import { SELECT_MOVIE } from "@/definitions/store/mutationTypes";
import RootStateInterface from "@/definitions/store/root.definitions";

const mutations = {
  [SELECT_MOVIE](state: RootStateInterface, movieId: number) {
    state.selectedMovie =
      state.movies.find((movieItem) => movieItem.id === movieId) || null;
  },
};

export default mutations;
