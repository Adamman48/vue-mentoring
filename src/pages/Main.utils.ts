import { SearchToggleEnum } from "@/definitions/MainPage.definitions";
import { MovieItemInterface } from "@/definitions/MyMovieItem.definitions";

export function movieListFilterCb(
  searchBy: SearchToggleEnum,
  searchString: string
) {
  return function testMovieItem(movieItem: MovieItemInterface): boolean {
    let result: boolean;
    if (searchBy === SearchToggleEnum.TITLE) {
      result = filterByTitleString(movieItem, searchString);
    } else {
      const genreList = movieItem[SearchToggleEnum.GENRES];
      const filteredGenreList = genreList.filter(
        filterGenreListCb(searchString)
      );
      result = genreList.some(compareAgainstFilteredList(filteredGenreList));
    }
    return result;
  };
}

function filterByTitleString(
  movieItem: MovieItemInterface,
  searchString: string
): boolean {
  return movieItem[SearchToggleEnum.TITLE]
    .toLowerCase()
    .includes(searchString.toLowerCase());
}

function filterGenreListCb(searchString: string) {
  return function testGenreItem(genreItem: string): boolean {
    return genreItem.includes(searchString.toLowerCase());
  };
}

function compareAgainstFilteredList(filteredGenreList: string[]) {
  return function testGenreItem(genreItem: string): boolean {
    return filteredGenreList.includes(genreItem);
  };
}
