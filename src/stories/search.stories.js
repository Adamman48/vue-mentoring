import MySearch from "../components/MySearch.vue";

export default {
  title: "Search",
  componet: MySearch,
};

export const searchStatic = () => ({
  render() {
    return <MySearch />;
  },
});
