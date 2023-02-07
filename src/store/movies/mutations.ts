import { FETCH_MOVIES, SELECT_MOVIE } from "@/definitions/store/mutationTypes";
import MoviesStateInterface from "@/definitions/store/movies.definitions";
import { MovieItemInterface } from "@/definitions/MyMovieItem.definitions";

const mutations = {
  [SELECT_MOVIE](state: MoviesStateInterface, movieId: number) {
    state.selectedMovie =
      state.movies.find((movieItem) => movieItem.id === movieId) || null;
  },
  [FETCH_MOVIES](state: MoviesStateInterface, movieList: MovieItemInterface[]) {
    state.movies = movieList;
  },
};

export default mutations;
