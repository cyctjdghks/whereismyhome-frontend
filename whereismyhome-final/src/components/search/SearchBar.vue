<template>
  <div>
    <div class="search">
      <font-awesome-icon
        icon="fa-solid fa-magnifying-glass"
        class="find-icon"
      />
      <input
        type="text"
        placeholder="지역 또는 아파트명을 입력하세요."
        v-model="query"
        @focus="focus"
        @blur="blur"
      />
    </div>
    <search-result v-show="this.showResult" :query="query"></search-result>
  </div>
</template>

<script>
import SearchResult from "./SearchResult.vue";

export default {
  name: "SearchBar",

  components: {
    SearchResult,
  },

  data() {
    return {
      showResult: false,
      query: "",
    };
  },
  methods: {
    // query null 일 때, 검색 결과 창 숨김
    isQueryNull() {
      this.showResult = this.query !== "" ? true : false;
    },
    // input focus 벗어났을 때, 검색 결과 창 숨김
    focus() {
      this.showResult = true;
    },
    blur() {
      this.showResult = false;
    },
  },

  watch: {
    query: "isQueryNull",
  },
};
</script>

<style scoped>
.search {
  position: relative;
  padding: 20px;
  background-color: aliceblue;
  border-radius: 5px;
  box-shadow: rgb(0, 0, 0) 0px 7px 10px -2px;
  display: flex;
}

.search .find-icon {
  font-size: 26px;
}

.search input {
  width: 100%;
  border: none;
  background-color: transparent;
  margin: 0 10px;
  font-size: 20px;
}

.search input:focus {
  outline: none;
}
</style>
