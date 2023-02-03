import { FilterByInterface } from "@/definitions/store/getters.definitions";
import RootStateInterface from "@/definitions/store/root.definitions";
import { movieListFilterCb } from "@/pages/Main.utils";

const getters = {
  getAllMovies: (state: RootStateInterface) => state.movies,
  getMovieById: (state: RootStateInterface) => (inputId: number) =>
    state.movies.filter((movieItem) => movieItem.id === inputId),
  getFilteredMovieList:
    (state: RootStateInterface) =>
    ({ searchBy, searchString }: FilterByInterface) =>
      state.movies.filter(movieListFilterCb(searchBy, searchString)),
};

export default getters;
