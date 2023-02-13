import { mount } from "@vue/test-utils";
import MyMovieCard from "@/components/MyMovieCard";
import { mockMovieDataList } from "../../mocks/movieData.mock";

describe("MyMovieCard", () => {
  it("should mount", () => {
    const wrapper = mount(MyMovieCard, {
      props: { movieData: mockMovieDataList[0] },
    });
    expect(wrapper).toBeTruthy();
  });
});
