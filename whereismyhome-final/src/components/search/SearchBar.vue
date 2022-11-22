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
        @input="onChange($event)"
      />
    </div>
    <search-result v-show="this.showResult" :query="query"></search-result>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import SearchResult from "./SearchResult.vue";

const mapStore = "mapStore";

export default {
  name: "SearchBar",

  components: {
    SearchResult,
  },

  data() {
    return {
      showResult: false,
      query: null,
    };
  },

  computed: {
    ...mapState(mapStore, ["searchQuery", "searchOption"]),
  },

  methods: {
    ...mapMutations(mapStore, ["SET_SEARCH_QUERY"]),
    ...mapActions(mapStore, ["getDongCodeByQuery", "getApartCodeByQuery"]),
    // query null 일 때, 검색 결과 창 숨김
    isQueryNull() {
      this.showResult = this.query !== null ? true : false;
    },
    // input focus 벗어났을 때, 검색 결과 창 숨김
    focus() {
      this.showResult = true;
    },
    blur() {
      this.showResult = false;
    },
    // 쿼리 -> 검색
    async onChange(event) {
      // 쿼리 업데이트
      this.SET_SEARCH_QUERY(event.target.value);
      // 쿼리 해당 동, 아파트 검색
      await this.getDongCodeByQuery(this.searchQuery);
      await this.getApartCodeByQuery(this.searchQuery);
    },
  },

  watch: {
    query: ["isQueryNull"],
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
