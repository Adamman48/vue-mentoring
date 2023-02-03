import RootStateInterface from "@/definitions/store/root.definitions";
import { mockMovieDataList } from "../../../mocks/movieData.mock";

const state: RootStateInterface = {
  movies: mockMovieDataList,
  selectedMovie: null,
};

export default state;
