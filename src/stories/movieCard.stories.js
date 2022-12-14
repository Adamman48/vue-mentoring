import MyMovieCard from "../components/MyMovieCard.vue";
import { mockMovieDataList } from "../../mocks/movieData.mock";

export default {
  title: "Card",
  componet: MyMovieCard,
};

export const movieCard = () => ({
  render() {
    return <MyMovieCard movieData={mockMovieDataList[1]} />;
  },
});
