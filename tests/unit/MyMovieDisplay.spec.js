import { mount } from "@vue/test-utils";
import MyMovieDisplay from "@/components/MyMovieDisplay";

describe("MyMovieDisplay", () => {
  it("should mount", () => {
    const wrapper = mount(MyMovieDisplay);
    expect(wrapper).toBeTruthy();
  });
});
