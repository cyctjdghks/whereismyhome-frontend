<template>
  <div class="search-result">
    <search-result-list title="지역명" :result="dummyArea"></search-result-list>
    <search-result-list
      title="아파트"
      :result="dummyApart"
    ></search-result-list>
  </div>
</template>

<script>
import SearchResultList from "./SearchResultList.vue";

export default {
  name: "SearchResult",

  props: ["query"],

  components: {
    SearchResultList,
  },

  data() {
    return {
      dummyArea: [
        {
          mainResult: "대구광역시 북구 침산동",
          subResult: null,
        },
        {
          mainResult: "대구광역시 북구 침산동",
          subResult: null,
        },
        {
          mainResult: "대구광역시 북구 침산동",
          subResult: null,
        },
      ],
      dummyApart: [
        {
          mainResult: "아파트이름1",
          subResult: "대구광역시 북구 침산동",
        },
        {
          mainResult: "아파트이름2",
          subResult: "대구광역시 북구 침산동",
        },
        {
          mainResult: "아파트이름3",
          subResult: "대구광역시 북구 침산동",
        },
        {
          mainResult: "아파트이름1",
          subResult: "대구광역시 북구 침산동",
        },
        {
          mainResult: "아파트이름2",
          subResult: "대구광역시 북구 침산동",
        },
        {
          mainResult: "아파트이름3",
          subResult: "대구광역시 북구 침산동",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.search-result {
  position: absolute;
  width: 1200px;
  display: flex;
  margin-top: 10px;
  background-color: white;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 3px;
  z-index: 10;
}
</style>
