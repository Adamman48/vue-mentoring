import { mount } from "@vue/test-utils";
import MainPage from "@/pages/Main.page";

describe("MainPage", () => {
  it("should mount", () => {
    const wrapper = mount(MainPage);
    expect(wrapper).toBeTruthy();
  });
});
