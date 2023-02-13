import { mount } from "@vue/test-utils";
import MySearch from "@/components/MySearch";
import { createStore } from "vuex";

const actions = {
  "controls/updateSearchValue": jest.fn(),
};

const store = createStore({
  actions,
  state() {
    return {
      controls: {
        searchString: "",
      },
    };
  },
});

describe("MySearch", () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = mount(MySearch, {
      global: {
        plugins: [store],
      },
      props: {
        inputText: "initialText",
        "onUpdate:inputText": (e) => wrapper.setProps({ inputText: e }),
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should mount", () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper.find("input").element.placeholder).toBe("Search");
    expect(wrapper.find("button").text()).toBe("SEARCH");
  });

  it("should update inputText state upon changing input field value", async () => {
    await wrapper.find("input").setValue("updatedText");
    expect(wrapper.vm.inputText).toBe("updatedText");
    expect(wrapper.find("input").element.value).toBe("updatedText");
  });

  it("should update store property upon changing input text", async () => {
    await wrapper.find("input").setValue("updatedText");
    expect(actions["controls/updateSearchValue"]).toHaveBeenCalledWith(
      expect.any(Object),
      "updatedText"
    );
  });

  it("should emit searchTriggered event upon clicking search button", async () => {
    await wrapper.find("input").setValue("updatedText");
    wrapper.find("button").trigger("click");
    const searchTriggeredEvent = wrapper.emitted("searchTriggered");

    expect(searchTriggeredEvent[0]).toEqual(["updatedText"]);
  });

  it("should emit searchTriggered event upon hitting the enter key", async () => {
    await wrapper.find("input").setValue("updatedText");
    wrapper.find("input").trigger("keyup.enter");
    const searchTriggeredEvent = wrapper.emitted("searchTriggered");

    expect(searchTriggeredEvent[0]).toEqual(["updatedText"]);
  });
});
