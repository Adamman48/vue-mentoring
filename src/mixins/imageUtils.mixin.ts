export const imageUtils = {
  methods: {
    getImgUrl(url: string) {
      return require(`../assets/${url}`);
    },
  },
};
