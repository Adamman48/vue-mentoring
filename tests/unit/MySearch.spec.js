import { mount } from "@vue/test-utils";
import MySearch from "@/components/MySearch";

describe("MySearch", () => {
  it("should mount", () => {
    const wrapper = mount(MySearch);
    expect(wrapper).toBeTruthy();
  });
});
