import Api from "@/api/Api";
import { serializeMovies } from "@/api/serializers";
import { MovieItemInterface } from "@/definitions/MyMovieItem.definitions";
import { FETCH_MOVIES, SELECT_MOVIE } from "@/definitions/store/mutationTypes";

const actions = {
  selectMovie({ commit }: any, movieId: MovieItemInterface) {
    commit(SELECT_MOVIE, movieId);
  },
  async fetchMovies({ commit }: any) {
    const moviesList = await Api.get(
      "https://tame-erin-pike-toga.cyclic.app/movies"
    );
    commit(FETCH_MOVIES, serializeMovies(moviesList.data));
  },
};

export default actions;
