import { SizeEnum } from "../definitions/MyLogo.definitions";

import MyLogo from "../components/MyLogo.vue";

export default {
  title: "Logo",
  componet: MyLogo,
};

export const logoDefault = () => ({
  components: { MyLogo },
  template: "<my-logo></my-logo>",
});

export const logoExtraLarge = () => ({
  render() {
    return <MyLogo size={SizeEnum.XL} />;
  },
});
