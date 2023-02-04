import { MovieItemInterface } from "../MyMovieItem.definitions";

export default interface MoviesStateInterface {
  movies: MovieItemInterface[];
  selectedMovie: MovieItemInterface | null;
}
