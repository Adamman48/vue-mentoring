import { mount } from "@vue/test-utils";
import { SizeEnum } from "../../src/definitions/MyLogo.definitions";
import MyLogo from "@/components/MyLogo";

describe("MyLogo", () => {
  it("should mount", () => {
    const wrapper = mount(MyLogo, {
      props: { size: SizeEnum.XS },
    });
    expect(wrapper).toBeTruthy();
  });
});
