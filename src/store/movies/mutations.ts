import { SELECT_MOVIE } from "@/definitions/store/mutationTypes";
import MoviesStateInterface from "@/definitions/store/movies.definitions";

const mutations = {
  [SELECT_MOVIE](state: MoviesStateInterface, movieId: number) {
    state.selectedMovie =
      state.movies.find((movieItem) => movieItem.id === movieId) || null;
  },
};

export default mutations;
