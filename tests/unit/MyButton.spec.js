import { mount } from "@vue/test-utils";
import MyButton from "@/components/MyButton";

describe("MyButton", () => {
  it("should mount", () => {
    const wrapper = mount(MyButton, {
      props: { innerText: "test" },
    });
    expect(wrapper).toBeTruthy();
  });
});
