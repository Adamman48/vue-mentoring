import MoviesStateInterface from "@/definitions/store/movies.definitions";
import { movieListFilterCb, movieListSortCb } from "@/pages/Main.utils";

const getters = {
  getAllMovies: (state: MoviesStateInterface) => state.movies,
  getMovieById: (state: MoviesStateInterface) => (inputId: number) =>
    state.movies.filter((movieItem) => movieItem.id === inputId),
  filteredAndSortedList: (
    state: MoviesStateInterface,
    getters: any,
    rootState: any
  ) =>
    state.movies
      .filter(
        movieListFilterCb(
          rootState.controls.searchBy,
          rootState.controls.searchString
        )
      )
      .sort(movieListSortCb(rootState.controls.sortBy)),
};

export default getters;
