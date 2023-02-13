export interface MovieItemInterface {
  poster_path: string;
  title: string;
  release_date: number;
  genres: string[];
  overview: string;
  tagLine: string;
  runtime: number;
  id: number;
  vote_average: number;
  vote_count: number;
}

export interface RawMovieItemInterface {
  year: string;
  genres: string[];
  ratings: number[];
  poster: string;
  contentRating: number;
  duration: string;
  releaseDate: string;
  averageRating: number;
  storyline: string;
  actors: string[];
  imdbRating: number;
  posterurl: string;
  id: number;
  title: string;
}
