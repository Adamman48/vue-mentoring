import MoviesStateInterface from "@/definitions/store/movies.definitions";
import { mockMovieDataList } from "../../../mocks/movieData.mock";

const state: MoviesStateInterface = {
  movies: mockMovieDataList,
  selectedMovie: null,
};

export default state;
