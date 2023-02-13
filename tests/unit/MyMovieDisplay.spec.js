import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import MyMovieDisplay from "@/components/MyMovieDisplay";
import { mockMovieDataList } from "../../mocks/movieData.mock";

const store = createStore({
  state() {
    return {
      movies: {
        selectedMovie: mockMovieDataList[0],
      },
    };
  },
});

describe("MyMovieDisplay", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(MyMovieDisplay, {
      global: {
        plugins: [store],
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should mount", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find(".wrapper").exists()).toBeTruthy();
  });

  it("should not render if no movie is selected", () => {
    const altStore = createStore({
      state() {
        return {
          movies: {
            selectedMovie: null,
          },
        };
      },
    });
    wrapper.unmount();
    const newWrapper = mount(MyMovieDisplay, {
      global: {
        plugins: [altStore],
      },
    });
    expect(newWrapper.find(".wrapper").exists()).toBeFalsy();
    newWrapper.unmount();
  });

  it("should render proper content", () => {
    expect(wrapper.find(".title").text()).toBe(mockMovieDataList[0].title);
    expect(wrapper.find(".rating").text()).toBe(
      mockMovieDataList[0].vote_average.toString()
    );
    expect(wrapper.find(".tag").text()).toBe(mockMovieDataList[0].tagLine);
    expect(wrapper.find(".release-date").text()).toBe(
      mockMovieDataList[0].release_date.toString()
    );
    expect(wrapper.find(".running-time").text()).toBe(
      `${mockMovieDataList[0].runtime} min`
    );
    expect(wrapper.find(".synopsis").text()).toBe(
      mockMovieDataList[0].overview
    );
  });

  it("should have proper alt attribute", () => {
    expect(wrapper.find("img").element.alt).toBe(
      `${mockMovieDataList[0].title} poster image`
    );
  });
});
