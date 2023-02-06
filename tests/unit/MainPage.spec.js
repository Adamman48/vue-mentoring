import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import MainPage from "@/pages/Main.page";
import { mockMovieDataList } from "../../mocks/movieData.mock";
import {
  SearchToggleEnum,
  SortToggleEnum,
} from "@/definitions/MainPage.definitions";

const store = createStore({
  namespaced: true,
  state() {
    return {
      movies: {
        selectedMovie: mockMovieDataList[0],
        movies: mockMovieDataList,
      },
    };
  },
  actions: {
    "controls/setSortBy": jest.fn,
    "controls/setSearchBy": jest.fn,
    "movies/selectMovie": jest.fn,
    "controls/updateSearchValue": jest.fn,
  },
  getters: {
    "movies/filteredAndSortedList": () => mockMovieDataList,
    "controls/sortBy": () => SortToggleEnum.REL_DATE,
    "controls/searchBy": () => SearchToggleEnum.TITLE,
  },
});

describe("MainPage", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(MainPage, {
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
  });

  it("should display search button if a movie is selected", () => {
    expect(wrapper.find(".search-icon").exists()).toBeTruthy();
  });

  it("should not display search button if a movie is not selected", () => {
    const altStore = createStore({
      namespaced: true,
      state() {
        return {
          movies: {
            selectedMovie: null,
          },
        };
      },
      actions: {
        "controls/setSortBy": jest.fn(),
        "controls/setSearchBy": jest.fn(),
        "movies/selectMovie": jest.fn(),
      },
      getters: {
        "movies/filteredAndSortedList": () => mockMovieDataList,
        "controls/sortBy": () => SortToggleEnum.REL_DATE,
        "controls/searchBy": () => SearchToggleEnum.TITLE,
      },
    });
    const altWrapper = mount(MainPage, {
      global: {
        plugins: [altStore],
      },
    });
    expect(altWrapper.find(".search-icon").exists()).toBeFalsy();
    altWrapper.unmount();
  });

  it("should call handleMovieSelection method with null and updateSearchValue action with empty string upon clicking search icon", async () => {
    const handleMovieSelectionSpy = jest.spyOn(
      wrapper.vm,
      "handleMovieSelection"
    );
    const updateSearchValueSpy = jest.spyOn(wrapper.vm, "updateSearchValue");

    await wrapper.find(".search-icon").trigger("click");
    expect(handleMovieSelectionSpy).toHaveBeenCalledWith(null);
    expect(updateSearchValueSpy).toHaveBeenCalledWith("");
  });

  it("should display search functionality when no movie is selected", () => {
    const altStore = createStore({
      namespaced: true,
      state() {
        return {
          movies: {
            selectedMovie: null,
          },
        };
      },
      actions: {
        "controls/setSortBy": jest.fn(),
        "controls/setSearchBy": jest.fn(),
        "movies/selectMovie": jest.fn(),
      },
      getters: {
        "movies/filteredAndSortedList": () => mockMovieDataList,
        "controls/sortBy": () => SortToggleEnum.REL_DATE,
        "controls/searchBy": () => SearchToggleEnum.TITLE,
      },
    });
    const altWrapper = mount(MainPage, {
      global: {
        plugins: [altStore],
      },
    });
    expect(altWrapper.find(".search-toggle").exists()).toBeTruthy();
    altWrapper.unmount();
  });
});
