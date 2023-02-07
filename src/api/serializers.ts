import {
  MovieItemInterface,
  RawMovieItemInterface,
} from "@/definitions/MyMovieItem.definitions";

export function serializeMovies(
  moviesList: RawMovieItemInterface[]
): MovieItemInterface[] {
  return moviesList.map(
    ({
      genres,
      title,
      posterurl,
      storyline,
      duration,
      id,
      imdbRating,
      ratings,
      year,
    }: RawMovieItemInterface) => ({
      poster_path: posterurl,
      title,
      release_date: Number(year),
      genres,
      overview: storyline,
      tagLine: "no tagline provided",
      runtime: Number(duration.match(/[0-9]/g)?.join("")),
      id,
      vote_average: imdbRating,
      vote_count: ratings.length,
    })
  );
}
