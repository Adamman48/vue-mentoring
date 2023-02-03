import { MovieItemInterface } from "../MyMovieItem.definitions";

export default interface RootStateInterface {
  movies: MovieItemInterface[];
  selectedMovie: MovieItemInterface | null;
}
