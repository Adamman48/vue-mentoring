import { MovieItemInterface } from "@/definitions/MyMovieItem.definitions";
import { SELECT_MOVIE } from "@/definitions/store/mutationTypes";

const actions = {
  selectMovie({ commit }: any, movieId: MovieItemInterface) {
    commit(SELECT_MOVIE, movieId);
  },
};

export default actions;
