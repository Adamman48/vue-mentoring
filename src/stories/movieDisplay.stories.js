import MyMovieDisplay from "../components/MyMovieDisplay.vue";
import { mockMovieDataList } from "../../mocks/movieData.mock";

export default {
  title: "Display",
  componet: MyMovieDisplay,
};

export const movieDisplay = () => ({
  render() {
    return <MyMovieDisplay movieData={mockMovieDataList[1]} />;
  },
});
